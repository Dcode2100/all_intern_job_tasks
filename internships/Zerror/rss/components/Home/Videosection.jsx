import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

var settings1 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 3000,
  dots: <Dots />,
};
var settings2 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 3000,

  dots: <Dots />,
};

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

const Videosection = () => {
  return (
    <div className="videohome">
      <div className="videosection">
        <div className="vs-left">
          <div className="heading">
            <div className="heading-container">
              <div className="heading-dash"></div>
              <div className="heading-text">Rss party</div>
            </div>
            <h1>Videos</h1>
          </div>
          <div className="heading-info-carousel">
            <div className="vsl-carousel-container">
              <Slider {...settings1}>
                <div className="vsl-carousel">
                  <div className="vsl-carousel-img">
                    <p style={{ margin: "auto" }}>
                      The wind whistled through the trees as the sun began to
                      set over the horizon. Birds chirped their final melodies
                      of the day before settling down for the night. The world
                      was quiet and peaceful, a perfect moment of stillness in
                      the midst of chaos.
                    </p>
                  </div>
                </div>
                <div className="vsl-carousel">
                  <div className="vsl-carousel-img">
                    <p style={{ margin: "auto" }}>
                      The waves crashed against the shore, their rhythmic sound
                      a comforting backdrop to my thoughts. I closed my eyes and
                      breathed in the salty air, feeling my stress melt away.
                      The beach always had a way of soothing my soul and
                      providing a sense of peace.
                    </p>
                  </div>
                </div>
                <div className="vsl-carousel">
                  <div className="vsl-carousel-img">
                    <p style={{ margin: "auto" }}>
                      The city bustled with energy as people rushed to and fro,
                      their footsteps echoing on the pavement. I weaved my way
                      through the crowd, feeling a sense of excitement and
                      anticipation. The possibilities were endless in this
                      vibrant, bustling metropolis.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="bottom-botton"></div>
        </div>
        <div className="right ">
          <div className="vsr-container ">
            <div className="vsr-carousel-container">
              <Slider {...settings2}>
                <div className="vsr-carousel">
                  <div className="vsr-carousel-img">
                    <Image
                      src="/gallery/galleryimg1.JPG"
                      fill
                      quality={100}
                    ></Image>
                  </div>
                </div>
                <div className="vsr-carousel">
                  <div className="vsr-carousel-img">
                    <Image
                      src="/gallery/galleryimg2.JPG"
                      fill
                      quality={100}
                    ></Image>
                  </div>
                </div>
                <div className="vsr-carousel">
                  <div className="vsr-carousel-img">
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
      </div>
    </div>
  );
};

export default Videosection;
