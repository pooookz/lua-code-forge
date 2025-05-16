
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-lua-darkPurple text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-center">Lua Projects</h1>
            <p className="text-xl max-w-3xl mx-auto text-center mb-8">
              Apply your Lua skills with these hands-on projects, ranging from beginner exercises to advanced applications
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="mb-8 justify-center">
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="beginner">Beginner</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
            
            <TabsContent value="featured">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-lg overflow-hidden border shadow-sm h-full">
                  <div className="h-64 bg-lua-purple/10 code-pattern flex items-center justify-center">
                    <div className="text-6xl">🎮</div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">Beginner</Badge>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">Game Dev</Badge>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-100">LÖVE Framework</Badge>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Space Shooter Game</h2>
                    <p className="text-gray-600 mb-6">
                      Create a classic space shooter game with the LÖVE framework. Learn game loops, sprite management, collision detection, and basic game physics. Perfect for beginners to game development with Lua.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="flex -space-x-2">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">👤</div>
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">👤</div>
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">👤</div>
                        </div>
                        <span className="ml-2 text-sm text-gray-500">493 completed</span>
                      </div>
                      <Button>Start Project</Button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden border shadow-sm h-full">
                  <div className="h-64 bg-lua-purple/10 code-pattern flex items-center justify-center">
                    <div className="text-6xl">📝</div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-100">Intermediate</Badge>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">Utility</Badge>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-100">CLI</Badge>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Task Manager CLI</h2>
                    <p className="text-gray-600 mb-6">
                      Build a command-line task manager application that allows users to create, update, and track tasks. Learn file I/O, data serialization, command parsing, and creating a user-friendly CLI interface.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="flex -space-x-2">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">👤</div>
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">👤</div>
                        </div>
                        <span className="ml-2 text-sm text-gray-500">278 completed</span>
                      </div>
                      <Button>Start Project</Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="beginner">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allProjects
                  .filter(project => project.level === "Beginner")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="intermediate">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allProjects
                  .filter(project => project.level === "Intermediate")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="advanced">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allProjects
                  .filter(project => project.level === "Advanced")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <Separator className="my-16" />
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Project Showcase</h2>
            <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Check out these amazing projects built by our community members using the skills they learned from LuaLearn courses.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {showcaseProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-500 mb-4">By {project.author}</p>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <Badge key={index} variant="outline" className="bg-gray-50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                          <a href="#" className="text-sm text-lua-purple hover:underline">View Demo</a>
                          <a href="#" className="text-sm text-lua-purple hover:underline">Source Code</a>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">{project.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline">View All Showcase Projects</Button>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Share Your Project</h2>
            <p className="max-w-2xl mx-auto mb-6">
              Have you built something amazing with Lua? Share it with our community and inspire others on their learning journey.
            </p>
            <Button>Submit Your Project</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

interface Project {
  id: number;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  completions: number;
  category: string;
  image: string;
  tags: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="h-40 bg-lua-purple/10 code-pattern flex items-center justify-center">
        <div className="text-4xl">{project.image}</div>
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="mb-2 flex items-center">
          <Badge variant={
            project.level === "Beginner" ? "outline" :
            project.level === "Intermediate" ? "secondary" :
            "destructive"
          } className={
            project.level === "Beginner" ? "bg-green-50 text-green-700 hover:bg-green-100" :
            project.level === "Intermediate" ? "bg-yellow-50 text-yellow-700 hover:bg-yellow-100" :
            "bg-red-50 text-red-700 hover:bg-red-100"
          }>
            {project.level}
          </Badge>
          <span className="ml-2 text-xs text-gray-500">{project.category}</span>
        </div>
        
        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-auto">
          <span className="text-sm text-gray-500">{project.completions} completed</span>
          <Button size="sm">Start</Button>
        </div>
      </CardContent>
    </Card>
  );
};

interface ShowcaseProject {
  id: number;
  title: string;
  author: string;
  description: string;
  technologies: string[];
  date: string;
}

// Mock data for featured projects
const featuredProjects: Project[] = [
  {
    id: 3,
    title: "Calculator App",
    description: "Build a simple calculator with basic arithmetic operations using Lua and the LÖVE framework.",
    level: "Beginner",
    completions: 412,
    category: "GUI",
    image: "🧮",
    tags: ["LÖVE", "GUI", "Math"]
  },
  {
    id: 4,
    title: "Weather Data Parser",
    description: "Create a script to download and parse weather data from a public API using LuaSocket.",
    level: "Intermediate",
    completions: 187,
    category: "Data",
    image: "🌤️",
    tags: ["API", "JSON", "Data Analysis"]
  },
  {
    id: 5,
    title: "File Encryption Tool",
    description: "Build a command-line tool to encrypt and decrypt files using Lua's bit manipulation libraries.",
    level: "Advanced",
    completions: 98,
    category: "Security",
    image: "🔒",
    tags: ["Encryption", "Security", "CLI"]
  }
];

