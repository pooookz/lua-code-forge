
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600 mb-12">
              Find answers to the most common questions about LuaLearn and our courses.
            </p>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Platform & Courses</h2>
              <Accordion type="single" collapsible className="w-full">
                {platformQuestions.map((item) => (
                  <AccordionItem key={item.id} value={`item-${item.id}`}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent>
                      <div className="prose max-w-none pt-2">{item.answer}</div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <h2 className="text-2xl font-bold mt-12">Account & Billing</h2>
              <Accordion type="single" collapsible className="w-full">
                {accountQuestions.map((item) => (
                  <AccordionItem key={item.id} value={`item-${item.id}`}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent>
                      <div className="prose max-w-none pt-2">{item.answer}</div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <h2 className="text-2xl font-bold mt-12">Technical Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {technicalQuestions.map((item) => (
                  <AccordionItem key={item.id} value={`item-${item.id}`}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent>
                      <div className="prose max-w-none pt-2">{item.answer}</div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="mt-16 p-6 bg-gray-50 rounded-lg border">
              <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
              <p className="mb-4">If you couldn't find the answer to your question, please contact our support team.</p>
              <div className="flex gap-4">
                <a href="/contact" className="text-lua-purple hover:underline">Contact Support</a>
                <a href="/community" className="text-lua-purple hover:underline">Join Community</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// FAQ data
const platformQuestions = [
  {
    id: 1,
    question: "What is LuaLearn?",
    answer: "LuaLearn is an online learning platform dedicated to teaching Lua programming language through interactive courses, coding challenges, and projects. Our goal is to make learning Lua accessible, engaging, and effective for everyone from beginners to advanced developers."
  },
  {
    id: 2,
    question: "Who are LuaLearn courses for?",
    answer: "Our courses are designed for a wide range of learners, including complete beginners with no programming experience, developers looking to add Lua to their skill set, game developers interested in using Lua for game scripting, and professionals working with embedded systems where Lua is commonly used."
  },
  {
    id: 3,
    question: "What makes LuaLearn different from other programming courses?",
    answer: "LuaLearn offers a unique combination of structured learning paths, hands-on coding exercises, real-world projects, and an interactive code playground specifically optimized for Lua. Our platform focuses exclusively on Lua, allowing us to provide deeper, more specialized content than general programming platforms."
  },
  {
    id: 4,
    question: "How long does it take to complete a course?",
    answer: "Course completion times vary depending on the complexity of the course and your prior experience with programming. Introductory courses typically take 4-6 weeks when studying 3-5 hours per week. More advanced courses may take 8-12 weeks. Each course page displays an estimated completion time."
  },
  {
    id: 5,
    question: "Do I get a certificate upon completion?",
    answer: "Yes! Upon successful completion of any course, you will receive a digital certificate that you can share on LinkedIn or include in your resume. Our certificates verify your skills and knowledge in specific areas of Lua programming."
  }
];

const accountQuestions = [
  {
    id: 1,
    question: "How do I create an account?",
    answer: "Creating an account is simple. Click the 'Sign Up' button in the top right corner of the page, enter your email address, create a password, and verify your email address. Once verified, you'll have full access to your dashboard and any free courses."
  },
  {
    id: 2,
    question: "What are the available subscription plans?",
    answer: "We offer several subscription options: a free tier with limited access to basic courses, a monthly subscription with full access to all content, and an annual plan that provides the best value. Enterprise plans are also available for teams and educational institutions."
  },
  {
    id: 3,
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription anytime through your account settings. If you cancel, you'll continue to have access until the end of your current billing period. We don't offer refunds for partial months of service."
  },
  {
    id: 4,
    question: "Do you offer student discounts?",
    answer: "Yes! We offer a 50% discount for verified students. To apply, register with your academic email address (.edu, .ac.uk, etc.) or contact our support team with proof of your student status."
  },
  {
    id: 5,
    question: "How do I update my payment information?",
    answer: "You can update your payment information by going to your Account Settings, selecting the 'Billing' tab, and clicking on 'Update Payment Method'. We accept all major credit cards and PayPal."
  }
];

const technicalQuestions = [
  {
    id: 1,
    question: "What version of Lua do the courses teach?",
    answer: "Our courses primarily focus on Lua 5.4, which is the latest stable release. However, we also cover differences between versions and include modules specifically about Lua 5.1 (which is still widely used in many environments like game engines)."
  },
  {
    id: 2,
    question: "Do I need to install anything to take the courses?",
    answer: "No! Our platform includes an online code editor and Lua interpreter, so you can write and run Lua code directly in your browser. For more advanced projects, we provide instructions for setting up a local development environment if needed."
  },
  {
    id: 3,
    question: "Can I download the course materials for offline use?",
    answer: "Yes, premium subscribers can download lesson materials, code examples, and project files for offline use. However, interactive exercises and the code playground require an internet connection."
  },
  {
    id: 4,
    question: "Are the courses compatible with mobile devices?",
    answer: "Our lessons and reading materials are fully responsive and work well on tablets and smartphones. However, we recommend using a desktop or laptop for coding exercises to have the best experience with the code editor."
  },
  {
    id: 5,
    question: "How can I report a technical issue or bug?",
    answer: "If you encounter any technical issues, please click the 'Help' button in the bottom right corner of any page or email support@lualearn.com. Please include details about the problem, the browser you're using, and screenshots if possible."
  }
];

export default FAQ;
