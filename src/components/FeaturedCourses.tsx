
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";

// Sample course data
const coursesData = [
  {
    id: "lua-basics",
    title: "Lua Basics",
    description: "Learn the fundamentals of Lua programming, including variables, functions, loops, and tables.",
    level: "Beginner",
    lessonsCount: 12,
    progress: 0
  },
  {
    id: "game-dev-lua",
    title: "Game Development with Lua",
    description: "Build 2D games using Lua with the LÖVE framework. Learn game loops, physics, and collision detection.",
    level: "Intermediate",
    lessonsCount: 15,
    progress: 0
  },
  {
    id: "lua-oop",
    title: "Object-Oriented Programming in Lua",
    description: "Master the concepts of OOP in Lua with metatables, inheritance, and class-like structures.",
    level: "Intermediate",
    lessonsCount: 10,
    progress: 0
  },
  {
    id: "lua-for-roblox",
    title: "Lua for Roblox",
    description: "Create interactive games on the Roblox platform using Lua scripting.",
    level: "Beginner",
    lessonsCount: 14,
    progress: 0
  }
];

const FeaturedCourses = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-lua-darkPurple">Featured Courses</h2>
            <p className="text-gray-600 mt-2">Begin your Lua programming journey with these popular courses</p>
          </div>
          <Link to="/courses">
            <Button variant="outline" className="border-lua-purple text-lua-purple hover:bg-lua-purple hover:text-white">
              View All Courses
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coursesData.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              level={course.level as "Beginner" | "Intermediate" | "Advanced"}
              lessonsCount={course.lessonsCount}
              progress={course.progress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
