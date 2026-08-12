import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Samsung R&D Institute India, Delhi",
    role: "Software Engineer – Design & Operations Of Cloud Platforms",
    period: "Feb 2026 – Present",
    details: [
      "Designed and implemented a distributed backend platform for Samsung TV+’s QC Automation using Python, Flask, Redis, MQTT, MySQL, and REST APIs, automating content validation for 4,000+ Live TV channels and VOD assets, processing 10,000+ validation jobs/day while reducing manual effort by 80%.",
      "Built cloud-native, event-driven microservices for the QC Automation Platform using AWS EC2, Lambda, S3, SNS, RDS, CloudFront, IAM, Redis, Linux workers, and FFmpeg for asynchronous, fault-tolerant media processing.",
      "Contributed to the Samsung Stream Monitoring System by building distributed monitoring pipelines for concurrent analysis of 4,000+ live channels, validating HLS (M3U8) playlists, MPEG-TS segments, subtitles, bitrate variants, and stream availability, achieving 92% anomaly detection accuracy while reducing incident detection time by 60%.",
      "Built observability pipelines using Python, Datadog, CASCADA, and MySQL to analyze streaming telemetry across 4,000+ channels, enabling automated release validation, production monitoring, and rapid incident diagnosis."
    ],
    logo: "/Experience/samsung.png",
    alt: "Samsung Logo",
  },
  {
    company: "Samsung R&D Institute India, Delhi",
    role: "Software Engineer Trainee",
    period: "Aug 2025 – Feb 2026",
    details: [
      "Developed scalable metadata ingestion pipelines using Python, PostgreSQL, SQL, and AWS to process high-volume Samsung TV+ content feeds supporting content discovery and delivery services.",
      "Contributed to Samsung TV+’s Click-to-Search (CTS) by developing Computer Vision-based image retrieval models using CLIP and Vision Transformer (ViT) on 500K+ image snippets, achieving 95% retrieval accuracy. Built optimized PostgreSQL indexing for low-latency search across actors, directors, filmography, shows, and scene descriptions."
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
