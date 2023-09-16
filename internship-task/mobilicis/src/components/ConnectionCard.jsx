import React from "react";
import Image from "next/image";

const ConnectionCard = () => {
  return (
    <div className="connection-card  gap-[0.5rem] w-max h-[119px] relative rounded shadow border justify-between flex items-center border-black border-opacity-20 px-[8px]">
      <div className="flex flex-col gap-[15px]">
        <div className="flex flex-col gap-[5px]">
          <div className="text-neutral-800 text-opacity-90 text-[10.67px] font-medium">
            Vishnu Swaroop
          </div>
          <div className="text-gray-400 text-[10.67px] flex flex-col ">
            <span>Full stack developer</span> <span>@orpuhones</span>
          </div>
        </div>
        <div className="w-28 h-4 pl-1.5 pr-2 whitespace-nowrap  bg-violet-300 text-stone-900 text-opacity-80 text-[11px] font-medium rounded-[64.59px] justify-center items-center inline-flex">
          Remove Connection
        </div>
      </div>

      <img
        className="w-[88.89px] h-[88.89px] rounded-full shadow border border-slate-50"
        src="/assets/svg/usericon.png"
      />
    </div>
  );
};

export default ConnectionCard;
