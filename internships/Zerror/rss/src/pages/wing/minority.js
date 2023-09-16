import Footer from "components/Footer";
import Wing from "components/Wing";
import React from "react";
import Header from "../../../components/header/Header";

const minority = () => {
  return (
    <>
      <div className="about-header">
        <Header />
      </div>
      <div style={{marginTop:"5.3rem"}}>
        <Wing
          stitle={"minority"}
          title={`MINORITY`}
          qimg1={`/minority/qminority1.jpg`}
          qimg2={`/minority/qminority2.jpg`}
          qimg3={`/minority/qminority3.jpg`}
          qimg4={`/minority/qminority4.jpg`}
          simg1={`/minority/sminority1.jpg`}
          simg2={`/minority/sminority2.jpg`}
          simg3={`/minority/sminority3.jpg`}
          simg4={`/minority/sminority4.jpg`}
        />
      </div>
      <Footer />
    </>
  );
};

export default minority;
