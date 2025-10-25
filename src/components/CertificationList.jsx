import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  'IBM Data Analyst Specialization- Coursera',
  'LAMP- Linux, Apache, MySQL, PHP in Easy Steps- Infosys Springboard',
  'Software Engineering: Software Design and Project Management- Coursera- 96.66%',
  'Introduction to High-Performance and Parallel Computing- Coursera- 98%',
];

export default function CertificationList() {
  return (
    <motion.ul
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 list-disc ml-6 text-gray-700"
    >
      {certifications.map((cert, idx) => (
        <li key={idx} className="mb-2 font-medium text-gray-700">{cert}</li>
      ))}
    </motion.ul>
  );
}
