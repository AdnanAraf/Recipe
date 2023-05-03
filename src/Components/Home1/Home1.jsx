import React from "react";
import Template from "../template/Template";
import Categories from "../Categories/Categories";
import Section1 from "../ExtraSection/Section1";
import Section2 from "../ExtraSection/Section2";
import Footer from "../Footer/Footer";
import PdfDownload from "../PdfDownload/PdfDownload";

const Home1 = () => {
  return (
    <div>
      <Template />
      <Categories />
      <Section1 />
      <Section2 />
      <PdfDownload />
    </div>
  );
};

export default Home1;
