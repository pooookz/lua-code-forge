
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center px-4">
          <div className="mb-6">
            <span className="text-7xl font-extrabold text-lua-purple">404</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Page not found</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <Link to="/">
            <Button className="bg-lua-purple hover:bg-lua-darkPurple text-white">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
          <div className="mt-12">
            <p className="text-gray-500 text-sm">
              Looking for courses? <Link to="/courses" className="text-lua-purple underline">Browse our courses</Link> or try the <Link to="/playground" className="text-lua-purple underline">Lua playground</Link>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
