import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  "Top 4% of B.Tech (CSE) cohort | Dean’s List Award for Academic Excellence | CGPA: 9.63 / 10",
  "Secured 95% in CBSE Class 10 with Merit Certificate and 91.66% in Class 12",
   "Top 2.3% worldwide in LeetCode",
  "Rated 5 star HackerRank and 4 star CodeChef",
  "Knight-rated on LeetCode (Rating: 2017); solved 600+ problems.",
 
];

export default function AchievementList() {
  return (
    <motion.ul
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 list-disc ml-6 text-gray-700"
    >
      {achievements.map((ach, idx) => (
        <li key={idx} className="mb-2 font-medium text-gray-700">{ach}</li>
      ))}
    </motion.ul>
  );
}
