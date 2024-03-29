import "./StreamParallax.css";

import horizontalLoop from "../../../utils/horizontalLoop";
import casting_off from "../../../assets/casting_off.jpg";
import img_logo from "../../../assets/natty.svg";
import in_high_spirits from "../../../assets/in_high_spirits_small.png";
import NattySVG from "../../../components/NattySVG";

import dudes from "../../../assets/album_cover/dudes_tall_mobile.png";
import background from "../../../assets/album_cover/background_mobile.png";
import sun from "../../../assets/album_cover/sun_tall_mobile.png";

import { useRef, useLayoutEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Stream = () => {
  const streamRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const texts = gsap.utils.toArray(".home__stream__infinityText");
      let loop = horizontalLoop(texts, {
        repeat: -1,
        speed: 0.5,
      });

      // ScrollTrigger.create({
      //   trigger: ".home__stream__albumImgContainer",
      //   start: "top bottom",
      //   end: "bottom top",
      //   animation: gsap
      //     .timeline()
      //     .to(".home__stream__albumImg", { objectPosition: "0% 100%" })
      //     .fromTo(
      //       ".home__stream__albumImg",
      //       { scale: 1.4, yPercent: 20 },
      //       { scale: 1, yPercent: 0 },
      //       "<"
      //     ),
      //   scrub: 2,
      // });

      const stream = document.querySelector<HTMLDivElement>(".home__stream");

      const infinityContainer = stream?.querySelector<HTMLDivElement>(
        ".home__stream__infinityTextContainer"
      );

      const infinityContainerHeight = infinityContainer?.offsetHeight;

      const extraPixels = 300;

      const parallaxTimeline = gsap
        .timeline()
        .from(".home__stream__albumTitle", { yPercent: 700, duration: 0.5 })
        .from(
          ".home__stream__albumArtDudesContainer",
          {
            yPercent: 100,
            scale: 1.6,
            duration: 1.25,
          },
          ">-0.25"
        )
        .from(
          ".home__stream__albumArtSunContainer",
          { yPercent: 100, scale: 1.4, duration: 1 },
          ">-1"
        )
        .from(".home__stream__albumSubtitle", { autoAlpha: 0 })
        .from(".home__stream__listenBtn", { autoAlpha: 0, delay: 0.5 });

      // ScrollTrigger.create({
      //   trigger: ".home__stream__albumArtContainer",
      //   start: "top top-=" + infinityContainerHeight,
      //   end: "bottom top",
      //   animation: parallaxTimeline,
      //   scrub: 2,
      // });

      ScrollTrigger.create({
        trigger: ".home__stream__albumArtContainer",
        start: "top top+=" + infinityContainerHeight,
        end: "bottom top",
        animation: parallaxTimeline,
        scrub: 2,
      });

      // ScrollTrigger.create({
      //   trigger: stream,
      //   start: "top top-=" + infinityContainerHeight,
      //   end: "bottom top-=300",
      //   pin: true,
      //   scrub: 2,
      // });

      ScrollTrigger.create({
        trigger: stream,
        start: "top top",
        end: "bottom top-=" + extraPixels,
        pin: true,
        scrub: 2,
      });

      ScrollTrigger.create({
        trigger: infinityContainer,
        start:
          "top+=" + ((stream?.offsetHeight as number) + extraPixels) + " top",
        end:
          "top+=" +
          ((stream?.offsetHeight as number) +
            extraPixels +
            (document.querySelector<HTMLDivElement>(
              ".home__stream__albumArtContainer"
            )?.offsetHeight as number)) +
          " top",
        pin: true,
        scrub: 2,
      });
    }, streamRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="home__stream__container" ref={streamRef}>
      <section className="home__stream">
        <div className="home__stream__infinityTextContainer">
          <span className="home__stream__infinityText">
            <NattySVG
              nattySVGClass="home__stream__infinityTextLogoSVG"
              nattySVGPathClass="home__stream__infinityTextLogoSVGPath"
            />
          </span>
          <span className="home__stream__infinityText">New Music Alert</span>
          <span className="home__stream__infinityText">
            <NattySVG
              nattySVGClass="home__stream__infinityTextLogoSVG"
              nattySVGPathClass="home__stream__infinityTextLogoSVGPath"
            />
          </span>
          <span className="home__stream__infinityText">New Music Alert</span>
          <span className="home__stream__infinityText">
            <NattySVG
              nattySVGClass="home__stream__infinityTextLogoSVG"
              nattySVGPathClass="home__stream__infinityTextLogoSVGPath"
            />
          </span>
          <span className="home__stream__infinityText">New Music Alert</span>
        </div>

        <div className="home__stream__albumArtContainer">
          <div className="home__stream__albumArtSunContainer">
            <img src={sun} alt="" className="home__stream__albumArtSun" />
          </div>
          <div className="home__stream__albumArtDudesContainer">
            <img src={dudes} alt="" className="home__stream__albumArtDudes" />
          </div>
          {/* <div className="home__stream__albumTitle">
            <div className="home__stream__albumTitleLine1">
              <span className="home__stream__albumTitleHighlight">In High</span>
            </div>
            <div className="home__stream__albumTitleLine2">Spirits</div>
          </div> */}
          <div className="home__stream__albumTitle">
            <div className="home__stream__albumTitleLine1Container">
              <div className="home__stream__albumTitleLine1">In High</div>
            </div>
            <div className="home__stream__albumTitleLine2Container">
              <div className="home__stream__albumTitleLine2">Spirits</div>
            </div>
          </div>
          <div className="home__stream__albumSubtitle">out now</div>

          <button className="home__stream__listenBtn">
            <span className="home__stream__listenBtnUnderline">
              Listen on Spotify
            </span>
          </button>
        </div>

        {/* <p className="home__stream__text">
          Naturally Sharp's fourth studio album,{" "}
          <span className="home__stream__textHighlight">In High Spirits</span>, now
          available on all streaming platforms.
        </p> */}
      </section>
    </div>
  );
};

export default Stream;
