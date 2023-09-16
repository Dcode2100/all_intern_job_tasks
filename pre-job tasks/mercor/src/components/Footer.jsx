import React from "react";
import AppLinkButton from "./AppLinkButton";

import FramesIcon from "./FramesIcon";
import ArrowButton from "./ArrowButton";

const Footer = () => {
  return (
    <div className="flex justify-between max-md:justify-center  px-[60px] max-md:px-[10%] max-md:mt-4 w-full max-md:flex-wrap max-md:gap-8  absolute items-center max-md:relative  bottom-0  mb-[25px]">
      <div className="Footer-button gap-[20px] flex  max-xs:flex-col  ">
        <AppLinkButton icon={"./applelogo.png"} title={"APP STORE"} />
        <AppLinkButton icon={"./playstoresvg.png"} title={"GOOGLE PLAY"} />
      </div>
      <div className="downarrow absolute max-md:hidden top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <ArrowButton />
      </div>
      <span className=" footer-text absolute max-md:relative max-md:right-0 right-[16rem] max-w-[370px] max-md:max-w-[90%]">
        Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
        our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
        trading offered by Cash App. Cash App Investing does not trade bitcoin
        and Cash App is not a member of FINRA or SIPC. Cash App facilitates
        banking services through Sutton Bank and Lincoln Savings Bank, Members
        FDIC.
      </span>
      <div className="frames flex gap-[30px] cursor-pointer hover:text-greenradium">
        <FramesIcon icon={"./Frame.svg"} />
        <FramesIcon icon={"./Frame-1.svg"} />
        <FramesIcon icon={"./Frame-2.svg"} />
      </div>
    </div>
  );
};

export default Footer;
