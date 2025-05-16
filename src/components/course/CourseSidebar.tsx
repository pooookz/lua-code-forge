
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Module } from "@/types/course";
import { Book, CheckCircle2, PlayCircle } from "lucide-react";

interface CourseSidebarProps {
  modules: Module[];
  activeModule: number;
  activeLesson: number;
  setActiveModule: (index: number) => void;
  setActiveLesson: (index: number) => void;
  completedLessons?: string[];
}

const CourseSidebar = ({
  modules,
  activeModule,
  activeLesson,
  setActiveModule,
  setActiveLesson,
  completedLessons = []
}: CourseSidebarProps) => {
  return (
    <div className="w-64 flex-shrink-0">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-4">
        <div className="p-4 border-b border-gray-100">
          <h2 className="font-semibold text-lua-darkPurple">Course Content</h2>
        </div>
        
        <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
          <Accordion
            type="single"
            collapsible
            defaultValue={`module-${activeModule}`}
            className="w-full"
          >
            {modules.map((module, moduleIndex) => (
              <AccordionItem key={module.id} value={`module-${moduleIndex}`}>
                <AccordionTrigger className={`px-4 py-3 text-left font-medium ${
                  moduleIndex === activeModule ? "text-lua-purple" : "text-gray-700"
                }`}>
                  <span className="flex items-start">
                    <span className="mr-2">{moduleIndex + 1}.</span>
                    <span>{module.title}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="mt-1 space-y-1 px-2">
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
                              ) : lesson.type === "reading" ? (
                                <Book className="h-4 w-4" />
                              ) : (
                                <PlayCircle className="h-4 w-4" />
                              )}
                            </span>
                            <span className="flex-grow">
                              <span className="mr-1">{lessonIndex + 1}.</span>
                              <span className={isCompleted ? "line-through opacity-70" : ""}>
                                {lesson.title}
                              </span>
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default CourseSidebar;
