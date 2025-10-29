import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Image Forgery Detection System using CNN',
    tech: 'Python, TensorFlow, Keras, CASIA2 Dataset',
    link: 'https://github.com/Shubham-741/Image-Forgery-Identification-System',
    paperLink: 'https://drive.google.com/file/d/1duttCHhq0sdzn7Z7Nqer2_h32hE4BkBI/view?usp=sharing',
    image: null,
    details: [
      'Built a custom lightweight CNN model to detect and classify authentic vs forged images, achieving 94.2% accuracy on the CASIA2 dataset.',
      'Integrated dropout regularization, early stopping, and Adam optimization for efficient training and stable convergence.',
      'Compared performance with state-of-the-art transfer learning models, demonstrating higher efficiency for mobile and edge-based forensic applications.',
      'Research paper presented and accepted at IEEE Madhya Pradesh Section Conference 2025.',
    ],
  },
  {
    title: 'Adaptive Traffic Control System',
    tech: 'Python, YOLOv3, OpenCV',
    link: 'https://github.com/Shubham-741/Adaptive-Traffic-Control',
    paperLink: 'https://ieeexplore.ieee.org/document/11134192',
    image: null,
    details: [
      'Engineered an adaptive traffic signal model using YOLOv3-based vehicle detection, lane segmentation, and weighted density computation to dynamically optimize signal timings.',
      'Integrated YOLOv3 object detection for accurate vehicle recognition and traffic density estimation.',
      'Validated on real-world traffic datasets, achieving 90.8% detection accuracy in optimized traffic flow; research published in 2024 4th International Conference on Innovative Sustainable Computational Technologies (CISCT)',
    ],
  },
  {
    title: 'Cab Booking and Management System',
    tech: "Node.js, JavaScript, MySQL, Dijkstra's Algorithm, RESTful APIs",
    link: 'https://github.com/Shubham-741/Cab-Booking-Management-System',
    image: '/projects/cab-booking.png',
    details: [
      'Developed a real-time cab booking backend using Node.js and RESTful APIs, integrating Dijkstra’s algorithm for efficient shortest-path and fare computation.',
      'Implemented MySQL as the relational data store, enabling driver assignment, route-based fare calculation, and dynamic booking operations with optimal latency.',
    ],
  },
  {
  title: 'News Authenticity Checker',
  tech: 'Python, Flask, Google Custom Search API, HTML, CSS',
  link: 'https://github.com/Shubham-741/grammar_scoring_engine',
  image: '/projects/news-app.png',
  details: [
    'Developed a Flask web app that verifies the authenticity of news articles using the Google Custom Search API.',
    'Implemented a credibility-based algorithm that classifies news as TRUE, FAKE, or REVIEW NEEDED by analyzing trusted and fact-checking sources.',
    'Designed a responsive frontend with HTML and CSS to display real-time verification results and supporting evidence links.',
    'Integrated configurable trusted domains and adjustable search parameters for flexible and accurate news validation.',
  ],
},

  {
  title: 'Pill Identification System',
  tech: 'Python, TensorFlow, OpenCV, Flask, CNN',
  link: 'https://github.com/Shubham-741/Pill-Identification-System',
  image: '/projects/pill_identify.jpg',
  details: [
    'Built an AI-based web app that identifies pills from uploaded images using a custom CNN model trained in TensorFlow.',
    'Implemented image preprocessing with OpenCV to enhance recognition accuracy and reliability.',
    'Developed a Flask interface for real-time image upload, prediction, and confidence-based result display.',
  ],
},

  {
  title: 'Grammar Scoring Engine',
  tech: 'Python, Whisper, LanguageTool, Flask, NLP',
  link: 'https://github.com/Shubham-741/grammar_scoring_engine',
  details: [
    'Built an AI-powered grammar evaluation system that transcribes MP3 audio using OpenAI’s Whisper model and analyzes grammar with LanguageTool.',
    'Implemented grammar scoring logic (out of 100) with detailed feedback and correction suggestions for each detected issue.',
    'Designed a Flask-based backend supporting seamless speech-to-text processing and NLP-driven grammar assessment.',
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
          {proj.image && (
            <div className="flex justify-center mb-3">
              <img
                src={proj.image}
                alt={`${proj.title} Preview`}
                className="w-12 h-12 object-contain"
                style={{ minWidth: '64px' }}
              />
            </div>
          )}
          <div className="text-gray-700 font-medium mb-2">{proj.tech}</div>
          <div className="flex gap-4 mb-2">
            <a href={proj.link} target="_blank" rel="noopener" className="text-blue-600 hover:underline font-semibold">GitHub</a>
            {proj.paperLink && (
              <a href={proj.paperLink} target="_blank" rel="noopener" className="text-blue-600 hover:underline font-semibold">View Paper</a>
            )}
          </div>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            {proj.details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
