
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-lua-purple to-lua-darkPurple text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Master Lua Programming?</h2>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
          Join thousands of students learning Lua through our interactive platform. Start your journey today!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/signup">
            <Button size="lg" className="bg-white text-lua-purple hover:bg-gray-100 px-8">
              Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/courses">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
              Explore Courses
            </Button>
          </Link>
        </div>
        <p className="text-gray-300 mt-6 text-sm">
          No credit card required. Start with our free courses.
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
