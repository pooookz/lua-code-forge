import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCheck, Play, SendHorizontal } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { courseContent } from "@/data/coursesData";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courseContent[courseId as keyof typeof courseContent];
  
  const [activeModule, setActiveModule] = useState(0);
  const [activeLesson, setActiveLesson] = useState(0);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [currentLessonProgress, setCurrentLessonProgress] = useState(0);
  
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
              <Button className="bg-lua-purple hover:bg-lua-darkPurple text-white">
                Back to Courses
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const activeModuleData = course.modules[activeModule];
  const activeLessonData = activeModuleData?.lessons[activeLesson];
  
  const handleRunCode = () => {
    setOutput("Running code...\n\n");
    
    setTimeout(() => {
      // Simulated execution - in a real app, this would execute the Lua code
      let simulatedOutput = "-- Output: --\n";
      
      if (code.includes("print(")) {
        const printMatches = code.match(/print\((.*)\)/g);
        if (printMatches) {
          printMatches.forEach(match => {
            const content = match.match(/print\((.*)\)/);
            if (content && content[1]) {
              // Handle string literals and concatenation
              const parts = content[1].split("..");
              const output = parts.map(part => {
                part = part.trim();
                if (part.startsWith('"') || part.startsWith("'")) {
                  return part.slice(1, -1);
                }
                // Handle variables (simplified)
                if (part === "age") return "25";
                if (part === "name") return "John";
                if (part === "isStudent") return "true";
                return part;
              }).join("");
              simulatedOutput += output + "\n";
            }
          });
        }
      }
      
      setOutput(simulatedOutput);
      
      // Update progress if not already 100%
      if (currentLessonProgress < 50) {
        setCurrentLessonProgress(50);
      }
    }, 500);
  };
  
  const handleSubmitCode = () => {
    if (!activeLessonData.solution) {
      toast({
        title: "No Solution Available",
        description: "This lesson doesn't require code submission.",
        variant: "default",
      });
      return;
    }

    setOutput("Evaluating submission...\n\n");
    
    setTimeout(() => {
      // Normalize both code and solution for comparison
      const normalizedCode = code.trim()
        .replace(/\s+/g, ' ')
        .replace(/["']/g, '"') // Standardize quotes
        .toLowerCase();
      
      const normalizedSolution = activeLessonData.solution.trim()
        .replace(/\s+/g, ' ')
        .replace(/["']/g, '"')
        .toLowerCase();
      
      if (normalizedCode === normalizedSolution) {
        setOutput(prev => prev + "✓ Great job! Your solution is correct.\n");
        setCurrentLessonProgress(100);
        toast({
          title: "Exercise Completed!",
          description: "You've successfully completed this exercise.",
          variant: "default",
        });
      } else {
        setOutput(prev => prev + "✗ Your solution doesn't match the expected output. Try again!\n");
        toast({
          title: "Not Quite Right",
          description: "Your solution doesn't match what we're looking for. Check the hints and try again.",
          variant: "destructive",
        });
      }
    }, 800);
  };
  
  // Initialize code when lesson changes
  React.useEffect(() => {
    if (activeLessonData && activeLessonData.type === "exercise") {
      setCode(activeLessonData.initialCode || "");
      setOutput("");
      setCurrentLessonProgress(0);
    }
  }, [activeLesson, activeModule, activeLessonData]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        {/* Course header */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-lua-darkPurple">{course.title}</h1>
                <div className="flex items-center gap-4 mt-1">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    course.level === "Beginner" ? "bg-green-100 text-green-800" : 
                    course.level === "Intermediate" ? "bg-blue-100 text-blue-800" : 
                    "bg-purple-100 text-purple-800"
                  }`}>
                    {course.level}
                  </span>
                  <span className="text-sm text-gray-500">{course.lessonsCount} lessons</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Course Progress:</span>
                <Progress value={currentLessonProgress} className="w-32 h-2" />
                <span className="text-sm font-medium">{currentLessonProgress}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="container mx-auto px-4">
          <div className="flex gap-6 py-6">
            {/* Left sidebar - Module navigation */}
            <div className="w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-4">
                <div className="p-4 border-b border-gray-100">
                  <h2 className="font-semibold text-lua-darkPurple">Course Content</h2>
                </div>
                <div className="divide-y divide-gray-100">
                  {course.modules.map((module, moduleIndex) => (
                    <div key={module.id} className="p-4">
                      <button 
                        className={`w-full text-left font-medium ${
                          moduleIndex === activeModule ? "text-lua-purple" : "text-gray-700"
                        }`}
                        onClick={() => {
                          setActiveModule(moduleIndex);
                          setActiveLesson(0);
                        }}
                      >
                        {moduleIndex + 1}. {module.title}
                      </button>
                      {moduleIndex === activeModule && (
                        <ul className="mt-2 space-y-1">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <li key={lesson.id}>
                              <button
                                className={`w-full text-left px-4 py-2 text-sm rounded-md ${
                                  lessonIndex === activeLesson 
                                    ? "bg-lua-purple text-white" 
                                    : "text-gray-600 hover:bg-gray-100"
                                }`}
                                onClick={() => setActiveLesson(lessonIndex)}
                              >
                                {lessonIndex + 1}. {lesson.title}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main content area */}
            <div className="flex-grow min-h-[calc(100vh-16rem)]">
              <div className="grid grid-cols-2 gap-6">
                {/* Left column - Lesson content */}
                <div className="bg-white rounded-lg shadow-sm p-6 h-[calc(100vh-16rem)] overflow-y-auto">
                  <div className="prose prose-slate max-w-none">
                    <div dangerouslySetInnerHTML={{ 
                      __html: activeLessonData.content
                        .replace(/# (.*)/g, '<h1 class="text-2xl font-bold text-lua-darkPurple mt-6 mb-4">$1</h1>')
                        .replace(/## (.*)/g, '<h2 class="text-xl font-bold text-lua-purple mt-5 mb-3">$1</h2>')
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\*(.*?)\*/g, '<em>$1</em>')
                        .replace(/```lua([\s\S]*?)```/g, '<pre class="bg-gray-800 text-white p-4 rounded-md my-4 overflow-x-auto"><code>$1</code></pre>')
                        .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 p-4 rounded-md my-4 overflow-x-auto"><code>$1</code></pre>')
                        .replace(/\`(.*?)\`/g, '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
                        .replace(/\n\n/g, '<br/><br/>')
                    }} />
                  </div>
                </div>

                {/* Right column - Code editor and output */}
                {activeLessonData.type === "exercise" && (
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden h-[calc(100vh-16rem)] flex flex-col">
                    {/* Code editor */}
                    <div className="flex-grow flex flex-col">
                      <div className="bg-gray-100 px-4 py-2 flex justify-between items-center border-b border-gray-200">
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm text-gray-500">main.lua</span>
                      </div>
                      <Textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="flex-grow font-mono text-sm p-4 rounded-none border-0 focus:ring-0 resize-none"
                        spellCheck="false"
                      />
                    </div>

                    {/* Output console */}
                    <div className="h-48 bg-gray-900 text-white">
                      <div className="border-b border-gray-700 px-4 py-2 bg-gray-800 flex justify-between items-center">
                        <span className="text-sm text-gray-300">Console Output</span>
                        <Button 
                          variant="ghost" 
                          className="h-7 px-2 text-xs text-gray-400 hover:text-white"
                          onClick={() => setOutput("")}
                        >
                          Clear
                        </Button>
                      </div>
                      <pre className="p-4 h-[136px] overflow-y-auto font-mono text-sm">
                        {output || "// Run your code to see output here"}
                      </pre>
                    </div>

                    {/* Action buttons */}
                    <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between">
                      <Button
                        onClick={handleRunCode}
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                      >
                        <Play className="mr-1 h-4 w-4" /> Run
                      </Button>
                      <Button
                        onClick={handleSubmitCode}
                        className="bg-green-500 hover:bg-green-600 text-white"
                      >
                        <SendHorizontal className="mr-1 h-4 w-4" /> Submit
                      </Button>
                    </div>
                  </div>
                )}
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