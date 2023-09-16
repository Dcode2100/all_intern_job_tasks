import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useRef, useEffect } from "react";
import header from "../header/Header";
import Membercard from "./Membercard";

const Leadership = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-199.9vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top-=100 top-=100",
          end: "+=200%",
          scrub: 1.5,
          // markers: true,
          pin: true,
          // pinSpacing: false,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="leadership-heroscroll-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="leadership-heroscroll-inner">
          <div className="leadership-scroll-1 flex-center">
            <h3>Our Leadership</h3>
          </div>

          <div className="leadership-scroll-2">
            <div className="l-membercard">
              <div className="l-membercard-container">
                <Image
                  src={"/gallery/galleryimg1.JPG"}
                  fill
                  quality={100}
                ></Image>
              </div>
              <h1>Scott Farquhar</h1>
              <p>Co-Founder & co-ceo</p>
            </div>
            <div className="l-membercard">
              <div className="l-membercard-container">
                <Image
                  src="/gallery/galleryimg2.JPG"
                  fill
                  quality={100}
                ></Image>
              </div>
              <h1>Scott Farquhar</h1>
              <p>Co-Founder & co-ceo</p>
            </div>
            <div className="l-membercard">
              <div className="l-membercard-container">
                <Image
                  src="/gallery/galleryimg2.JPG"
                  fill
                  quality={100}
                ></Image>
              </div>
              <h1>Scott Farquhar</h1>
              <p>Co-Founder & co-ceo</p>
            </div>
          </div>

          <div className="leadership-scroll-2">
            <div className="l-membercard">
              <div className="l-membercard-container">
                <Image
                  src="/gallery/galleryimg3.JPG"
                  fill
                  quality={100}
                ></Image>
              </div>
              <h1>Scott Farquhar</h1>
              <p>Co-Founder & co-ceo</p>
            </div>
            <div className="l-membercard">
              <div className="l-membercard-container">
                <Image
                  src="/gallery/galleryimg4.JPG"
                  fill
                  quality={100}
                ></Image>
              </div>
              <h1>Scott Farquhar</h1>
              <p>Co-Founder & co-ceo</p>
            </div>
            <div className="l-membercard">
              <div className="l-membercard-container">
                <Image
                  src="/gallery/galleryimg4.JPG"
                  fill
                  quality={100}
                ></Image>
              </div>
              <h1>Scott Farquhar</h1>
              <p>Co-Founder & co-ceo</p>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
