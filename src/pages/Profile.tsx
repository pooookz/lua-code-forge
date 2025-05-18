
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Profile = () => {
  const { user, profile, updateProfile } = useAuth();
  const [isUpdating, setIsUpdating] = useState(false);
  const [username, setUsername] = useState(profile?.username || '');
  const [avatarUrl, setAvatarUrl] = useState(profile?.avatar_url || '');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    
    try {
      await updateProfile({
        username,
        avatar_url: avatarUrl
      });
      
      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Update failed",
        description: "There was an error updating your profile. Please try again.",
        variant: "destructive",
      });
      console.error("Profile update error:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow container max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <Avatar className="h-24 w-24 mx-auto">
                  <AvatarImage src={profile?.avatar_url || user?.user_metadata?.avatar_url} />
                  <AvatarFallback className="bg-lua-purple text-white text-xl">{getInitials()}</AvatarFallback>
                </Avatar>
                <CardTitle className="mt-2">{profile?.username || user?.email?.split('@')[0]}</CardTitle>
                <CardDescription>{user?.email}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-gray-500">Role:</span>
                    <span className="ml-2 font-medium">{profile?.role === 'admin' ? 'Administrator' : 'User'}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Joined:</span>
                    <span className="ml-2 font-medium">{new Date(profile?.created_at || '').toLocaleDateString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Edit Profile</CardTitle>
                <CardDescription>
                  Update your personal information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={user?.email || ''} 
                        disabled 
                      />
                      <p className="text-xs text-gray-500">Email cannot be changed</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input 
                        id="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Your username" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="avatar">Avatar URL</Label>
                      <Input 
                        id="avatar" 
                        value={avatarUrl} 
                        onChange={(e) => setAvatarUrl(e.target.value)}
                        placeholder="https://example.com/avatar.jpg" 
                      />
                      <p className="text-xs text-gray-500">Enter a URL for your avatar image</p>
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={isUpdating}>
                      {isUpdating ? 'Saving...' : 'Save Changes'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
