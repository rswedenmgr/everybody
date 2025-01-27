import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Academia University</h3>
            <p className="text-blue-200">
              123 University Avenue<br />
              College Town, ST 12345<br />
              United States
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Academics</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Admissions</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Research</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Campus Life</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white">Library</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Student Portal</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Career Services</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">IT Support</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Directory</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-blue-200 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <a href="mailto:info@academia.edu" className="text-blue-200 hover:text-white">
                info@academia.edu
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} Academia University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;