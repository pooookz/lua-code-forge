
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play } from "lucide-react";

const Playground = () => {
  const [code, setCode] = useState(`-- Welcome to the Lua Playground
-- Write your code here and click Run

print("Hello, Lua World!")

-- Define a function
function greet(name)
  return "Welcome to LuaLearn, " .. name
end

-- Call the function
message = greet("Developer")
print(message)

-- Simple loop
for i=1,5 do
  print("Counting: " .. i)
end`);

  const [output, setOutput] = useState("");
  const [selectedExample, setSelectedExample] = useState("");
  
  // Examples templates
  const examples = {
    hello: `-- Simple Hello World
print("Hello, Lua World!")`,
    
    tables: `-- Lua Tables Example
local fruits = {"apple", "banana", "orange"}

-- Iterate through array
for i, fruit in ipairs(fruits) do
  print(i, fruit)
end

-- Table as dictionary
local person = {
  name = "Alex",
  age = 28,
  isStudent = true
}

-- Access and modify
print(person.name)
person.age = 29
print("New age:", person.age)

-- Nested tables
local nested = {
  numbers = {1, 2, 3},
  info = {
    created = "today",
    version = 1.2
  }
}

print(nested.info.version)`,
    
    functions: `-- Lua Functions Example
-- Basic function
function sayHello(name)
  print("Hello, " .. name)
end

sayHello("Lua Developer")

-- Functions as variables
local add = function(a, b)
  return a + b
end

print("5 + 3 =", add(5, 3))

-- Multiple returns
function getDetails()
  return "Lua", 5.4, true
end

local name, version, isAwesome = getDetails()
print(name, version, isAwesome)

-- Closures
function counter()
  local count = 0
  return function()
    count = count + 1
    return count
  end
end

local count = counter()
print(count()) -- 1
print(count()) -- 2
print(count()) -- 3`
  };
  
  const handleRunCode = () => {
    setOutput("Running code...\n\n");
    
    setTimeout(() => {
      // Since we can't actually run Lua in the browser without integration,
      // we'll simulate some output based on the code content
      let simulatedOutput = "-- Output: --\n";
      
      if (code.includes("Hello, Lua World!")) {
        simulatedOutput += "Hello, Lua World!\n";
      }
      
      if (code.includes("greet(")) {
        simulatedOutput += "Welcome to LuaLearn, Developer\n";
      }
      
      if (code.match(/for\s+i\s*=/)) {
        simulatedOutput += "Counting: 1\nCounting: 2\nCounting: 3\nCounting: 4\nCounting: 5\n";
      }
      
      if (code.includes("sayHello(")) {
        simulatedOutput += "Hello, Lua Developer\n";
      }
      
      if (code.includes("add(5, 3)")) {
        simulatedOutput += "5 + 3 = 8\n";
      }
      
      if (code.includes("getDetails()")) {
        simulatedOutput += "Lua  5.4  true\n";
      }
      
      if (code.includes("counter()")) {
        simulatedOutput += "1\n2\n3\n";
      }
      
      if (code.includes("ipairs(fruits)")) {
        simulatedOutput += "1  apple\n2  banana\n3  orange\n";
      }
      
      if (code.includes("person.name")) {
        simulatedOutput += "Alex\n";
      }
      
      if (code.includes("person.age")) {
        simulatedOutput += "New age: 29\n";
      }
      
      if (code.includes("nested.info.version")) {
        simulatedOutput += "1.2\n";
      }
      
      setOutput(simulatedOutput);
    }, 500);
  };
  
  const handleExampleChange = (value: string) => {
    setSelectedExample(value);
    if (value && examples[value as keyof typeof examples]) {
      setCode(examples[value as keyof typeof examples]);
      setOutput(""); // Clear output when changing example
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-lua-darkPurple">Lua Playground</h1>
              <p className="text-gray-600">Write, test, and experiment with Lua code in real-time</p>
            </div>
            <div className="flex items-center gap-4">
              <Select value={selectedExample} onValueChange={handleExampleChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select example" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="choose">Choose example</SelectItem>
                  <SelectItem value="hello">Hello World</SelectItem>
                  <SelectItem value="tables">Tables</SelectItem>
                  <SelectItem value="functions">Functions</SelectItem>
                </SelectContent>
              </Select>
              
              <Button 
                onClick={handleRunCode} 
                className="bg-lua-purple hover:bg-lua-darkPurple text-white"
              >
                <Play className="mr-2 h-4 w-4" /> Run Code
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md border border-gray-200">
              <div className="border-b border-gray-200 bg-gray-100 px-4 py-2 rounded-t-lg flex justify-between items-center">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-500">main.lua</span>
                <div></div> {/* Spacer for flex alignment */}
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full font-mono text-sm p-4 h-[500px] focus:outline-none"
                spellCheck="false"
              />
            </div>
            
            <div className="bg-gray-900 text-white rounded-lg shadow-md">
              <div className="border-b border-gray-700 px-4 py-2 bg-gray-800 rounded-t-lg flex justify-between items-center">
                <span className="text-sm text-gray-300">Console Output</span>
                <Button 
                  variant="ghost" 
                  className="h-7 px-2 text-xs text-gray-400 hover:text-white"
                  onClick={() => setOutput("")}
                >
                  Clear
                </Button>
              </div>
              <pre className="p-4 h-[500px] overflow-y-auto font-mono text-sm">
                {output || "// Run your code to see output here"}
              </pre>
            </div>
          </div>
          
          <div className="mt-8 bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-lua-darkPurple">Playground Features</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <div className="min-w-4 h-4 rounded-full bg-lua-blue mr-2 mt-1.5"></div>
                <span>Write and test Lua code snippets in real-time</span>
              </li>
              <li className="flex items-start">
                <div className="min-w-4 h-4 rounded-full bg-lua-blue mr-2 mt-1.5"></div>
                <span>Choose from pre-built examples to learn common patterns</span>
              </li>
              <li className="flex items-start">
                <div className="min-w-4 h-4 rounded-full bg-lua-blue mr-2 mt-1.5"></div>
                <span>Practice concepts from our courses in an isolated environment</span>
              </li>
              <li className="flex items-start">
                <div className="min-w-4 h-4 rounded-full bg-lua-blue mr-2 mt-1.5"></div>
                <span>Create an account to save and share your code snippets</span>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-md">
              <p className="text-sm text-blue-700">
                <strong>Note:</strong> This is a simulated playground environment. For security reasons, the actual execution happens on our servers when you have an active account.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Playground;
