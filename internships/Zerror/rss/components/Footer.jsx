import React from "react";
import { BsArrowUpRight, BsArrowRight } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
const Footer = () => {
  // dummy data for the 4 columns

  const column1 = [
    { title: "OUR STORY", link: "/ourstory" },
    { title: "OUR MISSION", link: "/ourmission" },
    { title: "VISION", link: "/vision" },
    { title: "OUR LEADERSHIP", link: "/ourleadership" },
  ];

  const column2 = [
    { title: "KISAN", link: "/wing/kisan" },
    { title: "MAHILA", link: "/wing/mahila" },
    { title: "YUVA", link: "/wing/yuva" },
    { title: "S.C", link: "/wing/sc" },
    { title: "S.T", link: "/wing/st" },
    { title: "OBC", link: "/wing/obc" },
    { title: "MINORITY", link: "/wing/minority" },
  ];

  const column3 = [
    //  { title: "ll our latest news, campaigns and rally details delivered to your inbox", }
  ];

  const column4 = [
    { title: "MEDIA GALLERY", link: "/gallery" },
    { title: "PRESS RELEASE", link: "/pressrelease" },
    { title: "NEWS ARTICLES", link: "/newsarticles" },
  ];

  // map each column array to a list of anchor tags
  const column1Links = column1.map((item, index) => (
    <li key={index}>
      <a href={item.link}>{item.title}</a>
    </li>
  ));

  const column2Links = column2.map((item, index) => (
    <li key={index}>
      <a href={item.link}>{item.title}</a>
    </li>
  ));

  const column3Links = column3.map((item, index) => (
    <li key={index}>
      <a href={item.link}>{item.title}</a>
    </li>
  ));

  const column4Links = column4.map((item, index) => (
    <li key={index}>
      <a href={item.link}>{item.title}</a>
    </li>
  ));

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>RSS PARTY</h3>
          <ul>{column1Links}</ul>
        </div>
        <div className="footer-column">
          <h3>OUR WINGS</h3>
          <ul>{column2Links}</ul>
        </div>
        <div className="footer-column">
          <h3>MEDIA</h3>
          <ul>{column4Links}</ul>
          <div className="footer-social"></div>
        </div>
        <div className="footer-column">
          <h3>Subscribe for News letters</h3>

          <div className="emailline">
            Get all our latest news, campaigns and rally details delivered to
            your inbox
          </div>
          <div className="footer-input-container">
            <input
              style={{ color: "white" }}
              className="footer-input"
              type="text"
            ></input>
            <label className="footer-input-label">Email</label>
            <div
              className="form-button-container "
              style={{ zoom: "0.7", width: "80%" }}
            >
              <button className="form-button flex-all">
                <span>Subscribe</span>
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
      </div>
      <div className="copyright">
        <span className="copyrighth">
          
            <AiOutlineCopyrightCircle
              style={{ fontSize: "0.7rem", position: "absolute"}}
            />
         
          <span>RSS PARTY COPYRIGHT @2023</span>
        </span>
        <span className="zerroradv">
          {" "}
          Developed by
          <a href="https://www.zerrorstudios.com/" target="_blank">
            Zerror Studios
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
