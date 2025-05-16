
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Playground from "./pages/Playground";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Documentation from "./pages/Documentation";
import FAQ from "./pages/FAQ";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import Careers from "./pages/Careers";
import Tutorials from "./pages/Tutorials";
import Projects from "./pages/Projects";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
