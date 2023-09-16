import { async } from "@firebase/util";
import React, { useState } from "react";
import { doc, setDoc, db, updateDoc } from "./firebase";
import Image from "next/image";
import { BsArrowRight, BsEmojiSmile } from "react-icons/bs";
import Link from "next/link";
import dynamic from "next/dynamic";
import { CgMail } from "react-icons/cg";
import Address from "../components/Address";

const Map = dynamic(() => import("../components/Indiamap"), {
  ssr: false,
});

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [error, setError] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    let regex = user.email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (!user.name) {
      formErrors.name = "*Name is Required";
    }
    if (!user.phone) {
      formErrors.phone = "*Contact no is Required";
    }
    if (!user.email) {
      formErrors.email = "*Email is Required";
    } else if (!regex) {
      formErrors.email = "*This is not a valid email format";
    }
    if (formErrors == {}) return true;
    setError(formErrors);
    return false;
  };
  const submit = async () => {
    if (validate()) {
      try {
        const userRef = doc(db, "cities", `${user.email}`);
        await setDoc(userRef, {
          name: user.name,
          email: user.email,
          phone: user.phone,
          message: user.message,
        });
        console.log("Document successfully updated!");
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    }
  };

  return (
    <>
      {/* <Image className="form-image" src="/contactbg.jpg" width={100} height={100}/> */}
      <div className="form">
        <div className="form-map-container">
          <div className="form-map-container-left flex-all">
            <div className="form-container flex-all " style={{ zoom: "0.9" }}>
              <div className="form-heading-p">
                <p className="form-heading ">We're here to help!</p>
              </div>
              <div className="form-heading2-p">
                <p className="form-heading2 ">
                  Fill out the form with any quarry on your mind and we'll get
                  back to you as soon as possible
                </p>
              </div>
              <div className="first-row-container">
                <div className="form-input-container">
                  <p>Your name</p>
                  <input
                    value={user.name}
                    name="name"
                    onChange={handleInputs}
                    className="inptFld"
                    placeholder="nare shah"
                  />
                  <div className="error">
                    {error.name && <p className="form-error">{error.name}</p>}
                  </div>
                </div>
                <div className="form-input-container">
                  <p>Your email</p>
                  <input
                    value={user.email}
                    name="email"
                    onChange={handleInputs}
                    className="inptFld"
                    placeholder="xyz@gmail.com"
                  />

                  {error.email && <p className="form-error">{error.email}</p>}
                </div>
              </div>
              <div className="second-row-container">
                <div className="form-input-container">
                  <p>Your phone</p>
                  <input
                    value={user.phone}
                    name="phone"
                    onChange={handleInputs}
                    className="inptFld"
                    placeholder="9234963XXX"
                  />

                  {error.phone && <p className="form-error">{error.phone}</p>}
                </div>
                <div className="form-input-container">
                  <p>Your address</p>
                  <input
                    value={user.address}
                    name="address"
                    onChange={handleInputs}
                    className="inptFld"
                    placeholder="your address"
                  />

                  {error.phone && <p className="form-error">{error.phone}</p>}
                </div>
              </div>
              <div className="text-container">
                <p>Message</p>
                <textarea
                  className="inptFld"
                  name="message"
                  required
                ></textarea>

                {error.message && <p className="form-error">{error.message}</p>}
              </div>
              <div className="button-container " style={{ zoom: "0.9" }}>
                <button className="form-button flex-all" onClick={submit}>
                  <span>Contact Us</span>
                  <div className="arrow-container">
                    <div className="arrow-top flex-all">
                      <BsArrowRight />
                    </div>
                    <div className="arrow-bottom flex-all">
                      <BsArrowRight />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="form-map-container-right flex-all">
            <div className="map-container flex-all">
              <Map />
            </div>
          </div>
        </div>
        <Address />
      </div>
    </>
  );
};

export default Form;
