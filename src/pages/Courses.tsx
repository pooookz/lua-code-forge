
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseFilters from "@/components/courses/CourseFilters";
import CourseTabs from "@/components/courses/CourseTabs";
import CoursesHeader from "@/components/courses/CoursesHeader";
import { allCourses } from "@/data/coursesData";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  
  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === "all" || course.level.toLowerCase() === selectedLevel.toLowerCase();
    return matchesSearch && matchesLevel;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <CoursesHeader />
          <CourseFilters 
            selectedLevel={selectedLevel}
            setSelectedLevel={setSelectedLevel}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <CourseTabs filteredCourses={filteredCourses} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
