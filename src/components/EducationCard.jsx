import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    school: 'Bennett University',
    degree: 'B.Tech in Computer Science and Engineering (Specialization: Data Science)',
    years: '2021–2025',
    details: { label: 'CGPA:', value: '9.63' },
    logo: '/education_photo/bennett.png',
    alt: 'Bennett University Logo',
  },
  {
    school: 'Delhi Public School, Rohtak',
    degree: 'Class 12, Central Board of Secondary Education',
    years: '2019–2020',
    details: { label: 'Percentage:', value: '91.66%' },
    logo: '/education_photo/dps.png',
    alt: 'DPS Rohtak Logo',
  },
  {
    school: 'Scholars Global School, Bahadurgarh',
    degree: 'Class 10, Central Board of Secondary Education',
    years: '2016–2017',
    details: { label: 'Percentage:', value: '95%' },
    logo: '/education_photo/sgs.png',
    alt: 'Scholars Global School Logo',
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
          className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition flex items-center justify-between"
        >
          <div className="flex flex-col flex-1">
            <h3 className="text-xl font-bold text-blue-700 mb-1">{edu.school}</h3>
            <div className="text-gray-700 font-medium">{edu.degree} <span className="text-gray-400">| {edu.years}</span></div>
            <div className="mt-2 text-gray-500 ">{edu.details.label} <span className="font-bold">{edu.details.value}</span></div>
          </div>
          <img
            src={edu.logo}
            alt={edu.alt}
            className="ml-6 w-20 h-20 object-contain rounded"
            style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '60px', minHeight: '60px' }}
          />
        </motion.div>
      ))}
    </div>
  );
}
