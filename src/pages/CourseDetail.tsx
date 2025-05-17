
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";
import CourseHeader from "@/components/course/CourseHeader";
import CourseSidebar from "@/components/course/CourseSidebar";
import CourseNavigation from "@/components/course/CourseNavigation";
import TabsContainer from "@/components/course/TabsContainer";
import CourseNotFound from "@/components/course/CourseNotFound";
import CourseCertificateView from "@/components/course/CourseCertificateView";
import { useAuth } from "@/contexts/AuthContext";
import { useUserProgress, useCourseDetails, useUpdateUserProgress } from "@/hooks/use-courses";
import { Button } from "@/components/ui/button";

const CourseDetail = () => {
  const { courseId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const { data: course, isLoading: courseLoading, error: courseError } = useCourseDetails(courseId);
  const { data: userProgress, isLoading: progressLoading } = useUserProgress(user?.id, courseId);
  const updateUserProgress = useUpdateUserProgress();
  
  // State for tracking course progress
  const [activeModule, setActiveModule] = useState(0);
  const [activeLesson, setActiveLesson] = useState(0);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [currentLessonProgress, setCurrentLessonProgress] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [overallProgress, setOverallProgress] = useState(0);
  const [courseCompleted, setCourseCompleted] = useState(false);
  const [activeTab, setActiveTab] = useState("content");
  
  // Initialize state from user progress data
  useEffect(() => {
    if (userProgress && !progressLoading) {
      setCompletedLessons(userProgress.completedLessons || []);
      setActiveModule(userProgress.lastAccessedModule || 0);
      setActiveLesson(userProgress.lastAccessedLesson || 0);
      setCourseCompleted(userProgress.certificateEarned || false);
    }
  }, [userProgress, progressLoading]);
  
  // If user is not logged in, redirect to login
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Sign in to access this course</h1>
            <p className="text-gray-600 mb-6">
              Please sign in or create an account to view course content.
            </p>
            <div className="flex justify-center gap-4">
              <Button onClick={() => navigate("/login")}>
                Sign In
              </Button>
              <Button variant="outline" onClick={() => navigate("/register")}>
                Create Account
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Show loading state
  if (courseLoading || progressLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-solid border-lua-purple border-r-transparent mb-4"></div>
            <p className="text-gray-600">Loading course content...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // If course doesn't exist or there's an error, show not found message
  if (!course || courseError) {
    return <CourseNotFound />;
  }
  
  const activeModuleData = course.modules[activeModule];
  const activeLessonData = activeModuleData?.lessons[activeLesson];
  
  // Calculate overall course progress whenever completed lessons change
  useEffect(() => {
    if (course) {
      const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
      const progress = Math.round((completedLessons.length / totalLessons) * 100);
      setOverallProgress(progress);
      
      // Check if course is completed
      if (progress === 100 && !courseCompleted) {
        setCourseCompleted(true);
        updateUserProgress(user.id, courseId!, {
          certificateEarned: true
        });
        toast({
          title: "Congratulations!",
          description: "You've completed the entire course!",
        });
      }
    }
  }, [completedLessons, course, courseCompleted, courseId, updateUserProgress, user?.id]);
  
  const handleLessonCompleted = async () => {
    const lessonId = `${activeModuleData.id}-${activeLessonData.id}`;
    
    if (!completedLessons.includes(lessonId)) {
      const updatedCompletedLessons = [...completedLessons, lessonId];
      setCompletedLessons(updatedCompletedLessons);
      setCurrentLessonProgress(100);
      
      // Save progress to database
      try {
        await updateUserProgress(user.id, courseId!, {
          completedLessons: updatedCompletedLessons,
          lastAccessedModule: activeModule,
          lastAccessedLesson: activeLesson
        });
        
        toast({
          title: "Progress Saved",
          description: "Lesson marked as completed.",
        });
      } catch (error) {
        console.error("Error updating progress:", error);
        toast({
          title: "Error",
          description: "Failed to save your progress.",
          variant: "destructive"
        });
      }
    }
  };
  
  // Initialize code when lesson changes
  useEffect(() => {
    if (activeLessonData && activeLessonData.type === "exercise") {
      setCode(activeLessonData.initialCode || "");
      setOutput("");
      setCurrentLessonProgress(
        completedLessons.includes(`${activeModuleData.id}-${activeLessonData.id}`) ? 100 : 0
      );
    } else if (activeLessonData && activeLessonData.type === "reading") {
      setCurrentLessonProgress(
        completedLessons.includes(`${activeModuleData.id}-${activeLessonData.id}`) ? 100 : 50
      );
    }
    
    // Update the last accessed lesson in database
    if (user && courseId) {
      updateUserProgress(user.id, courseId, {
        lastAccessedModule: activeModule,
        lastAccessedLesson: activeLesson
      }).catch(error => console.error("Error updating last accessed lesson:", error));
    }
  }, [activeLesson, activeModule, activeLessonData, activeModuleData, completedLessons, courseId, updateUserProgress, user]);
  
  // Navigate to the next/previous lesson
  const navigateToNextLesson = () => {
    if (activeLesson < activeModuleData.lessons.length - 1) {
      setActiveLesson(activeLesson + 1);
    } else if (activeModule < course.modules.length - 1) {
      setActiveModule(activeModule + 1);
      setActiveLesson(0);
    }
  };
  
  const navigateToPreviousLesson = () => {
    if (activeLesson > 0) {
      setActiveLesson(activeLesson - 1);
    } else if (activeModule > 0) {
      setActiveModule(activeModule - 1);
      setActiveLesson(course.modules[activeModule - 1].lessons.length - 1);
    }
  };
  
  // Determine if we should show the certificate (when course is completed)
  const showCertificate = courseCompleted && course.certificateAvailable;

  // Navigation button states
  const isPreviousDisabled = activeLesson === 0 && activeModule === 0;
  const isNextDisabled = 
    activeModule === course.modules.length - 1 && 
    activeLesson === course.modules[course.modules.length - 1].lessons.length - 1;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        {/* Course header */}
        <CourseHeader 
          course={course} 
          currentLessonProgress={currentLessonProgress} 
          overallProgress={overallProgress}
        />

        {/* Main content area */}
        <div className="container mx-auto px-4">
          <div className="flex gap-6 py-6">
            {/* Left sidebar - Module navigation */}
            <CourseSidebar 
              modules={course.modules}
              activeModule={activeModule}
              activeLesson={activeLesson}
              setActiveModule={setActiveModule}
              setActiveLesson={setActiveLesson}
              completedLessons={completedLessons}
              courseProgress={overallProgress}
              userDisplayName={user?.email?.split('@')[0]}
            />

            {/* Main content area */}
            <div className="flex-grow min-h-[calc(100vh-16rem)]">
              {showCertificate ? (
                <CourseCertificateView 
                  courseTitle={course.title} 
                  instructorName={course.author || "Instructor"} 
                />
              ) : (
                <>
                  <TabsContainer 
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    activeModuleData={activeModuleData}
                    activeLessonData={activeLessonData}
                    code={code}
                    setCode={setCode}
                    output={output}
                    setOutput={setOutput}
                    handleLessonCompleted={handleLessonCompleted}
                    completedLessons={completedLessons}
                  />
                  
                  {/* Navigation buttons */}
                  <CourseNavigation 
                    onPrevious={navigateToPreviousLesson}
                    onNext={navigateToNextLesson}
                    isPreviousDisabled={isPreviousDisabled}
                    isNextDisabled={isNextDisabled}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
