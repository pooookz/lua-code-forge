
import { Progress } from "@/components/ui/progress";
import { CourseDetail } from "@/types/course";
import { Clock, Star, User } from "lucide-react";

interface CourseHeaderProps {
  course: CourseDetail;
  currentLessonProgress: number;
}

const CourseHeader = ({ course, currentLessonProgress }: CourseHeaderProps) => {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-lua-darkPurple">{course.title}</h1>
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                course.level === "Beginner" ? "bg-green-100 text-green-800" : 
                course.level === "Intermediate" ? "bg-blue-100 text-blue-800" : 
                "bg-purple-100 text-purple-800"
              }`}>
                {course.level}
              </span>
              <span className="text-sm text-gray-500">{course.lessonsCount} lessons</span>
              
              {course.rating && (
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= Math.floor(course.rating || 0)
                          ? "text-yellow-500 fill-yellow-500"
                          : star <= (course.rating || 0)
                          ? "text-yellow-500 fill-yellow-500 opacity-60"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-1 text-sm font-medium">{course.rating.toFixed(1)}</span>
                </div>
              )}
              
              {course.author && (
                <div className="flex items-center text-sm text-gray-600">
                  <User className="h-4 w-4 mr-1" />
                  <span>Instructor: {course.author}</span>
                </div>
              )}
              
              {course.duration && (
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{course.duration}</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Course Progress:</span>
            <Progress value={currentLessonProgress} className="w-32 h-2" />
            <span className="text-sm font-medium">{currentLessonProgress}%</span>
          </div>
        </div>
        
        {(course.prerequisites?.length > 0 || course.skills?.length > 0) && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {course.prerequisites?.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Prerequisites:</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {course.prerequisites.map((prereq, index) => (
                    <li key={index}>{prereq}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {course.skills?.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">What you'll learn:</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {course.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseHeader;
