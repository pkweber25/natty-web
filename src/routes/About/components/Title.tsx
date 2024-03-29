import "./Title.css";

import { useRef, useLayoutEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import cj from "../../../assets/group_photos/cj_mobile.jpg";
import gavin from "../../../assets/group_photos/gavin_mobile.jpg";
import hartmann from "../../../assets/group_photos/hartmann_small.jpg";

const Title = () => {
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.set(".about__title__img", { scale: 1.06 });
      // ScrollTrigger.create({
      //   trigger: ".about__title__titleContainer",
      //   start: "top top",
      //   end: "bottom top",
      //   animation: gsap
      //     .timeline()
      //     .fromTo(".about__title__img", { yPercent: 3 }, { yPercent: -3 }),
      //   // .to(".about__title__sideImgContainer", { yPercent: -70 }, 0)
      //   // .to(".about__title__sideImgContainer2", { yPercent: -150 }, 0),
      //   scrub: 2,
      // });
    }, titleRef);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={titleRef}>
      <div className="about__title__titleContainer">
        <div className="about__title__overlay"></div>
        <div className="about__title__title">
          <div className="about__title__titleLine1">
            <span className="about__title__titleHighlight">About</span>
          </div>
          <div className="about__title__titleLine2">Natty</div>
        </div>

        {/* <div className="about__title__imgsContainer">
          <div className="about__title__imgContainer">
            <img src={cj} alt="" className="about__title__img" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Title;
