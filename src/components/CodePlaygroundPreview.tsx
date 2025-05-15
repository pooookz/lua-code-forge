
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CodePlaygroundPreview = () => {
  return (
    <section className="py-16 bg-lua-darkPurple text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold">Interactive Lua Playground</h2>
            <p className="text-lg text-gray-300">
              Practice your Lua skills in our fully interactive code playground with real-time execution and feedback.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-lua-blue mr-2"></div>
                <span>Write and execute Lua code instantly</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-lua-blue mr-2"></div>
                <span>Save and share your code snippets</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-lua-blue mr-2"></div>
                <span>Access built-in libraries and examples</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-lua-blue mr-2"></div>
                <span>See visual output for graphical programs</span>
              </li>
            </ul>
            <Link to="/playground">
              <Button className="bg-lua-blue hover:bg-blue-600 text-white mt-4">
                Try the Playground
              </Button>
            </Link>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-gray-900 rounded-lg shadow-xl p-4 border border-gray-700 max-w-lg mx-auto">
              <div className="flex items-center border-b border-gray-700 pb-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="mx-auto text-sm text-gray-400">playground.lua</div>
              </div>
              <pre className="text-white p-4 overflow-x-auto">
                <code className="text-sm font-mono">
{`-- Interactive playground
local colors = {"red", "green", "blue", "purple"}

-- Function to print with color
function printWithColor(text, colorName)
  print(colorName .. ": " .. text)
end

-- Loop through colors
for i, color in ipairs(colors) do
  printWithColor("This is message " .. i, color)
end

-- Output:
-- red: This is message 1
-- green: This is message 2
-- blue: This is message 3
-- purple: This is message 4`}
                </code>
              </pre>
              <div className="border-t border-gray-700 mt-4 pt-4">
                <div className="bg-black rounded p-2 text-green-400 font-mono text-sm">
                  red: This is message 1<br />
                  green: This is message 2<br />
                  blue: This is message 3<br />
                  purple: This is message 4
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodePlaygroundPreview;
