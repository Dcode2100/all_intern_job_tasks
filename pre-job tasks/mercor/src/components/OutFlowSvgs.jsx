import React from "react"
import "../styles/common.css"
const OutFlowSvgs = () => {
  return (
    <div className="outflowsvgs absolute z-[0] h-[100vh] max-md:h-[100%]  max-md:top-0 w-full ">
      <img
        className="z-0 absolute top-[15%] left-[15%] max-md:top-[15%] max-md:left-[12%]"
        src="./cube.svg"
        alt="Cube"
      />
      <img
        className="z-[-1] absolute bottom-[6%] left-[11%] max-md:bottom-[6%] max-md:left-[8%]"
        src="./cubes.svg"
        alt="Cube"
      />
      <img
        className="z-0 absolute right-[10%] top-[10%] max-md:right-[3%] max-md:top-[10%]"
        src="./stairs.svg"
        alt="Cube"
      />
      <img
        className="z-0 absolute bottom-[0%] right-[22%] max-md:bottom-0 max-md:right-[8%]"
        src="./pillarone.svg"
        alt="Cube"
      />
    </div>
  );
};

export default OutFlowSvgs;
