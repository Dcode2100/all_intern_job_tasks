import React, { useEffect } from "react";
import Header from "components/header/Header";
import Footer from "components/Footer";
const imagescol1 = [
  { src: "/gallery/galleryimg1", alt: " img1" },
  { src: "/gallery/galleryimg2", alt: " img2" },
  { src: "/gallery/galleryimg3", alt: " img3" },
  { src: "/gallery/galleryimg4", alt: " img4" },
  { src: "/gallery/galleryimg5", alt: " img5" },
  { src: "/gallery/galleryimg6", alt: " img6" },
  { src: "/gallery/galleryimg7", alt: " img7" },
  { src: "/gallery/galleryimg8", alt: " img8" },
  { src: "/gallery/galleryimg9", alt: " img9" },
  { src: "/gallery/galleryimg10", alt: " img10" },
  { src: "/gallery/galleryimg11", alt: " img11" },
  { src: "/gallery/galleryimg12", alt: " img12" },
  { src: "/gallery/galleryimg13", alt: " img13" },
  { src: "/gallery/galleryimg14", alt: " img14" },
  { src: "/gallery/galleryimg15", alt: " img15" },
  { src: "/gallery/galleryimg16", alt: " img16" },
  { src: "/gallery/galleryimg17", alt: " img17" },
  { src: "/gallery/galleryimg18", alt: " img18" },
  { src: "/gallery/galleryimg19", alt: " img19" },
  { src: "/gallery/galleryimg20", alt: " img20" },
  { src: "/gallery/galleryimg20", alt: " img20" },
];

const Galleryhome = () => {
  useEffect(() => {
    let a = document.getElementsByClassName("gallery-image-container");
    Array.from(a).map((item) => {
      let offsetHeight = item.offsetHeight;
      item.style.height = `${offsetHeight}px`;
    });
  }, []);

  return (
    <>
      <div className="gallery" style={{marginBottom:"4rem"}}>
        <div className="gallery-top-container">
          {/* <div className="top-image">
          <Image src={"/gallery/galleryimg1.JPG"} alt="img1" layout="fill" />
       </div>   
       <div className="gallery-gradient">
       </div> */}
        </div>

        <div className="gallery-bottom-container">
          <div className="heading-title">
            <div className="heading">Media Gallery</div>
          </div>
          <div className="gallery-collage">
            <div className="gallery-vertical-container">
              {imagescol1.slice(0, 4).map((image, index) => {
                return (
                  <div key={index} className="gallery-image-container">
                    <img src={`${image.src}.JPG`} alt={`${image.alt}`}></img>
                  </div>
                );
              })}
            </div>
            <div className="gallery-vertical-container">
              {imagescol1.slice(3, 7).map((image, index) => {
                return (
                  <div key={index} className="gallery-image-container">
                    <img src={`${image.src}.JPG`} alt={`${image.alt}`}></img>
                  </div>
                );
              })}
            </div>
            <div className="gallery-vertical-container">
              {imagescol1.slice(7, 11).map((image, index) => {
                return (
                  <div key={index} className="gallery-image-container">
                    <img src={`${image.src}.JPG`} alt={`${image.alt}`}></img>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Galleryhome;
