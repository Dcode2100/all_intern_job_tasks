import Footer from "components/Footer";
import Wing from "components/Wing";
import React from "react";
import Header from "../../../components/header/Header";
const yuva = () => {
  return (
    <>
      <div className="about-header">
        <Header />
      </div>

      <div style={{marginTop:"5.3rem"}}>
        <Wing
          stitle={"yuva"}
          title={`YUVA`}
          qimg1={`/yuva/qyuva1.jpg`}
          qimg2={`/yuva/qyuva2.jpg`}
          qimg3={`/yuva/qyuva3.jpg`}
          qimg4={`/yuva/qyuva4.jpg`}
          simg1={`/yuva/syuva1.webp`}
          simg2={`/yuva/syuva2.jpg`}
          simg3={`/yuva/syuva3.jpg`}
          simg4={`/yuva/syuva4.jpg`}
        />
      </div>
      <Footer />
    </>
  );
};

export default yuva;
