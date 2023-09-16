import Footer from "components/Footer";
import Wing from "components/Wing";
import React from "react";
import Header from "../../../components/header/Header";
const mahila = () => {
  return (
    <>
     <div className="about-header">
        <Header />
      </div>
      <div style={{marginTop:"5.3rem"}}>
        <Wing
          stitle={"mahila"}
          title={`MAHILA`}
          qimg1={`/mahila/qmahila1.jpg`}
          qimg2={`/mahila/qmahila2.jpg`}
          qimg3={`/mahila/qmahila3.jpg`}
          qimg4={`/mahila/qmahila4.jpg`}
          simg1={`/mahila/smahila1.jpg`}
          simg2={`/mahila/smahila2.jpg`}
          simg3={`/mahila/smahila3.jpg`}
          simg4={`/mahila/smahila4.jpg`}
        />
      </div>
      <Footer />
    </>
  );
};

export default mahila;
