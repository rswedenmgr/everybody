import React from 'react';
import { Calendar } from 'lucide-react';

const AcademicCalendarPage = () => {
  const academicEvents = [
    {
      term: "Fall Semester 2024",
      events: [
        { date: "August 25", event: "Move-in Day" },
        { date: "August 28", event: "Classes Begin" },
        { date: "September 4", event: "Last Day to Add/Drop" },
        { date: "October 15-16", event: "Fall Break" },
        { date: "November 27-29", event: "Thanksgiving Break" },
        { date: "December 13", event: "Last Day of Classes" },
        { date: "December 16-20", event: "Final Examinations" }
      ]
    },
    {
      term: "Spring Semester 2025",
      events: [
        { date: "January 15", event: "Classes Begin" },
        { date: "January 22", event: "Last Day to Add/Drop" },
        { date: "March 10-14", event: "Spring Break" },
        { date: "May 2", event: "Last Day of Classes" },
        { date: "May 5-9", event: "Final Examinations" },
        { date: "May 17", event: "Commencement" }
      ]
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Calendar className="h-10 w-10" />
            <h1 className="text-4xl font-bold">Academic Calendar</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {academicEvents.map((term, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{term.term}</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {term.events.map((event, eventIndex) => (
                    <tr key={eventIndex}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.event}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicCalendarPage;