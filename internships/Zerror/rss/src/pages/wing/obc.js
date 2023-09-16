import Footer from "components/Footer";
import Wing from "components/Wing";
import React from "react";
import Header from "../../../components/header/Header";

const obc = () => {
  return (
    <>
   <div className="about-header">
        <Header />
      </div>
      <div style={{marginTop:"5.3rem"}}>
        <Wing
          stitle={"obc"}
          title={`OBC`}
          qimg1={`/obc/qobc1.jpg`}
          qimg2={`/obc/qobc2.jpg`}
          qimg3={`/obc/qobc3.jpg`}
          qimg4={`/obc/qobc4.jpg`}
          simg1={`/obc/sobc1.jpg`}
          simg2={`/obc/sobc2.jpg`}
          simg3={`/obc/sobc3.jpg`}
          simg4={`/obc/sobc4.jpg`}
        />
      </div>
      <Footer />
    </>
  );
};

export default obc;
