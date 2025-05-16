
import { Button } from "@/components/ui/button";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";
import { allCourses } from "@/data/coursesData";

const FeaturedCourses = () => {
  // We'll display only the first 4 courses in the featured section
  const featuredCourses = allCourses.slice(0, 4);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-lua-darkPurple">Featured Courses</h2>
            <p className="text-gray-600 mt-2 max-w-2xl">Begin your Lua programming journey with these expertly curated courses, designed to take you from beginner to professional.</p>
          </div>
          <Link to="/courses">
            <Button variant="outline" className="border-lua-purple text-lua-purple hover:bg-lua-purple hover:text-white whitespace-nowrap">
              View All Courses
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              level={course.level as "Beginner" | "Intermediate" | "Advanced"}
              lessonsCount={course.lessonsCount}
              progress={course.progress}
              image={course.imageUrl}
              author={course.author}
              duration={course.duration}
              rating={course.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
