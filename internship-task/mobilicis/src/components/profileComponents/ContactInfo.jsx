import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleEditing, updateProfileField } from "@/redux/profileSlice";

const ContactInfoContainerReusable = ({ label, field }) => {
    
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.profile[field]);

  const isEditing = useSelector((state) => state.profile.isEditing);

  const handleInputChange = (e) => {
    const value = e.target.value;

    
  };

  const handleButtonClick = () => {
    dispatch(toggleEditing());
  };

  return (
    <div className="flex justify-between relative">
      <div className="left-section flex flex-col gap-[8.33px]">
        <p className="title text-stone-900 text-opacity-70 text-[10.67px] font-medium">
          {label}
        </p>
        {isEditing ? (
          <input
            className="text-neutral-800 text-opacity-90 text-[10.67px] font-medium"
            value={field}
            onChange={handleInputChange}
          />
        ) : (
          <div className="text-neutral-800 text-opacity-90 text-[10.67px] font-medium">
            {profileData}
          </div>
        )}
      </div>
      <button
        onClick={handleButtonClick}
        className=" flex cursor-pointer right-section text-stone-900 w-[40.89px] h-4 text-opacity-80 text-[6.46px] font-medium bg-indigo-50 rounded-[64.59px] items-center justify-center relative "
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="mt-[21px] shadow flex flex-col gap-[17.22px] border rounded-[4.444px] py-[16px] px-[14.22px] ">
      <ContactInfoContainerReusable label="Your Name" field="name" />
      <ContactInfoContainerReusable label="Email" field="email" />
      <ContactInfoContainerReusable label="Phone Number" field="phone" />
    </div>
  );
};

export default ContactInfo;
