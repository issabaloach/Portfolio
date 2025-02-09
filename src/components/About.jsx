import React from 'react';
import { Code2, Server, Palette, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              I'm a Passionate Frontend and MERN Developer with expertise in building modern web applications
              using the MERN stack. With a strong foundation in both frontend and backend development,
              I create seamless, user-friendly experiences that solve real-world problems.
            </p>
            <p className="text-lg text-gray-600">
              My journey in web development started with a curiosity for creating interactive websites,
              which evolved into a deep understanding of modern web technologies and best practices.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <Code2 className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-semibold mb-2">Frontend</h3>
              <p className="text-gray-600">React, Nextjs, JavaScript, Tailwind CSS,  </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Server className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="font-semibold mb-2">Backend</h3>
              <p className="text-gray-600">Node.js, Express, REST APIs</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Database className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="font-semibold mb-2">Database</h3>
              <p className="text-gray-600">MongoDB, Mongoose, SQL, MySQL</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Palette className="w-8 h-8 text-pink-500 mb-4" />
              <h3 className="font-semibold mb-2">Design</h3>
              <p className="text-gray-600">figma, UI/UX, Responsive Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;