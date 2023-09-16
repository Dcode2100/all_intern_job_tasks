import React from 'react'
import Header from '../../components/Header/Header'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TheBjym.scss'

function Dots(props){
  const {currentSlide, slideCount} = props;
  const dots = [];
  for(let i = 0; i < slideCount; i++){
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
    <div
      className="next-arrow"
      style={{ ...style}}
      onClick={onClick}
    > --        NEXT       --
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
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const TheBjym = () => {

  return (
    <div>
      <div className="container">
        <div className="carousel-container">
          <Header />
          <Slider {...settings}>
            <div className="carousel">
              <div className="Name">
                <h2>TEJASVI</h2>
                <h1>SURYA</h1>
              </div>
              <img
                className="carousel-img"
                src="https://bjym.org/wp-content/uploads/2021/10/TS_Safron_Jacket.png"
              />
            </div>
            <div className="carousel">
              <div className="Name">
                <h2>NARENDRA</h2>
                <h1>MODI</h1>
              </div>
              <img
                className="carousel-img"
                src="https://bjym.org/wp-content/uploads/2021/08/DSC_1580-0.png"
              ></img>
            </div>
            <div className="carousel">
              <div className="Name">
                <h2>JAGAT PRAKASH</h2>
                <h1>NADDA</h1>
              </div>
              <img
                className="carousel-img"
                src="https://bjym.org/wp-content/uploads/2021/08/Jagat-Prakash-Nadda.png"
              ></img>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TheBjym;