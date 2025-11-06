import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur shadow-lg fixed top-0 left-0 z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-bold text-2xl text-blue-700 tracking-tight">Shubham</span>
        <div className="hidden sm:flex space-x-6 text-gray-700 font-medium">
          <a href="#experience" className="hover:text-blue-600 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]">Experience</a>
          <a href="#education" className="hover:text-blue-600 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]">Education</a>
          <a href="#projects" className="hover:text-blue-600 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]">Projects</a>
          <a href="#skills" className="hover:text-blue-600 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]">Skills</a>
          <a href="#certifications" className="hover:text-blue-600 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]">Certifications</a>
          <a href="#achievements" className="hover:text-blue-600 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]">Achievements</a>
          <a href="#resume" className="hover:text-blue-600 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]">Resume</a>
          <a href="#contact" className="hover:text-blue-600 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]">Contact</a>
        </div>
        <div className="sm:hidden">
          {/* Mobile menu icon could go here for further enhancement */}
        </div>
      </div>
    </nav>
  );
}