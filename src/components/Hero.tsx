import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f"
          className="w-full h-full object-cover"
          alt="University Campus"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Academia University
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Shaping Tomorrow's Leaders Through Excellence in Education
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;