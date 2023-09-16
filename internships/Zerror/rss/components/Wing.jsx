import React, { useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import Cover from "components/Cover";
import { gsap } from "gsap/dist/gsap";
import { BsArrowRight } from "react-icons/bs";
import Wingcarousel from "./Wingcarousel";

const Wing = ({
  stitle,
  title,
  qimg1,
  qimg2,
  qimg3,
  qimg4,
  simg1,
  simg2,
  simg3,
  simg4,
}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".wing-right", {
      scrollTrigger: {
        trigger: ".wing",
        start: "top=0 top=0",
        end: "top+=50 top+=80",
        ease: "linear",
        scrub: 1,
        // markers: true,
        zindex: 100,
        // pin:true,
        // delay: 1, // add a delay of 1 second
        // duration: 5, // increase duration to 2 seconds
        // onLeaveBack: () => {
        //   // remove pin when animation is complete
        //   ScrollTrigger.getById(".wing-right").kill();
        // },
      },
      width: "50%",
      height: "100%",
    });
  }, []);

  return (
    <div className="wing">
      <div className="wing-parent flex-all">
        <div className="wing-left">
          <div className="wing-left-container">
            <div className="wings flex-all">
              <div className="dash"></div>
              <h1>Wing</h1>
            </div>
            <h2>{`${title}`}</h2>
          </div>
        </div>
        <div
          className="wing-right flex-all"
          style={{ width: "100% !important", height: "100%" }}
        >
          <video
            loop={true}
            autoPlay={true}
            muted
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src="/BJPVI.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="second-part  ">
        <div className="second-div1 flex-all">
          <div className="circle"></div>
          <h3>{`Objectives of wing ${stitle}`}</h3>
        </div>
        <div className="second-div2">
          Farmers in India face challenges like low income, lack of credit, high
          input costs, and price volatility. The political party plans to
          address these with measures like increasing MSP and providing credit
          facilities and more.
        </div>
        <button className="wing-button flex-all">
          <a href="/becomeamember">Become a Volunteer</a>
          <BsArrowRight />
        </button>
      </div>

      <div className="third-gallery-question">
        <div className="third-gallery-container">
          <div className="third-gallery-left-container">
            <div className="gallery-left-image">
              <div className="img1">
                <Image src={`${qimg1}`} quality={100} fill alt="imagasdfa" />
              </div>
              <div className="img2">
                <Image src={`${qimg2}`} quality={100} fill alt="imagasdfa" />
              </div>
            </div>
            <div className="gallery-right-image">
              <div className="img3">
                <Image src={`${qimg3}`} quality={100} fill alt="imagasdfa" />
              </div>
              <div className="img4">
                <Image src={`${qimg4}`} quality={100} fill alt="imagasdfa" />
              </div>
            </div>
          </div>
          <div className="third-gallery-right-container">
            <div className="top-problems">
              <h1>{`Common Problems faced by ${title}`}</h1>
              <span>
                Indian farmers face a range of challenges that can limit their
                productivity and income. To address these challenges, political
                parties can implement a variety of solutions. One important step
                is to provide farmers with access to credit, as many small-scale
                farmers struggle to secure the funding they need to purchase
                essential inputs like seeds and fertilizers. In addition,
                political parties can help farmers by setting up farmer
                cooperatives, which can provide collective bargaining power and
                help farmers access markets more effectively.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="third-gallery-answer">
        <div className="third-gallery-container">
          <div className="third-gallery-left-container">
            <div className="top-problems-answer">
              <h1>Solutions</h1>
              <span>
                Indian farmers face a range of challenges that can limit their
                productivity and income. To address these challenges, political
                parties can implement a variety of solutions. One important step
                is to provide farmers with access to credit, as many small-scale
                farmers struggle to secure the funding they need to purchase
                essential inputs like seeds and fertilizers. In addition,
                political parties can help farmers by setting up farmer
                cooperatives, which can provide collective bargaining power and
                help farmers access markets more effectively.
              </span>
            </div>
          </div>
          <div className="third-gallery-right-container">
            <div className="gallery-left-image">
              <div className="img1">
                <Image src={`${simg1}`} quality={100} fill alt="imagasdfa" />
              </div>
              <div className="img2">
                <Image src={`${simg2}`} quality={100} fill alt="imagasdfa" />
              </div>
            </div>
            <div className="gallery-right-image">
              <div className="img3">
                <Image src={`${simg3}`} quality={100} fill alt="imagasdfa" />
              </div>
              <div className="img4">
                <Image src={`${simg4}`} quality={100} fill alt="imagasdfa" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Wingcarousel />
    </div>
  );
};

export default Wing;
