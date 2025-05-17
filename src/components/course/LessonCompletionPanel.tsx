
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface LessonCompletionPanelProps {
  lessonType: string;
  isCompleted: boolean;
  onComplete: () => void;
}

const LessonCompletionPanel = ({
  lessonType,
  isCompleted,
  onComplete
}: LessonCompletionPanelProps) => {
  const getTypeDescription = () => {
    switch (lessonType) {
      case "reading":
        return "This is a reading lesson. Take your time to understand the concepts before moving to the next lesson.";
      case "video":
        return "Watch the video lesson above to learn the concepts.";
      case "quiz":
        return "Complete the quiz to test your knowledge.";
      default:
        return "Review the lesson material on the left.";
    }
  };

  const getTypeTitle = () => {
    switch (lessonType) {
      case "reading":
        return "Reading Material";
      case "video":
        return "Video Lesson";
      case "quiz":
        return "Interactive Quiz";
      default:
        return "Lesson Material";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-[calc(100vh-16rem)] overflow-y-auto">
      <div className="h-full flex flex-col items-center justify-center">
        <img 
          src="/images/courses/reading-illustration.svg" 
          alt="Reading material" 
          className="w-64 h-64 opacity-70"
        />
        <h3 className="text-xl font-semibold text-lua-darkPurple mt-6">
          {getTypeTitle()}
        </h3>
        <p className="text-gray-600 text-center mt-2 max-w-md">
          {getTypeDescription()}
        </p>
        {lessonType === "reading" && !isCompleted && (
          <Button
            onClick={onComplete}
            className="mt-8 bg-lua-purple hover:bg-lua-darkPurple text-white"
          >
            Mark as Completed
          </Button>
        )}
        {isCompleted && (
          <div className="mt-8 flex items-center text-green-600">
            <CheckCircle className="mr-2" />
            <span>Lesson Completed</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonCompletionPanel;
