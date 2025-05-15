
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50 code-pattern relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lua-darkPurple">
              Learn <span className="text-lua-purple">Lua</span> Programming
              <br />
              <span className="text-lua-blue">By Building Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Master Lua programming through interactive courses, coding challenges, and real-world projects.
              No prior experience needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link to="/courses">
                <Button className="text-md h-12 px-8 bg-lua-purple hover:bg-lua-darkPurple text-white">
                  Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/playground">
                <Button variant="outline" className="text-md h-12 px-8 border-lua-purple text-lua-purple hover:bg-lua-purple hover:text-white">
                  Try Playground
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="bg-white rounded-lg shadow-xl p-4 border border-gray-200">
                <div className="flex items-center border-b border-gray-200 pb-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="mx-auto text-sm text-gray-500">lua_playground.lua</div>
                </div>
                <pre className="bg-lua-darkPurple text-white p-4 rounded mt-2 overflow-x-auto">
                  <code className="text-sm">
{`-- Welcome to LuaLearn!
print("Hello, Lua World!")

-- Define a function
function greet(name)
  return "Welcome to LuaLearn, " .. name
end

-- Call the function
message = greet("Developer")
print(message)

-- Let's solve a challenge
function fibonacci(n)
  if n <= 1 then
    return n
  else
    return fibonacci(n-1) + fibonacci(n-2)
  end
end

-- First 5 Fibonacci numbers
for i=0,5 do
  print(fibonacci(i))
end`}
                  </code>
                </pre>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-lua-blue rounded-full opacity-20 animate-pulse-light"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-lua-purple rounded-full opacity-20 animate-pulse-light"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
