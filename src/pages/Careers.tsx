
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-lua-darkPurple/10 code-pattern py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Help us build the future of Lua programming education and make learning more accessible to everyone.
            </p>
            <Button className="bg-lua-purple hover:bg-lua-purple/90">View Open Positions</Button>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-lua-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lua-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Work</h3>
              <p className="text-gray-600">
                Work remotely from anywhere in the world with flexible hours to maintain work-life balance.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-lua-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lua-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Growth Culture</h3>
              <p className="text-gray-600">
                Continuous learning opportunities and career advancement in a supportive environment.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Comprehensive Benefits</h3>
              <p className="text-gray-600">
                Competitive salary, health insurance, equipment stipend, and generous time off.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-8 justify-center">
                <TabsTrigger value="all">All Departments</TabsTrigger>
                <TabsTrigger value="engineering">Engineering</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-6">
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </TabsContent>
              
              <TabsContent value="engineering" className="space-y-6">
                {jobs.filter(job => job.department === "Engineering").map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </TabsContent>
              
              <TabsContent value="education" className="space-y-6">
                {jobs.filter(job => job.department === "Education").map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </TabsContent>
              
              <TabsContent value="design" className="space-y-6">
                {jobs.filter(job => job.department === "Design").map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </TabsContent>
              
              <TabsContent value="marketing" className="space-y-6">
                {jobs.filter(job => job.department === "Marketing").map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </TabsContent>
            </Tabs>
          </div>
          
          <Separator className="my-12" />
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Learning Never Stops</h3>
                <p className="text-gray-600">
                  We believe in continuous growth and development. Everyone at LuaLearn is encouraged to keep learning, experimenting, and improving their skills.
                </p>
              </div>
              
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">User-Focused Innovation</h3>
                <p className="text-gray-600">
                  We put our users first in everything we do. Our innovations and improvements are driven by enhancing the learning experience for our community.
                </p>
              </div>
              
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Collaborative Excellence</h3>
                <p className="text-gray-600">
                  We achieve our best work through collaboration. We value diverse perspectives and believe in the power of teamwork to create exceptional results.
                </p>
              </div>
              
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Inclusive Community</h3>
                <p className="text-gray-600">
                  We're committed to creating an inclusive environment where everyone feels welcome and valued, both within our team and in our learning community.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Don't See a Perfect Fit?</h2>
            <p className="max-w-2xl mx-auto mb-6">
              We're always looking for talented individuals to join our team. If you're passionate about education and technology but don't see a role that matches your skills, send us your resume anyway!
            </p>
            <Button variant="outline">Send Open Application</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const JobCard = ({ job }: { job: Job }) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-gray-600">{job.department}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                {job.location}
              </span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                {job.type}
              </span>
            </div>
          </div>
          <p className="mt-4 text-gray-700">{job.description}</p>
        </div>
        <div className="bg-gray-50 px-6 py-4 flex justify-end">
          <Button variant="outline">View Details</Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Mock data for jobs
const jobs = [
  {
    id: 1,
    title: "Senior Lua Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "We're looking for an experienced Lua developer to help build and maintain our interactive code playground and provide technical guidance for our Lua courses."
  },
  {
    id: 2,
    title: "Curriculum Developer",
    department: "Education",
    location: "Remote",
    type: "Full-time",
    description: "Join our team to create engaging, high-quality Lua programming courses and learning materials for students of all levels."
  },
  {
    id: 3,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Help design intuitive, accessible interfaces for our learning platform, focusing on creating engaging and effective educational experiences."
  },
  {
    id: 4,
    title: "Content Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Create compelling content that educates our audience about Lua programming and attracts new learners to our platform."
  },
  {
    id: 5,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Manage our cloud infrastructure and CI/CD pipelines, ensuring a reliable and performant experience for our users."
  },
  {
    id: 6,
    title: "Technical Support Specialist",
    department: "Education",
    location: "Remote",
    type: "Part-time",
    description: "Help our students overcome technical challenges and provide excellent support for our learning platform."
  }
];

export default Careers;
