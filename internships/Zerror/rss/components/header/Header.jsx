import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Menuitems from "./Menuitems";
import { links, login } from "../../public/common";
import Dubmenu from "./Dubmenu";
import { BiSearch } from "react-icons/bi";
import { MdAccountBox } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Btn from "components/btn";
import { gsap } from "gsap/dist/gsap";
import { CiLogin } from "react-icons/ci";

const header = () => {
  const [dropdown, setDropdown] = useState(null);
  const [mblinks, setMblinks] = useState(false);

  let setmbdropdown = () => {
    setMblinks((prev) => !prev);
  };

  //GSAP

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };

  return (
    <>
      <div className="header">
        <div className="blackbox" style={{ backgroundColor: "black" }}></div>
        <div className="header-top">
          <div className="header-top-left-lang">
            <div className="switch">
              <input
                id="language-toggle"
                className="check-toggle check-toggle-round-flat"
                type="checkbox"
              />
              <label htmlFor="language-toggle"></label>
              <span className="on">HIN</span>
              <span className="off">ENG</span>
            </div>
          </div>
          <div className="header-top-center">
            <Slider {...settings}>
              <div className="slide">
                <div className="slide-text-container">
                  <h2>Be a volunteer and get good perks</h2>
                </div>
              </div>
              <div className="slide">
                <div className="slide-text-container">
                  <h2>Be a member and be a part of great community</h2>
                </div>
              </div>
              <div className="slide">
                <div className="slide-text-container">
                  <h2>
                    Our goal to provide things in the interest of public demands
                  </h2>
                </div>
              </div>
            </Slider>
          </div>
         
          <div className="header-top-right">
            <div className="pos-rel-full account-parent">
              <span>Login </span>
              <CiLogin style={{fontSize:"1rem"}}/>
              <div className="account-dropdown">
                <ul>
                  {login.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href={item.path}>{item.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left flex-all">
            <a href="/"><h2>RSS PARTY</h2></a>
          </div>
          <div className="header-bottom-center">
            <div className="header-navlink-container">
              {links.map((link, index) => {
                return (
                  <Menuitems
                    key={index}
                    index={index}
                    setDropdown={setDropdown}
                    items={link}
                  />
                );
              })}
            </div>
          </div>
          <div className="header-bottom-right flex-all">
            <button className={`mbbutton`} onClick={setmbdropdown}>
              <AiOutlineUser />
            </button>
            <div className={`mb-dropdown`}>
              {mblinks
                ? links.map((link, index) => {
                    return (
                      <li>
                        <span key={index}>{link.title}</span>
                      </li>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
 
      {dropdown && (
        <div
          className="drop"
          onMouseEnter={() => {
            setDropdown(dropdown);
          }}
          onMouseLeave={() => {
            setDropdown(null);
          }}
        >
          <Dubmenu items={links[dropdown]} />
        </div>
      )}
    </>
  );
};

export default header;
