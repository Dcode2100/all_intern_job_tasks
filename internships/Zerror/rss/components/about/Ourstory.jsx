import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

const Ourstory = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const endTriggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-204vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          endTrigger: endTriggerRef.current,
          end: "+=200%",
          // end: "1800 top",
          scrub: 1.3,
          // markers: true,
          pin: true,
          backgroundColor: "#fff",
          // pinSpacing: false,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);
  return (
    <section className="ourstory-heroscroll-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="ourstory-heroscroll-inner">
          <div className="ourstory-scroll-1 flex-center">
            <h3>We are</h3>
            <div className="centerscroll1">
              <h1>RASTRIYA SWABHIMAN </h1>
              <h1>SANGH PARTY</h1>
            </div>
          </div>

          <div className="ourstory-scroll-2">
            <h3>Our Story</h3>
            <div className="section-2-vidcontainer">
              <video
                loop={true}
                autoPlay={true}
                muted
                quality="high"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source src="/storyvid.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="ourstory-scroll-3" ref={endTriggerRef}>
            <h3>RSS PARTY</h3>
            <p>
              The Party is pledged to build up India as a High Super Power
              strong New India develop in the World and prosperous nation which
              is modern, progressive and enlightened in outlook and which
              proudly draws inspiration from India’s ancient culture and values
              and thus is able to emerge as a great world power playing an
              effective role in the country of Nations for the establishment of
              world peace and justice for all. The Party aims at establishing a
              democratic state which guarantees to all citizens of India
              irrespective of caste, creed or sex, political, socio financial
              and economic justice, equality of opportunity and liberty of faith
              and expression Right to recall, Jan Lokpal, fight Against
              Poverty-Dirty-Dynastic Politics, Women’s Empowerment, Judiciary
              Empowerment, Police Empowerment, Military Empowerment will be
              implemented.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourstory;
