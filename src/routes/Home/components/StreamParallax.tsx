import "./StreamParallax.css";

import horizontalLoop from "../../../utils/horizontalLoop";
import createInfinityText from "../../../utils/createInifinityText";
import ImageSlot from "../../../components/ImageSlot/ImageSlot";
import { IMAGES } from "../../../config/images";

import { useRef, useLayoutEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Stream = () => {
  const streamRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".home__stream__infinityTextItem");
      horizontalLoop(items, {
        repeat: -1,
        speed: 0.5,
        paddingRight: 32,
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
        .from(".home__stream__albumTitleWord--one", { yPercent: 150, duration: 0.5 }).from(".home__stream__albumTitleWord--more",
          { yPercent: 150, duration: 0.5 },
          ">-0.1"
        ).from(".home__stream__albumTitleWord--shot",
          { yPercent: 150, duration: 0.5 },
          ">-0.1"
        )
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
        .from(
          ".home__stream__albumCoverContainer",
          { yPercent: 80, scale: 0.6, autoAlpha: 0, duration: 1 },
          ">-0.5"
        )
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
        {createInfinityText("home__stream", 3, "", "New Music Alert")}

        <div className="home__stream__albumArtContainer">
          <div className="home__stream__albumArtSunContainer">
            <ImageSlot
              src={IMAGES.music.albumSun}
              hint="public/images/music/album-sun.png"
              alt=""
              className="home__stream__albumArtSun"
            />
          </div>
          <div className="home__stream__albumArtDudesContainer">
            <ImageSlot
              src={IMAGES.music.albumDudes}
              hint="public/images/music/sharpGamesGroupPhoto.jpg"
              alt=""
              className="home__stream__albumArtDudes"
            />
          </div>
          <div className="home__stream__albumCoverContainer">
            <ImageSlot
              src={IMAGES.music.oneMoreShotAlbumCover}
              hint="public/images/music/oneMoreShotAlbumCover.png"
              alt="One More Shot album cover"
              className="home__stream__albumCover"
            />
          </div>
          {/* <div className="home__stream__albumTitle">
            <div className="home__stream__albumTitleLine1">
              <span className="home__stream__albumTitleHighlight">In High</span>
            </div>
            <div className="home__stream__albumTitleLine2">Spirits</div>
          </div> */}
          <div className="home__stream__albumTitle">
            <div className="home__stream__albumTitleRow">
              <div className="home__stream__albumTitleWord home__stream__albumTitleWord--one">One</div>
              <div className="home__stream__albumTitleWord home__stream__albumTitleWord--more">More</div>
              <div className="home__stream__albumTitleWord home__stream__albumTitleWord--shot">Shot</div>
            </div>
          </div>
          <a className="home__stream__listenBtn" href="https://open.spotify.com/album/4K2xusVE34XdQfp1AoLBo2?si=rz2gC-5jQXGlijLEqpGXBw" target="_blank" rel="noreferrer">
            Listen on Spotify
          </a>
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
