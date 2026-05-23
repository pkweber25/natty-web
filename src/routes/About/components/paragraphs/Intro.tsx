import { useLayoutEffect, useRef } from "react";
import "./Intro.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Intro = () => {
  const introRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils
        .toArray(".about__body__intro__textContainer")
        .forEach((textContainer: any) => {
          ScrollTrigger.create({
            trigger: textContainer,
            start: "clamp(top 70%)",
            end: "top 50%",
            animation: gsap.fromTo(
              textContainer.querySelector(".about__body__intro__text"),
              { autoAlpha: 0, yPercent: 20 },
              { autoAlpha: 1, yPercent: 0, duration: 2 }
            ),
            scrub: true,
          });
        });
    }, introRef);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={introRef}>
      <div className="about__body__intro">
        <div className="about__body__intro__textContainer">
          <div className="about__body__intro__text flex">
            <div className="large">Naturally Sharp</div>
            <div className="small absolute">is the</div>
          </div>
        </div>
        <div className="about__body__intro__textContainer">
          <div className="about__body__intro__text alignRight serif primaryColor noMarginBottom">
            best-dressed
          </div>
        </div>
        {/* <div className="about__body__intro__imgContainer">
          <div className="about__body__intro__imgOverlay"></div>
          <img src={bow} alt="" className="about__body__intro__img" />
        </div> */}

        <div className="about__body__intro__textContainer">
          <div className="about__body__intro__text alignRight noMarginTop">
            all-male
          </div>
        </div>
        <div className="about__body__intro__textContainer">
          <div className="about__body__intro__text noMarginBottom serif primaryColor">
            a cappella
          </div>
        </div>
        <div className="about__body__intro__textContainer">
          <div className="about__body__intro__text small noMarginTop">
            group at
          </div>
        </div>
        <div className="about__body__intro__textContainer">
          <div className="about__body__intro__text alignRight">
            Virginia Tech,
          </div>
        </div>
        <div className="about__body__intro__textContainer">
          <div className="about__body__intro__text margin small alignRight">
            founded in
          </div>
        </div>
        {/* <div className="about__body__intro__text alignRight flex noLineHeight">
          <div className="small">founded in</div>2002.
        </div> */}
      </div>
    </div>
  );
};

export default Intro;
