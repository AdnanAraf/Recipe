import { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import Blog from "../Blog/Blog";

const PdfDownload = () => {
  return (
    <PDFViewer>
            
      <Blog />
          
    </PDFViewer>
  );
};

export default PdfDownload;
