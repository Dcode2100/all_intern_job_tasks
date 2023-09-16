import React from "react";
import { AiOutlineSearch, AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";

const SearchBarSecond = ({ handleSearch, onClick }) => {
  return (
    <div className="relative mb-[50px]">
      <input
        className="w-full p-2 pl-10 border-2 border-gray-300 bg-black text-white rounded-md focus:outline-none focus:border-green-500"
        type="text"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
        <AiOutlineSearch className="text-white" />
      </div>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white rounded-md p-1 hover:bg-green-600 focus:outline-none"
        onClick={onClick}
        style={{
          marginLeft: "-32px", // Adjust this value as needed
        }}
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default SearchBarSecond;
