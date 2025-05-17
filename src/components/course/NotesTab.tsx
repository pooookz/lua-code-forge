
import { Button } from "@/components/ui/button";

const NotesTab = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Your Notes</h3>
      <textarea 
        className="w-full h-64 p-3 border border-gray-300 rounded-md focus:ring-lua-purple focus:border-lua-purple"
        placeholder="Write your notes for this lesson here..."
      />
      <div className="mt-4 flex justify-end">
        <Button>Save Notes</Button>
      </div>
    </div>
  );
};

export default NotesTab;
