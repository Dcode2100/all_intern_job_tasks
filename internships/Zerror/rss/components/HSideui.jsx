import React from "react";
import { BiBook } from "react-icons/bi";
import { GiHeraldicSun } from "react-icons/gi";
import { FaRegIdCard, FaRegNewspaper } from "react-icons/fa";
const card = [
  { title: "VOLUNTEER WITH US", icon: "BIBook" },
  { title: "PRESS RELEASES", icon: "MdPhotoCameraFront" },
  { title: "HERALDS", icon: "BIBook" },
  { title: "MANIFESTO", icon: "BIBook" },
];
const HSideui = () => {
  return (
    <div className="hsideui">
      <div className="hsideui-container">
        <div
          className="hsideui-card flex-all"
          style={{ backgroundColor: "var(--primary-color)" }}
        >
          <div className="hsideui-card-container">
            <div className="hsideui-card-icon">
              <BiBook />
            </div>
            <div className="hsideui-card-title">RSS SANDESH</div>
          </div>
        </div>
        <div
          className="hsideui-card flex-all"
          style={{ border: " 2px solid var(--primary-color)"  }}
        >
          <div className="hsideui-card-container">
            <div className="hsideui-card-icon">
              <GiHeraldicSun/>
            </div>
            <div className="hsideui-card-title">HERALDS</div>
          </div>
        </div>
        <div
          className="hsideui-card flex-all"
          style={{ backgroundColor: "var(--primary-color)" }}
        >
          <div className="hsideui-card-container">
            <div className="hsideui-card-icon">
              <FaRegIdCard />
            </div>
            <div className="hsideui-card-title">MANIFESTO</div>
          </div>
        </div>
        <div
          className="hsideui-card flex-all"
          style={{ border: " 2px solid var(--primary-color)" }}
        >
          
          <div className="hsideui-card-container">
            <div className="hsideui-card-icon">
              <FaRegNewspaper />
            </div>
            <div className="hsideui-card-title">NEWSLETTER</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HSideui;
