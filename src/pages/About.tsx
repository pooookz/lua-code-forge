
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-lua-darkPurple to-lua-purple py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About LuaLearn</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The premier platform for learning Lua programming through interactive courses and projects.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-lua-darkPurple mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-8">
                At LuaLearn, our mission is to make learning Lua programming accessible, interactive, and enjoyable for everyone. 
                We believe that programming skills should be available to all, regardless of background or previous experience.
              </p>
              <p className="text-lg text-gray-700">
                Through our carefully crafted courses, interactive playground, and supportive community, 
                we aim to empower the next generation of Lua developers to create amazing games, applications, and tools.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-lua-darkPurple mb-6 text-center">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                LuaLearn was founded in 2020 by a team of passionate Lua developers and educators who saw a need for a dedicated learning platform for the Lua language.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                What started as a small collection of tutorials has grown into a comprehensive learning platform with dozens of courses, 
                an interactive playground, and a vibrant community of learners and mentors from around the world.
              </p>
              <p className="text-lg text-gray-700">
                Today, LuaLearn serves thousands of students from beginners taking their first steps in programming to experienced developers 
                seeking to master advanced concepts in Lua.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-lua-darkPurple mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full bg-gray-200 mb-4 flex items-center justify-center">
                  <svg className="h-20 w-20 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-lua-darkPurple">Sarah Johnson</h3>
                <p className="text-lua-purple mb-2">Co-Founder & CEO</p>
                <p className="text-gray-600 text-sm">Game developer with 10+ years experience using Lua in AAA game studios.</p>
              </div>
              
              {/* Team Member 2 */}
              <div className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full bg-gray-200 mb-4 flex items-center justify-center">
                  <svg className="h-20 w-20 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-lua-darkPurple">Michael Chen</h3>
                <p className="text-lua-purple mb-2">Co-Founder & CTO</p>
                <p className="text-gray-600 text-sm">Former lead developer at Roblox, expert in Lua-based game platforms.</p>
              </div>
              
              {/* Team Member 3 */}
              <div className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full bg-gray-200 mb-4 flex items-center justify-center">
                  <svg className="h-20 w-20 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-lua-darkPurple">Elena Rodriguez</h3>
                <p className="text-lua-purple mb-2">Head of Education</p>
                <p className="text-gray-600 text-sm">PhD in Computer Science Education, designed curriculum for major coding bootcamps.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Join Us */}
        <section className="py-16 bg-lua-darkPurple text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Become part of our growing community of Lua enthusiasts and take your programming skills to the next level.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-lua-darkPurple hover:bg-gray-100">
                Get Started For Free
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Join Discord Community
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
