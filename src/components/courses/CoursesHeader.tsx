
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CoursesHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
      <div>
        <h1 className="text-4xl font-bold text-lua-darkPurple">Lua Courses</h1>
        <p className="text-lg text-gray-600 mt-2">Explore our comprehensive collection of Lua programming courses</p>
      </div>
      
      <div className="mt-4 md:mt-0">
        <Link to="/dashboard">
          <Button className="bg-lua-purple hover:bg-lua-darkPurple text-white">
            My Learning Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CoursesHeader;
