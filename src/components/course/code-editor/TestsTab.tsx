
import { Card } from "@/components/ui/card";

interface TestResult {
  name: string;
  passed: boolean;
  message: string;
}

interface TestsTabProps {
  testResults: TestResult[];
}

const TestsTab = ({ testResults }: TestsTabProps) => {
  return (
    <div className="p-4 space-y-4 h-full overflow-y-auto">
      <h3 className="font-medium text-gray-800">Test Results</h3>
      
      {testResults.length === 0 ? (
        <p className="text-sm text-gray-600">Submit your code to see test results.</p>
      ) : (
        <div className="space-y-2">
          {testResults.map((test, index) => (
            <Card key={index} className={`p-4 ${test.passed ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full mr-2 ${test.passed ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span className="font-medium">{test.name}</span>
                </div>
                <span className={`text-sm ${test.passed ? 'text-green-600' : 'text-red-600'}`}>
                  {test.passed ? 'Passed' : 'Failed'}
                </span>
              </div>
              {!test.passed && (
                <p className="mt-2 text-sm text-red-600">{test.message}</p>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestsTab;
