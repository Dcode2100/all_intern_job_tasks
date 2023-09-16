for on scrool -

 useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".kisan-right", {
      scrollTrigger: {
        trigger: ".kisan-container",
        start: "top top",
        end: "170% 100%",
        scrub: true,
        markers: true,
      },
      x: -100,
      // duration: 1,
      //  delay: 2.8,
      ease: "power5",
      scale: 1.3,
      // stagger: 0.05
    });
  }, []);

// for horizontal scroll fromto method
  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-230vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2760 top",
          // end: "1800 top",
          scrub: 1.5,
          // markers: true,
          pin: true,
        },
      }
    );

for top header on scroll logic
useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".header-top", {
      scrollTrigger: {
        trigger: ".header-bottom",
        start: "top-=50 top",
        end: "bottom top+=400",
        ease: "power1",
        scrub: true,
        markers: true,
      },
      height: "0rem", 
      
    });
  }, []);

  only animate one time - 

 useEffect(() => {
    gsap.from(".header-top", {
      height: "50rem",
    })
    gsap.to(".header-top", {
      height: "2.5rem",
      duration: 2,
      ease: "power4.out",
    })
  },[])
  