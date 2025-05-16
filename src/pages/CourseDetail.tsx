
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";
import { courseContent } from "@/data/coursesData";
import CourseHeader from "@/components/course/CourseHeader";
import CourseSidebar from "@/components/course/CourseSidebar";
import LessonContent from "@/components/course/LessonContent";
import CodeEditor from "@/components/course/CodeEditor";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courseContent[courseId as keyof typeof courseContent];
  
  const [activeModule, setActiveModule] = useState(0);
  const [activeLesson, setActiveLesson] = useState(0);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [currentLessonProgress, setCurrentLessonProgress] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  
  // If course doesn't exist, show not found message
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12 bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-lua-darkPurple mb-4">Course Not Found</h1>
            <p className="text-gray-600 mb-6">The course you are looking for does not exist or has been removed.</p>
            <Link to="/courses">
              <button className="bg-lua-purple hover:bg-lua-darkPurple text-white px-6 py-2 rounded-md transition-colors">
                Back to Courses
              </button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const activeModuleData = course.modules[activeModule];
  const activeLessonData = activeModuleData?.lessons[activeLesson];
  
  const handleLessonCompleted = () => {
    const lessonId = `${activeModuleData.id}-${activeLessonData.id}`;
    
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
      setCurrentLessonProgress(100);
      
      // In a real app, you'd save this to a database or local storage
      const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
      const overallProgress = Math.round((completedLessons.length + 1) / totalLessons * 100);
      
      toast({
        title: "Progress Saved",
        description: `Overall course progress: ${overallProgress}%`,
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
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        {/* Course header */}
        <CourseHeader 
          course={course} 
          currentLessonProgress={currentLessonProgress} 
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
            />

            {/* Main content area */}
            <div className="flex-grow min-h-[calc(100vh-16rem)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left column - Lesson content */}
                <div className="bg-white rounded-lg shadow-sm p-6 h-[calc(100vh-16rem)] overflow-y-auto">
                  <LessonContent lesson={activeLessonData} />
                </div>

                {/* Right column - Code editor and output */}
                {activeLessonData.type === "exercise" ? (
                  <CodeEditor 
                    lesson={activeLessonData}
                    code={code}
                    setCode={setCode}
                    output={output}
                    setOutput={setOutput}
                    onCompleted={handleLessonCompleted}
                  />
                ) : (
                  <div className="bg-white rounded-lg shadow-sm p-6 h-[calc(100vh-16rem)] overflow-y-auto">
                    <div className="h-full flex flex-col items-center justify-center">
                      <img 
                        src="/images/courses/reading-illustration.svg" 
                        alt="Reading material" 
                        className="w-64 h-64 opacity-70"
                      />
                      <h3 className="text-xl font-semibold text-lua-darkPurple mt-6">Reading Material</h3>
                      <p className="text-gray-600 text-center mt-2 max-w-md">
                        This is a reading lesson. Take your time to understand the concepts before moving to the next lesson.
                      </p>
                      <button
                        onClick={handleLessonCompleted}
                        className={`mt-8 px-6 py-2 rounded-md ${
                          completedLessons.includes(`${activeModuleData.id}-${activeLessonData.id}`)
                            ? "bg-green-500 text-white"
                            : "bg-lua-purple text-white hover:bg-lua-darkPurple"
                        }`}
                      >
                        {completedLessons.includes(`${activeModuleData.id}-${activeLessonData.id}`)
                          ? "Completed ✓"
                          : "Mark as Completed"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Navigation buttons */}
              <div className="mt-6 flex justify-between">
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={activeLesson === 0 && activeModule === 0}
                  onClick={() => {
                    if (activeLesson > 0) {
                      setActiveLesson(activeLesson - 1);
                    } else if (activeModule > 0) {
                      setActiveModule(activeModule - 1);
                      setActiveLesson(course.modules[activeModule - 1].lessons.length - 1);
                    }
                  }}
                >
                  Previous Lesson
                </button>
                
                <button
                  className="px-4 py-2 bg-lua-purple text-white rounded-md hover:bg-lua-darkPurple disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={
                    activeModule === course.modules.length - 1 && 
                    activeLesson === course.modules[course.modules.length - 1].lessons.length - 1
                  }
                  onClick={() => {
                    if (activeLesson < activeModuleData.lessons.length - 1) {
                      setActiveLesson(activeLesson + 1);
                    } else if (activeModule < course.modules.length - 1) {
                      setActiveModule(activeModule + 1);
                      setActiveLesson(0);
                    }
                  }}
                >
                  Next Lesson
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
