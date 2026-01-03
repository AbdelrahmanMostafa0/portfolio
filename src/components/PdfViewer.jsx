import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

// Setup worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Document
        file="/resume.pdf"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderTextLayer={false}
          />
        ))}
      </Document>
    </div>
  );
};

export default PDFViewer;
