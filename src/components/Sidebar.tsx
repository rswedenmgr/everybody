import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Bell, BookOpen, Users, Award } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/academic-calendar" className="flex items-center text-gray-600 hover:text-blue-600">
              <Calendar className="h-5 w-5 mr-2" />
              Academic Calendar
            </Link>
          </li>
          <li>
            <Link to="/announcements" className="flex items-center text-gray-600 hover:text-blue-600">
              <Bell className="h-5 w-5 mr-2" />
              Announcements
            </Link>
          </li>
          <li>
            <Link to="/course-catalog" className="flex items-center text-gray-600 hover:text-blue-600">
              <BookOpen className="h-5 w-5 mr-2" />
              Course Catalog
            </Link>
          </li>
          <li>
            <Link to="/student-portal" className="flex items-center text-gray-600 hover:text-blue-600">
              <Users className="h-5 w-5 mr-2" />
              Student Portal
            </Link>
          </li>
          <li>
            <Link to="/alumni-network" className="flex items-center text-gray-600 hover:text-blue-600">
              <Award className="h-5 w-5 mr-2" />
              Alumni Network
            </Link>
          </li>
        </ul>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Upcoming Events</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-600 pl-3">
            <p className="font-semibold">Open House</p>
            <p className="text-sm text-gray-600">March 15, 2024</p>
          </div>
          <div className="border-l-4 border-blue-600 pl-3">
            <p className="font-semibold">Spring Break</p>
            <p className="text-sm text-gray-600">March 20-27, 2024</p>
          </div>
          <div className="border-l-4 border-blue-600 pl-3">
            <p className="font-semibold">Career Fair</p>
            <p className="text-sm text-gray-600">April 5, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;