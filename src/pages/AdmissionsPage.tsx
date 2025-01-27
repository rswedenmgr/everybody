import React from 'react';
import { GraduationCap, Calendar, FileText, Users } from 'lucide-react';

const AdmissionsPage = () => {
  return (
    <div className="pt-16">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Admissions</h1>
          <p className="text-xl text-blue-200">Take the first step towards your future</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Apply Now</h3>
            <p className="text-gray-600">Start your application process</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Deadlines</h3>
            <p className="text-gray-600">Important dates and deadlines</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Requirements</h3>
            <p className="text-gray-600">Admission requirements</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Visit Campus</h3>
            <p className="text-gray-600">Schedule a campus tour</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Application Process</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Submit Application</h3>
                <p className="text-gray-600">Complete the online application form with all required information.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Send Documents</h3>
                <p className="text-gray-600">Submit transcripts, test scores, and letters of recommendation.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Review Process</h3>
                <p className="text-gray-600">Your application will be reviewed by our admissions committee.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Decision</h3>
                <p className="text-gray-600">Receive your admissions decision.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPage;