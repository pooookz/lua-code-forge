
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-6">Blog</h1>
          <p className="text-lg text-gray-600 mb-12">
            Stay updated with the latest Lua programming tips, tutorials, and news.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="border rounded-lg overflow-hidden shadow-sm">
                <div className="h-48 bg-lua-purple/10 code-pattern flex items-center justify-center">
                  <div className="text-lua-purple text-4xl font-mono">{post.emoji}</div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="outline" className="w-full">Read More</Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button>View All Articles</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Lua Programming",
    excerpt: "Learn the basics of Lua programming language and set up your development environment.",
    date: "May 10, 2025",
    emoji: "🚀"
  },
  {
    id: 2,
    title: "Understanding Lua Tables",
    excerpt: "Dive deep into Lua tables, the most versatile and powerful data structure in Lua.",
    date: "May 5, 2025",
    emoji: "📊"
  },
  {
    id: 3,
    title: "Lua for Game Development",
    excerpt: "Discover how Lua is used in game development and why it's a popular choice for scripting.",
    date: "April 28, 2025",
    emoji: "🎮"
  },
  {
    id: 4,
    title: "Advanced Lua Patterns",
    excerpt: "Master Lua's pattern matching capabilities for effective text processing.",
    date: "April 22, 2025",
    emoji: "🔍"
  },
  {
    id: 5,
    title: "Optimizing Lua Performance",
    excerpt: "Learn techniques to improve the performance of your Lua code in resource-constrained environments.",
    date: "April 15, 2025",
    emoji: "⚡"
  },
  {
    id: 6,
    title: "Lua and C Integration",
    excerpt: "Explore how to integrate Lua with C/C++ applications for extensibility.",
    date: "April 8, 2025",
    emoji: "🧩"
  }
];

export default Blog;
