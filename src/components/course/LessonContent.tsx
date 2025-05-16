
import { useState, useEffect } from "react";
import { Lesson } from "@/types/course";
import { Card } from "@/components/ui/card";
import { Book, CheckCircle2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LessonContentProps {
  lesson: Lesson;
  onComplete?: () => void;
  isCompleted?: boolean;
}

const LessonContent = ({ lesson, onComplete, isCompleted = false }: LessonContentProps) => {
  const [estimatedReadTime, setEstimatedReadTime] = useState<number>(0);
  
  useEffect(() => {
    // Calculate estimated read time based on content length
    if (lesson.content) {
      const wordCount = lesson.content.trim().split(/\s+/).length;
      const readingTimeMinutes = Math.ceil(wordCount / 200); // Average reading speed
      setEstimatedReadTime(lesson.estimatedTime || readingTimeMinutes);
    }
  }, [lesson]);
  
  // Parse and format the markdown-style content with improved formatting
  const formattedContent = lesson.content
    // Headers
    .replace(/# (.*)/g, '<h1 class="text-2xl font-bold text-lua-darkPurple mt-6 mb-4">$1</h1>')
    .replace(/## (.*)/g, '<h2 class="text-xl font-bold text-lua-purple mt-5 mb-3">$1</h2>')
    .replace(/### (.*)/g, '<h3 class="text-lg font-bold text-lua-purple mt-4 mb-2">$1</h3>')
    // Text formatting
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    // Code blocks
    .replace(/```lua([\s\S]*?)```/g, '<pre class="bg-gray-800 text-white p-4 rounded-md my-4 overflow-x-auto"><code>$1</code></pre>')
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 p-4 rounded-md my-4 overflow-x-auto"><code>$1</code></pre>')
    .replace(/\`(.*?)\`/g, '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
    // Lists
    .replace(/^\s*\d+\.\s+(.*?)(?=\n|$)/gm, '<li class="ml-5 list-decimal my-1">$1</li>')
    .replace(/^\s*\*\s+(.*?)(?=\n|$)/gm, '<li class="ml-5 list-disc my-1">$1</li>')
    // Notes and tips
    .replace(/>\s*NOTE:\s*(.*?)(?=\n|$)/gi, 
      '<div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4"><strong class="text-blue-700">Note:</strong> <span class="text-blue-600">$1</span></div>')
    .replace(/>\s*TIP:\s*(.*?)(?=\n|$)/gi, 
      '<div class="bg-green-50 border-l-4 border-green-500 p-4 my-4"><strong class="text-green-700">Tip:</strong> <span class="text-green-600">$1</span></div>')
    .replace(/>\s*WARNING:\s*(.*?)(?=\n|$)/gi, 
      '<div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4"><strong class="text-yellow-700">Warning:</strong> <span class="text-yellow-600">$1</span></div>')
    // Paragraphs
    .replace(/\n\n/g, '<br/><br/>');

  // Render video content if available
  const renderVideoContent = () => {
    if (lesson.videoUrl) {
      return (
        <div className="aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden">
          <iframe 
            src={lesson.videoUrl} 
            className="w-full h-full" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      );
    }
    return null;
  };
  
  // Render additional resources if available
  const renderResources = () => {
    if (lesson.resources && lesson.resources.length > 0) {
      return (
        <Card className="p-4 mt-6">
          <h3 className="font-medium text-gray-700 mb-3">Additional Resources</h3>
          <ul className="space-y-2">
            {lesson.resources.map((resource, index) => (
              <li key={index} className="flex items-center text-sm">
                {resource.type === "article" && <Book className="h-4 w-4 mr-2 text-blue-600" />}
                {resource.type === "video" && <Play className="h-4 w-4 mr-2 text-red-600" />}
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        </Card>
      );
    }
    return null;
  };
  
  return (
    <div className="prose prose-slate max-w-none">
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="flex items-center">
            <span className={`text-xs px-2 py-1 rounded-full mr-2 ${
              lesson.type === "reading" ? "bg-blue-100 text-blue-700" :
              lesson.type === "exercise" ? "bg-green-100 text-green-700" :
              lesson.type === "quiz" ? "bg-yellow-100 text-yellow-700" :
              "bg-purple-100 text-purple-700"
            }`}>
              {lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1)}
            </span>
            {isCompleted && (
              <span className="flex items-center text-xs text-green-700">
                <CheckCircle2 className="h-3 w-3 mr-1" /> Completed
              </span>
            )}
          </div>
          
          {estimatedReadTime > 0 && (
            <p className="text-sm text-gray-500 mt-1">
              Estimated time: {estimatedReadTime} min
            </p>
          )}
        </div>
        
        {!isCompleted && onComplete && lesson.type === "reading" && (
          <Button size="sm" onClick={onComplete} className="bg-lua-purple hover:bg-lua-darkPurple text-white">
            Mark as Complete
          </Button>
        )}
      </div>
      
      {renderVideoContent()}
      
      <div 
        className="content" 
        dangerouslySetInnerHTML={{ __html: formattedContent }} 
      />
      
      {renderResources()}
    </div>
  );
};

export default LessonContent;
