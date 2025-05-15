
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Game Developer",
    content: "LuaLearn helped me master Lua for game development in just a few weeks. The interactive exercises and projects made learning engaging and practical.",
    avatar: "AJ"
  },
  {
    name: "Sarah Chen",
    role: "Computer Science Student",
    content: "As someone new to programming, I found the step-by-step approach incredibly helpful. The explanations are clear and the practice problems reinforce learning.",
    avatar: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "Roblox Developer",
    content: "The Roblox-specific Lua courses were exactly what I needed to level up my game development skills. Now I'm creating complex games with confidence.",
    avatar: "MR"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-lua-darkPurple">What Our Students Say</h2>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
            Join thousands of students who have transformed their coding skills with LuaLearn
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-lua-purple text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-lua-darkPurple">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
