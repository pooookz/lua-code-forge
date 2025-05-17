
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

interface OutputTabProps {
  output: string;
  setOutput: (output: string) => void;
}

const OutputTab = ({ output, setOutput }: OutputTabProps) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    if (output) {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-gray-700 px-4 py-2 bg-gray-800 flex justify-between items-center">
        <span className="text-sm text-gray-300">Console Output</span>
        <div className="flex space-x-2">
          {output && (
            <Button 
              variant="ghost" 
              className="h-7 px-2 text-xs text-gray-400 hover:text-white"
              onClick={handleCopy}
            >
              {copied ? (
                <>
                  <Check className="mr-1 h-3 w-3" /> Copied
                </>
              ) : (
                <>
                  <Copy className="mr-1 h-3 w-3" /> Copy
                </>
              )}
            </Button>
          )}
          <Button 
            variant="ghost" 
            className="h-7 px-2 text-xs text-gray-400 hover:text-white"
            onClick={() => setOutput("")}
            disabled={!output}
          >
            Clear
          </Button>
        </div>
      </div>
      <pre className="p-4 h-full overflow-y-auto font-mono text-sm bg-gray-900 text-white flex-grow">
        {output || "// Run your code to see output here"}
      </pre>
    </div>
  );
};

export default OutputTab;
