
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CodeEditorHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const CodeEditorHeader = ({ activeTab, setActiveTab }: CodeEditorHeaderProps) => {
  return (
    <div className="border-b border-gray-200">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between px-4 py-2">
          <TabsList>
            <TabsTrigger value="code" className="text-sm">
              Code Editor
            </TabsTrigger>
            <TabsTrigger value="output" className="text-sm">
              Output
            </TabsTrigger>
            <TabsTrigger value="tests" className="text-sm">
              Tests
            </TabsTrigger>
            <TabsTrigger value="docs" className="text-sm">
              Documentation
            </TabsTrigger>
          </TabsList>
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default CodeEditorHeader;
