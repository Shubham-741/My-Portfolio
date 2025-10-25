import React from 'react';
import { motion } from 'framer-motion';

export default function Section({ title, children }) {
  return (
    <motion.section
      id={arguments[0].id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto py-10 px-2 sm:px-0"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-2 tracking-tight">
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </motion.section>
  );
}
