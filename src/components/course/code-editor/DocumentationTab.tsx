
const DocumentationTab = () => {
  // Create an array of documentation sections for better organization
  const docSections = [
    {
      title: "Variables",
      code: "local name = \"value\""
    },
    {
      title: "Functions",
      code: "function name(param1, param2)\n  -- body\n  return value\nend"
    },
    {
      title: "Conditionals",
      code: "if condition then\n  -- body\nelseif condition then\n  -- body\nelse\n  -- body\nend"
    },
    {
      title: "Loops",
      code: "-- For loop\nfor i = 1, 10 do\n  -- body\nend\n\n-- While loop\nwhile condition do\n  -- body\nend"
    },
    {
      title: "Tables",
      code: "local tbl = {\n  key = \"value\",\n  [\"key with spaces\"] = true,\n  10,\n  20,\n  30\n}"
    }
  ];

  return (
    <div className="p-4 h-full overflow-y-auto">
      <h3 className="font-medium text-gray-800 mb-4">Lua Quick Reference</h3>
      
      <div className="space-y-4">
        {docSections.map((section, index) => (
          <div key={index}>
            <h4 className="font-medium text-lua-purple">{section.title}</h4>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">{section.code}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentationTab;
