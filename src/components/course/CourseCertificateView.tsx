
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import CourseCertificate from "@/components/course/CourseCertificate";

interface CourseCertificateViewProps {
  courseTitle: string;
  instructorName: string;
}

const CourseCertificateView = ({ courseTitle, instructorName }: CourseCertificateViewProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 min-h-[calc(100vh-16rem)]">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-full mb-4">
          <Award className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Congratulations!</h2>
        <p className="text-gray-600 mt-2">
          You've successfully completed "{courseTitle}"
        </p>
      </div>
      
      <CourseCertificate 
        courseTitle={courseTitle} 
        studentName="Your Name" 
        completionDate={new Date()} 
        instructorName={instructorName}
      />
      
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">Continue your learning journey</p>
        <Link to="/courses">
          <Button>Explore More Courses</Button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCertificateView;
