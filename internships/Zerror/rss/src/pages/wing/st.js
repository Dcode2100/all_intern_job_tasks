import Footer from "components/Footer";
import Wing from "components/Wing";
import React from "react";
import Header from "../../../components/header/Header";
const st = () => {
  return (
    <>
      <div className="about-header">
        <Header />
      </div>
      <div style={{marginTop:"5.3rem"}}>
        <Wing
          stitle={"st"}
          title={`ST`}
          qimg1={`/st/qst1.jpg`}
          qimg2={`/st/qst2.jpg`}
          qimg3={`/st/qst3.jpg`}
          qimg4={`/st/qst4.jpg`}
          simg1={`/st/sst1.jpg`}
          simg2={`/st/sst2.jpg`}
          simg3={`/st/sst3.jpg`}
          simg4={`/st/sst4.jpg`}
        />
      </div>
      <Footer />
    </>
  );
};

export default st;
