import "./Body.css";

import { useLayoutEffect, useRef } from "react";

import horizontalLoop from "../../../utils/horizontalLoop";
import createInfinityText from "../../../utils/createInifinityText";

import NattySVG from "../../../components/NattySVG";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Fragment } from "react";

import nascar from "../../../assets/group_photos/nascar_mobile.jpg";
import Intro from "./paragraphs/Intro";

import Timelapse from "./paragraphs/Timelapse";
import Performances from "./paragraphs/Performances";
import Parallax from "./ParallaxSlides";

const Body = () => {
  const bodyRef = useRef(null);

  const mainClassPrefix = "about__body";

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const texts = gsap.utils.toArray(".about__body__who__infinityText");
      let loop = horizontalLoop(texts, {
        repeat: -1,
        speed: 0.5,
      });

      const infinityContainer = document.querySelector<HTMLDivElement>(
        ".about__body__who__infinityTextContainer"
      );

      ScrollTrigger.create({
        trigger: infinityContainer,
        start: "top top",
        end:
          "bottom+=" +
          ((document.querySelector<HTMLDivElement>(".about__body__intro")
            ?.offsetHeight as number) -
            (infinityContainer?.offsetHeight as number)) +
          " top",
        pin: true,
        pinSpacing: false,
        scrub: 2,
      });

      const texts2 = gsap.utils.toArray(".about__body__what__infinityText");
      let loop2 = horizontalLoop(texts2, {
        repeat: -1,
        speed: 0.5,
      });

      const infinityContainer2 = document.querySelector<HTMLDivElement>(
        ".about__body__what__infinityTextContainer"
      );

      ScrollTrigger.create({
        trigger: infinityContainer2,
        start: "top top",
        end:
          "bottom+=" +
          ((document.querySelector<HTMLDivElement>(".about__body__performances")
            ?.offsetHeight as number) -
            (infinityContainer2?.offsetHeight as number)) +
          " top",
        pin: true,
        pinSpacing: false,
        scrub: 2,
      });
    }, bodyRef);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={bodyRef}>
      <div className="about__body">
        {createInfinityText(mainClassPrefix, 6, "who", "Who we are")}

        <div className="about__body__bodyContainer">
          <Intro />

          <Timelapse />
          {createInfinityText(mainClassPrefix, 6, "what", "What we do")}

          <Performances />

          {/* <Parallax /> */}
        </div>
      </div>
    </div>
  );
};

export default Body;
