
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-lua-darkPurple text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Community</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Connect with fellow Lua enthusiasts, share your projects, get help, and collaborate on exciting new ideas.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button className="bg-lua-blue hover:bg-blue-600">Join Discord</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-lua-darkPurple">
                Browse Forum
              </Button>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="announcements" className="w-full">
            <TabsList className="mb-8 justify-start">
              <TabsTrigger value="announcements">Announcements</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="showcases">Project Showcases</TabsTrigger>
              <TabsTrigger value="contributors">Top Contributors</TabsTrigger>
            </TabsList>
            
            <TabsContent value="announcements" className="space-y-6">
              <h2 className="text-2xl font-bold">Latest Announcements</h2>
              
              {announcements.map((announcement) => (
                <Card key={announcement.id} className="mb-4">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{announcement.title}</h3>
                        <p className="text-sm text-gray-500 mb-4">{announcement.date}</p>
                        <p className="text-gray-700">{announcement.content}</p>
                      </div>
                      {announcement.badge && (
                        <span className="bg-lua-purple/10 text-lua-purple text-sm px-3 py-1 rounded-full">
                          {announcement.badge}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="events" className="space-y-6">
              <h2 className="text-2xl font-bold">Upcoming Events</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event) => (
                  <Card key={event.id} className="overflow-hidden">
                    <div className="h-40 bg-gray-200 code-pattern flex items-center justify-center">
                      <div className="text-4xl">{event.emoji}</div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                      <p className="text-lua-purple mb-4">{event.date} • {event.time}</p>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="flex gap-2">
                        <Button size="sm">Register</Button>
                        <Button size="sm" variant="outline">Add to Calendar</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="showcases" className="space-y-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Project Showcases</h2>
                <Button variant="outline">Submit Your Project</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <div className="h-48 bg-gray-900 code-pattern flex items-end">
                      <div className="bg-black/70 w-full p-4">
                        <h3 className="text-white font-bold">{project.title}</h3>
                        <p className="text-gray-300 text-sm">by {project.author}</p>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="contributors" className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Top Contributors</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {contributors.map((contributor) => (
                  <div key={contributor.id} className="text-center">
                    <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                      <span className="text-4xl">{contributor.emoji}</span>
                    </div>
                    <h3 className="font-bold mt-4 mb-1">{contributor.name}</h3>
                    <p className="text-sm text-gray-500">{contributor.role}</p>
                    <p className="mt-2 text-sm">{contributor.contributions} contributions</p>
                  </div>
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

// Mock data
const announcements = [
  {
    id: 1,
    title: "New Course: Lua for Game Development",
    date: "May 14, 2025",
    content: "We're excited to announce our newest course: Lua for Game Development! Learn how to create games using Lua with popular engines like LÖVE and Defold. The course includes 10 modules and 3 complete game projects.",
    badge: "New Course"
  },
  {
    id: 2,
    title: "Community Challenge: Build a CLI Tool",
    date: "May 10, 2025",
    content: "Join our monthly community challenge! This month, we're building command-line interface tools with Lua. Submit your project by May 30th for a chance to win premium subscription credits and showcase your work on our homepage."
  },
  {
    id: 3,
    title: "Platform Maintenance: May 20",
    date: "May 8, 2025",
    content: "We'll be performing scheduled maintenance on May 20th from 2 AM to 4 AM UTC. During this time, the platform may be temporarily unavailable. We apologize for any inconvenience this may cause.",
    badge: "Maintenance"
  }
];

const events = [
  {
    id: 1,
    title: "Intro to Lua Workshop",
    date: "May 22, 2025",
    time: "1:00 PM UTC",
    description: "A beginner-friendly workshop covering Lua basics, environment setup, and your first Lua program.",
    emoji: "🚀"
  },
  {
    id: 2,
    title: "AMA with Roberto Ierusalimschy",
    date: "June 5, 2025",
    time: "5:00 PM UTC",
    description: "Join us for a rare opportunity to ask questions to the creator of the Lua programming language!",
    emoji: "🎙️"
  },
  {
    id: 3,
    title: "Code Review Session: Game Scripts",
    date: "June 12, 2025",
    time: "3:00 PM UTC",
    description: "Submit your game scripts for live review and feedback from experienced game developers.",
    emoji: "🎮"
  },
  {
    id: 4,
    title: "Lua Performance Optimization",
    date: "June 20, 2025",
    time: "2:00 PM UTC",
    description: "Learn advanced techniques to make your Lua code faster and more efficient.",
    emoji: "⚡"
  }
];

const projects = [
  {
    id: 1,
    title: "LuaNote",
    author: "Sarah Chen",
    description: "A lightweight note-taking app built with Lua and the LÖVE framework",
    tags: ["LÖVE", "UI", "Productivity"]
  },
  {
    id: 2,
    title: "Dungeon Crawler",
    author: "Michael Rodriguez",
    description: "A procedurally generated dungeon crawler game with pixel art graphics",
    tags: ["Game", "Procedural Generation", "Defold"]
  },
  {
    id: 3,
    title: "Lua Package Manager",
    author: "David Kim",
    description: "An alternative package manager for Lua modules with improved dependency resolution",
    tags: ["CLI", "Tools", "Modules"]
  },
  {
    id: 4,
    title: "Weather Dashboard",
    author: "Emma Wilson",
    description: "A weather dashboard with beautiful visualizations powered by a Lua backend",
    tags: ["API", "Visualization", "Web"]
  },
  {
    id: 5,
    title: "Embedded Lua for IoT",
    author: "Carlos Mendez",
    description: "Implementation of Lua for resource-constrained IoT devices",
    tags: ["IoT", "Embedded", "C Integration"]
  },
  {
    id: 6,
    title: "Pixel Art Editor",
    author: "Aisha Johnson",
    description: "A simple pixel art editor created with Lua and LÖVE",
    tags: ["Graphics", "LÖVE", "Creative"]
  }
];

const contributors = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Course Creator",
    contributions: 48,
    emoji: "👨‍🏫"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Documentation",
    contributions: 36,
    emoji: "📝"
  },
  {
    id: 3,
    name: "Daniel Lee",
    role: "Challenge Creator",
    contributions: 29,
    emoji: "🧩"
  },
  {
    id: 4,
    name: "Maria Garcia",
    role: "Community Support",
    contributions: 25,
    emoji: "🤝"
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Video Tutorials",
    contributions: 22,
    emoji: "🎥"
  },
  {
    id: 6,
    name: "Li Wei",
    role: "Code Reviews",
    contributions: 20,
    emoji: "👨‍💻"
  },
  {
    id: 7,
    name: "Sophie Martin",
    role: "Game Examples",
    contributions: 18,
    emoji: "🎮"
  },
  {
    id: 8,
    name: "Omar Hassan",
    role: "Translations",
    contributions: 15,
    emoji: "🌍"
  }
];

export default Community;
