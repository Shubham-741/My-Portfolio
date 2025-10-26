import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-24 min-h-[60vh] bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-xl shadow-lg mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <img 
          src="/MyImage.jpg" 
          alt="Shubham Profile" 
          className="w-10 h-10 rounded-full object-cover border-80 border-white shadow-lg"
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight"
      >
        Shubham
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-xl sm:text-2xl text-gray-700 mb-2 font-medium"
      >
        Software Developer | Data Science | Cloud | AI/ML | Linux
      </motion.p>
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        <a href="mailto:shubham.741123@gmail.com" className="text-blue-600 hover:bg-blue-100 px-3 py-1 rounded transition">Email</a>
        <a href="https://linkedin.com/in/shubham741" target="_blank" rel="noopener" className="text-blue-600 hover:bg-blue-100 px-3 py-1 rounded transition">LinkedIn</a>
        <a href="https://github.com/Shubham-741" target="_blank" rel="noopener" className="text-blue-600 hover:bg-blue-100 px-3 py-1 rounded transition">GitHub</a>
        <a href="https://leetcode.com/shubham_778" target="_blank" rel="noopener" className="text-blue-600 hover:bg-blue-100 px-3 py-1 rounded transition">LeetCode</a>
        <a href="https://www.codechef.com/users/shubham7711" target="_blank" rel="noopener" className="text-blue-600 hover:bg-blue-100 px-3 py-1 rounded transition">CodeChef</a>
      </div>
      {/* <div className="mt-6 text-gray-600 text-lg font-semibold">+91 7988358944</div> */}
    </section>
  );
}