import React from 'react';
import { Bell } from 'lucide-react';

const AnnouncementsPage = () => {
  const announcements = [
    {
      id: 1,
      title: "New Research Grant Awarded",
      date: "March 15, 2024",
      category: "Research",
      content: "The Department of Science has been awarded a $2.5 million grant for quantum computing research..."
    },
    {
      id: 2,
      title: "Summer Session Registration Opens",
      date: "March 14, 2024",
      category: "Academic",
      content: "Registration for Summer 2024 courses will begin on April 1st. Students are encouraged to meet with their advisors..."
    },
    {
      id: 3,
      title: "Campus Sustainability Initiative",
      date: "March 12, 2024",
      category: "Campus",
      content: "Academia University launches new sustainability program to achieve carbon neutrality by 2030..."
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Bell className="h-10 w-10" />
            <h1 className="text-4xl font-bold">Announcements</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{announcement.title}</h2>
                  <div className="mt-1 flex items-center gap-4">
                    <span className="text-sm text-gray-500">{announcement.date}</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {announcement.category}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{announcement.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsPage;