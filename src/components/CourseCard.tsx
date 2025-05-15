
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  lessonsCount: number;
  progress?: number;
  image?: string;
}

const CourseCard = ({
  id,
  title,
  description,
  level,
  lessonsCount,
  progress = 0,
  image,
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
    <Card className="overflow-hidden border-gray-200 hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
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
        <p className="text-gray-600 text-sm">{description}</p>
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
