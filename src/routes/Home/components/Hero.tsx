import { useRef, useLayoutEffect } from "react";
import ImageSlot from "../../../components/ImageSlot/ImageSlot";
import { IMAGES } from "../../../config/images";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Hero.css";

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".home__hero",
        start: "top top",
        end: "bottom top",
        animation: gsap.to(".home__hero__backgroundImg", { scale: 1.1 }),
        scrub: true,
      });

      gsap.set(".home__hero__headerNaturally", { autoAlpha: 0 });
      gsap.set(".home__hero__headerSharp", { autoAlpha: 0 });
      gsap.set(".home__hero__subtitle", { autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: ".home__hero",
        start: "top 1%",
        animation: gsap
          .timeline({ defaults: { duration: 0.5 } })
          .fromTo(
            ".home__hero__headerNaturally",
            { autoAlpha: 0, yPercent: 10 },
            { autoAlpha: 1, yPercent: 0 }
          )
          .fromTo(
            ".home__hero__headerSharp",
            { autoAlpha: 0, yPercent: 10 },
            { autoAlpha: 1, yPercent: 0 },
            ">"
          )
          .fromTo(
            ".home__hero__subtitle",
            { autoAlpha: 0, yPercent: 10 },
            { autoAlpha: 1, yPercent: 0 },
            ">+=0.5"
          ),
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="home__hero__container" ref={heroRef}>
      <section className="home__hero">
        <div className="home__hero__backgroundImgContainer">
          <div className="home__hero__backgroundImgOverlay"></div>
          <div className="home__hero__backgroundImgWrapper">
            <ImageSlot
              className="home__hero__backgroundImg"
              src={IMAGES.hero}
              hint="public/images/hero/hero.jpg"
              alt="Naturally Sharp A Cappella on stage in dapper suits"
              fill
            />
          </div>
        </div>
        <div className="home__hero__keepInViewport">
          <div className="home__hero__headerContainer">
            <h1 className="home__hero__header">
              <div className="home__hero__headerNaturally">Naturally</div>
              <div className="home__hero__headerSharp">Sharp</div>
            </h1>
            <div className="home__hero__headerSpacer"></div>
            <p className="home__hero__subtitle">
              Virginia Tech's best&#x2011;dressed all&#x2011;male
              a&nbsp;cappella group
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
