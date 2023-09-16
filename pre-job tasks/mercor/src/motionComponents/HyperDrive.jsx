import React from "react";
import "../styles/hyperdrive.css";
const HyperDrive = () => {
  return (
    <div className="scene-wrapper z-[-20] ">
      <div className="scene">
        <div className="wrap">
          <div className="wall wall-right"></div>
          <div className="wall wall-left"></div>
          <div className="wall wall-top"></div>
          <div className="wall wall-bottom"></div>
          <div className="wall wall-back"></div>
        </div>
        <div className="wrap">
          <div className="wall wall-right"></div>
          <div className="wall wall-left"></div>
          <div className="wall wall-top"></div>
          <div className="wall wall-bottom"></div>
          <div className="wall wall-back"></div>
        </div>
      </div>
    </div>
  );
};

export default HyperDrive;
