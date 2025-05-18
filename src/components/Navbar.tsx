
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, User, Settings, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Fejl ved log ud:", error);
    }
  };

  // Funktion til at generere brugerens initialer til avatar fallback
  const getInitials = () => {
    if (!user || !user.email) return "U";
    return user.email.substring(0, 2).toUpperCase();
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
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.user_metadata?.avatar_url} alt={user.email || ''} />
                    <AvatarFallback className="bg-lua-purple text-white">{getInitials()}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{user.email}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Min konto</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Indstillinger</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log ud</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
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
            </>
          )}
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
              {user ? (
                <>
                  <div className="flex items-center justify-center space-x-2 w-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.user_metadata?.avatar_url} alt={user.email || ''} />
                      <AvatarFallback className="bg-lua-purple text-white">{getInitials()}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{user.email}</span>
                  </div>
                  <Link to="/profile" className="w-full" onClick={toggleMenu}>
                    <Button variant="outline" className="w-full">
                      <User className="mr-2 h-4 w-4" />
                      Profil
                    </Button>
                  </Link>
                  <Button 
                    className="w-full"
                    onClick={() => {
                      handleSignOut();
                      toggleMenu();
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log ud
                  </Button>
                </>
              ) : (
                <>
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
                </>
              )}
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
