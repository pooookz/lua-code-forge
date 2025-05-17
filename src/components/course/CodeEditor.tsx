
import { useState } from "react";
import { TabsContent, Tabs } from "@/components/ui/tabs";
import { Lesson } from "@/types/course";
import CodeEditorHeader from "./code-editor/CodeEditorHeader";
import CodeEditorTabs from "./code-editor/CodeEditorTabs";
import ActionButtons from "./code-editor/ActionButtons";
import { useCodeExecution } from "./code-editor/useCodeExecution";

interface CodeEditorProps {
  lesson: Lesson;
  code: string;
  setCode: (code: string) => void;
  output: string;
  setOutput: (output: string) => void;
  onCompleted: () => void;
}

const CodeEditor = ({
  lesson,
  code,
  setCode,
  output,
  setOutput,
  onCompleted
}: CodeEditorProps) => {
  const [activeTab, setActiveTab] = useState<string>("code");
  
  const {
    isRunning,
    isTesting,
    testResults,
    handleRunCode,
    handleSubmitCode
  } = useCodeExecution({
    lesson,
    code, 
    setCode,
    output,
    setOutput,
    setActiveTab,
    onCompleted
  });
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden h-[calc(100vh-16rem)] flex flex-col">
      <CodeEditorHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <Tabs value={activeTab} className="flex-grow flex flex-col">
        <CodeEditorTabs
          activeTab={activeTab}
          code={code}
          setCode={setCode}
          output={output}
          setOutput={setOutput}
          testResults={testResults}
          lesson={lesson}
        />
      </Tabs>

      <ActionButtons 
        onRunCode={handleRunCode} 
        onSubmitCode={handleSubmitCode}
        isRunning={isRunning}
        isTesting={isTesting}
      />
    </div>
  );
};

export default CodeEditor;
