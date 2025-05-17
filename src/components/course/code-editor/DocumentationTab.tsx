
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface DocumentationTabProps {
  // Add any props if needed
}

const DocumentationTab: React.FC<DocumentationTabProps> = () => {
  // Documentation sections
  const documentationSections = [
    {
      id: "basics",
      title: "Lua Basics",
      content: (
        <>
          <p className="mb-4">Lua is a lightweight, high-level, multi-paradigm programming language designed primarily for embedded use in applications.</p>
          <p className="mb-4">Key features of Lua include:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Simple syntax</li>
            <li>Efficient performance</li>
            <li>Powerful data description constructs</li>
            <li>Automatic memory management</li>
            <li>Dynamic typing</li>
          </ul>
        </>
      )
    },
    {
      id: "variables",
      title: "Variables and Types",
      content: (
        <>
          <p className="mb-4">Lua is dynamically typed. Basic types include:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><code>nil</code>: represents absence of value</li>
            <li><code>boolean</code>: true or false</li>
            <li><code>number</code>: represents real (double-precision) numbers</li>
            <li><code>string</code>: immutable sequences of bytes</li>
            <li><code>function</code>: first-class values in Lua</li>
            <li><code>table</code>: the main data structure in Lua</li>
          </ul>
          <p className="mb-2">Example of variable declaration:</p>
          <pre className="bg-gray-100 rounded p-2 mb-4">
            <code>
              local name = "Lua"<br />
              local version = 5.4<br />
              local isAwesome = true
            </code>
          </pre>
        </>
      )
    },
    {
      id: "functions",
      title: "Functions",
      content: (
        <>
          <p className="mb-4">Functions in Lua are first-class values with lexical scoping.</p>
          <p className="mb-2">Basic syntax:</p>
          <pre className="bg-gray-100 rounded p-2 mb-4">
            <code>
              function add(a, b)<br />
              &nbsp;&nbsp;return a + b<br />
              end
            </code>
          </pre>
          <p className="mb-2">Anonymous functions:</p>
          <pre className="bg-gray-100 rounded p-2 mb-4">
            <code>
              local multiply = function(a, b)<br />
              &nbsp;&nbsp;return a * b<br />
              end
            </code>
          </pre>
        </>
      )
    }
  ];

  return (
    <ScrollArea className="h-[calc(100vh-14rem)] pr-4">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-6">Lua Documentation</h2>
        
        {documentationSections.map((section) => (
          <div key={section.id} className="mb-8">
            <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
            {section.content}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default DocumentationTab;
