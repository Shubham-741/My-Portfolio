import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Python', 'C++', 'Java', 'Django', 'REST APIs', 'OOP', 'System Design', 'Operating Systems',
  'Linux/Windows Internals', 'Computer Networking', 'AI/ML', 'Data Science', 'Data Structures and Algorithms (C++)',
  'Git', 'Docker', 'Agile (Scrum)', 'JIRA', 'MySQL', 'MongoDB',
  'Quick Learner', 'Problem Solving', 'Self-Motivated', 'Team Collaboration', 'Integrity', 'Adaptability',
];

export default function SkillList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex flex-wrap gap-3"
    >
      {skills.map((skill, idx) => (
        <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
          {skill}
        </span>
      ))}
    </motion.div>
  );
}
