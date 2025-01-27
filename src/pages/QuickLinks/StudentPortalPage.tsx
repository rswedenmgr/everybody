import React from 'react';
import { Users, Book, Calendar, FileText, Clock, Settings } from 'lucide-react';

const StudentPortalPage = () => {
  const quickActions = [
    { icon: Book, title: "My Courses", description: "View your current courses and grades" },
    { icon: Calendar, title: "Schedule", description: "Class schedule and important dates" },
    { icon: FileText, title: "Transcripts", description: "View and request official transcripts" },
    { icon: Clock, title: "Registration", description: "Course registration and add/drop" },
    { icon: Settings, title: "Account", description: "Update your account settings" }
  ];

  return (
    <div className="pt-16">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Users className="h-10 w-10" />
            <h1 className="text-4xl font-bold">Student Portal</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <action.icon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
              <p className="text-gray-600">{action.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Recent Announcements</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="font-semibold">Mid-term Grades Posted</p>
                <p className="text-sm text-gray-600">March 15, 2024</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="font-semibold">Registration Deadline Approaching</p>
                <p className="text-sm text-gray-600">March 20, 2024</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Upcoming Deadlines</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red-600 pl-4">
                <p className="font-semibold">Course Withdrawal Deadline</p>
                <p className="text-sm text-gray-600">March 25, 2024</p>
              </div>
              <div className="border-l-4 border-yellow-600 pl-4">
                <p className="font-semibold">Fall Registration Opens</p>
                <p className="text-sm text-gray-600">April 1, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortalPage;