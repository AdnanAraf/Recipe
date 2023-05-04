import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import React from "react";
import Blog from "../Blog/Blog";

const PdfDownload = () => {
  return (
    <PDFDownloadLink>
      <Blog />
  
    </PDFDownloadLink>
  );
};

export default PdfDownload;
