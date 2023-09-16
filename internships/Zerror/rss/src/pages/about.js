import React from "react";
import Footer from "components/Footer";
import Leadership from "components/about/Leadership";
import Ourstory from "components/about/Ourstory";
import Visionmission from "components/about/Vision";
import Vision from "components/about/Vision";
import Header from "../../components/header/Header";

const ourstory = () => {
  return (
    <div>
      <div className="about-header">
        <Header />
      </div>

      <Ourstory/>
      <Leadership />
      <Vision/>
      {/* <Visionmission /> */}
      <Footer />
    </div>
  );
};

export default ourstory;
