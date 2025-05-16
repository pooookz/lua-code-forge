
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface CourseCertificateProps {
  courseTitle: string;
  studentName: string;
  completionDate: Date;
  instructorName: string;
}

const CourseCertificate = ({
  courseTitle,
  studentName,
  completionDate,
  instructorName
}: CourseCertificateProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };
  
  const handleDownload = () => {
    setIsGenerating(true);
    
    // In a real app, this would generate a PDF certificate
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "Certificate Generated",
        description: "Your certificate has been downloaded.",
        variant: "default",
      });
    }, 1500);
  };
  
  return (
    <div className="p-6 border border-gray-200 rounded-lg bg-white">
      <div className="border-4 border-lua-purple p-8 rounded-lg bg-gradient-to-br from-white to-purple-50 shadow-sm">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Certificate of Completion</h2>
          <div className="w-24 h-1 bg-lua-purple mx-auto mb-8"></div>
          
          <p className="text-gray-600 mb-6">This is to certify that</p>
          <h3 className="text-3xl font-bold text-lua-darkPurple mb-6">{studentName}</h3>
          
          <p className="text-gray-600 mb-4">has successfully completed the course</p>
          <h4 className="text-2xl font-bold text-lua-purple mb-8">"{courseTitle}"</h4>
          
          <p className="text-gray-600 mb-8">on {formatDate(completionDate)}</p>
          
          <div className="flex justify-between mt-16">
            <div>
              <div className="w-32 h-px bg-gray-400 mb-2"></div>
              <p className="text-gray-700">LuaLearn</p>
            </div>
            
            <div>
              <div className="w-32 h-px bg-gray-400 mb-2"></div>
              <p className="text-gray-700">{instructorName}</p>
              <p className="text-sm text-gray-500">Instructor</p>
            </div>
          </div>
          
          <div className="mt-10">
            <Button onClick={handleDownload} disabled={isGenerating}>
              <Download className="mr-2 h-4 w-4" />
              {isGenerating ? "Generating..." : "Download Certificate"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCertificate;
