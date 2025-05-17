
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

const supabaseUrl = "https://cigkcvkhujjadboowrxh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpZ2tjdmtodWpqYWRib293cnhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MzcxMDgsImV4cCI6MjA2MzAxMzEwOH0.eKA3YPPqZiN0eAmXgOfnxuUzVRtkaAmAri0uZnWlBDQ";

export const supabase = createClient<Database>(
  supabaseUrl,
  supabaseKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      storage: typeof window !== 'undefined' ? window.localStorage : undefined
    }
  }
);
