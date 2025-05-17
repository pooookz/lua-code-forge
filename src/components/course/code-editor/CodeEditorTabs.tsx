
import { TabsContent } from "@/components/ui/tabs";
import { Lesson } from "@/types/course";
import CodeTab from "./CodeTab";
import OutputTab from "./OutputTab";
import TestsTab from "./TestsTab";
import DocumentationTab from "./DocumentationTab";

interface CodeEditorTabsProps {
  activeTab: string;
  code: string;
  setCode: (code: string) => void;
  output: string;
  setOutput: (output: string) => void;
  testResults: Array<{name: string, passed: boolean, message: string}>;
  lesson: Lesson;
}

const CodeEditorTabs = ({
  activeTab,
  code,
  setCode,
  output,
  setOutput,
  testResults,
  lesson
}: CodeEditorTabsProps) => {
  return (
    <div className="flex-grow">
      <TabsContent value="code" className="m-0 p-0 flex-grow h-[calc(100vh-24rem)]">
        <CodeTab code={code} setCode={setCode} initialCode={lesson.initialCode} />
      </TabsContent>
      
      <TabsContent value="output" className="m-0 p-0 h-[calc(100vh-24rem)]">
        <OutputTab output={output} setOutput={setOutput} />
      </TabsContent>
      
      <TabsContent value="tests" className="m-0 p-0 h-[calc(100vh-24rem)]">
        <TestsTab testResults={testResults} />
      </TabsContent>
      
      <TabsContent value="docs" className="m-0 p-0 h-[calc(100vh-24rem)]">
        <DocumentationTab />
      </TabsContent>
    </div>
  );
};

export default CodeEditorTabs;
