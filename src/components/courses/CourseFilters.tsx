
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CourseFiltersProps {
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const CourseFilters = ({
  selectedLevel,
  setSelectedLevel,
  searchTerm,
  setSearchTerm
}: CourseFiltersProps) => {
  return (
    <div className="mb-8 flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-1/3">
        <Input 
          placeholder="Search courses..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-gray-300"
        />
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Button 
          variant={selectedLevel === "all" ? "default" : "outline"}
          className={selectedLevel === "all" ? "bg-lua-purple" : "border-lua-purple text-lua-purple"}
          onClick={() => setSelectedLevel("all")}
        >
          All Levels
        </Button>
        <Button 
          variant={selectedLevel === "beginner" ? "default" : "outline"}
          className={selectedLevel === "beginner" ? "bg-lua-purple" : "border-lua-purple text-lua-purple"}
          onClick={() => setSelectedLevel("beginner")}
        >
          Beginner
        </Button>
        <Button 
          variant={selectedLevel === "intermediate" ? "default" : "outline"} 
          className={selectedLevel === "intermediate" ? "bg-lua-purple" : "border-lua-purple text-lua-purple"}
          onClick={() => setSelectedLevel("intermediate")}
        >
          Intermediate
        </Button>
        <Button 
          variant={selectedLevel === "advanced" ? "default" : "outline"}
          className={selectedLevel === "advanced" ? "bg-lua-purple" : "border-lua-purple text-lua-purple"} 
          onClick={() => setSelectedLevel("advanced")}
        >
          Advanced
        </Button>
      </div>
    </div>
  );
};

export default CourseFilters;
