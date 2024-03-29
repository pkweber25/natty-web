import { useRef, useLayoutEffect } from "react";
import bow_compressed from "../../../assets/group_photos/bow_compressed.jpg";
import lay_me_down from "../../../assets/group_photos/lay_me_down.jpg";
import NattySVG from "../../../components/NattySVG";
import horizontalLoop from "../../../utils/horizontalLoop";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Hero.css";

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.to(".home__hero__scroll", {
      //   rotation: 360,
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: ".home__hero",
      //     start: "top top",
      //     end: "bottom top",
      //     scrub: 2,
      //   },
      // });

      // const texts = gsap.utils.toArray(".home__hero__infinityText");
      // let loop = horizontalLoop(texts, {
      //   repeat: -1,
      //   speed: 0.5,
      // });

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
          {/* <div className="home__hero__backgroundImgOverlayTop"></div> */}
          <div className="home__hero__backgroundImgOverlay"></div>
          <div className="home__hero__backgroundImgWrapper">
            <img
              className="home__hero__backgroundImg"
              src={lay_me_down}
              alt="Naturally Sharp A Cappella on stage in dapper suits"
              data-speed="clamp(0.8)"
            />
          </div>
        </div>
        <div className="home__hero__keepInViewport">
          <div className="home__hero__headerContainer">
            {/* <div className="home__hero__headerGlass"></div> */}
            <h1 className="home__hero__header">
              <div className="home__hero__headerNaturally">
                Naturally
                {/* <div
                  className="home__hero__headerNaturallyDecor"
                  data-speed="clamp(1.1)"
                >
                  Naturally
                </div> */}
              </div>

              <div className="home__hero__headerSharp">Sharp</div>
            </h1>
            <div className="home__hero__headerSpacer"></div>
            <p className="home__hero__subtitle">
              Virginia Tech's best&#x2011;dressed all&#x2011;male
              a&nbsp;cappella group
            </p>
          </div>

          {/* <div className="home__hero__infinityTextContainer">
            <span className="home__hero__infinityText">• Natty • Est 2002 </span>
            <span className="home__hero__infinityText">• Natty • Est 2002 </span>
            <span className="home__hero__infinityText">• Natty • Est 2002 </span>
            <span className="home__hero__infinityText">• Natty • Est 2002 </span>
            <span className="home__hero__infinityText">• Natty • Est 2002 </span>
          </div> */}
          {/* <div className="home__hero__scrollContainer">
            <p className="home__hero__scroll">(scroll)</p>
          </div> */}

          {/* <div className="home__hero__logoContainer">
            <NattySVG
              nattySVGClass="home__hero__logo"
              nattySVGPathClass="home__hero__logoPath"
            />
          </div> */}
        </div>

        {/* <div className="home__hero__imgContainer">
          <h1 className="home__hero__header home__hero__headerTop">Naturally Sharp</h1>
          <h1 className="home__hero__header home__hero__headerBottom">A Cappella</h1>
          <div className="home__hero__imgWrapper" data-speed="clamp(0.9)">
            <img
              className="home__hero__img"
              src={lay_me_down}
              alt="Naturally Sharp A Cappella on stage in dapper suits"
            />
          </div>
        </div>
        <div className="home__hero__logoContainer">
          <NattySVG
            nattySVGClass="home__hero__logo"
            nattySVGPathClass="home__hero__logoPath"
          />
        </div> */}
      </section>
    </div>
  );
};

export default Hero;
