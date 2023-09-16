import React, { useState } from "react";
import Link from "next/link";

const SidebarNav = ({ title, isActive, link,setActiveLink }) => {
  return (
    <Link href={`/${link}`} onClick={() => setActiveLink(() => title)}>
      <div className={`h-min flex justify-center items-center ${isActive ? "active-link" : ""}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full mr-[11px]"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <path
            d="M6.11108 10.7778L9.66664 7.22223L6.11108 3.66667"
            stroke="#9197B3"
            strokeWidth="1.77778"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className={`w-[164px] h-[47px] flex ${isActive ? "border rounded-[8.89px] shadow" : ""} border-indigo-900 items-center justify-center text-indigo-950 text-xl cursor-pointer font-normal`}>
          {title}
        </div>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("profile");
  

  return (
    <div className="bg-white max-sm:hidden h-screen flex-col w-[20%] max-lg:w-[30%]  pt-8 z-1 flex justify-between  border">
      <div className="flex flex-col gap-[36px]">
        <div className="w-full flex justify-end pr-[14px]">
          <h3 className="text-neutral-800 text-opacity-90 text-2xl font-medium w-min h-[47px] flex justify-end px-5 items-center rounded-[8.89px] shadow border border-black border-opacity-20">
            Dashboard
          </h3>
        </div>
        <div className="flex flex-col gap-[25px]">
          <SidebarNav
            title={"Profile"}
            link={"profile"}
            isActive={activeLink === "profile"}
            setActiveLink={() => setActiveLink("profile")}
          />
          <SidebarNav
            title={"Connections"}
            link={"connections"}
            isActive={activeLink === "connections"}
            setActiveLink={() => setActiveLink("connections")}
          />
          {/* Add more SidebarNav components for other links */}
        </div>
      </div>
      <div className="text-neutral-800 text-opacity-90 text-base font-medium p-8 text-center cursor-pointer">
        Log Out
      </div>
    </div>
  );
};

export default Sidebar;
