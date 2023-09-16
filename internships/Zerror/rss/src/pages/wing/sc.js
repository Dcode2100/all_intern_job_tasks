import Wing from "components/Wing";
import React from "react";
import Header from "../../../components/header/Header";
import Footer from "components/Footer";

const sc = () => {
  return (
    <>
      <div className="about-header">
        <Header />
      </div>
      <div style={{marginTop:"5.3rem"}}>
        <Wing
          stitle={"sc"}
          title={`SC`}
          qimg1={`/sc/qsc1.jpg`}
          qimg2={`/sc/qsc2.jpg`}
          qimg3={`/sc/qsc3.jpg`}
          qimg4={`/sc/qsc4.jpg`}
          simg1={`/sc/ssc1.jpg`}
          simg2={`/sc/ssc2.jpg`}
          simg3={`/sc/ssc3.jpg`}
          simg4={`/sc/ssc4.jpg`}
        />
      </div>
      <Footer />
    </>
  );
};

export default sc;
