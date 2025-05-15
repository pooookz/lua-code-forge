
import { 
  Book, 
  Code, 
  FileText, 
  Play 
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Book className="h-10 w-10 text-lua-blue" />,
      title: "Interactive Learning",
      description: "Our courses feature step-by-step tutorials with interactive coding exercises to reinforce concepts as you learn."
    },
    {
      icon: <Code className="h-10 w-10 text-lua-blue" />,
      title: "Specialized in Lua",
      description: "Unlike general coding platforms, we focus exclusively on making you a Lua expert from beginner to advanced."
    },
    {
      icon: <FileText className="h-10 w-10 text-lua-blue" />,
      title: "Practical Projects",
      description: "Build real-world projects like games, automation scripts, and web applications with Lua."
    },
    {
      icon: <Play className="h-10 w-10 text-lua-blue" />,
      title: "Learn by Doing",
      description: "Our platform emphasizes coding practice over passive learning with immediate feedback on your code."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-lua-darkPurple">Why Choose LuaLearn?</h2>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
            We provide the most comprehensive and structured approach to learning Lua programming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-lua-purple mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
