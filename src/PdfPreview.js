import React from "react";
import { Document } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

function PDFPreview({ pdfUrl }) {
  const options = {
    cMapUrl: pdfUrl,
  };

  return (
    <div>
      {/* <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document> */}
      <Document options={options} />;
    </div>
  );
}

export default PDFPreview;
