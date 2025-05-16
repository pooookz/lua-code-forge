
export interface CourseData {
  id: string;
  title: string;
  description: string;
  level: string;
  lessonsCount: number;
  progress: number;
  category: string;
  imageUrl?: string;
  author?: string;
  duration?: string;
  rating?: number;
  enrolledStudents?: number;
  tags?: string[];
}

export interface Lesson {
  id: string;
  title: string;
  type: "reading" | "exercise" | "quiz" | "video";  // Added more lesson types
  content: string;
  initialCode?: string;
  solution?: string;
  videoUrl?: string;
  estimatedTime?: number; // in minutes
  resources?: Resource[];
  quizQuestions?: QuizQuestion[];
}

export interface Resource {
  title: string;
  url: string;
  type: "article" | "video" | "documentation" | "github";
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  unlocked: boolean;
}

export interface CourseDetail {
  title: string;
  description: string;
  level: string;
  lessonsCount: number;
  totalExercises: number;
  completedExercises: number;
  author?: string;
  duration?: string;
  rating?: number;
  prerequisites?: string[];
  skills?: string[];
  modules: Module[];
  forum?: ForumSection[];
  certificateAvailable?: boolean;
  enrolledStudents?: number;
}

export interface ForumSection {
  id: string;
  title: string;
  threadCount: number;
}

export interface UserCourseProgress {
  courseId: string;
  completedLessons: string[];
  quizScores: Record<string, number>;
  certificateEarned: boolean;
  lastAccessedModule: number;
  lastAccessedLesson: number;
}
