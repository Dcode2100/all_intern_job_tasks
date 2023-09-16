import React from "react";

const EditButton = ({ title }) => {
  return (
    <button className=" flex cursor-pointer right-section text-stone-900 w-[40.89px] h-4 text-opacity-80 text-[6.46px] font-medium bg-indigo-50 rounded-[64.59px] items-center justify-center relative ">
      {title ? title : "Edit"}
    </button>
  );
};

export default EditButton;
