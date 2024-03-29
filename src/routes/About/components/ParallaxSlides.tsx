import "./ParallaxSlides.css";

import { useRef, useLayoutEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import NattySVG from "../../../components/NattySVG";

import horizontalLoop from "../../../utils/horizontalLoop";

import cj from "../../../assets/group_photos/cj_mobile.jpg";
import gavin from "../../../assets/group_photos/gavin_mobile.jpg";

const Parallax = () => {
  const parallaxRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLDivElement>(".parallax__slide");
      const getRatio = (el: HTMLDivElement) =>
        window.innerHeight / (window.innerHeight + el.offsetHeight);

      slides.forEach((slide, i) => {
        let bg = slide.querySelector(".parallax__slideBackground"),
          content = slide.querySelector(".parallax__slideContent"),
          tl = gsap.timeline({
            scrollTrigger: {
              trigger: slide,
              start: () => (i ? "top bottom" : "top top"),
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });

        tl.fromTo(
          bg,
          {
            y: () => (i ? -window.innerHeight * getRatio(slide) : 0),
          },
          {
            y: () => window.innerHeight * (1 - getRatio(slide)),
            ease: "none",
          }
        );
        tl.fromTo(
          content,
          {
            y: () => (i ? window.innerHeight * -getRatio(slide) * 2 : 0),
            scale: 1,
          },
          {
            y: () => window.innerHeight * getRatio(slide) * 2,
            scale: 2,
            ease: "none",
          },
          0
        );
      });
    }, parallaxRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="parallax__slides" ref={parallaxRef}>
      <div className="parallax__slide">
        <div
          className="parallax__slideBackground"
          style={{
            backgroundImage: "url(" + cj + ")",
          }}
        >
          <div className="parallax__slideOverlay"></div>
        </div>
        <div className="parallax__slideOverlay1"></div>
        <div className="parallax__slideContent parallax__slideNaturally">
          Naturally
        </div>
      </div>

      <div className="parallax__slide">
        <div
          className="parallax__slideBackground"
          style={{
            backgroundImage: "url(" + gavin + ")",
          }}
        >
          <div className="parallax__slideOverlay"></div>
        </div>
        <div className="parallax__slideOverlay2"></div>
        <div className="parallax__slideContent parallax__slideSharp">Sharp</div>
      </div>
    </div>
  );
};

export default Parallax;

// import "./About.css";

// import { useRef, useLayoutEffect } from "react";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import cj from "../../assets/group_photos/cj_mobile.jpg";
// import gavin from "../../assets/group_photos/gavin_mobile.jpg";

// const About = () => {
//   const aboutRef = useRef(null);

//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//       //   const slides = gsap.utils.toArray<HTMLDivElement>(".about__slide");
//       //   const getRatio = (el: HTMLDivElement) =>
//       //     window.innerHeight / (window.innerHeight + el.offsetHeight);

//       //   slides.forEach((slide, i) => {
//       //     let bg = slide.querySelector(".about__slideBackground"),
//       //       content = slide.querySelector(".about__slideContent"),
//       //       tl = gsap.timeline({
//       //         scrollTrigger: {
//       //           trigger: slide,
//       //           start: () => (i ? "top bottom" : "top top"),
//       //           end: "bottom top",
//       //           scrub: true,
//       //           invalidateOnRefresh: true,
//       //         },
//       //       });

//       //     tl.fromTo(
//       //       bg,
//       //       {
//       //         y: () => (i ? -window.innerHeight * getRatio(slide) : 0),
//       //       },
//       //       {
//       //         y: () => window.innerHeight * (1 - getRatio(slide)),
//       //         ease: "none",
//       //       }
//       //     );
//       //     tl.fromTo(
//       //       content,
//       //       {
//       //         y: () => (i ? window.innerHeight * -getRatio(slide) * 2 : 0),
//       //         scale: 1,
//       //       },
//       //       {
//       //         y: () => window.innerHeight * getRatio(slide) * 2,
//       //         scale: 2,
//       //         ease: "none",
//       //       },
//       //       0
//       //     );
//       //   });

//       const slidesContainer =
//         document.querySelector<HTMLDivElement>(".about__slides");

//       let tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: slidesContainer,
//           start: "top top",
//           // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
//           end: () => "+=" + slidesContainer.offsetWidth,
//           scrub: true,
//           pin: true,
//           anticipatePin: 1,
//         },
//         defaults: { ease: "none" },
//       });
//       // animate the container one way...
//       tl.fromTo(
//         slidesContainer.querySelector(".about__slide2"),
//         { xPercent: -100, x: 0 },
//         { xPercent: 0 }
//       )
//         // ...and the image the opposite way (at the same time)
//         .fromTo(
//           slidesContainer.querySelector(".about__slideContent2"),
//           { xPercent: 100, x: 0 },
//           { xPercent: 0 },
//           0
//         );
//     }, aboutRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="about__container" ref={aboutRef}>
//       <div className="about">
//         <div className="about__slides">
//           <div className="about__slide">
//             <div className="about__slideContent">
//               <div
//                 className="about__slideBackground"
//                 style={{
//                   backgroundImage: "url(" + cj + ")",
//                 }}
//               >
//                 <div className="about__slideOverlay"></div>
//               </div>
//               <div className="about__slideText about__slideNaturally">
//                 Naturally
//               </div>
//             </div>
//           </div>

//           <div className="about__slide about__slide2">
//             <div className="about__slideContent about__slideContent2">
//               <div
//                 className="about__slideBackground"
//                 style={{
//                   backgroundImage: "url(" + gavin + ")",
//                 }}
//               >
//                 <div className="about__slideOverlay"></div>
//               </div>
//               <div className="about__slideText about__slideSharp">Sharp</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="fullscreen"></div>
//     </div>
//   );
// };

// export default About;
