
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample courses data
const allCourses = [
  {
    id: "lua-basics",
    title: "Lua Basics",
    description: "Learn the fundamentals of Lua programming, including variables, functions, loops, and tables.",
    level: "Beginner",
    lessonsCount: 12,
    progress: 0,
    category: "fundamentals"
  },
  {
    id: "game-dev-lua",
    title: "Game Development with Lua",
    description: "Build 2D games using Lua with the LÖVE framework. Learn game loops, physics, and collision detection.",
    level: "Intermediate",
    lessonsCount: 15,
    progress: 0,
    category: "gamedev"
  },
  {
    id: "lua-oop",
    title: "Object-Oriented Programming in Lua",
    description: "Master the concepts of OOP in Lua with metatables, inheritance, and class-like structures.",
    level: "Intermediate",
    lessonsCount: 10,
    progress: 0,
    category: "advanced"
  },
  {
    id: "lua-for-roblox",
    title: "Lua for Roblox",
    description: "Create interactive games on the Roblox platform using Lua scripting.",
    level: "Beginner",
    lessonsCount: 14,
    progress: 0,
    category: "gamedev"
  },
  {
    id: "data-structures-lua",
    title: "Data Structures in Lua",
    description: "Implement common data structures like stacks, queues, linked lists and trees in Lua.",
    level: "Intermediate",
    lessonsCount: 8,
    progress: 0,
    category: "advanced"
  },
  {
    id: "lua-for-automation",
    title: "Lua for Automation",
    description: "Use Lua to automate repetitive tasks, process files, and create utility scripts.",
    level: "Intermediate",
    lessonsCount: 9,
    progress: 0,
    category: "practical"
  },
  {
    id: "advanced-lua",
    title: "Advanced Lua Techniques",
    description: "Dive deep into metaprogramming, coroutines, iterators, and performance optimization in Lua.",
    level: "Advanced",
    lessonsCount: 12,
    progress: 0,
    category: "advanced"
  },
  {
    id: "lua-web-dev",
    title: "Web Development with Lua",
    description: "Build web applications using Lua with frameworks like OpenResty and Lapis.",
    level: "Intermediate",
    lessonsCount: 11,
    progress: 0,
    category: "practical"
  },
  {
    id: "lua-network",
    title: "Network Programming in Lua",
    description: "Learn how to create networked applications using Lua and its socket libraries.",
    level: "Advanced",
    lessonsCount: 9,
    progress: 0,
    category: "advanced"
  },
  {
    id: "lua-embedded-systems",
    title: "Lua for Embedded Systems",
    description: "Apply Lua in resource-constrained environments and IoT devices.",
    level: "Advanced",
    lessonsCount: 8,
    progress: 0,
    category: "practical"
  },
  {
    id: "lua-web-frameworks",
    title: "Web Frameworks with Lua",
    description: "Build web applications using Lua frameworks like Lapis and OpenResty.",
    level: "Intermediate",
    lessonsCount: 11,
    progress: 0,
    category: "practical"
  },
  {
    id: "lua-data-science",
    title: "Data Analysis with Lua",
    description: "Process and analyze data using Lua's libraries and tools.",
    level: "Intermediate",
    lessonsCount: 10,
    progress: 0,
    category: "practical"
  },
  {
    id: "lua-game-engines",
    title: "Creating Game Engines with Lua",
    description: "Build your own 2D game engine from scratch using Lua.",
    level: "Advanced",
    lessonsCount: 16,
    progress: 0,
    category: "gamedev"
  },
  {
    id: "lua-ai-ml",
    title: "AI and Machine Learning in Lua",
    description: "Implement basic machine learning algorithms and AI techniques using Lua.",
    level: "Advanced",
    lessonsCount: 13,
    progress: 0,
    category: "advanced"
  },
  {
    id: "lua-for-audio",
    title: "Audio Processing with Lua",
    description: "Create tools for sound generation, analysis and processing using Lua.",
    level: "Intermediate",
    lessonsCount: 9,
    progress: 0,
    category: "practical"
  },
  {
    id: "lua-design-patterns",
    title: "Design Patterns in Lua",
    description: "Apply software design patterns effectively in Lua programming.",
    level: "Advanced",
    lessonsCount: 12,
    progress: 0,
    category: "advanced"
  }
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  
  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === "all" || course.level.toLowerCase() === selectedLevel.toLowerCase();
    return matchesSearch && matchesLevel;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h1 className="text-4xl font-bold text-lua-darkPurple">Lua Courses</h1>
              <p className="text-lg text-gray-600 mt-2">Explore our comprehensive collection of Lua programming courses</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Button className="bg-lua-purple hover:bg-lua-darkPurple text-white">
                My Learning Dashboard
              </Button>
            </div>
          </div>
          
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/3">
              <Input 
                placeholder="Search courses..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-gray-300"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={selectedLevel === "all" ? "default" : "outline"}
                className={selectedLevel === "all" ? "bg-lua-purple" : "border-lua-purple text-lua-purple"}
                onClick={() => setSelectedLevel("all")}
              >
                All Levels
              </Button>
              <Button 
                variant={selectedLevel === "beginner" ? "default" : "outline"}
                className={selectedLevel === "beginner" ? "bg-lua-purple" : "border-lua-purple text-lua-purple"}
                onClick={() => setSelectedLevel("beginner")}
              >
                Beginner
              </Button>
              <Button 
                variant={selectedLevel === "intermediate" ? "default" : "outline"} 
                className={selectedLevel === "intermediate" ? "bg-lua-purple" : "border-lua-purple text-lua-purple"}
                onClick={() => setSelectedLevel("intermediate")}
              >
                Intermediate
              </Button>
              <Button 
                variant={selectedLevel === "advanced" ? "default" : "outline"}
                className={selectedLevel === "advanced" ? "bg-lua-purple" : "border-lua-purple text-lua-purple"} 
                onClick={() => setSelectedLevel("advanced")}
              >
                Advanced
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList>
              <TabsTrigger value="all">All Courses</TabsTrigger>
              <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
              <TabsTrigger value="gamedev">Game Development</TabsTrigger>
              <TabsTrigger value="advanced">Advanced Concepts</TabsTrigger>
              <TabsTrigger value="practical">Practical Applications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    description={course.description}
                    level={course.level as "Beginner" | "Intermediate" | "Advanced"}
                    lessonsCount={course.lessonsCount}
                    progress={course.progress}
                  />
                ))}
              </div>
              
              {filteredCourses.length === 0 && (
                <div className="text-center py-10">
                  <h3 className="text-xl font-semibold text-gray-700">No courses found</h3>
                  <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="fundamentals" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCourses
                  .filter(course => course.category === "fundamentals")
                  .map((course) => (
                    <CourseCard
                      key={course.id}
                      id={course.id}
                      title={course.title}
                      description={course.description}
                      level={course.level as "Beginner" | "Intermediate" | "Advanced"}
                      lessonsCount={course.lessonsCount}
                      progress={course.progress}
                    />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="gamedev" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCourses
                  .filter(course => course.category === "gamedev")
                  .map((course) => (
                    <CourseCard
                      key={course.id}
                      id={course.id}
                      title={course.title}
                      description={course.description}
                      level={course.level as "Beginner" | "Intermediate" | "Advanced"}
                      lessonsCount={course.lessonsCount}
                      progress={course.progress}
                    />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="advanced" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCourses
                  .filter(course => course.category === "advanced")
                  .map((course) => (
                    <CourseCard
                      key={course.id}
                      id={course.id}
                      title={course.title}
                      description={course.description}
                      level={course.level as "Beginner" | "Intermediate" | "Advanced"}
                      lessonsCount={course.lessonsCount}
                      progress={course.progress}
                    />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="practical" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCourses
                  .filter(course => course.category === "practical")
                  .map((course) => (
                    <CourseCard
                      key={course.id}
                      id={course.id}
                      title={course.title}
                      description={course.description}
                      level={course.level as "Beginner" | "Intermediate" | "Advanced"}
                      lessonsCount={course.lessonsCount}
                      progress={course.progress}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
