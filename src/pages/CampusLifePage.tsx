import React from 'react';
import { Home, Coffee, Dumbbell, Music } from 'lucide-react';

const CampusLifePage = () => {
  return (
    <div className="pt-16">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Campus Life</h1>
          <p className="text-xl text-blue-200">Experience the vibrant community at Academia University</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
              alt="Student Life"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Student Organizations</h3>
                <p>Join over 100+ student clubs and organizations</p>
              </div>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66"
              alt="Campus Activities"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Campus Events</h3>
                <p>Participate in year-round activities and events</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Home className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Housing</h3>
            <p className="text-gray-600">Modern residence halls with comfortable amenities</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Coffee className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Dining</h3>
            <p className="text-gray-600">Multiple dining options across campus</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Dumbbell className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Recreation</h3>
            <p className="text-gray-600">State-of-the-art fitness centers and facilities</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Music className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Arts & Culture</h3>
            <p className="text-gray-600">Regular performances and cultural events</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusLifePage;