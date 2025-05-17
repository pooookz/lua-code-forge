
import { Button } from "@/components/ui/button";

const DiscussionTab = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Lesson Discussion</h3>
      <p className="text-gray-500">
        Join the conversation about this lesson with other students.
      </p>
      
      <div className="mt-6">
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full bg-lua-purple text-white flex items-center justify-center text-sm font-bold">
              JD
            </div>
            <div className="ml-2">
              <h4 className="font-medium">John Doe</h4>
              <p className="text-xs text-gray-500">2 days ago</p>
            </div>
          </div>
          <p className="text-gray-700">
            Great explanation of tables in Lua. I'm curious about how memory management works when dealing with large tables?
          </p>
          <div className="mt-2 text-sm text-lua-purple hover:text-lua-darkPurple cursor-pointer">
            Reply
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-4 ml-8">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">
              AI
            </div>
            <div className="ml-2">
              <h4 className="font-medium">Course Instructor</h4>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
          </div>
          <p className="text-gray-700">
            Great question! Lua uses garbage collection to automatically manage memory. When tables are no longer referenced, they become eligible for garbage collection. For large tables, you can use the table.clear() function to remove all elements while keeping the allocated memory.
          </p>
        </div>
        
        <div className="mt-6">
          <h4 className="font-medium mb-2">Add a comment</h4>
          <textarea 
            className="w-full h-24 p-3 border border-gray-300 rounded-md focus:ring-lua-purple focus:border-lua-purple"
            placeholder="Join the discussion..."
          />
          <div className="mt-2 flex justify-end">
            <Button>Post Comment</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionTab;
