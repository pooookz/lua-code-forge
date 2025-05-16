
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    reason: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, reason: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you! We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        reason: ""
      });
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg text-gray-600 mb-8">
                Have questions or feedback? We'd love to hear from you! Fill out the form and our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-gray-600">support@lualearn.com</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2">Response Time</h3>
                  <p className="text-gray-600">We aim to respond to all inquiries within 24-48 hours during business days.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2">Office Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9am - 6pm UTC</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">Other Ways to Connect</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-lua-purple">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-lua-purple">
                    <span className="sr-only">Discord</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M18.942 5.556a16.299 16.299 0 00-4.126-1.297c-.178.321-.385.754-.526 1.097a15.175 15.175 0 00-4.573 0 11.583 11.583 0 00-.535-1.097 16.274 16.274 0 00-4.126 1.27c-2.611 3.946-3.319 7.794-2.965 11.587a16.494 16.494 0 005.061 2.593 12.65 12.65 0 001.084-1.785 10.689 10.689 0 01-1.707-.831c.143-.106.283-.217.418-.331 3.291 1.539 6.866 1.539 10.118 0 .137.114.277.225.418.331-.541.326-1.114.606-1.71.832a12.52 12.52 0 001.084 1.785 16.46 16.46 0 005.064-2.595c.415-4.396-.709-8.209-2.973-11.589zM8.678 14.813c-.988 0-1.798-.922-1.798-2.045s.793-2.047 1.798-2.047c1.005 0 1.815.922 1.798 2.047.001 1.123-.793 2.045-1.798 2.045zm6.644 0c-.988 0-1.798-.922-1.798-2.045s.793-2.047 1.798-2.047c1.005 0 1.815.922 1.798 2.047 0 1.123-.793 2.045-1.798 2.045z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-lua-purple">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                    Reason for Contact
                  </label>
                  <Select value={formData.reason} onValueChange={handleSelectChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="billing">Billing Question</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full"
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