// Mock data for all projects
const allProjects: Project[] = [
  {
    id: 1,
    title: "Space Shooter Game",
    description: "Create a classic space shooter game with the LÖVE framework.",
    level: "Beginner",
    completions: 493,
    category: "Game Dev",
    image: "🎮",
    tags: ["Game", "LÖVE", "Graphics"]
  },
  {
    id: 2,
    title: "Task Manager CLI",
    description: "Build a command-line task manager application.",
    level: "Intermediate",
    completions: 278,
    category: "Utility",
    image: "📝",
    tags: ["CLI", "File I/O", "Data Storage"]
  },
  {
    id: 3,
    title: "Calculator App",
    description: "Build a simple calculator with basic arithmetic operations using Lua and the LÖVE framework.",
    level: "Beginner",
    completions: 412,
    category: "GUI",
    image: "🧮",
    tags: ["LÖVE", "GUI", "Math"]
  },
  {
    id: 4,
    title: "Weather Data Parser",
    description: "Create a script to download and parse weather data from a public API using LuaSocket.",
    level: "Intermediate",
    completions: 187,
    category: "Data",
    image: "🌤️",
    tags: ["API", "JSON", "Data Analysis"]
  },
  {
    id: 5,
    title: "File Encryption Tool",
    description: "Build a command-line tool to encrypt and decrypt files using Lua's bit manipulation libraries.",
    level: "Advanced",
    completions: 98,
    category: "Security",
    image: "🔒",
    tags: ["Encryption", "Security", "CLI"]
  },
  {
    id: 6,
    title: "To-Do List App",
    description: "Create a simple to-do list application with a GUI using the LÖVE framework.",
    level: "Beginner",
    completions: 356,
    category: "Productivity",
    image: "✅",
    tags: ["GUI", "LÖVE", "Data Storage"]
  },
  {
    id: 7,
    title: "Platformer Game",
    description: "Build a 2D platformer game with levels, enemies, and collectibles.",
    level: "Intermediate",
    completions: 201,
    category: "Game Dev",
    image: "👾",
    tags: ["Game", "LÖVE", "Physics"]
  },
  {
    id: 8,
    title: "Chat Server",
    description: "Create a simple chat server using Lua sockets for multiple clients to communicate.",
    level: "Advanced",
    completions: 87,
    category: "Networking",
    image: "💬",
    tags: ["Sockets", "Networking", "Server"]
  },
  {
    id: 9,
    title: "Markdown Parser",
    description: "Build a parser that converts Markdown text to HTML using Lua pattern matching.",
    level: "Intermediate",
    completions: 154,
    category: "Text Processing",
    image: "📄",
    tags: ["Patterns", "HTML", "Parsing"]
  },
  {
    id: 10,
    title: "Drawing App",
    description: "Create a simple drawing application with different tools and colors.",
    level: "Beginner",
    completions: 289,
    category: "Graphics",
    image: "🎨",
    tags: ["LÖVE", "GUI", "Graphics"]
  },
  {
    id: 11,
    title: "HTTP Server",
    description: "Implement a basic HTTP server in Lua that can serve static files.",
    level: "Advanced",
    completions: 76,
    category: "Web",
    image: "🌐",
    tags: ["Networking", "HTTP", "Server"]
  },
  {
    id: 12,
    title: "Data Visualization Tool",
    description: "Create a tool to visualize data sets using LÖVE's graphics capabilities.",
    level: "Intermediate",
    completions: 132,
    category: "Data",
    image: "📊",
    tags: ["LÖVE", "Graphics", "Data"]
  }
];

// Mock data for showcase projects
const showcaseProjects: ShowcaseProject[] = [
  {
    id: 1,
    title: "LuaViz: Interactive Data Visualization",
    author: "Sarah Chen",
    description: "A powerful data visualization library built entirely in Lua, allowing users to create interactive charts and graphs. Features include real-time data updates, customizable themes, and export to various formats.",
    technologies: ["Lua", "LÖVE", "LuaSocket", "JSON"],
    date: "April 2025"
  },
  {
    id: 2,
    title: "Cosmic Conquest: Space Strategy Game",
    author: "Michael Rodriguez",
    description: "A turn-based space strategy game where players build fleets, colonize planets, and engage in tactical combat. Built with the LÖVE framework and featuring custom AI opponents with multiple difficulty levels.",
    technologies: ["Lua", "LÖVE", "LuaJIT"],
    date: "March 2025"
  },
  {
    id: 3,
    title: "LuaDB: Embedded Database",
    author: "David Kim",
    description: "A lightweight, embedded database system written in pure Lua. Supports ACID transactions, indexing, and a SQL-like query language. Perfect for applications that need local data storage without external dependencies.",
    technologies: ["Lua", "LPeg", "Binary Data"],
    date: "February 2025"
  },
  {
    id: 4,
    title: "MoonSheet: Spreadsheet Application",
    author: "Emma Wilson",
    description: "A fully functional spreadsheet application built with Lua and LÖVE. Supports formulas, cell formatting, charts, and file import/export. A demonstration of GUI programming with Lua.",
    technologies: ["Lua", "LÖVE", "CSV", "XML"],
    date: "January 2025"
  }
];

export default Projects;
