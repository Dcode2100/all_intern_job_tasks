import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex relative">
      <Sidebar />
      <div className="w-full ">
        <Navbar />
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
