import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Samsung R&D Institute India, Delhi",
    role: "Software Engineer Trainee",
    period: "Aug 2025– Present",
    details : [
  "Contributing to the Cloud Services Team to develop and enhance cloud-based infrastructure for Samsung TV+, ensuring smooth global delivery of live and on-demand video streams across TVs, mobiles, tablets, and Family Hub devices.",
  
  "Building AI/ML-driven automation systems to detect playback issues (looping, subtitle desync, audio glitches, pixelization, black screens, window boxing), minimizing manual QC through automation.",
  
  "Designing and deploying scalable, fault-tolerant microservices on AWS (EC2, S3, Lambda, CloudWatch) for real-time monitoring, automated content launches, and system benchmarking.",
  
  "Creating data analytics pipelines and dashboards using Python, Pandas, MySQL, and Grafana to generate actionable insights for streaming quality, user experience, and performance optimization."
  ],

    logo: "/Experience/samsung.png",
    alt: "Samsung Logo",
  },
  {
    company: "Siemens EDA",
    role: "Software Engineer Intern",
    period: "July 2024– January 2025",
    details: [
      "Worked in the Automotive Business Unit to develop CVE Checker Tool 4.0 using Python, Django, and NVD APIs, maintaining a local CVE database with continuous synchronization for low-latency vulnerability lookups.",
      
      "Automated patch verification and kernel repository analysis pipelines to detect unpatched Linux vulnerabilities, strengthening embedded software security.",
      
      "Implemented automated report generation and Dockerized the tool for scalable deployment within Siemens EDA’s security framework.",
      
      "Integrated the tool into CI/CD pipelines with logging and alerting mechanisms, improving security monitoring efficiency and reducing manual intervention."
    ],
    logo: "/Experience/siemens.png",
    alt: "Siemens Logo",
  },
   {
    company: "Celebal Technologies",
    role: "Data Science Intern",
    period: "May 2024 - July 2024",
    details: [
      "Developed and optimized models for ChestXRay Classification, Movie Recommendation System, Time Series Analysis, and Weather Prediction System, utilizing machine learning algorithms and data analysis techniques.",
      
      " Created a Power BI dashboard for Cricketers’ Performance Analysis, visualizing key performance indicators (KPIs) to provide actionable insights for performance evaluation and decision-making."
    ],
    logo: "/Experience/celebal.png",
    alt: "CelebalTech Logo",
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
          className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition flex items-center justify-between"
        >
          <div className="flex flex-col flex-1">
            <h3 className="text-xl font-bold text-blue-700 mb-1">{exp.company}</h3>
            <div className="text-gray-700 font-medium">{exp.role} <span className="text-gray-400">| {exp.period}</span></div>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              {exp.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
          <img
            src={exp.logo}
            alt={exp.alt}
            className="ml-6 w-20 h-20 object-contain rounded"
            style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '60px', minHeight: '60px' }}
          />
        </motion.div>
      ))}
    </div>
  );
}
