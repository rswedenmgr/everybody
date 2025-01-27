import React from 'react';
import { Award, Users, Globe, Briefcase } from 'lucide-react';

const AlumniNetworkPage = () => {
  return (
    <div className="pt-16">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Award className="h-10 w-10" />
            <h1 className="text-4xl font-bold">Alumni Network</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Users className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Connect</h3>
            <p className="text-gray-600">Network with fellow alumni and expand your professional connections</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Briefcase className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Career Resources</h3>
            <p className="text-gray-600">Access job boards, career counseling, and professional development resources</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Globe className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Events</h3>
            <p className="text-gray-600">Join alumni events, reunions, and networking opportunities worldwide</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Alumni Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                alt="Alumni Success"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold">John Smith, Class of 2015</h3>
              <p className="text-gray-600">CEO of Tech Innovations Inc., leading breakthrough developments in AI</p>
            </div>
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
                alt="Alumni Success"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold">Sarah Johnson, Class of 2018</h3>
              <p className="text-gray-600">Nobel Prize nominee for research in sustainable energy solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniNetworkPage;