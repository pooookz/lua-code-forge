
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Module, Lesson } from "@/types/course";
import LessonContent from "@/components/course/LessonContent";
import CodeEditor from "@/components/course/CodeEditor";
import LessonCompletionPanel from "@/components/course/LessonCompletionPanel";
import NotesTab from "@/components/course/NotesTab";
import DiscussionTab from "@/components/course/DiscussionTab";

interface TabsContainerProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeModuleData: Module;
  activeLessonData: Lesson;
  code: string;
  setCode: (code: string) => void;
  output: string;
  setOutput: (output: string) => void;
  handleLessonCompleted: () => void;
  completedLessons: string[];
}

const TabsContainer = ({ 
  activeTab, 
  setActiveTab, 
  activeModuleData, 
  activeLessonData, 
  code, 
  setCode, 
  output, 
  setOutput,
  handleLessonCompleted,
  completedLessons
}: TabsContainerProps) => {
  const isLessonCompleted = completedLessons.includes(`${activeModuleData.id}-${activeLessonData.id}`);

  return (
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
                  isCompleted={isLessonCompleted}
                />
              </div>

              {/* Right column - Code editor or lesson completion panel */}
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
                <LessonCompletionPanel
                  lessonType={activeLessonData.type}
                  isCompleted={isLessonCompleted}
                  onComplete={handleLessonCompleted}
                />
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="notes" className="p-6">
            <NotesTab />
          </TabsContent>
          
          <TabsContent value="discussion" className="p-6">
            <DiscussionTab />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TabsContainer;
