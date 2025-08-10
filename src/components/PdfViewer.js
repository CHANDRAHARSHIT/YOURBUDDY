import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Use local worker from node_modules
pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.js`;

export default function PdfViewer({ file }) {
  const [numPages, setNumPages] = React.useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        loading="Loading PDF..."
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={700}
          />
        ))}
      </Document>
    </div>
  );
}