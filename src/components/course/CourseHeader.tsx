
import { CourseDetail } from "@/types/course";
import { Progress } from "@/components/ui/progress";
import { Award, Book, Clock, User, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CourseHeaderProps {
  course: CourseDetail;
  currentLessonProgress: number;
  overallProgress: number;
}

const CourseHeader = ({ 
  course, 
  currentLessonProgress, 
  overallProgress 
}: CourseHeaderProps) => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-lua-darkPurple">{course.title}</h1>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-600">
              {course.level && (
                <span className="flex items-center">
                  <Award className="w-4 h-4 mr-1" />
                  {course.level}
                </span>
              )}
              {course.lessonsCount && (
                <span className="flex items-center">
                  <Book className="w-4 h-4 mr-1" />
                  {course.lessonsCount} lessons
                </span>
              )}
              {course.duration && (
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration}
                </span>
              )}
              {course.enrolledStudents && (
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {course.enrolledStudents.toLocaleString()} students
                </span>
              )}
            </div>
          </div>
          
          <div className="flex mt-4 md:mt-0">
            <Button variant="outline" onClick={() => setShowDetails(!showDetails)}>
              Course Details
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showDetails ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 items-center">
          <div className="w-full flex-grow">
            <Progress value={overallProgress} className="h-2" />
          </div>
          <div className="text-sm text-gray-600 whitespace-nowrap">
            Overall progress: <span className="font-semibold">{overallProgress}%</span>
          </div>
        </div>
        
        {showDetails && (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {course.description && (
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Description</h3>
                <p className="text-sm text-gray-600">{course.description}</p>
              </div>
            )}
            
            {course.prerequisites && course.prerequisites.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Prerequisites</h3>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  {course.prerequisites.map((prereq, index) => (
                    <li key={index}>{prereq}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {course.skills && course.skills.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Skills You'll Learn</h3>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, index) => (
                    <span key={index} className="inline-block bg-lua-purple/10 text-lua-purple text-xs px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseHeader;
