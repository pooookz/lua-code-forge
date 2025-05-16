
export interface CourseData {
  id: string;
  title: string;
  description: string;
  level: string;
  lessonsCount: number;
  progress: number;
  category: string;
  imageUrl?: string;
  author?: string;
  duration?: string;
  rating?: number;
}

export interface Lesson {
  id: string;
  title: string;
  type: "reading" | "exercise";  // Restricting type to only these two values
  content: string;
  initialCode?: string;
  solution?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];  // Ensure this is strictly Lesson[]
}

export interface CourseDetail {
  title: string;
  description: string;
  level: string;
  lessonsCount: number;
  totalExercises: number;
  completedExercises: number;
  author?: string;
  duration?: string;
  rating?: number;
  prerequisites?: string[];
  skills?: string[];
  modules: Module[];  // Ensure this is strictly Module[]
}
