import React from 'react';
import Hero from '../components/Hero';
import Sidebar from '../components/Sidebar';
import BlogSection from '../components/BlogSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Academia University</h2>
              <p className="text-gray-600 mb-4">
                At Academia University, we are dedicated to fostering academic excellence, innovative research, 
                and personal growth. Our diverse community of scholars, researchers, and students work together 
                to address global challenges and shape the future of education.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Academic Excellence</h3>
                  <p className="text-gray-600">
                    Our programs are designed to challenge and inspire, preparing students for success in their chosen fields.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Research Innovation</h3>
                  <p className="text-gray-600">
                    Leading groundbreaking research across multiple disciplines, making real-world impact.
                  </p>
                </div>
              </div>
            </section>
            <BlogSection />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;