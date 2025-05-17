
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const CourseNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-lua-darkPurple mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-6">
            The course you are looking for does not exist or has been removed.
          </p>
          <Link to="/courses">
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseNotFound;
