import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Image Forgery Detection System using CNN',
    tech: 'Python, TensorFlow, Keras, CASIA2 Dataset',
    link: 'https://github.com/Shubham-741/ImageForgeryDetection',
    details: [
      'Developed a specialized lightweight CNN model for binary classification of authentic vs. forged images, achieving 94.2% accuracy on the CASIA2 dataset.',
      'Research paper presented and accepted at IEEE Madhya Pradesh Section Conference 2025.',
    ],
  },
  {
    title: 'Adaptive Traffic Control System',
    tech: 'Python, YOLOv3, OpenCV',
    link: 'https://github.com/Shubham-741/AdaptiveTrafficControl',
    details: [
      'Engineered an adaptive traffic signal model using YOLOv3-based vehicle detection, lane segmentation, and weighted density computation to dynamically optimize signal timings.',
      'Validated on real-world traffic datasets, achieving 90.8% detection accuracy in optimized traffic flow; research published in 2024 4th (CISCT).',
    ],
  },
  {
    title: 'Cab Booking and Management System',
    tech: 'Node.js, JavaScript, MySQL, Dijkstra’s Algorithm, RESTful APIs',
    link: 'https://github.com/Shubham-741/CabBookingSystem',
    details: [
      'Developed a real-time cab booking backend using Node.js and RESTful APIs, integrating Dijkstra’s algorithm for efficient shortest-path and fare computation.',
      'Implemented MySQL as the relational data store, enabling driver assignment, route-based fare calculation, and dynamic booking operations with optimal latency.',
    ],
  },
  {
    title: 'News Checker System',
    tech: 'Python, Django, REST API, NLP, React',
    link: 'https://github.com/Shubham-741/news_checker_system',
    details: [
      'Developed a full-stack web application to detect and flag fake news using advanced NLP techniques and machine learning models.',
      'Built with Django backend, RESTful API, and React frontend for real-time news verification and user-friendly experience.',
      'Integrated third-party news sources and automated credibility scoring for robust detection.',
    ],
  },
  {
    title: 'Pill Identification System',
    tech: 'Python, TensorFlow, OpenCV, FastAPI, React',
    link: 'https://github.com/Shubham-741/Pill-Identification-System',
    details: [
      'Developed an AI-powered system for identifying pills from images using deep learning and computer vision.',
      'Built with TensorFlow for model training, OpenCV for image processing, FastAPI for backend, and React for frontend.',
      'Supports real-time pill recognition and information retrieval for healthcare applications.',
    ],
  },
  {
    title: 'Grammar Scoring Engine',
    tech: 'Python, NLP, Flask, React',
    link: 'https://github.com/Shubham-741/grammar_scoring_engine',
    details: [
      'Created an automated engine to score and provide feedback on English grammar in written text using NLP techniques.',
      'Flask backend with REST API, React frontend for interactive grammar analysis and scoring.',
      'Integrates advanced language models for robust grammar evaluation and user feedback.',
    ],
  },
];

export default function ProjectCard() {
  return (
    <div className="space-y-6">
      {projects.map((proj, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition"
        >
          <h3 className="text-xl font-bold text-blue-700 mb-1">{proj.title}</h3>
          <div className="text-gray-700 font-medium mb-2">{proj.tech}</div>
          <a href={proj.link} target="_blank" rel="noopener" className="text-blue-600 hover:underline mb-2 block font-semibold">GitHub</a>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            {proj.details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
