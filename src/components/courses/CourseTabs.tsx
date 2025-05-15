
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCard from "@/components/CourseCard";
import { CourseData } from "@/types/course";

interface CourseTabsProps {
  filteredCourses: CourseData[];
}

const CourseTabs = ({ filteredCourses }: CourseTabsProps) => {
  return (
    <Tabs defaultValue="all" className="mb-8">
      <TabsList className="w-full flex flex-wrap justify-start gap-1">
        <TabsTrigger value="all">All Courses</TabsTrigger>
        <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
        <TabsTrigger value="gamedev">Game Development</TabsTrigger>
        <TabsTrigger value="advanced">Advanced Concepts</TabsTrigger>
        <TabsTrigger value="practical">Practical Applications</TabsTrigger>
      </TabsList>
      
      <TabsContent value="all" className="mt-6">
        <CourseGrid courses={filteredCourses} />
      </TabsContent>
      
      <TabsContent value="fundamentals" className="mt-6">
        <CourseGrid courses={filteredCourses.filter(course => course.category === "fundamentals")} />
      </TabsContent>
      
      <TabsContent value="gamedev" className="mt-6">
        <CourseGrid courses={filteredCourses.filter(course => course.category === "gamedev")} />
      </TabsContent>
      
      <TabsContent value="advanced" className="mt-6">
        <CourseGrid courses={filteredCourses.filter(course => course.category === "advanced")} />
      </TabsContent>
      
      <TabsContent value="practical" className="mt-6">
        <CourseGrid courses={filteredCourses.filter(course => course.category === "practical")} />
      </TabsContent>
    </Tabs>
  );
};

interface CourseGridProps {
  courses: CourseData[];
}

const CourseGrid = ({ courses }: CourseGridProps) => {
  if (courses.length === 0) {
    return (
      <div className="text-center py-10">
        <h3 className="text-xl font-semibold text-gray-700">No courses found</h3>
        <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
          title={course.title}
          description={course.description}
          level={course.level as "Beginner" | "Intermediate" | "Advanced"}
          lessonsCount={course.lessonsCount}
          progress={course.progress}
        />
      ))}
    </div>
  );
};

export default CourseTabs;
