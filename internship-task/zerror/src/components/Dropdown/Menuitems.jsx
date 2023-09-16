import Dropdown from "./Dropdown";
import React, { useState } from "react";
import "./style.scss";

const MenuItems = ({ items }) => {
  
  const [dropdown, setDropdown] = useState(true);

  return (
    <li className="menu-items">
      {items.submenu ? (
        <>
          <button
            aria-expanded={dropdown ? "true" : "false"}
            className="dropdown-btn"
            style={{ color: "white" }}
            onClick={() => setDropdown((prev) => !prev)}
            type="button"
            aria-haspopup="menu"
          >
            <div>{items.title} </div>
          </button>
          <Dropdown dropdown={dropdown} submenus={items.submenu} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;
