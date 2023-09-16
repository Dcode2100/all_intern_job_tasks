import React from "react";
import HyperDrive from "../motionComponents/HyperDrive";
import Header from "./Header";
import CashAppText from "../motionComponents/CashAppText";
import OutFlowSvgs from "./OutFlowSvgs";
import Footer from "./Footer";

const HeroSection = () => {
  return (
    <div className="Herosection">
      <Header />
      <HyperDrive />
      <div className="Herosection-content__cashapp   absolute flex top-0 justify-center items-center max-md:h-[100vh] h-full w-full bg-transparent">
        <CashAppText />
        <OutFlowSvgs />
      </div>
      <Footer />
    </div>
  );
};

export default HeroSection;
