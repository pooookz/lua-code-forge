
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Play, SendHorizontal } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Lesson } from "@/types/course";

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
    }, 500);
  };
  
  const handleSubmitCode = () => {
    if (!lesson.solution) {
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
      
      const normalizedSolution = lesson.solution.trim()
        .replace(/\s+/g, ' ')
        .replace(/["']/g, '"')
        .toLowerCase();
      
      if (normalizedCode === normalizedSolution) {
        setOutput(prev => prev + "✓ Great job! Your solution is correct.\n");
        onCompleted();
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
  
  return (
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
  );
};

export default CodeEditor;
