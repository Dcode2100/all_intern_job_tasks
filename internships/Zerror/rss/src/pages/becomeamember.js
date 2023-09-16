import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import Header from "../../components/header/Header";
import Footer from "components/Footer";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const becomeamember = () => {
  const [gender, setgender] = useState("");

  function handleOptionChange(event) {
    setgender(event.target.value);
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".bam-header", {
      scrollTrigger: {
        trigger: ".bam-header",
        start: "top=0 top=0",
        
        ease: "expo",
        // scrub: !true,
      },
     
      position: "absolute",
      width: "50%",
     
      height: "100%",
      duration: 0.4,
      markers: true,
      color: "red",
    });

    gsap.to(".bam-header-container", {
      scrollTrigger: {
        trigger: ".bam-header",
        start: "top=0 top=0",
        ease: "expo",
        // scrub: !true,
      },

      width: "80%",
      height: "100%",
      duration: 0.4,
      marker: true,
    });

    gsap.to(".bam-container", {
      scrollTrigger: {
        trigger: ".bam-header",
        start: "top=0 top=0",
        ease: "expo",
        // scrub: !true,
      },
      height: "100%",
      duration: 0.9,
      marker: true,
      opacity: 1,
    });
  }, []);

  return (
    <>
       <div className="about-header">
        <Header />
      </div>
      <div className="bam">
        <div className="bam-header">
          <div className="bam-header-container">
            <h1>Become a member</h1>
            <p>
              RSS party greatly values the unwavering support of all its
              volunteers. Your dedication and selfless contributions are pillars
              of strength to our cause. Sign up as a volunteer to provide your
              invaluable support to our mission of a secular, democratic, just
              and inclusive India.
            </p>
            <span>
              Sign up by sharing your contact details with us, and an organizer
              will get in touch with you soon.
            </span>
          </div>
        </div>
        <div className="bam-container flex-all">
          <h1>Fill the form</h1>

          <div className="input-container">
            <div className="child1">
              <input className="input-child" placeholder="Name" />
              <input className="input-child" placeholder="Email" />
              <input className="input-child" placeholder="Phone" />
              <input className="input-child" placeholder="DOB" />
              <div className="input-child-dropdown">
              <div className="gender-dropdown">
                <select
                  id="dropdown"
                  value={gender}
                  placeholder="Select an option"
                  onChange={handleOptionChange}
                >
                  <option value="Option 1">Male</option>
                  <option value="Option 2">Female</option>
                  <option value="Option 3">Others</option>
                </select>
              </div>
              </div>
            </div>
            <div className="child2">
              <input className="input-child" placeholder="City" />
              <input className="input-child" placeholder="State" />
              <input className="input-child" placeholder="Zip" />
              <input className="input-child" placeholder="Tell us how can you contribute?" />
            </div>
          </div>
          <div className="button-container " style={{ zoom: "0.8" }}>
            <button className="form-button flex-all">
              <span>SignUp</span>
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
      <Footer />
    </>
  );
};

export default becomeamember;
