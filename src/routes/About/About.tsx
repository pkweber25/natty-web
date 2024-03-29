import "./About.css";

import { useRef, useLayoutEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import NattySVG from "../../components/NattySVG";

import horizontalLoop from "../../utils/horizontalLoop";

import cj from "../../assets/group_photos/cj_mobile.jpg";
import gavin from "../../assets/group_photos/gavin_mobile.jpg";

import Title from "./components/Title";
import Body from "./components/Body";
import Footer from "../../components/Footer/Footer";

const About = () => {
  const aboutRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="about__container" ref={aboutRef}>
      <div className="about">
        <Title />
        <Body />
        <Footer mode="primary" />
      </div>
      {/* <div className="fullscreen"></div> */}
    </div>
  );
};

export default About;
