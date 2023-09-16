import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Image from 'next/image';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import ForFutureIndia from '../public/for-future-india-home.webp';

const SlickCarousal = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    pauseOnHover: false
  };

  let projects = ["","",""]

  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <div className="slider-carousal-container">
        <div className="prevButton imagecontrol" onClick={sliderRef?.slickPrev}><FaChevronLeft /></div>
        <div className="nextButton imagecontrol" onClick={sliderRef?.slickNext}><FaChevronRight /></div>
        <Slider ref={setSliderRef} {...settings} >

    
          {
            projects.map((project, index) => {
              
              return (
              <div className="carousal-div" key={index}>
                <Image src="/galleryimg3.webp" fill />
              </div>
              )
            })
          }
        </Slider>
      </div>
    </>
  );
}

export default SlickCarousal