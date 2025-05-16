
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
import CourseCertificate from "@/components/course/CourseCertificate";
import { Module, Lesson, CourseDetail as CourseDetailType } from "@/types/course";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courseContent[courseId as keyof typeof courseContent] as CourseDetailType;
  
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
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12 bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-lua-darkPurple mb-4">Course Not Found</h1>
            <p className="text-gray-600 mb-6">The course you are looking for does not exist or has been removed.</p>
            <Link to="/courses">
              <Button>Back to Courses</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
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
                <div className="bg-white rounded-lg shadow-sm p-6 min-h-[calc(100vh-16rem)]">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-full mb-4">
                      <Award className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Congratulations!</h2>
                    <p className="text-gray-600 mt-2">
                      You've successfully completed "{course.title}"
                    </p>
                  </div>
                  
                  <CourseCertificate 
                    courseTitle={course.title} 
                    studentName="Your Name" 
                    completionDate={new Date()} 
                    instructorName={course.author || "Instructor"}
                  />
                  
                  <div className="mt-8 text-center">
                    <p className="text-gray-600 mb-4">Continue your learning journey</p>
                    <Link to="/courses">
                      <Button>Explore More Courses</Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <Card className="mb-4">
                    <CardContent className="p-0">
                      <Tabs 
                        value={activeTab} 
                        onValueChange={setActiveTab}
                        className="w-full"
                      >
                        <div className="border-b border-gray-200">
                          <TabsList className="w-full justify-start p-0 bg-transparent">
                            <TabsTrigger
                              value="content"
                              className="data-[state=active]:text-lua-purple data-[state=active]:border-lua-purple data-[state=active]:bg-white py-3 px-6 border-b-2 border-transparent rounded-none"
                            >
                              Lesson Content
                            </TabsTrigger>
                            <TabsTrigger
                              value="notes"
                              className="data-[state=active]:text-lua-purple data-[state=active]:border-lua-purple data-[state=active]:bg-white py-3 px-6 border-b-2 border-transparent rounded-none"
                            >
                              Notes
                            </TabsTrigger>
                            <TabsTrigger
                              value="discussion"
                              className="data-[state=active]:text-lua-purple data-[state=active]:border-lua-purple data-[state=active]:bg-white py-3 px-6 border-b-2 border-transparent rounded-none"
                            >
                              Discussion
                            </TabsTrigger>
                          </TabsList>
                        </div>
                        
                        <TabsContent value="content" className="m-0">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                            {/* Left column - Lesson content */}
                            <div className="bg-white rounded-lg shadow-sm p-6 h-[calc(100vh-16rem)] overflow-y-auto">
                              <LessonContent 
                                lesson={activeLessonData} 
                                onComplete={activeLessonData.type === "reading" ? handleLessonCompleted : undefined}
                                isCompleted={completedLessons.includes(`${activeModuleData.id}-${activeLessonData.id}`)}
                              />
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
                                  <h3 className="text-xl font-semibold text-lua-darkPurple mt-6">
                                    {activeLessonData.type === "reading" ? "Reading Material" : 
                                     activeLessonData.type === "video" ? "Video Lesson" : 
                                     activeLessonData.type === "quiz" ? "Interactive Quiz" : 
                                     "Lesson Material"}
                                  </h3>
                                  <p className="text-gray-600 text-center mt-2 max-w-md">
                                    {activeLessonData.type === "reading" ? 
                                      "This is a reading lesson. Take your time to understand the concepts before moving to the next lesson." :
                                     activeLessonData.type === "video" ? 
                                      "Watch the video lesson above to learn the concepts." :
                                     activeLessonData.type === "quiz" ? 
                                      "Complete the quiz to test your knowledge." :
                                      "Review the lesson material on the left."}
                                  </p>
                                  {activeLessonData.type === "reading" && !completedLessons.includes(`${activeModuleData.id}-${activeLessonData.id}`) && (
                                    <Button
                                      onClick={handleLessonCompleted}
                                      className="mt-8 bg-lua-purple hover:bg-lua-darkPurple text-white"
                                    >
                                      Mark as Completed
                                    </Button>
                                  )}
                                  {completedLessons.includes(`${activeModuleData.id}-${activeLessonData.id}`) && (
                                    <div className="mt-8 flex items-center text-green-600">
                                      <CheckCircle2 className="mr-2" />
                                      <span>Lesson Completed</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="notes" className="p-6">
                          <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-lg font-medium text-gray-800 mb-4">Your Notes</h3>
                            <textarea 
                              className="w-full h-64 p-3 border border-gray-300 rounded-md focus:ring-lua-purple focus:border-lua-purple"
                              placeholder="Write your notes for this lesson here..."
                            />
                            <div className="mt-4 flex justify-end">
                              <Button>Save Notes</Button>
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="discussion" className="p-6">
                          <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-lg font-medium text-gray-800 mb-4">Lesson Discussion</h3>
                            <p className="text-gray-500">
                              Join the conversation about this lesson with other students.
                            </p>
                            
                            <div className="mt-6">
                              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                <div className="flex items-center mb-2">
                                  <div className="w-8 h-8 rounded-full bg-lua-purple text-white flex items-center justify-center text-sm font-bold">
                                    JD
                                  </div>
                                  <div className="ml-2">
                                    <h4 className="font-medium">John Doe</h4>
                                    <p className="text-xs text-gray-500">2 days ago</p>
                                  </div>
                                </div>
                                <p className="text-gray-700">
                                  Great explanation of tables in Lua. I'm curious about how memory management works when dealing with large tables?
                                </p>
                                <div className="mt-2 text-sm text-lua-purple hover:text-lua-darkPurple cursor-pointer">
                                  Reply
                                </div>
                              </div>
                              
                              <div className="bg-gray-50 p-4 rounded-lg mb-4 ml-8">
                                <div className="flex items-center mb-2">
                                  <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">
                                    AI
                                  </div>
                                  <div className="ml-2">
                                    <h4 className="font-medium">Course Instructor</h4>
                                    <p className="text-xs text-gray-500">1 day ago</p>
                                  </div>
                                </div>
                                <p className="text-gray-700">
                                  Great question! Lua uses garbage collection to automatically manage memory. When tables are no longer referenced, they become eligible for garbage collection. For large tables, you can use the table.clear() function to remove all elements while keeping the allocated memory.
                                </p>
                              </div>
                              
                              <div className="mt-6">
                                <h4 className="font-medium mb-2">Add a comment</h4>
                                <textarea 
                                  className="w-full h-24 p-3 border border-gray-300 rounded-md focus:ring-lua-purple focus:border-lua-purple"
                                  placeholder="Join the discussion..."
                                />
                                <div className="mt-2 flex justify-end">
                                  <Button>Post Comment</Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                  
                  {/* Navigation buttons */}
                  <div className="flex justify-between mt-4">
                    <Button 
                      variant="outline"
                      className="flex items-center"
                      disabled={activeLesson === 0 && activeModule === 0}
                      onClick={navigateToPreviousLesson}
                    >
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Previous Lesson
                    </Button>
                    
                    <Button
                      className="flex items-center bg-lua-purple hover:bg-lua-darkPurple"
                      disabled={
                        activeModule === course.modules.length - 1 && 
                        activeLesson === course.modules[course.modules.length - 1].lessons.length - 1
                      }
                      onClick={navigateToNextLesson}
                    >
                      Next Lesson
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
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
