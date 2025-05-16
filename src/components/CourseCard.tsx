
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  lessonsCount: number;
  progress?: number;
  image?: string;
  author?: string;
  duration?: string;
  rating?: number;
}

const CourseCard = ({
  id,
  title,
  description,
  level,
  lessonsCount,
  progress = 0,
  image,
  author,
  duration,
  rating,
}: CourseCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-blue-100 text-blue-800";
      case "Advanced":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="overflow-hidden border-gray-200 hover:shadow-md transition-all duration-300 transform hover:translate-y-[-5px] h-full flex flex-col">
      <div className="relative h-40 bg-gradient-to-r from-lua-darkPurple to-lua-purple flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <Book className="w-12 h-12 text-white opacity-50" />
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <Badge className={`${getLevelColor(level)}`}>{level}</Badge>
          <span className="text-sm text-gray-500">{lessonsCount} lessons</span>
        </div>
        <h3 className="text-xl font-bold mt-2 text-lua-darkPurple">{title}</h3>
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
        
        {/* Author, Duration and Rating info */}
        <div className="mt-4 space-y-2">
          {author && (
            <div className="flex items-center text-sm text-gray-500">
              <span className="font-medium">By {author}</span>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            {duration && (
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>{duration}</span>
              </div>
            )}
            
            {rating && (
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= Math.floor(rating)
                        ? "text-yellow-500 fill-yellow-500"
                        : star <= rating
                        ? "text-yellow-500 fill-yellow-500 opacity-60"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
              </div>
            )}
          </div>
        </div>
        
        {progress > 0 && (
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-500">Progress</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0 border-t border-gray-100">
        <Link to={`/courses/${id}`} className="w-full">
          <Button className="w-full bg-lua-purple hover:bg-lua-darkPurple text-white">
            {progress > 0 ? "Continue" : "Start Learning"} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
