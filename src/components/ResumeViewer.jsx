import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// Use Vite's URL for the worker file from the installed pdfjs-dist package.
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.js?url';

export default function ResumeViewer() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <a
        href="/Shubham_SDE_Resume.pdf"
        download
        className="mb-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
      <div className="h-96">
        <Worker workerUrl={pdfWorker}>
          <Viewer fileUrl="/Shubham_SDE_Resume.pdf" />
        </Worker>
      </div>
    </div>
  );
}
