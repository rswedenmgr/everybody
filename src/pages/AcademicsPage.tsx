import React from 'react';
import { BookOpen, Users, Award, Briefcase } from 'lucide-react';

const programs = [
  {
    title: "Undergraduate Programs",
    description: "Comprehensive bachelor's degrees across various disciplines",
    icon: BookOpen
  },
  {
    title: "Graduate Studies",
    description: "Advanced degrees and research opportunities",
    icon: Award
  },
  {
    title: "Professional Development",
    description: "Certificates and continuing education programs",
    icon: Briefcase
  },
  {
    title: "International Programs",
    description: "Global exchange and study abroad opportunities",
    icon: Users
  }
];

const AcademicsPage = () => {
  return (
    <div className="pt-16">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Academic Programs</h1>
          <p className="text-xl text-blue-200">Discover your path to success with our diverse academic offerings</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <program.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Academic Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Arts & Humanities</h3>
              <ul className="space-y-1 text-gray-600">
                <li>English Literature</li>
                <li>History</li>
                <li>Philosophy</li>
                <li>Fine Arts</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Sciences</h3>
              <ul className="space-y-1 text-gray-600">
                <li>Biology</li>
                <li>Chemistry</li>
                <li>Physics</li>
                <li>Mathematics</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Professional Studies</h3>
              <ul className="space-y-1 text-gray-600">
                <li>Business</li>
                <li>Engineering</li>
                <li>Computer Science</li>
                <li>Education</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicsPage;