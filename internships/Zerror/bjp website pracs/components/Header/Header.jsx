import React, { useState } from "react";
import { links } from "../../public/common";
import { AiOutlineMenu } from "react-icons/ai";
import Menuitems from "../Header/Dropdown/Menuitems";
import Link from "next/link";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="header-container ">
      <div className="header-left-container">
        <Link href="/">
          <img src="/favion.ico" alt="BJYM Logo" />
        </Link>
        <div className="navbar-drop-down">
          <button onClick={() => setActive((prev) => !prev)}>
            {active ? <>op</> : <AiOutlineMenu />}
          </button>
          <div className="navbar-drop-down-item">
            {active
              ? links.map((link, index) => {
                  return <Menuitems key={index} items={link} />;
                })
              : ""}
          </div>
        </div>
      </div>

      <ul className="navlink-container">
        {links.map((link, index) => {
          return <Menuitems key={index} items={link} />;
        })}
      </ul>

      <div className="header-right-container">
        <button>fjhd</button>
        <img
          className="bjp-logo"
          src="https://bjym.org/wp-content/uploads/2021/09/bharatiya-janata-party-logos-download-3-1.png"
        ></img>
      </div>
    </div>
  );
};

export default Header;
