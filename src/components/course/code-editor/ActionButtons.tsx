
import { Button } from "@/components/ui/button";
import { Play, SendHorizontal } from "lucide-react";

interface ActionButtonsProps {
  onRunCode: () => void;
  onSubmitCode: () => void;
  isRunning: boolean;
  isTesting: boolean;
}

const ActionButtons = ({ onRunCode, onSubmitCode, isRunning, isTesting }: ActionButtonsProps) => {
  return (
    <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between mt-auto">
      <Button
        onClick={onRunCode}
        className="bg-blue-500 hover:bg-blue-600 text-white"
        disabled={isRunning}
      >
        <Play className="mr-1 h-4 w-4" /> {isRunning ? "Running..." : "Run"}
      </Button>
      <Button
        onClick={onSubmitCode}
        className="bg-green-500 hover:bg-green-600 text-white"
        disabled={isTesting}
      >
        <SendHorizontal className="mr-1 h-4 w-4" /> {isTesting ? "Testing..." : "Submit"}
      </Button>
    </div>
  );
};

export default ActionButtons;
