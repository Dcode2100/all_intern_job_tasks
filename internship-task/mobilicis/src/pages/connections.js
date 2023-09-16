import React from "react";
import Layout from "@/components/Layout";
import MyConnections from "@/components/ConnectionCard";
import ConnectionCard from "@/components/ConnectionCard";


const connections = () => {
  return (
    <Layout>
      <div className="connections w-full flex flex-col mt-[18.22px] ml-[18.22px] gap-[4rem]">
        <div className="flex flex-col ">
          <div className=" w-full h-[169px] max-sm:h-[60px] max-w-[90%] mb-[22px]  bg-indigo-900 relative rounded-[8.89px] max-md:rounded-[2.78px] border border-white">
            <span className="left-[14.22px] w-min top-[14.22px] max-sm:left-[10px] max-sm:top-[8px] relative text-white text-[30px] max-sm:text-[20px] font-medium">
              My Connections
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-[3rem]">
          <ConnectionCard />
          <ConnectionCard />
          </div>
        </div>
        <div className="connection-suggestion  ">
          <div className="text-neutral-800 text-opacity-90 text-3xl mb-[22px] ml-[15px] font-normal ">
            People you can also connect
          </div>
          <div className="flex flex-col sm:flex-row gap-[3rem] ">
            <ConnectionCard />
            <ConnectionCard />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default connections;
