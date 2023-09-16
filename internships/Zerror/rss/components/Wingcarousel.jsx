import React, { useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  console.log(className);
  return (
    <div className={className} onClick={onClick}>
      <i
        className="fas fa-chevron-right"
        style={{ color: "black" }}
        alt="imageddd"
      ></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i
        className="fas fa-chevron-left"
        style={{ color: "#ccc" }}
        alt="aasdf"
      ></i>
    </div>
  );
}

var settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  infinite: true,
  speed: 200,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  dots: true,
  dotsClass: "custom-dots",
  slidesMargin: "1rem",
  responsive: [
    // on mobile slides to show 1
    { breakpoint: 426, settings: { slidesToShow: 1 } },
  ],
};

const Wingcarousel = () => {
  return (
    <div className="wing-carousel">
      <div>
        <div
          className="heading-third flex-all"
          style={{
            width: "100%",
            fontSize: "3rem",
            paddingLeft: "7rem",
            justifyContent: "flex-start",
          }}
        >
          Our Wings
        </div>
        <div className="sliderdiv">
          <div
            className="slidercontainer"
            style={{ width: "90%", marginRight: "1rem", marginTop: "0rem" }}
          >
            <Slider {...settings}>
              <div className="carousel-card">
                <a href="/wing/kisan">
                  <div className="div-img">
                    <Image
                      src="/wingsimg/kisan.jpg"
                      fill
                      alt="imagasdfa"
                      quality={100}
                      priority
                    />
                  </div>
                  <div className="card-info">
                    <h3>KISAN</h3>
                    <span>
                      The BJP Manifesto for the 2014 General Elections stated
                      that the party “believes that political stability,
                      progress, and peace in the region are essential for South
                      Asia’s growth and development.”
                    </span>
                  </div>
                </a>
              </div>
              <div className="carousel-card">
                <a href="/wing/mahila">
                  <div className="div-img">
                    <Image
                      src="/wingsimg/mahila.jpg"
                      fill
                      quality={100}
                      alt="imagasdfa"
                    />
                  </div>
                  <div className="card-info">
                    <h3>MAHILA</h3>
                    <span>
                      The BJP Manifesto for the 2014 General Elections stated
                      that the party “believes that political stability,
                      progress, and peace in the region are essential for South
                      Asia’s growth and development.”
                    </span>
                  </div>
                </a>
              </div>
              <div className="carousel-card">
                <a href="/wing/yuva">
                  <div className="div-img">
                    <Image
                      src="/wingsimg/yuva.jpg"
                      fill
                      quality={100}
                      alt="yuva"
                    />
                  </div>
                  <div className="card-info">
                    <h3>YUVA</h3>
                    <span>
                      The BJP Manifesto for the 2014 General Elections stated
                      that the party “believes that political stability,
                      progress, and peace in the region are essential for South
                      Asia’s growth and development.”
                    </span>
                  </div>
                </a>
              </div>
              <div className="carousel-card">
                <a href="/wing/sc">
                  <div className="div-img">
                    <Image
                      src="/wingsimg/sc.jpeg"
                      fill
                      quality={100}
                      alt="sc"
                    />
                  </div>
                  <div className="card-info">
                    <h3>S.C.</h3>
                    <span>
                      The BJP Manifesto for the 2014 General Elections stated
                      that the party “believes that political stability,
                      progress, and peace in the region are essential for South
                      Asia’s growth and development.”
                    </span>
                  </div>
                </a>
              </div>
              <div className="carousel-card">
                <a href="/wing/st">
                  <div className="div-img">
                    <Image
                      src="/wingsimg/st.jpg"
                      width={100}
                      height={100}
                      alt="ST"
                    />
                  </div>
                  <div className="card-info">
                    <h3>S.T.</h3>
                    <span>
                      The BJP Manifesto for the 2014 General Elections stated
                      that the party “believes that political stability,
                      progress, and peace in the region are essential for South
                      Asia’s growth and development.”
                    </span>
                  </div>
                </a>
              </div>
              <div className="carousel-card">
                <a href="/wing/obc">
                  <div className="div-img">
                    <Image
                      src="/wingsimg/obc.jpg"
                      width={100}
                      height={100}
                      alt="obc"
                    />
                  </div>
                  <div className="card-info">
                    <h3>OBC</h3>
                    <span>
                      The BJP Manifesto for the 2014 General Elections stated
                      that the party “believes that political stability,
                      progress, and peace in the region are essential for South
                      Asia’s growth and development.”
                    </span>
                  </div>
                </a>
              </div>

              <div className="carousel-card">
                <a href="/wing/minority">
                  <div className="div-img">
                    <Image src="/wingsimg/minority.jpg" fill alt="MINORITY" />
                  </div>
                  <div className="card-info">
                    <h3>MINORITY</h3>
                    <span>
                      The BJP Manifesto for the 2014 General Elections stated
                      that the party “believes that political stability,
                      progress, and peace in the region are essential for South
                      Asia’s growth and development.”
                    </span>
                  </div>
                </a>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wingcarousel;
