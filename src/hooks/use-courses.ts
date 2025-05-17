
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { CourseData } from '@/types/course';

export const useCourses = (searchTerm = '', levelFilter = 'all') => {
  return useQuery({
    queryKey: ['courses', searchTerm, levelFilter],
    queryFn: async () => {
      let query = supabase.from('courses').select('*');
      
      if (searchTerm) {
        query = query.or(`title.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`);
      }
      
      if (levelFilter !== 'all') {
        query = query.eq('level', levelFilter);
      }
      
      const { data, error } = await query;
      
      if (error) {
        throw error;
      }
      
      return data.map(course => ({
        id: course.id,
        title: course.title,
        description: course.description,
        level: course.level,
        lessonsCount: 0, // This will be updated with a separate query
        progress: 0, // This will be calculated based on user progress
        category: course.category,
        imageUrl: course.image_url,
        author: course.author,
        duration: course.duration,
        rating: course.rating,
        enrolledStudents: course.enrolled_students
      } as CourseData));
    }
  });
};

export const useCourseDetails = (courseId: string | undefined) => {
  return useQuery({
    queryKey: ['course', courseId],
    queryFn: async () => {
      if (!courseId) {
        return null;
      }
      
      // Get course details
      const { data: courseData, error: courseError } = await supabase
        .from('courses')
        .select('*')
        .eq('id', courseId)
        .single();
      
      if (courseError) throw courseError;
      
      // Get modules
      const { data: modulesData, error: modulesError } = await supabase
        .from('modules')
        .select('*')
        .eq('course_id', courseId)
        .order('order');
      
      if (modulesError) throw modulesError;
      
      // Get lessons for each module
      const modules = await Promise.all(
        modulesData.map(async (module) => {
          const { data: lessonsData, error: lessonsError } = await supabase
            .from('lessons')
            .select(`
              *,
              resources (*),
              quiz_questions (*)
            `)
            .eq('module_id', module.id)
            .order('order');
          
          if (lessonsError) throw lessonsError;
          
          const lessons = lessonsData.map(lesson => ({
            id: lesson.id,
            title: lesson.title,
            type: lesson.type as "reading" | "exercise" | "quiz" | "video",
            content: lesson.content,
            initialCode: lesson.initial_code,
            solution: lesson.solution,
            videoUrl: lesson.video_url,
            estimatedTime: lesson.estimated_time,
            resources: lesson.resources.map((resource: any) => ({
              title: resource.title,
              url: resource.url,
              type: resource.type
            })),
            quizQuestions: lesson.quiz_questions.map((question: any) => ({
              question: question.question,
              options: question.options,
              correctOptionIndex: question.correct_option_index,
              explanation: question.explanation
            }))
          }));
          
          return {
            id: module.id,
            title: module.title,
            description: module.description,
            lessons,
            unlocked: module.unlocked
          };
        })
      );
      
      // Calculate total lessons and exercises
      const totalLessons = modules.reduce((acc, module) => acc + module.lessons.length, 0);
      const totalExercises = modules.reduce((acc, module) => 
        acc + module.lessons.filter(lesson => lesson.type === 'exercise').length, 0);
      
      return {
        title: courseData.title,
        description: courseData.description,
        level: courseData.level,
        lessonsCount: totalLessons,
        totalExercises,
        completedExercises: 0, // Will be updated with user progress
        author: courseData.author,
        duration: courseData.duration,
        rating: courseData.rating,
        modules,
        enrolledStudents: courseData.enrolled_students,
        certificateAvailable: true
      };
    },
    enabled: !!courseId
  });
};

export const useUserProgress = (userId: string | undefined, courseId: string | undefined) => {
  return useQuery({
    queryKey: ['userProgress', userId, courseId],
    queryFn: async () => {
      if (!userId || !courseId) {
        return {
          completedLessons: [],
          quizScores: {},
          certificateEarned: false,
          lastAccessedModule: 0,
          lastAccessedLesson: 0
        };
      }
      
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .eq('course_id', courseId)
        .single();
      
      if (error) {
        if (error.code === 'PGRST116') { // Record not found
          // Create a new progress record for this user and course
          const newProgress = {
            user_id: userId,
            course_id: courseId,
            completed_lessons: [],
            quiz_scores: {},
            certificate_earned: false,
            last_accessed_module: 0,
            last_accessed_lesson: 0
          };
          
          const { data: newData, error: newError } = await supabase
            .from('user_progress')
            .insert(newProgress)
            .select()
            .single();
          
          if (newError) throw newError;
          return {
            completedLessons: newData.completed_lessons || [],
            quizScores: newData.quiz_scores || {},
            certificateEarned: newData.certificate_earned || false,
            lastAccessedModule: newData.last_accessed_module || 0,
            lastAccessedLesson: newData.last_accessed_lesson || 0
          };
        }
        throw error;
      }
      
      return {
        completedLessons: data.completed_lessons || [],
        quizScores: data.quiz_scores || {},
        certificateEarned: data.certificate_earned || false,
        lastAccessedModule: data.last_accessed_module || 0,
        lastAccessedLesson: data.last_accessed_lesson || 0
      };
    },
    enabled: !!userId && !!courseId
  });
};

export const useUpdateUserProgress = () => {
  const updateProgress = async (
    userId: string, 
    courseId: string,
    updates: {
      completedLessons?: string[];
      quizScores?: Record<string, number>;
      certificateEarned?: boolean;
      lastAccessedModule?: number;
      lastAccessedLesson?: number;
    }
  ) => {
    const { error } = await supabase
      .from('user_progress')
      .update({
        ...Object.entries(updates).reduce((acc, [key, value]) => {
          // Convert camelCase to snake_case for DB columns
          const snakeKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
          return { ...acc, [snakeKey]: value };
        }, {})
      })
      .eq('user_id', userId)
      .eq('course_id', courseId);
    
    if (error) throw error;
    return true;
  };
  
  return updateProgress;
};
