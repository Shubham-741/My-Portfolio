import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    school: 'Bennett University',
    degree: 'B.Tech in Computer Science and Engineering (Specialization: Data Science)',
    years: '2021–2025',
    details: 'CGPA: 9.63',
  },
  {
    school: 'Delhi Public School, Rohtak',
    degree: 'Class 12, Central Board of Secondary Education',
    years: '2019–2020',
    details: 'Percentage: 91.66%',
  },
  {
    school: 'Scholars Global School, Bahadurgarh',
    degree: 'Class 10, Central Board of Secondary Education',
    years: '2016–2017',
    details: 'Percentage: 95%',
  },
];

export default function EducationCard() {
  return (
    <div className="space-y-6">
      {education.map((edu, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition"
        >
          <h3 className="text-xl font-bold text-blue-700 mb-1">{edu.school}</h3>
          <div className="text-gray-700 font-medium">{edu.degree} <span className="text-gray-400">| {edu.years}</span></div>
          <div className="mt-2 text-gray-500 italic">{edu.details}</div>
        </motion.div>
      ))}
    </div>
  );
}
