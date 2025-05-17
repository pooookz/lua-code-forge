
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CourseNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
}

const CourseNavigation = ({
  onPrevious,
  onNext,
  isPreviousDisabled,
  isNextDisabled
}: CourseNavigationProps) => {
  return (
    <div className="flex justify-between mt-4">
      <Button 
        variant="outline"
        className="flex items-center"
        disabled={isPreviousDisabled}
        onClick={onPrevious}
      >
        <ChevronLeft className="h-4 w-4 mr-2" />
        Previous Lesson
      </Button>
      
      <Button
        className="flex items-center bg-lua-purple hover:bg-lua-darkPurple"
        disabled={isNextDisabled}
        onClick={onNext}
      >
        Next Lesson
        <ChevronRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default CourseNavigation;
