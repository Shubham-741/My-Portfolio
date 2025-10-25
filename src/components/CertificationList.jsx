
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    name: 'Problem Solving (Basic)', issuer: 'HackerRank', link: 'https://www.hackerrank.com/certificates/iframe/662d380fb1d8'
  },
  {
    name: 'Problem Solving (Intermediate)', issuer: 'HackerRank', link: 'https://www.hackerrank.com/certificates/iframe/93fa74790084'
  },
  {
    name: 'Introduction To Packet Tracer', issuer: 'Cisco Networking Academy', link: 'https://drive.google.com/file/d/1e_Auka7oDrsHKRcCJOvx44aAZhgdzxnS/view?usp=sharing'
  },
  {
    name: 'Network Essentials', issuer: 'Cisco Networking Academy', link: 'https://drive.google.com/file/d/1kuPj3hnOotLuPoiB7TBXVDnTn9Gk5JvZ/view?usp=sharing'
  },
  {
    name: 'AI and Climate Change', issuer: 'DeepLearning.AI', link: 'https://www.coursera.org/account/accomplishments/records/MCGSCNHZ6BUT'
  },
  {
    name: 'Data Modeling in Power BI', issuer: 'Microsoft', link: 'https://www.coursera.org/account/accomplishments/records/QFNQSKC8TNY7'
  },
  {
    name: 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization', issuer: 'DeepLearning.AI', link: 'https://www.coursera.org/account/accomplishments/records/QHZKPSW6RJRP'
  },
  {
    name: 'Introduction to Sustainability', issuer: 'University of Illinois Urbana-Champaign', link: 'https://www.coursera.org/account/accomplishments/records/DGDBC4SDQBC2'
  },
  {
    name: 'Python with Power BI: Analyzing Financial Data', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/records/6MJLUY5ALM9D'
  },
  {
    name: 'Urbanisation and Health - Promoting Sustainable Solutions', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/records/2CBK3AC8MRK8'
  },
  {
    name: 'What is Climate Change?', issuer: 'University of Colorado Boulder', link: 'https://www.coursera.org/account/accomplishments/records/GZA53EAEHVWG'
  },
  {
    name: 'LAMP - Linux, Apache, MySQL, PHP in Easy Steps', issuer: 'Infosys Springboard', link: 'https://drive.google.com/file/d/1L5bk1bvAnvcE3hjjhSaxIwcsT_HTfYrd/view?usp=sharing'
  },
  {
    name: 'Linux Fundamentals', issuer: 'Infosys Springboard', link: 'https://drive.google.com/file/d/1M2puDNHpHmWpogONo203xHMSE85sAbZ-/view?usp=sharing'
  },
  {
    name: 'Linux Practical - App Development with Linux', issuer: 'Infosys Springboard', link: 'https://drive.google.com/file/d/14PVaniKBwqABRMDuL5DQSX8bnt4m1LDa/view?usp=sharing'
  },
  {
    name: 'MySQL in Detail', issuer: 'Infosys Springboard', link: 'https://drive.google.com/file/d/1zjzGFv5rTmpRiRo0WA3Eg2YeHOtNkRRf/view?usp=sharing'
  },
  {
    name: 'PHP MySQL Training Course', issuer: 'Infosys Springboard', link: 'https://drive.google.com/file/d/12vcqDR1nkTjp3j4CKPso_8NmpIDIJCp1/view?usp=sharing'
  },
  {
    name: 'Introduction to Business Intelligence', issuer: 'Infosys Springboard', link: 'https://drive.google.com/file/d/1RLvhQB54MM1SrynabgI-bsh2Sj1niPx4/view?usp=sharing'
  },
  {
    name: 'Multidimensional Data Modeling', issuer: 'Infosys Springboard', link: 'https://drive.google.com/file/d/16q4oavY47zKXGBn_vFQQ0RkTXvRBJ_Kk/view?usp=sharing'
  },
  {
    name: 'Introduction to High-Performance and Parallel Computing', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/certificate/TRW9TATXZCPS'
  },
  {
    name: 'Natural Language Processing with Classification and Vector Spaces', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/certificate/E3TQ8E34L597'
  },
  {
    name: 'Natural Language Processing with Probabilistic Models', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/certificate/URUP9ZXR4L4A'
  },
  {
    name: 'Neural Networks and Deep Learning', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/certificate/ZFAZJKB64KDM'
  },
  {
    name: 'Simulation and modeling of natural processes', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/certificate/WYGSQDJ3YXZX'
  },
  {
    name: 'Specialized Models: Time Series and Survival Analysis', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/certificate/5SNYWJX72FT6'
  },
  {
    name: 'Fundamentals of Network Communication', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/certificate/QPMZY4A6MUKU'
  },
  {
    name: 'Foundations of Digital Marketing and E-commerce', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/certificate/QWQ4X6PMYJKP'
  },
  {
    name: 'Intellectual Property Law Specialization', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/2P4FN24SHR7L'
  },
  {
    name: 'Introduction to Intellectual Property', issuer: 'University of Pennsylvania', link: 'https://www.coursera.org/account/accomplishments/records/HLU7E6W4EN2W'
  },
  {
    name: 'Copyright Law', issuer: 'University of Pennsylvania', link: 'https://www.coursera.org/account/accomplishments/records/7QXDSK5DT6EE'
  },
  {
    name: 'Patent Law', issuer: 'University of Pennsylvania', link: 'https://www.coursera.org/account/accomplishments/records/Q99JXAZK6XKR'
  },
  {
    name: 'Predictive Modeling and Analytics', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/certificate/FB5XG82AR6S2'
  },
  {
    name: 'The Bits and Bytes of Computer Networking', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/certificate/3T3DSA66X8E8'
  },
  {
    name: 'Trademark Law', issuer: 'University of Pennsylvania', link: 'https://www.coursera.org/account/accomplishments/records/GL39B93UEL9L'
  },
  {
    name: 'From Likes to Leads: Interact with Customers Online', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/certificate/G2QFLURVBY9B'
  },
  {
    name: 'Introduction to Agile Testing', issuer: 'Infosys Springboard', link: 'https://drive.google.com/file/d/1rTLIFbiCh91YJruxmX6uS9SQMtjr6lTh/view?usp=sharing'
  },
  {
    name: 'Google Ads - Measurement Certification', issuer: 'Google', link: 'https://skillshop.exceedlms.com/student/award/xJk2fFkoKuJ7ckxJfGue5JSn'
  },
  {
    name: 'IBM Data Analyst Capstone Project', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/certificate/52HRM86TSLSA'
  },
  {
    name: 'IBM Data Analyst Specialization', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/B77DMWU6GTLU'
  },
  {
    name: 'Databases and SQL for Data Science with Python', issuer: 'IBM', link: 'https://www.coursera.org/account/accomplishments/records/WS2P3MRKZZX7'
  },
  {
    name: 'Excel Basics for Data Analysis', issuer: 'IBM', link: 'https://www.coursera.org/account/accomplishments/records/R8KQ7A2KW6M7'
  },
  {
    name: 'Introduction to Data Analytics', issuer: 'IBM', link: 'https://www.coursera.org/account/accomplishments/records/Z3T9TSAKDQJZ'
  },
  {
    name: 'Python Project for Data Science', issuer: 'IBM', link: 'https:https://www.coursera.org/account/accomplishments/records/F9BPGK3L6PWN'
  },
  {
    name: 'Python for Data Science, AI & Development', issuer: 'IBM', link: 'https://www.coursera.org/account/accomplishments/records/VNGXJ4J33BDL'
  },
  {
    name: 'Software Engineering: Software Design and Project Management', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/certificate/769K4HJ3H4ST'
  },
  {
    name: 'Microsoft Azure Fundamentals', issuer: 'Infispark', link: 'https://drive.google.com/file/d/14OloHkiKvRvJvMDOPJy1dyEX3kg9fnzW/view?usp=sharing'
  },
];

export default function CertificationList() {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
    >
      <button
        className="w-full text-left font-bold text-blue-700 text-lg mb-4 focus:outline-none flex justify-between items-center"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        Certifications ({certifications.length})
        <span className="ml-2 text-blue-400">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-3 hover:shadow transition flex flex-col">
              <a href={cert.link} target="_blank" rel="noopener" className="text-blue-600 font-semibold hover:underline truncate" title={cert.name}>{cert.name}</a>
              <span className="text-xs text-gray-500 mt-1">{cert.issuer}</span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
