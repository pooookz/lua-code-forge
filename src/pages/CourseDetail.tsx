
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCheck, Play, SendHorizontal } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

// Sample course data - in a real app this would come from an API
const coursesData = {
  "lua-basics": {
    title: "Lua Basics",
    description: "Learn the fundamentals of Lua programming, including variables, functions, loops, and tables.",
    level: "Beginner",
    lessonsCount: 12,
    totalExercises: 36,
    completedExercises: 0,
    modules: [
      {
        id: "intro",
        title: "Introduction to Lua",
        description: "Get started with Lua programming language and understand its core concepts.",
        lessons: [
          {
            id: "what-is-lua",
            title: "What is Lua?",
            type: "reading",
            content: `# Introduction to Lua
            
Lua is a powerful, efficient, lightweight, embeddable scripting language. It supports procedural programming, object-oriented programming, functional programming, data-driven programming, and data description.

## History and Purpose

Lua was created in 1993 by Roberto Ierusalimschy, Luiz Henrique de Figueiredo, and Waldemar Celes at the Pontifical Catholic University of Rio de Janeiro, Brazil. The name "Lua" means "moon" in Portuguese.

Lua was designed to be:
- **Embeddable**: Easily integrated into applications
- **Lightweight**: Small footprint and fast execution
- **Extensible**: Can be extended with C functions
- **Simple**: Clean syntax with few concepts

## Where Lua is Used

Lua is widely used in:
- **Game Development**: World of Warcraft, Angry Birds, Roblox
- **Embedded Systems**: Internet of Things (IoT) devices
- **Web Applications**: Used in Nginx and Apache for scripting
- **Scientific Computing**: Data analysis and visualization
- **Adobe Lightroom**: Extension scripts
- **Wireshark**: Protocol analyzers

Let's start by understanding the basic syntax and structure of Lua programs.`
          },
          {
            id: "hello-world",
            title: "Hello World",
            type: "exercise",
            content: `# Your First Lua Program

Let's write our first Lua program - the classic "Hello World".

In Lua, we use the \`print\` function to output text to the console.

## Task

Write a Lua program that prints "Hello, Lua World!" to the console.

## Example Code

\`\`\`lua
-- This is a comment in Lua
print("Hello, Lua World!")
\`\`\`

## Exercise

Now, modify the code to print both "Hello, Lua World!" and "I am learning Lua!" on separate lines.

Use the Run button to test your code and Submit when you're ready.`,
            initialCode: "-- Write your Lua code here\n",
            solution: `-- Write your Lua code here
print("Hello, Lua World!")
print("I am learning Lua!")`
          },
          {
            id: "variables",
            title: "Variables and Data Types",
            type: "exercise",
            content: `# Variables and Data Types in Lua

Lua is dynamically typed, meaning you don't need to declare variable types. Variables can store different types of values: nil, boolean, number, string, function, userdata, thread, and table.

## Variable Declaration

In Lua, you can declare variables like this:

\`\`\`lua
local name = "Luna"  -- String
local age = 25       -- Number
local isActive = true -- Boolean
\`\`\`

The \`local\` keyword restricts the variable's scope. Without it, variables are global.

## Task

Create the following variables:
1. A local variable named \`language\` with the value "Lua"
2. A local variable named \`version\` with the value 5.4
3. A local variable named \`isAwesome\` with the value true
4. Print all three variables with appropriate labels

## Example Output

\`\`\`
Language: Lua
Version: 5.4
Is Awesome: true
\`\`\``,
            initialCode: "-- Declare your variables here\n\n-- Print them with labels\n",
            solution: `-- Declare your variables here
local language = "Lua"
local version = 5.4
local isAwesome = true

-- Print them with labels
print("Language: " .. language)
print("Version: " .. version)
print("Is Awesome: " .. isAwesome)`
          }
        ]
      },
      {
        id: "tables",
        title: "Lua Tables",
        description: "Master Lua tables - the primary data structure in Lua programming.",
        lessons: [
          {
            id: "intro-tables",
            title: "Introduction to Tables",
            type: "reading",
            content: `# Lua Tables

Tables are the main data structure mechanism in Lua. They are associative arrays that can be indexed with not only numbers but also strings and any other value of the language except nil.

## Creating Tables

Tables in Lua are created using curly braces:

\`\`\`lua
local emptyTable = {}
local numbers = {10, 20, 30, 40, 50}
local person = {name = "Alex", age = 30, city = "San Francisco"}
\`\`\`

## Accessing Table Elements

You can access table elements using square brackets or dot notation:

\`\`\`lua
print(numbers[1])       -- Prints 10 (Lua tables are 1-indexed!)
print(person["name"])   -- Prints "Alex"
print(person.age)       -- Prints 30 (dot notation for string keys)
\`\`\`

## Tables as Arrays

Lua tables can function as arrays:

\`\`\`lua
local fruits = {"apple", "banana", "orange"}
for i = 1, #fruits do  -- #fruits gives the length of the array part
    print(fruits[i])
end
\`\`\`

## Tables as Dictionaries

They can also function as dictionaries:

\`\`\`lua
local scores = {math = 95, english = 87, science = 92}
for subject, score in pairs(scores) do
    print(subject .. ": " .. score)
end
\`\`\`

Tables are incredibly versatile and are the foundation of Lua programming.`
          },
          {
            id: "table-exercise",
            title: "Working with Tables",
            type: "exercise",
            content: `# Working with Lua Tables

Let's practice creating and manipulating tables in Lua.

## Task

1. Create a table named \`student\` with the following key-value pairs:
   - name: "Your name"
   - age: Any number
   - grades: A table containing 3 subject scores (e.g., {math = 95, science = 88, history = 75})

2. Print the student's name and age.

3. Calculate and print the average of all the grades.

## Example Output

\`\`\`
Student: John
Age: 20
Average Grade: 86
\`\`\``,
            initialCode: "-- Create your student table here\n\n-- Print name and age\n\n-- Calculate and print average grade\n",
            solution: `-- Create your student table here
local student = {
    name = "John",
    age = 20,
    grades = {math = 95, science = 88, history = 75}
}

-- Print name and age
print("Student: " .. student.name)
print("Age: " .. student.age)

-- Calculate and print average grade
local sum = 0
local count = 0
for _, grade in pairs(student.grades) do
    sum = sum + grade
    count = count + 1
end
local average = sum / count
print("Average Grade: " .. average)`
          }
        ]
      }
    ]
  },
  "game-dev-lua": {
    title: "Game Development with Lua",
    description: "Build 2D games using Lua with the LÖVE framework. Learn game loops, physics, and collision detection.",
    level: "Intermediate",
    lessonsCount: 15,
    totalExercises: 42,
    completedExercises: 0,
    modules: [
      {
        id: "love-intro",
        title: "Introduction to LÖVE",
        description: "Learn about the LÖVE game framework and set up your development environment.",
        lessons: [
          {
            id: "getting-started",
            title: "Getting Started with LÖVE",
            type: "reading",
            content: `# Introduction to LÖVE Framework

LÖVE (or Love2D) is an *awesome* framework you can use to make 2D games in Lua. It's free, open-source, and works on Windows, Mac OS X, Linux, Android, and iOS.

## What is LÖVE?

LÖVE is a framework for making 2D games in the Lua programming language. It allows you to create games with minimal overhead, providing simple and intuitive APIs for:

- Graphics rendering
- Audio playback
- Physics simulation
- Input handling
- Networking capabilities
- File system interaction

## Setting Up LÖVE

1. **Download LÖVE**: Visit [love2d.org](https://love2d.org/) and download the appropriate version for your operating system.
2. **Install LÖVE**: Follow the installation instructions for your platform.
3. **Verify Installation**: Open a terminal or command prompt and type \`love --version\`. You should see the version number displayed.

## LÖVE Project Structure

A basic LÖVE project consists of:

\`\`\`
my_game/
├── main.lua     (Entry point of your game)
├── conf.lua     (Optional: Configuration settings)
└── assets/      (Optional: Folder for images, sounds, etc.)
    ├── images/
    └── sounds/
\`\`\`

The \`main.lua\` file is where your game's code starts executing. At minimum, it should contain the \`love.draw\` function to display something on screen.`
          },
          {
            id: "first-love-app",
            title: "Your First LÖVE Application",
            type: "exercise",
            content: `# Creating Your First LÖVE Application

Let's create a simple LÖVE application that displays text on the screen.

## The main.lua File

Every LÖVE application must have a \`main.lua\` file. This is where your game's code begins execution. LÖVE automatically looks for callback functions like \`love.load()\`, \`love.update(dt)\`, and \`love.draw()\`.

- \`love.load()\`: Called once at the start of the game
- \`love.update(dt)\`: Called every frame with delta time
- \`love.draw()\`: Called after update for rendering

## Task

Write code for a simple LÖVE application that:
1. Sets a background color
2. Displays the text "Hello, LÖVE!" in the center of the screen
3. Shows a small moving circle

## Example Code

Note: In this playground, we're simulating the LÖVE API. In a real LÖVE application, you would run this with the LÖVE executable.

\`\`\`lua
function love.load()
    -- Initialize variables
end

function love.update(dt)
    -- Update game state
end

function love.draw()
    -- Draw to the screen
end
\`\`\``,
            initialCode: `-- Write your LÖVE application code here
function love.load()
    -- Initialize your game
end

function love.update(dt)
    -- Update your game state
end

function love.draw()
    -- Draw your game
end`,
            solution: `-- Write your LÖVE application code here
function love.load()
    -- Initialize your game
    circleX = 100
    circleY = 100
    speed = 100
end

function love.update(dt)
    -- Update your game state
    circleX = circleX + speed * dt
    
    -- Wrap around when circle goes off-screen
    if circleX > 800 then
        circleX = 0
    end
end

function love.draw()
    -- Set background color (RGB values from 0-1)
    love.graphics.setBackgroundColor(0.2, 0.4, 0.8)
    
    -- Draw text in center of screen
    love.graphics.setColor(1, 1, 1)
    love.graphics.printf("Hello, LÖVE!", 0, 300, 800, "center")
    
    -- Draw moving circle
    love.graphics.setColor(1, 0.8, 0)
    love.graphics.circle("fill", circleX, circleY, 20)
end`
          }
        ]
      }
    ]
  }
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = coursesData[courseId as keyof typeof coursesData];
  
  const [activeModule, setActiveModule] = useState(0);
  const [activeLesson, setActiveLesson] = useState(0);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [currentLessonProgress, setCurrentLessonProgress] = useState(0);
  
  // If course doesn't exist, show not found message
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12 bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-lua-darkPurple mb-4">Course Not Found</h1>
            <p className="text-gray-600 mb-6">The course you are looking for does not exist or has been removed.</p>
            <Link to="/courses">
              <Button className="bg-lua-purple hover:bg-lua-darkPurple text-white">
                Back to Courses
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const activeModuleData = course.modules[activeModule];
  const activeLessonData = activeModuleData?.lessons[activeLesson];
  
  const handleRunCode = () => {
    setOutput("Running code...\n\n");
    
    setTimeout(() => {
      // Simulated execution - in a real app, this would execute the Lua code
      let simulatedOutput = "-- Output: --\n";
      
      if (code.includes("print(")) {
        const printMatches = code.match(/print\(["'](.*)["']\)/g);
        if (printMatches) {
          printMatches.forEach(match => {
            const content = match.match(/print\(["'](.*)["']\)/);
            if (content && content[1]) {
              simulatedOutput += content[1] + "\n";
            }
          });
        }
      }
      
      if (code.includes("Hello, Lua World!")) {
        simulatedOutput += "Hello, Lua World!\n";
      }
      
      setOutput(simulatedOutput);
      
      // Update progress if not already 100%
      if (currentLessonProgress < 50) {
        setCurrentLessonProgress(50);
      }
    }, 500);
  };
  
  const handleSubmitCode = () => {
    // In a real app, this would validate the code against the expected solution
    setOutput("Evaluating submission...\n\n");
    
    setTimeout(() => {
      // Simulate code evaluation
      const isCorrect = code.includes(activeLessonData.solution?.substring(0, 20) || "");
      
      if (isCorrect) {
        setOutput(prev => prev + "✓ Great job! Your solution is correct.\n");
        setCurrentLessonProgress(100);
        toast({
          title: "Exercise Completed!",
          description: "You've successfully completed this exercise.",
          variant: "success",
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
  
  // Initialize code when lesson changes
  React.useEffect(() => {
    if (activeLessonData && activeLessonData.type === "exercise") {
      setCode(activeLessonData.initialCode || "");
      setOutput("");
      setCurrentLessonProgress(0);
    }
  }, [activeLesson, activeModule, activeLessonData]);
  
  const nextLesson = () => {
    if (activeLesson < activeModuleData.lessons.length - 1) {
      setActiveLesson(activeLesson + 1);
    } else if (activeModule < course.modules.length - 1) {
      setActiveModule(activeModule + 1);
      setActiveLesson(0);
    }
  };
  
  const prevLesson = () => {
    if (activeLesson > 0) {
      setActiveLesson(activeLesson - 1);
    } else if (activeModule > 0) {
      setActiveModule(activeModule - 1);
      setActiveLesson(course.modules[activeModule - 1].lessons.length - 1);
    }
  };
  
  // Calculate overall course progress
  const courseProgress = Math.round((course.completedExercises / course.totalExercises) * 100) || 0;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Course header with progress */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-bold text-lua-darkPurple">{course.title}</h1>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    course.level === "Beginner" ? "bg-green-100 text-green-800" : 
                    course.level === "Intermediate" ? "bg-blue-100 text-blue-800" : 
                    "bg-purple-100 text-purple-800"
                  }`}>
                    {course.level}
                  </span>
                </div>
                <p className="text-gray-600 mt-1">{course.description}</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span>Course Progress:</span>
                  <span className="font-medium">{courseProgress}%</span>
                </div>
                <Progress value={courseProgress} className="w-48 h-2" />
              </div>
            </div>
          </div>
          
          {/* Course content layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar with modules and lessons */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <h2 className="font-semibold text-lua-darkPurple">Course Content</h2>
                  <p className="text-sm text-gray-500">{course.lessonsCount} lessons</p>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {course.modules.map((module, moduleIndex) => (
                    <div key={module.id}>
                      <div 
                        className={`p-4 font-medium cursor-pointer hover:bg-gray-50 ${
                          moduleIndex === activeModule ? "bg-gray-50" : ""
                        }`}
                        onClick={() => {
                          setActiveModule(moduleIndex);
                          setActiveLesson(0);
                        }}
                      >
                        {moduleIndex + 1}. {module.title}
                      </div>
                      
                      {moduleIndex === activeModule && (
                        <div className="bg-gray-50 pl-6 pr-4 py-2 border-t border-gray-100">
                          <ul className="space-y-1">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <li key={lesson.id}>
                                <div 
                                  className={`py-2 px-3 text-sm rounded-md cursor-pointer flex items-center ${
                                    lessonIndex === activeLesson 
                                      ? "bg-lua-purple text-white" 
                                      : "hover:bg-gray-100"
                                  }`}
                                  onClick={() => setActiveLesson(lessonIndex)}
                                >
                                  {lessonIndex + 1}. {lesson.title}
                                  {lesson.type === "exercise" && (
                                    <span className={`ml-auto text-xs px-1.5 py-0.5 rounded ${
                                      lessonIndex === activeLesson 
                                        ? "bg-white bg-opacity-20" 
                                        : "bg-blue-100 text-blue-700"
                                    }`}>
                                      Exercise
                                    </span>
                                  )}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Main content area */}
            <div className="lg:col-span-3">
              <Card className="shadow-sm">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-lua-darkPurple">
                    {activeModuleData.title}: {activeLessonData.title}
                  </h2>
                  
                  {activeLessonData.type === "exercise" && (
                    <div className="flex items-center gap-2 mt-2">
                      <Progress value={currentLessonProgress} className="flex-grow h-2" />
                      <span className="text-sm text-gray-500">{currentLessonProgress}%</span>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-0">
                  <Tabs defaultValue="lesson" className="w-full">
                    <TabsList className="w-full justify-start rounded-none border-b">
                      <TabsTrigger value="lesson">Lesson</TabsTrigger>
                      {activeLessonData.type === "exercise" && (
                        <TabsTrigger value="exercise">Exercise</TabsTrigger>
                      )}
                    </TabsList>
                    
                    <TabsContent value="lesson" className="p-6">
                      <div className="prose max-w-none">
                        {activeLessonData.content}
                      </div>
                    </TabsContent>
                    
                    {activeLessonData.type === "exercise" && (
                      <TabsContent value="exercise" className="p-0">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                          {/* Code editor */}
                          <div className="border-r border-gray-200">
                            <div className="border-b border-gray-200 bg-gray-100 px-4 py-2 flex justify-between items-center">
                              <div className="flex space-x-1">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              </div>
                              <span className="text-sm text-gray-500">main.lua</span>
                              <div></div>
                            </div>
                            <Textarea
                              value={code}
                              onChange={(e) => setCode(e.target.value)}
                              className="w-full font-mono text-sm p-4 h-[400px] rounded-none border-0 focus:ring-0"
                              spellCheck="false"
                            />
                            <div className="border-t border-gray-200 bg-gray-50 p-4 flex justify-between">
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
                          
                          {/* Output console */}
                          <div className="bg-gray-900 text-white">
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
                            <pre className="p-4 h-[451px] overflow-y-auto font-mono text-sm">
                              {output || "// Run your code to see output here"}
                            </pre>
                          </div>
                        </div>
                      </TabsContent>
                    )}
                  </Tabs>
                </CardContent>
                
                <div className="p-6 border-t border-gray-100 flex justify-between">
                  <Button 
                    variant="outline"
                    onClick={prevLesson}
                    disabled={activeModule === 0 && activeLesson === 0}
                  >
                    Previous Lesson
                  </Button>
                  <Button 
                    onClick={nextLesson}
                    className="bg-lua-purple hover:bg-lua-darkPurple text-white"
                    disabled={activeModule === course.modules.length - 1 && 
                             activeLesson === course.modules[course.modules.length - 1].lessons.length - 1}
                  >
                    Next Lesson
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
