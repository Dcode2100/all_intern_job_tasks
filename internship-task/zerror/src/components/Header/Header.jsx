import React, { useState } from "react";
import { links } from "../../assets/common";
import { Link } from "react-router-dom";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import { Close, Menu } from "@mui/icons-material";
import Menuitems from "../Dropdown/Menuitems";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="header-container ">
      <div className="header-left-container">
        <Link to="/">
          <img
            src="https://bjym.org/wp-content/uploads/2021/09/bjym_logo.png"
            alt="BJYM Logo"
          />
        </Link>
        <div className="navbar-drop-down">
          <button onClick={() => setActive((prev) => !prev)}>
            {active ? <Close fontSize="large" /> : <Menu fontSize="large" />}
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
        <button>{<SearchIcon fontSize="large" />}</button>
        <img
          className="bjp-logo"
          src="https://bjym.org/wp-content/uploads/2021/09/bharatiya-janata-party-logos-download-3-1.png"
        ></img>
      </div>
    </div>
  );
};

export default Header;
