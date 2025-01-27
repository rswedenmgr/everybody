import React from 'react';
import { Microscope, Lightbulb, Globe, Beaker } from 'lucide-react';

const ResearchPage = () => {
  return (
    <div className="pt-16">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Research</h1>
          <p className="text-xl text-blue-200">Advancing knowledge through innovative research</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            {
              title: "Research Centers",
              description: "Our specialized research centers focus on solving global challenges",
              icon: Microscope
            },
            {
              title: "Innovation Labs",
              description: "State-of-the-art facilities for groundbreaking discoveries",
              icon: Lightbulb
            },
            {
              title: "Global Partnerships",
              description: "Collaborations with leading institutions worldwide",
              icon: Globe
            },
            {
              title: "Student Research",
              description: "Opportunities for undergraduate and graduate research",
              icon: Beaker
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <item.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Featured Research Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Quantum Computing Advances",
                field: "Computer Science",
                image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb"
              },
              {
                title: "Climate Change Solutions",
                field: "Environmental Science",
                image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8"
              },
              {
                title: "Medical Breakthroughs",
                field: "Life Sciences",
                image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-gray-600">{project.field}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;