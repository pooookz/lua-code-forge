
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RotateCcw, Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface CodeTabProps {
  code: string;
  setCode: (code: string) => void;
  initialCode: string | undefined;
}

const CodeTab = ({ code, setCode, initialCode }: CodeTabProps) => {
  const handleResetCode = () => {
    if (initialCode) {
      setCode(initialCode);
      toast({
        title: "Code Reset",
        description: "Your code has been reset to the initial state.",
        variant: "default",
      });
    }
  };
  
  const handleDownloadCode = () => {
    const element = document.createElement("a");
    const file = new Blob([code], {type: "text/plain"});
    element.href = URL.createObjectURL(file);
    element.download = `lua-exercise.lua`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Code Downloaded",
      description: "Your code has been downloaded as a .lua file.",
      variant: "default",
    });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="bg-gray-100 px-4 py-2 flex justify-between items-center border-b border-gray-200">
        <span className="text-sm text-gray-500">main.lua</span>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleResetCode}
            className="h-7 px-2 text-xs"
          >
            <RotateCcw className="h-4 w-4 mr-1" /> Reset
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleDownloadCode}
            className="h-7 px-2 text-xs"
          >
            <Download className="h-4 w-4 mr-1" /> Download
          </Button>
        </div>
      </div>
      <Textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="flex-grow font-mono text-sm p-4 rounded-none border-0 focus:ring-0 resize-none h-full"
        spellCheck="false"
      />
    </div>
  );
};

export default CodeTab;
