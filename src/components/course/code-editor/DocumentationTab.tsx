
const DocumentationTab = () => {
  return (
    <div className="p-4 h-full overflow-y-auto">
      <h3 className="font-medium text-gray-800 mb-4">Lua Quick Reference</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-lua-purple">Variables</h4>
          <pre className="bg-gray-100 p-2 rounded text-sm mt-1">local name = "value"</pre>
        </div>
        
        <div>
          <h4 className="font-medium text-lua-purple">Functions</h4>
          <pre className="bg-gray-100 p-2 rounded text-sm mt-1">function name(param1, param2)
  -- body
  return value
end</pre>
        </div>
        
        <div>
          <h4 className="font-medium text-lua-purple">Conditionals</h4>
          <pre className="bg-gray-100 p-2 rounded text-sm mt-1">if condition then
  -- body
elseif condition then
  -- body
else
  -- body
end</pre>
        </div>
        
        <div>
          <h4 className="font-medium text-lua-purple">Loops</h4>
          <pre className="bg-gray-100 p-2 rounded text-sm mt-1">-- For loop
for i = 1, 10 do
  -- body
end

-- While loop
while condition do
  -- body
end</pre>
        </div>
        
        <div>
          <h4 className="font-medium text-lua-purple">Tables</h4>
          <pre className="bg-gray-100 p-2 rounded text-sm mt-1">local tbl = {
  key = "value",
  ["key with spaces"] = true,
  10,
  20,
  30
}</pre>
        </div>
      </div>
    </div>
  );
};

export default DocumentationTab;
