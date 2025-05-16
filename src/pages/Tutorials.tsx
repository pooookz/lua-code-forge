
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const Tutorials = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter tutorials based on search query
  const filteredTutorials = tutorials.filter(tutorial => 
    tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    tutorial.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tutorial.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-lua-darkPurple text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Lua Programming Tutorials</h1>
              <p className="text-xl mb-8">
                Step-by-step guides to help you master Lua programming concepts and techniques
              </p>
              <div className="flex gap-2">
                <Input 
                  type="search"
                  placeholder="Search tutorials..." 
                  className="bg-white/10 border-white/20 placeholder:text-white/70 text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button className="bg-lua-blue hover:bg-blue-600 whitespace-nowrap">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8 justify-center">
              <TabsTrigger value="all">All Tutorials</TabsTrigger>
              <TabsTrigger value="beginner">Beginner</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTutorials.length > 0 ? (
                  filteredTutorials.map((tutorial) => (
                    <TutorialCard key={tutorial.id} tutorial={tutorial} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-8">
                    <p className="text-gray-500 text-lg mb-2">No tutorials match your search criteria.</p>
                    <Button variant="link" onClick={() => setSearchQuery("")}>Clear Search</Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="beginner">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTutorials
                  .filter(tutorial => tutorial.level === "Beginner")
                  .map((tutorial) => (
                    <TutorialCard key={tutorial.id} tutorial={tutorial} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="intermediate">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTutorials
                  .filter(tutorial => tutorial.level === "Intermediate")
                  .map((tutorial) => (
                    <TutorialCard key={tutorial.id} tutorial={tutorial} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="advanced">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTutorials
                  .filter(tutorial => tutorial.level === "Advanced")
                  .map((tutorial) => (
                    <TutorialCard key={tutorial.id} tutorial={tutorial} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <Separator className="my-16" />
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Learning Paths</h2>
            <p className="text-gray-600 mb-8 text-center">
              Follow these structured learning paths to build your Lua skills from the ground up.
            </p>
            
            <div className="space-y-8">
              {learningPaths.map((path) => (
                <div key={path.id} className="border rounded-lg overflow-hidden bg-white shadow-sm">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                    <p className="text-gray-600 mb-4">{path.description}</p>
                    
                    <div className="space-y-4">
                      {path.steps.map((step, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-lua-purple/10 text-lua-purple flex items-center justify-center font-bold flex-shrink-0 mr-3">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-medium">{step.title}</h4>
                            <p className="text-sm text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-50 px-6 py-4 border-t flex justify-between items-center">
                    <div>
                      <span className="text-sm text-gray-500">{path.duration}</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-gray-500">{path.difficulty}</span>
                    </div>
                    <Button>Start Learning</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Want to Contribute?</h2>
            <p className="max-w-2xl mx-auto mb-6">
              We welcome tutorial contributions from the Lua community! Share your knowledge and help others learn Lua programming.
            </p>
            <Button variant="outline">Submit a Tutorial</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

interface Tutorial {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  tags: string[];
  image: string;
}

const TutorialCard = ({ tutorial }: { tutorial: Tutorial }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="h-48 bg-lua-purple/10 code-pattern flex items-center justify-center">
        <div className="text-5xl">{tutorial.image}</div>
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="mb-2 flex items-center">
          <span className={`inline-block px-2 py-1 text-xs rounded ${
            tutorial.level === "Beginner" ? "bg-green-100 text-green-800" :
            tutorial.level === "Intermediate" ? "bg-yellow-100 text-yellow-800" :
            "bg-red-100 text-red-800"
          }`}>
            {tutorial.level}
          </span>
          <span className="ml-2 text-sm text-gray-500">{tutorial.duration}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{tutorial.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{tutorial.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tutorial.tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-500">
            By {tutorial.author} • {tutorial.date}
          </div>
          <Button variant="ghost" size="sm">Read</Button>
        </div>
      </CardContent>
    </Card>
  );
};

interface LearningPath {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  steps: Array<{
    title: string;
    description: string;
  }>;
}

// Mock data for tutorials
const tutorials: Tutorial[] = [
  {
    id: 1,
    title: "Getting Started with Lua",
    description: "Learn the basics of Lua programming language including variables, data types, and control structures.",
    author: "Alex Morgan",
    date: "May 10, 2025",
    level: "Beginner",
    duration: "15 min read",
    tags: ["fundamentals", "syntax", "variables"],
    image: "🚀"
  },
  {
    id: 2,
    title: "Working with Lua Tables",
    description: "Deep dive into Lua tables, the primary data structure in Lua used for creating arrays, dictionaries, and more.",
    author: "Sarah Chen",
    date: "May 5, 2025",
    level: "Beginner",
    duration: "20 min read",
    tags: ["tables", "data structures", "arrays"],
    image: "📊"
  },
  {
    id: 3,
    title: "Functions and Scope in Lua",
    description: "Learn how to define and use functions in Lua, including parameters, return values, and variable scope.",
    author: "Michael Rodriguez",
    date: "April 28, 2025",
    level: "Beginner",
    duration: "25 min read",
    tags: ["functions", "scope", "closures"],
    image: "🔧"
  },
  {
    id: 4,
    title: "Object-Oriented Programming in Lua",
    description: "Implement object-oriented programming concepts in Lua using tables and metatables.",
    author: "Emma Wilson",
    date: "April 22, 2025",
    level: "Intermediate",
    duration: "30 min read",
    tags: ["OOP", "metatables", "classes"],
    image: "🧩"
  },
  {
    id: 5,
    title: "Error Handling and Debugging",
    description: "Learn techniques for handling errors and debugging Lua code effectively.",
    author: "Daniel Lee",
    date: "April 15, 2025",
    level: "Intermediate",
    duration: "25 min read",
    tags: ["debugging", "error handling", "pcall"],
    image: "🐛"
  },
  {
    id: 6,
    title: "Modules and Package Management",
    description: "Learn how to structure your Lua code using modules and manage dependencies with LuaRocks.",
    author: "Priya Sharma",
    date: "April 10, 2025",
    level: "Intermediate",
    duration: "20 min read",
    tags: ["modules", "packages", "luarocks"],
    image: "📦"
  },
  {
    id: 7,
    title: "Coroutines for Concurrency",
    description: "Use Lua's coroutines to implement cooperative multitasking in your applications.",
    author: "Carlos Mendez",
    date: "April 5, 2025",
    level: "Advanced",
    duration: "35 min read",
    tags: ["coroutines", "concurrency", "async"],
    image: "⚙️"
  },
  {
    id: 8,
    title: "Metaprogramming with Lua",
    description: "Advanced techniques for metaprogramming in Lua using metatables and metamethods.",
    author: "Li Wei",
    date: "March 28, 2025",
    level: "Advanced",
    duration: "40 min read",
    tags: ["metaprogramming", "metatables", "metamethods"],
    image: "🔮"
  },
  {
    id: 9,
    title: "Performance Optimization in Lua",
    description: "Learn strategies for writing efficient Lua code and optimizing performance-critical sections.",
    author: "James Wilson",
    date: "March 20, 2025",
    level: "Advanced",
    duration: "30 min read",
    tags: ["performance", "optimization", "profiling"],
    image: "⚡"
  }
];

// Mock data for learning paths
const learningPaths: LearningPath[] = [
  {
    id: 1,
    title: "Lua Fundamentals",
    description: "Master the core concepts of Lua programming from the ground up",
    difficulty: "Beginner",
    duration: "2-3 weeks",
    steps: [
      {
        title: "Introduction to Lua",
        description: "Learn about Lua's history, features, and set up your development environment"
      },
      {
        title: "Basic Syntax and Data Types",
        description: "Understand variables, data types, operators, and expressions"
      },
      {
        title: "Control Structures",
        description: "Learn about conditional statements, loops, and flow control"
      },
      {
        title: "Functions and Scope",
        description: "Create and use functions, understand variable scope and closures"
      },
      {
        title: "Tables and Arrays",
        description: "Work with Lua's primary data structure for storing and manipulating data"
      }
    ]
  },
  {
    id: 2,
    title: "Game Development with Lua",
    description: "Learn how to create games using Lua with popular game engines",
    difficulty: "Intermediate",
    duration: "4-6 weeks",
    steps: [
      {
        title: "Introduction to Lua for Games",
        description: "Understand how Lua is used in game development and popular game engines"
      },
      {
        title: "Setting Up LÖVE Framework",
        description: "Install and configure the LÖVE framework for creating 2D games"
      },
      {
        title: "Game Loop and State Management",
        description: "Implement game loops and manage different game states"
      },
      {
        title: "Sprite Animation and Physics",
        description: "Create animated sprites and implement basic game physics"
      },
      {
        title: "Complete Game Project",
        description: "Build a complete 2D game from scratch using everything you've learned"
      }
    ]
  },
  {
    id: 3,
    title: "Advanced Lua Programming",
    description: "Take your Lua skills to the next level with advanced techniques",
    difficulty: "Advanced",
    duration: "6-8 weeks",
    steps: [
      {
        title: "Object-Oriented Programming",
        description: "Implement classes, inheritance, and polymorphism in Lua"
      },
      {
        title: "Metatables and Metamethods",
        description: "Master Lua's powerful metaprogramming capabilities"
      },
      {
        title: "Coroutines and Concurrency",
        description: "Implement cooperative multitasking with coroutines"
      },
      {
        title: "C API Integration",
        description: "Extend Lua with C modules and interface with C libraries"
      },
      {
        title: "Performance Optimization",
        description: "Profile and optimize your Lua code for maximum efficiency"
      }
    ]
  }
];

export default Tutorials;
