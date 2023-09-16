import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function Dots(props) {
  const { currentSlide, slideCount } = props;
  const dots = [];
  for (let i = 0; i < slideCount; i++) {
    dots.push(
      <li className={i === currentSlide ? "slick-active" : ""}>
        <button>{i + 1}</button>
      </li>
    );
  }
  return <ul className="slick-dots">{dots}</ul>;
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="next-arrow" style={{ ...style }} onClick={onClick}>
      {" "}
      -- NEXT --
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="prev-arrow" style={{ ...style }} onClick={onClick}>
      {" "}
      -- PREV --
    </div>
  );
}
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: !true,
  autoplaySpeed: 3000,
  dots: <Dots />,
 
};

const Carouselhome = () => {
  return (
    <div>
      <div className="container" >
        <div className="carousel-container">
          <Slider {...settings}>
            <div className="carousel">
              <div className="carousel-img">
                <Image
                  src="/gallery/galleryimg1.JPG"
                  fill
                  quality={100}
                ></Image>
              </div>
            </div>
            <div className="carousel">
              <div className="carousel-img">
                <Image
                  src="/gallery/galleryimg2.JPG"
                  fill
                  quality={100}
                ></Image>
              </div>
            </div>
            <div className="carousel">
              <div className="carousel-img">
                <Image
                  src="/gallery/galleryimg3.JPG"
                  fill
                  quality={100}
                ></Image>
              </div>
              
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carouselhome;
