
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { Lesson } from "@/types/course";

interface UseCodeExecutionProps {
  lesson: Lesson;
  code: string;
  setCode: (code: string) => void;
  output: string;
  setOutput: (output: string) => void;
  setActiveTab: (tab: string) => void;
  onCompleted: () => void;
}

interface TestResult {
  name: string;
  passed: boolean;
  message: string;
}

export const useCodeExecution = ({
  lesson,
  code,
  setCode,
  output,
  setOutput,
  setActiveTab,
  onCompleted
}: UseCodeExecutionProps) => {
  const [isRunning, setIsRunning] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  
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

  return {
    isRunning,
    isTesting,
    testResults,
    handleRunCode,
    handleSubmitCode
  };
};
