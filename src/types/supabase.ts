
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      courses: {
        Row: {
          id: string
          title: string
          description: string
          level: string
          category: string
          image_url: string | null
          author: string | null
          duration: string | null
          rating: number | null
          enrolled_students: number | null
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          level: string
          category: string
          image_url?: string | null
          author?: string | null
          duration?: string | null
          rating?: number | null
          enrolled_students?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          level?: string
          category?: string
          image_url?: string | null
          author?: string | null
          duration?: string | null
          rating?: number | null
          enrolled_students?: number | null
          created_at?: string
        }
      }
      modules: {
        Row: {
          id: string
          title: string
          description: string
          course_id: string
          order: number
          unlocked: boolean
        }
        Insert: {
          id?: string
          title: string
          description: string
          course_id: string
          order: number
          unlocked?: boolean
        }
        Update: {
          id?: string
          title?: string
          description?: string
          course_id?: string
          order?: number
          unlocked?: boolean
        }
      }
      lessons: {
        Row: {
          id: string
          title: string
          type: string
          content: string
          module_id: string
          order: number
          initial_code: string | null
          solution: string | null
          video_url: string | null
          estimated_time: number | null
        }
        Insert: {
          id?: string
          title: string
          type: string
          content: string
          module_id: string
          order: number
          initial_code?: string | null
          solution?: string | null
          video_url?: string | null
          estimated_time?: number | null
        }
        Update: {
          id?: string
          title?: string
          type?: string
          content?: string
          module_id?: string
          order?: number
          initial_code?: string | null
          solution?: string | null
          video_url?: string | null
          estimated_time?: number | null
        }
      }
      resources: {
        Row: {
          id: string
          lesson_id: string
          title: string
          url: string
          type: string
        }
        Insert: {
          id?: string
          lesson_id: string
          title: string
          url: string
          type: string
        }
        Update: {
          id?: string
          lesson_id?: string
          title?: string
          url?: string
          type?: string
        }
      }
      quiz_questions: {
        Row: {
          id: string
          lesson_id: string
          question: string
          options: string[]
          correct_option_index: number
          explanation: string
        }
        Insert: {
          id?: string
          lesson_id: string
          question: string
          options: string[]
          correct_option_index: number
          explanation: string
        }
        Update: {
          id?: string
          lesson_id?: string
          question?: string
          options?: string[]
          correct_option_index?: number
          explanation?: string
        }
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          course_id: string
          completed_lessons: string[]
          quiz_scores: Json
          certificate_earned: boolean
          last_accessed_module: number
          last_accessed_lesson: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          course_id: string
          completed_lessons?: string[]
          quiz_scores?: Json
          certificate_earned?: boolean
          last_accessed_module?: number
          last_accessed_lesson?: number
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          course_id?: string
          completed_lessons?: string[]
          quiz_scores?: Json
          certificate_earned?: boolean
          last_accessed_module?: number
          last_accessed_lesson?: number
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
