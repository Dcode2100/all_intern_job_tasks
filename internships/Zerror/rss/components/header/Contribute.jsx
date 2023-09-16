import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Contribute = () => {
  return (
    <>
      <div className="contribute">
        <div className="contribute-para">
          <p>Blah blah blah</p>
        </div>
        <div className="button-container " style={{ zoom: "0.9" }}>
          <button className="form-button flex-all">
            <span>Contribute</span>
            <div className="arrow-container">
              <div className="arrow-top flex-all">
                <BsArrowRight />
              </div>
              <div className="arrow-bottom flex-all">
                <BsArrowRight />
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Contribute;
