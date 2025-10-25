import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Samsung R&D Institute India, Delhi",
    role: "Software Engineer Trainee",
    period: "Aug 2025– Present",
    details: [
      "Developing and enhancing cloud-based services for Samsung TV+...",
      "Building AI/ML-driven automation systems...",
      "Designing scalable microservices on AWS...",
      "Developing data analytics solutions (Python, Pandas, MySQL, Grafana)...",
    ],
  },
  {
    company: "Siemens EDA",
    role: "Software Engineer Intern",
    period: "July 2024– January 2025",
    details: [
      "Developed CVE Checker Tool 4.0 using Python, Django, and NVD APIs...",
      "Automated patch verification and kernel repository analysis...",
      "Automated report generation and Dockerized the tool...",
    ],
  },
];

export default function ExperienceCard() {
  return (
    <div className="space-y-6">
      {experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition"
        >
          <h3 className="text-xl font-bold text-blue-700 mb-1">{exp.company}</h3>
          <div className="text-gray-700 font-medium">{exp.role} <span className="text-gray-400">| {exp.period}</span></div>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            {exp.details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
