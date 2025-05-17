
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseFilters from "@/components/courses/CourseFilters";
import CourseTabs from "@/components/courses/CourseTabs";
import CoursesHeader from "@/components/courses/CoursesHeader";
import { useCourses } from "@/hooks/use-courses";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const { data: courses = [], isLoading, error } = useCourses(searchTerm, selectedLevel);
  
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Sign in to access courses</h1>
            <p className="text-gray-600 mb-6">
              Please sign in or create an account to browse our courses.
            </p>
            <div className="flex justify-center gap-4">
              <Button onClick={() => navigate("/login")}>
                Sign In
              </Button>
              <Button variant="outline" onClick={() => navigate("/register")}>
                Create Account
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
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
          
          {isLoading ? (
            <div className="text-center py-10">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-solid border-lua-purple border-r-transparent mb-4"></div>
              <p className="text-gray-600">Loading courses...</p>
            </div>
          ) : error ? (
            <div className="text-center py-10">
              <p className="text-red-500">Error loading courses. Please try again later.</p>
            </div>
          ) : (
            <CourseTabs filteredCourses={courses} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
