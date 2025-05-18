
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, User, Settings, LogOut, LayoutDashboard } from "lucide-react";
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
  const { user, profile, isAdmin, signOut } = useAuth();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Function to generate user's initials for avatar fallback
  const getInitials = () => {
    if (profile?.username) {
      return profile.username.substring(0, 2).toUpperCase();
    }
    if (user?.email) {
      return user.email.substring(0, 2).toUpperCase();
    }
    return "U";
  };

  // Get display name for user
  const getDisplayName = () => {
    return profile?.username || user?.email || 'User';
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
          {isAdmin && (
            <Link to="/admin" className="text-lua-purple hover:text-lua-darkPurple transition-colors font-medium">
              Admin
            </Link>
          )}
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={profile?.avatar_url || user.user_metadata?.avatar_url} alt={getDisplayName()} />
                    <AvatarFallback className="bg-lua-purple text-white">{getInitials()}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{getDisplayName()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link to="/profile">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  {isAdmin && (
                    <DropdownMenuItem asChild>
                      <Link to="/admin">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Admin Dashboard</span>
                      </Link>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign out</span>
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
            {isAdmin && (
              <Link to="/admin" className="text-xl font-medium text-lua-purple" onClick={toggleMenu}>
                Admin
              </Link>
            )}
            
            <div className="flex flex-col items-center space-y-4 w-full pt-6">
              {user ? (
                <>
                  <div className="flex items-center justify-center space-x-2 w-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={profile?.avatar_url || user.user_metadata?.avatar_url} alt={getDisplayName()} />
                      <AvatarFallback className="bg-lua-purple text-white">{getInitials()}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{getDisplayName()}</span>
                  </div>
                  <Link to="/profile" className="w-full" onClick={toggleMenu}>
                    <Button variant="outline" className="w-full">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Button>
                  </Link>
                  <Link to="/settings" className="w-full" onClick={toggleMenu}>
                    <Button variant="outline" className="w-full">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
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
                    Sign out
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
