
import { Lesson } from "@/types/course";

interface LessonContentProps {
  lesson: Lesson;
}

const LessonContent = ({ lesson }: LessonContentProps) => {
  const formattedContent = lesson.content
    .replace(/# (.*)/g, '<h1 class="text-2xl font-bold text-lua-darkPurple mt-6 mb-4">$1</h1>')
    .replace(/## (.*)/g, '<h2 class="text-xl font-bold text-lua-purple mt-5 mb-3">$1</h2>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/```lua([\s\S]*?)```/g, '<pre class="bg-gray-800 text-white p-4 rounded-md my-4 overflow-x-auto"><code>$1</code></pre>')
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 p-4 rounded-md my-4 overflow-x-auto"><code>$1</code></pre>')
    .replace(/\`(.*?)\`/g, '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
    .replace(/\n\n/g, '<br/><br/>');

  return (
    <div className="prose prose-slate max-w-none">
      <div 
        className="content" 
        dangerouslySetInnerHTML={{ __html: formattedContent }} 
      />
    </div>
  );
};

export default LessonContent;
