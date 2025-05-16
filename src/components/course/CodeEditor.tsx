
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Play, SendHorizontal, RotateCcw, BookOpen, Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Lesson } from "@/types/course";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

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
  const [isRunning, setIsRunning] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("code");
  const [testResults, setTestResults] = useState<Array<{name: string, passed: boolean, message: string}>>([]);
  
  // Reset state when lesson changes
  useEffect(() => {
    if (lesson.initialCode) {
      setCode(lesson.initialCode);
    }
    setOutput("");
    setTestResults([]);
  }, [lesson.id, lesson.initialCode, setCode]);
  
  const handleRunCode = () => {
    setIsRunning(true);
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
      
      if (code.includes("function")) {
        simulatedOutput += "\n-- Function defined --\n";
      }
      
      if (code.includes("for") || code.includes("while")) {
        simulatedOutput += "\n-- Loop executed --\n";
      }
      
      setOutput(simulatedOutput);
      setIsRunning(false);
      
      // Auto switch to output tab
      setActiveTab("output");
    }, 800);
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

    setIsTesting(true);
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
      
      // Run tests
      const tests = [
        {
          name: "Code structure",
          passed: normalizedCode.includes(normalizedSolution.substring(0, 20)), 
          message: "Your code structure doesn't match the expected pattern."
        },
        {
          name: "Syntax check",
          passed: !code.includes(";;") && !code.includes(",,"), 
          message: "Your code contains syntax errors."
        },
        {
          name: "Solution match",
          passed: normalizedCode === normalizedSolution,
          message: "Your solution doesn't match the expected output."
        }
      ];
      
      setTestResults(tests);
      
      const allPassed = tests.every(test => test.passed);
      
      if (allPassed) {
        setOutput(output + "✓ Great job! Your solution is correct.\n");
        onCompleted();
        toast({
          title: "Exercise Completed!",
          description: "You've successfully completed this exercise.",
          variant: "default",
        });
        
        // Switch to tests tab to show success
        setActiveTab("tests");
      } else {
        setOutput(output + "✗ Your solution doesn't match the expected output. Try again!\n");
        toast({
          title: "Not Quite Right",
          description: "Your solution doesn't match what we're looking for. Check the hints and try again.",
          variant: "destructive",
        });
        
        // Switch to tests tab to show errors
        setActiveTab("tests");
      }
      
      setIsTesting(false);
    }, 1000);
  };
  
  const handleResetCode = () => {
    if (lesson.initialCode) {
      setCode(lesson.initialCode);
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
    element.download = `lua-exercise-${lesson.id}.lua`;
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
    <div className="bg-white rounded-lg shadow-sm overflow-hidden h-[calc(100vh-16rem)] flex flex-col">
      {/* Editor tabs */}
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
          
          {/* Tab content */}
          <div className="flex-grow">
            <TabsContent value="code" className="m-0 p-0 flex-grow h-[calc(100vh-24rem)]">
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
            </TabsContent>
            
            <TabsContent value="output" className="m-0 p-0 h-[calc(100vh-24rem)]">
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
              <pre className="p-4 h-[calc(100vh-26rem)] overflow-y-auto font-mono text-sm bg-gray-900 text-white">
                {output || "// Run your code to see output here"}
              </pre>
            </TabsContent>
            
            <TabsContent value="tests" className="m-0 p-0 h-[calc(100vh-24rem)] overflow-y-auto">
              <div className="p-4 space-y-4">
                <h3 className="font-medium text-gray-800">Test Results</h3>
                
                {testResults.length === 0 ? (
                  <p className="text-sm text-gray-600">Submit your code to see test results.</p>
                ) : (
                  <div className="space-y-2">
                    {testResults.map((test, index) => (
                      <Card key={index} className={`p-4 ${test.passed ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`w-4 h-4 rounded-full mr-2 ${test.passed ? 'bg-green-500' : 'bg-red-500'}`}></div>
                            <span className="font-medium">{test.name}</span>
                          </div>
                          <span className={`text-sm ${test.passed ? 'text-green-600' : 'text-red-600'}`}>
                            {test.passed ? 'Passed' : 'Failed'}
                          </span>
                        </div>
                        {!test.passed && (
                          <p className="mt-2 text-sm text-red-600">{test.message}</p>
                        )}
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="docs" className="m-0 p-0 h-[calc(100vh-24rem)] overflow-y-auto">
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-4">Lua Quick Reference</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-lua-purple">Variables</h4>
                    <pre className="bg-gray-100 p-2 rounded text-sm mt-1">local name = "value"</pre>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-lua-purple">Functions</h4>
                    <pre className="bg-gray-100 p-2 rounded text-sm mt-1">function name(param1, param2)
  -- body
  return value
end</pre>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-lua-purple">Conditionals</h4>
                    <pre className="bg-gray-100 p-2 rounded text-sm mt-1">if condition then
  -- body
elseif condition then
  -- body
else
  -- body
end</pre>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-lua-purple">Loops</h4>
                    <pre className="bg-gray-100 p-2 rounded text-sm mt-1">-- For loop
for i = 1, 10 do
  -- body
end

-- While loop
while condition do
  -- body
end</pre>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-lua-purple">Tables</h4>
                    <pre className="bg-gray-100 p-2 rounded text-sm mt-1">local tbl = {
  key = "value",
  ["key with spaces"] = true,
  10,
  20,
  30
}</pre>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* Action buttons */}
      <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between mt-auto">
        <Button
          onClick={handleRunCode}
          className="bg-blue-500 hover:bg-blue-600 text-white"
          disabled={isRunning}
        >
          <Play className="mr-1 h-4 w-4" /> {isRunning ? "Running..." : "Run"}
        </Button>
        <Button
          onClick={handleSubmitCode}
          className="bg-green-500 hover:bg-green-600 text-white"
          disabled={isTesting}
        >
          <SendHorizontal className="mr-1 h-4 w-4" /> {isTesting ? "Testing..." : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default CodeEditor;
