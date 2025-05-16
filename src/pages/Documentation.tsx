
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const Documentation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-6">Documentation</h1>
          <p className="text-lg text-gray-600 mb-12">
            Comprehensive guides and references for learning Lua programming
          </p>
          
          <Tabs defaultValue="guide" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="guide">Beginner's Guide</TabsTrigger>
              <TabsTrigger value="api">API Reference</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            
            <TabsContent value="guide" className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">Getting Started with Lua</h2>
                <div className="prose max-w-none">
                  <p>
                    Lua is a powerful, efficient, lightweight, embeddable scripting language. 
                    It supports procedural programming, object-oriented programming, functional 
                    programming, data-driven programming, and data description.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-2">Installation</h3>
                  <p>
                    To install Lua on your system, follow these platform-specific instructions:
                  </p>
                  
                  <div className="bg-gray-100 p-4 rounded-md my-4">
                    <h4 className="font-bold">Windows</h4>
                    <p>Download the Windows binaries from the official Lua website or use a package manager like Chocolatey.</p>
                    <pre className="bg-black text-white p-2 rounded mt-2">choco install lua</pre>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded-md my-4">
                    <h4 className="font-bold">macOS</h4>
                    <p>Use Homebrew to install Lua:</p>
                    <pre className="bg-black text-white p-2 rounded mt-2">brew install lua</pre>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded-md my-4">
                    <h4 className="font-bold">Linux</h4>
                    <p>Use your distribution's package manager:</p>
                    <pre className="bg-black text-white p-2 rounded mt-2">sudo apt-get install lua5.4 # For Ubuntu/Debian</pre>
                  </div>
                </div>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-2xl font-bold mb-4">Basic Syntax</h2>
                <div className="prose max-w-none">
                  <p>
                    Here's a quick overview of Lua's basic syntax to help you get started:
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-2">Variables and Data Types</h3>
                  <pre className="bg-gray-100 p-4 rounded-md my-4">
{`-- Variables
local name = "Lua"
local version = 5.4
local isAwesome = true
local nothing = nil

-- Data Types
print(type(name))      -- string
print(type(version))   -- number
print(type(isAwesome)) -- boolean
print(type(nothing))   -- nil
print(type(print))     -- function
print(type({}))        -- table`}
                  </pre>
                </div>
              </section>
            </TabsContent>
            
            <TabsContent value="api">
              <div className="bg-gray-50 border rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Lua API Reference</h2>
                <p className="mb-6">This section contains detailed information about standard Lua libraries and functions.</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold">string</h3>
                    <p className="text-gray-600 mb-2">Library for string manipulation</p>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-mono text-lua-purple">string.len(s)</h4>
                      <p>Returns the length of the string s.</p>
                      
                      <h4 className="font-mono text-lua-purple mt-4">string.sub(s, i, j)</h4>
                      <p>Returns the substring of s that starts at i and ends at j.</p>
                      
                      <h4 className="font-mono text-lua-purple mt-4">string.format(formatstring, ...)</h4>
                      <p>Returns a formatted version of its variable number of arguments following the pattern given by formatstring.</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold">table</h3>
                    <p className="text-gray-600 mb-2">Library for table manipulation</p>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-mono text-lua-purple">table.insert(table, [pos,] value)</h4>
                      <p>Inserts value at position pos in table.</p>
                      
                      <h4 className="font-mono text-lua-purple mt-4">table.remove(table [, pos])</h4>
                      <p>Removes from table the element at position pos.</p>
                      
                      <h4 className="font-mono text-lua-purple mt-4">table.sort(table [, comp])</h4>
                      <p>Sorts table elements in a given order, in-place, from table[1] to table[n].</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="examples">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Example: Hello World</h2>
                  <pre className="bg-gray-100 p-4 rounded-md">print("Hello, World!")</pre>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Example: Function Declaration</h2>
                  <pre className="bg-gray-100 p-4 rounded-md">
{`function greet(name)
  return "Hello, " .. name .. "!"
end

print(greet("Lua Learner"))`}
                  </pre>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Example: Tables (Arrays)</h2>
                  <pre className="bg-gray-100 p-4 rounded-md">
{`local fruits = {"apple", "banana", "orange"}

-- Iterate through array
for i, fruit in ipairs(fruits) do
  print(i, fruit)
end`}
                  </pre>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Example: Tables (Dictionaries)</h2>
                  <pre className="bg-gray-100 p-4 rounded-md">
{`local person = {
  name = "John",
  age = 30,
  isStudent = false
}

-- Iterate through dictionary
for key, value in pairs(person) do
  print(key, value)
end`}
                  </pre>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="resources">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">Official Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-lua-purple hover:underline">Lua Official Website</a>
                      <p className="text-sm text-gray-600">The official Lua programming language website</p>
                    </li>
                    <li>
                      <a href="#" className="text-lua-purple hover:underline">Lua 5.4 Reference Manual</a>
                      <p className="text-sm text-gray-600">The official reference manual for Lua 5.4</p>
                    </li>
                    <li>
                      <a href="#" className="text-lua-purple hover:underline">Programming in Lua (PIL)</a>
                      <p className="text-sm text-gray-600">The first edition of the book is available online</p>
                    </li>
                  </ul>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">Community Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-lua-purple hover:underline">Lua Users Wiki</a>
                      <p className="text-sm text-gray-600">Community-maintained wiki with tutorials and examples</p>
                    </li>
                    <li>
                      <a href="#" className="text-lua-purple hover:underline">Lua Forum</a>
                      <p className="text-sm text-gray-600">Forum for Lua programmers</p>
                    </li>
                    <li>
                      <a href="#" className="text-lua-purple hover:underline">Awesome Lua</a>
                      <p className="text-sm text-gray-600">A curated list of quality Lua packages and resources</p>
                    </li>
                  </ul>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">Books</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-lua-purple hover:underline">Programming in Lua, 4th Edition</a>
                      <p className="text-sm text-gray-600">The definitive book on Lua programming</p>
                    </li>
                    <li>
                      <a href="#" className="text-lua-purple hover:underline">Lua Programming Gems</a>
                      <p className="text-sm text-gray-600">A collection of articles by Lua community members</p>
                    </li>
                  </ul>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">Tools</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-lua-purple hover:underline">LuaRocks</a>
                      <p className="text-sm text-gray-600">Package manager for Lua modules</p>
                    </li>
                    <li>
                      <a href="#" className="text-lua-purple hover:underline">ZeroBrane Studio</a>
                      <p className="text-sm text-gray-600">Lightweight Lua IDE with integrated debugger</p>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
