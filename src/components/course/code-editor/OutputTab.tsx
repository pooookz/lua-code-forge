
import { Button } from "@/components/ui/button";

interface OutputTabProps {
  output: string;
  setOutput: (output: string) => void;
}

const OutputTab = ({ output, setOutput }: OutputTabProps) => {
  return (
    <div className="h-full flex flex-col">
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
      <pre className="p-4 h-full overflow-y-auto font-mono text-sm bg-gray-900 text-white flex-grow">
        {output || "// Run your code to see output here"}
      </pre>
    </div>
  );
};

export default OutputTab;
