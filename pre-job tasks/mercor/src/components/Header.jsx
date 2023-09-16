import React from "react";
import { motion } from "framer-motion";
import "../styles/common.css";
import { containerstyle, itemstyle } from "../motionComponents/CommonStyle";

const Navitems = [
  { id: 1, itemname: "sign in" },
  { id: 2, itemname: "legal" },
  { id: 3, itemname: "licenses" },
  { id: 4, itemname: "security" },
  { id: 5, itemname: "careers" },
  { id: 6, itemname: "press" },
  { id: 7, itemname: "support" },
  { id: 8, itemname: "status" },
  { id: 9, itemname: "codeblog" },
];

const Navigation = () => {
  return (
    <motion.ul
      className="containerstyle w-min items-center gap-[20px]  inline-flex  z-[1] h-min"
      variants={containerstyle}
      initial="hidden"
      animate="visible"
    >
      {Navitems.map((item) => (
        <motion.li
          key={item.id}
          className="itemstyle text-[12px] font-extrabold leading-[18px] tracking-[0.5px] hover:text-greenradium duration-300 cursor-pointer whitespace-nowrap"
          variants={itemstyle}
        >
          {item.itemname.toUpperCase()}
        </motion.li>
      ))}
    </motion.ul>
  );
};

const NavigationSmallDevices = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center"
        onClick={() => setOpen((next) => !next)}
      >
        {!isOpen && <img src="./menu.svg"></img>}
      </button>
      <div className="flex items-center relative justify-center flex-col ">
        <button
          className="relative flex items-center justify-center"
          onClick={() => setOpen((next) => !next)}
        >
          {isOpen && <img src="./cross.svg"></img>}
        </button>
        <div
          className={`bg-white text-greenradium flex transition-all duration-150 flex-col border absolute right-0 z-100 top-[32px] max-h-[20rem] overflow-y-scroll ${
            isOpen && "translate-x-[0%]"
          } ${!isOpen && "translate-x-[120%]"}`}
          style={{ zIndex: "50!important" }}
        >
          {isOpen &&
            Navitems.map((item) => {
              return (
                <button
                  key={item.id}
                  className="itemstyle border py-3 px-4 text-[12px] text-black font-extrabold leading-[18px] tracking-[0.5px] hover:text-greenradium duration-300 cursor-pointer whitespace-nowrap"
                  onClick={() => setOpen(!isOpen)}
                >
                  {item.itemname.toUpperCase()}
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
};

const Header = () => (
  <div className=" flex absolute z-10 py-[25px] px-[60px] max-md:py-[25px] max-md:px-[25px] items-center w-full justify-between">
    <img className="" src={"./dollar.svg"} />
    <div className="max-md:hidden">
      <Navigation />
    </div>
    <div className="md:hidden">
      <NavigationSmallDevices />
    </div>
    <img className="max-md:hidden" src="./eye.svg" />
  </div>
);

export default Header;
