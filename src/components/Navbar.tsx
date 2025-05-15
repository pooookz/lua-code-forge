
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-4 bg-white border-b border-gray-200 shadow-sm">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-lua-purple">Lua<span className="text-lua-blue">Learn</span></span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/courses" className="text-gray-700 hover:text-lua-purple transition-colors">
            Courses
          </Link>
          <Link to="/playground" className="text-gray-700 hover:text-lua-purple transition-colors">
            Playground
          </Link>
          <Link to="/pricing" className="text-gray-700 hover:text-lua-purple transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-lua-purple transition-colors">
            About
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline" className="border-lua-purple text-lua-purple hover:bg-lua-purple hover:text-white">
              Log In
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-lua-purple hover:bg-lua-darkPurple text-white">
              Sign Up
            </Button>
          </Link>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu" className="text-lua-purple">
            <Menu />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="container px-4 mx-auto pt-20 pb-8 flex flex-col items-center space-y-6">
            <Link to="/courses" className="text-xl font-medium" onClick={toggleMenu}>
              Courses
            </Link>
            <Link to="/playground" className="text-xl font-medium" onClick={toggleMenu}>
              Playground
            </Link>
            <Link to="/pricing" className="text-xl font-medium" onClick={toggleMenu}>
              Pricing
            </Link>
            <Link to="/about" className="text-xl font-medium" onClick={toggleMenu}>
              About
            </Link>
            
            <div className="flex flex-col items-center space-y-4 w-full pt-6">
              <Link to="/login" className="w-full" onClick={toggleMenu}>
                <Button variant="outline" className="w-full border-lua-purple text-lua-purple">
                  Log In
                </Button>
              </Link>
              <Link to="/signup" className="w-full" onClick={toggleMenu}>
                <Button className="w-full bg-lua-purple text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
            
            <Button 
              variant="ghost" 
              className="absolute top-4 right-4" 
              onClick={toggleMenu}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
