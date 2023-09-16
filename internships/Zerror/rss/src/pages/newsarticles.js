import Footer from "components/Footer";
import Header from "components/header/Header";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const imagescol1 = [
  { src: "/gallery/galleryimg1.JPG", alt: "pressrelease1" },
  { src: "/pressrelease/press2.jpg", alt: "pressrelease2" },
  { src: "/pressrelease/press3.jpeg", alt: "pressrelease3" },
  { src: "/pressrelease/press4.jpg", alt: "pressrelease4" },
  { src: "/pressrelease/press5.jpeg", alt: "pressrelease5" },
  { src: "/pressrelease/press6.jpeg", alt: "pressrelease6" },
  { src: "/pressrelease/press7.jpeg", alt: "pressrelease7" },
  { src: "/pressrelease/press8.jpeg", alt: "pressrelease8" },
  { src: "/pressrelease/press9.jpeg", alt: "pressrelease9" },
  { src: "/pressrelease/press10.jpeg", alt: "pressrelease10" },
  { src: "/pressrelease/press11.jpeg", alt: "pressrelease11" },
  { src: "/pressrelease/press12.jpeg", alt: "pressrelease12" },
  { src: "/pressrelease/press13.jpeg", alt: "pressrelease13" },
  { src: "/pressrelease/press14.jpeg", alt: "pressrelease14" },
  { src: "/pressrelease/press15.jpeg", alt: "pressrelease15" },
  { src: "/pressrelease/press16.jpeg", alt: "pressrelease16" },
  { src: "/pressrelease/press17.jpeg", alt: "pressrelease17" },
  { src: "/pressrelease/press18.jpeg", alt: "pressrelease18" },
  { src: "/pressrelease/press19.jpg", alt: "pressrelease19" },
  
];


const ImagesGrid = () => {
  useEffect(() => {
    let a = document.getElementsByClassName("gallery-image-container");
    Array.from(a).map((item) => {
      let offsetHeight = item.offsetHeight;
      item.style.height = `${offsetHeight}px`;
    });
  }, []);

  return (
    <>
     <div className="about-header">
        <Header />
      </div>
    <div className="gallery">
    <div className="gallery-bottom-container">
      <div className="heading-title">
        <div className="heading">News Articles</div>
        
      </div>
      <div className="gallery-collage">
        <div className="gallery-vertical-container">
          {imagescol1.slice(0, 7).map((image, index) => {
            return (
              <div key={index} className="gallery-image-container">
                <img src={`${image.src}`} alt={`${image.alt}`}></img>
              </div>
            );
          })}
        </div>
        <div className="gallery-vertical-container">
          {imagescol1.slice(6, 12).map((image, index) => {
            return (
              <div key={index} className="gallery-image-container">
                <img src={`${image.src}`} alt={`${image.alt}`}></img>
              </div>
            );
          })}
        </div>
        <div className="gallery-vertical-container">
          {imagescol1.slice(12, 17).map((image, index) => {
            return (
              <div key={index} className="gallery-image-container">
                <img src={`${image.src}`} alt={`${image.alt}`}></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default ImagesGrid;
