
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Module, Lesson } from "@/types/course";
import { Book, CheckCircle2, PlayCircle, Lock, FileText, Video } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface CourseSidebarProps {
  modules: Module[];
  activeModule: number;
  activeLesson: number;
  setActiveModule: (index: number) => void;
  setActiveLesson: (index: number) => void;
  completedLessons?: string[];
  courseProgress: number;
  userDisplayName?: string;
}

const CourseSidebar = ({
  modules,
  activeModule,
  activeLesson,
  setActiveModule,
  setActiveLesson,
  completedLessons = [],
  courseProgress,
  userDisplayName = "Student"
}: CourseSidebarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Calculate completion for each module
  const moduleCompletionStatus = modules.map(module => {
    const totalLessons = module.lessons.length;
    const completedLessonsInModule = module.lessons.filter(lesson => 
      completedLessons.includes(`${module.id}-${lesson.id}`)
    ).length;
    
    return {
      id: module.id,
      completed: completedLessonsInModule,
      total: totalLessons,
      percentage: totalLessons ? Math.round((completedLessonsInModule / totalLessons) * 100) : 0
    };
  });
  
  // Filter lessons based on search query
  const filteredModules = searchQuery.trim() === "" ? 
    modules : 
    modules.map(module => ({
      ...module,
      lessons: module.lessons.filter(lesson => 
        lesson.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(module => module.lessons.length > 0);
  
  const getLessonTypeIcon = (type: string) => {
    switch(type) {
      case "reading":
        return <Book className="h-4 w-4" />;
      case "exercise":
        return <PlayCircle className="h-4 w-4" />;
      case "quiz":
        return <FileText className="h-4 w-4" />;
      case "video":
        return <Video className="h-4 w-4" />;
      default:
        return <Book className="h-4 w-4" />;
    }
  };
  
  const getLessonEstimatedTime = (lesson: Lesson) => {
    if (!lesson.estimatedTime) return null;
    
    return (
      <span className="text-xs text-gray-500 ml-auto">{lesson.estimatedTime} min</span>
    );
  };
  
  return (
    <div className="w-72 flex-shrink-0">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-4">
        <div className="p-4 border-b border-gray-100">
          <h2 className="font-semibold text-lua-darkPurple">Course Content</h2>
          
          <div className="mt-2 mb-4">
            <Progress value={courseProgress} className="h-2" />
            <p className="text-xs text-gray-500 mt-1">{courseProgress}% complete</p>
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search lessons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-lua-purple"
            />
            {searchQuery && (
              <button
                className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
                onClick={() => setSearchQuery("")}
              >
                ×
              </button>
            )}
          </div>
        </div>
        
        <div className="max-h-[calc(100vh-14rem)] overflow-y-auto">
          {filteredModules.length === 0 ? (
            <div className="p-4 text-sm text-gray-500">
              No lessons found matching "{searchQuery}"
            </div>
          ) : (
            <Accordion
              type="single"
              collapsible
              defaultValue={`module-${activeModule}`}
              className="w-full"
            >
              {filteredModules.map((module, moduleIndex) => {
                const moduleCompletion = moduleCompletionStatus[moduleIndex];
                const isModuleLocked = !module.unlocked && moduleIndex > 0;
                
                return (
                  <AccordionItem key={module.id} value={`module-${moduleIndex}`}>
                    <AccordionTrigger 
                      className={`px-4 py-3 text-left font-medium ${
                        moduleIndex === activeModule ? "text-lua-purple" : "text-gray-700"
                      } ${isModuleLocked ? "opacity-60" : ""}`}
                      disabled={isModuleLocked}
                    >
                      <div className="flex items-start flex-grow">
                        <span className="mr-2 min-w-[15px]">{moduleIndex + 1}.</span>
                        <span className="flex-grow">{module.title}</span>
                        
                        {isModuleLocked && <Lock className="h-4 w-4 ml-2 flex-shrink-0" />}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      {isModuleLocked ? (
                        <div className="px-5 py-3 text-sm text-gray-500">
                          Complete the previous module to unlock this content.
                        </div>
                      ) : (
                        <>
                          {moduleCompletion && moduleCompletion.completed > 0 && (
                            <div className="px-5 py-2">
                              <Progress 
                                value={moduleCompletion.percentage} 
                                className="h-1.5" 
                              />
                              <p className="text-xs text-gray-500 mt-1">
                                {moduleCompletion.completed}/{moduleCompletion.total} completed
                              </p>
                            </div>
                          )}
                          <ul className="mt-1 space-y-1 px-2 py-1">
                            {module.lessons.map((lesson, lessonIndex) => {
                              const isActive = moduleIndex === activeModule && lessonIndex === activeLesson;
                              const isCompleted = completedLessons.includes(`${module.id}-${lesson.id}`);
                              
                              return (
                                <li key={lesson.id}>
                                  <button
                                    className={`w-full text-left px-3 py-2 text-sm rounded-md flex items-center ${
                                      isActive 
                                        ? "bg-lua-purple text-white" 
                                        : `hover:bg-gray-100 ${isCompleted ? "text-green-600" : "text-gray-600"}`
                                    }`}
                                    onClick={() => {
                                      setActiveModule(moduleIndex);
                                      setActiveLesson(lessonIndex);
                                    }}
                                  >
                                    <span className="mr-2 flex-shrink-0">
                                      {isCompleted ? (
                                        <CheckCircle2 className="h-4 w-4" />
                                      ) : getLessonTypeIcon(lesson.type)}
                                    </span>
                                    <span className="flex-grow truncate">
                                      <span className="mr-1">{lessonIndex + 1}.</span>
                                      <span className={isCompleted && !isActive ? "line-through opacity-70" : ""}>
                                        {lesson.title}
                                      </span>
                                    </span>
                                    {!isActive && getLessonEstimatedTime(lesson)}
                                    {lesson.type === "exercise" && !isActive && (
                                      <Badge className="ml-1 bg-green-500 text-[10px]">Practice</Badge>
                                    )}
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseSidebar;
