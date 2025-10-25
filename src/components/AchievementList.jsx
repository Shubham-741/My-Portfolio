import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  "Top 4% of the class in B.Tech (CSE). Dean’s List Award for Academic Excellence.",
  "Rated 5 star HackerRank, 4 star CodeChef (Rating: 1825) (shubham7711).",
  "Knight-rated on LeetCode (Rating: 2017); solved 500+ problems (shubham 778).",
  "OGrade in Artificial Intelligence and Machine Learning. A+ Grade in Computational Thinking and Programming, Design and Analysis of Algorithms, and Information Management Systems."
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
