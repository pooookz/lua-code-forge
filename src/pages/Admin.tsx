
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { User } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type AdminUser = {
  id: string;
  email: string;
  username: string | null;
  role: string;
  created_at: string;
};

const Admin = () => {
  const { isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [courses, setCourses] = useState<any[]>([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCourses: 0,
    totalLessons: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is admin, redirect if not
    if (!loading && !isAdmin) {
      toast({
        title: "Access denied",
        description: "You don't have permission to access this page.",
        variant: "destructive",
      });
      navigate('/');
    } else if (!loading && isAdmin) {
      // Fetch admin data
      fetchAdminData();
    }
  }, [isAdmin, loading, navigate]);

  const fetchAdminData = async () => {
    setIsLoading(true);
    try {
      // Fetch users with profiles
      const { data: usersData, error: usersError } = await supabase
        .from('profiles')
        .select('id, username, role, created_at, auth.users!inner(email)')
        .order('created_at', { ascending: false });

      if (usersError) throw usersError;

      // Format user data
      const formattedUsers = usersData.map((user: any) => ({
        id: user.id,
        email: user.auth?.users?.email,
        username: user.username,
        role: user.role,
        created_at: user.created_at,
      }));

      setUsers(formattedUsers);
      
      // Fetch courses
      const { data: coursesData, error: coursesError } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (coursesError) throw coursesError;
      setCourses(coursesData);
      
      // Set stats
      setStats({
        totalUsers: formattedUsers.length,
        totalCourses: coursesData.length,
        totalLessons: 0, // You would need to fetch this from the lessons table
      });
    } catch (error) {
      console.error('Error fetching admin data:', error);
      toast({
        title: "Failed to load data",
        description: "There was an error loading the admin data.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-solid border-lua-purple border-r-transparent"></div>
        <span className="ml-2">Loading...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button onClick={() => fetchAdminData()}>Refresh Data</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalUsers}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Total Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalCourses}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Total Lessons</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalLessons}</div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="users">
          <TabsList className="grid grid-cols-3 mb-8 w-full max-w-md">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                  View and manage user accounts
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-solid border-lua-purple border-r-transparent"></div>
                    <span className="ml-2">Loading users...</span>
                  </div>
                ) : (
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>User</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Joined</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {users.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell>
                              <div className="flex items-center">
                                <div className="h-8 w-8 rounded-full bg-lua-purple flex items-center justify-center text-white mr-2">
                                  <User className="h-4 w-4" />
                                </div>
                                <div>
                                  <div className="font-medium">{user.username || user.email?.split('@')[0]}</div>
                                  <div className="text-sm text-gray-500">{user.email}</div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant={user.role === 'admin' ? 'default' : 'outline'}>
                                {user.role === 'admin' ? 'Admin' : 'User'}
                              </Badge>
                            </TableCell>
                            <TableCell>{new Date(user.created_at).toLocaleDateString()}</TableCell>
                            <TableCell className="text-right">
                              <Button variant="outline" size="sm">View</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Management</CardTitle>
                <CardDescription>
                  View and manage courses
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-solid border-lua-purple border-r-transparent"></div>
                    <span className="ml-2">Loading courses...</span>
                  </div>
                ) : (
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Level</TableHead>
                          <TableHead>Students</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {courses.map((course) => (
                          <TableRow key={course.id}>
                            <TableCell>
                              <div className="font-medium">{course.title}</div>
                            </TableCell>
                            <TableCell>{course.category}</TableCell>
                            <TableCell>{course.level}</TableCell>
                            <TableCell>{course.enrolled_students || 0}</TableCell>
                            <TableCell className="text-right">
                              <Button variant="outline" size="sm">Edit</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Analytics & Reports</CardTitle>
                <CardDescription>
                  View platform analytics and generate reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-40 bg-gray-100 rounded-md">
                  <p className="text-gray-500">Reports coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
