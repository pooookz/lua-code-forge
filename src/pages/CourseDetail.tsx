
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";
import { courseContent } from "@/data/coursesData";
import CourseHeader from "@/components/course/CourseHeader";
import CourseSidebar from "@/components/course/CourseSidebar";
import CourseNavigation from "@/components/course/CourseNavigation";
import TabsContainer from "@/components/course/TabsContainer";
import CourseNotFound from "@/components/course/CourseNotFound";
import CourseCertificateView from "@/components/course/CourseCertificateView";
import { Module, Lesson, CourseDetail as CourseDetailType } from "@/types/course";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courseContent[courseId as keyof typeof courseContent] as CourseDetailType;
  
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
  
  // If course doesn't exist, show not found message
  if (!course) {
    return <CourseNotFound />;
  }
  
  const activeModuleData = course.modules[activeModule] as Module;
  const activeLessonData = activeModuleData?.lessons[activeLesson] as Lesson;
  
  // Calculate overall course progress whenever completed lessons change
  useEffect(() => {
    if (course) {
      const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
      const progress = Math.round((completedLessons.length / totalLessons) * 100);
      setOverallProgress(progress);
      
      // Check if course is completed
      if (progress === 100 && !courseCompleted) {
        setCourseCompleted(true);
        toast({
          title: "Congratulations!",
          description: "You've completed the entire course!",
        });
      }
    }
  }, [completedLessons, course, courseCompleted]);
  
  const handleLessonCompleted = () => {
    const lessonId = `${activeModuleData.id}-${activeLessonData.id}`;
    
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
      setCurrentLessonProgress(100);
      
      // In a real app, you'd save this to a database or local storage
      toast({
        title: "Progress Saved",
        description: "Lesson marked as completed.",
      });
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
  }, [activeLesson, activeModule, activeLessonData, activeModuleData, completedLessons]);
  
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
              modules={course.modules as Module[]}
              activeModule={activeModule}
              activeLesson={activeLesson}
              setActiveModule={setActiveModule}
              setActiveLesson={setActiveLesson}
              completedLessons={completedLessons}
              courseProgress={overallProgress}
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
