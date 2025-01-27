import React from 'react';
import { BookOpen } from 'lucide-react';

const CourseCatalogPage = () => {
  const departments = [
    {
      name: "Computer Science",
      courses: [
        { code: "CS101", title: "Introduction to Programming", credits: 3 },
        { code: "CS201", title: "Data Structures", credits: 4 },
        { code: "CS301", title: "Algorithms", credits: 4 }
      ]
    },
    {
      name: "Mathematics",
      courses: [
        { code: "MATH101", title: "Calculus I", credits: 4 },
        { code: "MATH201", title: "Linear Algebra", credits: 3 },
        { code: "MATH301", title: "Abstract Algebra", credits: 3 }
      ]
    },
    {
      name: "Physics",
      courses: [
        { code: "PHYS101", title: "General Physics I", credits: 4 },
        { code: "PHYS201", title: "Modern Physics", credits: 3 },
        { code: "PHYS301", title: "Quantum Mechanics", credits: 4 }
      ]
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <BookOpen className="h-10 w-10" />
            <h1 className="text-4xl font-bold">Course Catalog</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {departments.map((dept, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{dept.name}</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Code</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {dept.courses.map((course, courseIndex) => (
                    <tr key={courseIndex}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.code}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.credits}</td>
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

export default CourseCatalogPage;