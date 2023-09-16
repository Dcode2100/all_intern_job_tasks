import React from "react";

const MenuItems = ({ items, index, setDropdown }) => {
  return (
    <div
      className="menu-items flex-all"
      onMouseEnter={() => {
        items.submenu && setDropdown(index);
      }}
      onMouseLeave={() => {
        items.submenu && setDropdown(null);
      }}
    >
      <a key={index} href={items.path}>
        {items.title}
      </a>
    </div>
  );
};

export default MenuItems;
