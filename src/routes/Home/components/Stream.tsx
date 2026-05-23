import "./Stream.css";

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

      ScrollTrigger.create({
        trigger: ".home__stream__albumImgContainer",
        start: "top bottom",
        end: "bottom top",
        animation: gsap
          .timeline()
          .to(".home__stream__albumImg", { objectPosition: "0% 100%" })
          .fromTo(
            ".home__stream__albumImg",
            { scale: 1.4, yPercent: 20 },
            { scale: 1, yPercent: 0 },
            "<"
          ),
        scrub: 2,
      });
    }, streamRef);
    return () => ctx.revert();
  }, []);
  return (
    <div className="home__stream__container" ref={streamRef}>
      <section className="home__stream">
        {createInfinityText("home__stream", 3, "", "New Music Alert")}

        <div className="home__stream__albumContainer">
          <div className="home__stream__albumTitle">
            <div className="home__stream__albumTitleLine1">
              <span className="home__stream__albumTitleHighlight">One</span>
            </div>
            <div className="home__stream__albumTitleLine2">More Shot</div>
          </div>
          <div className="home__stream__albumImgContainer">
            <ImageSlot
              src={IMAGES.music.oneMoreShotAlbumCover}
              hint="public/images/music/oneMoreShotAlbumCover.png"
              className="home__stream__albumImg"
              alt="One More Shot album cover"
            />
          </div>
          <div className="home__stream__albumSubtitle">out now!</div>
        </div>

        <p className="home__stream__text">
          Naturally Sharp's fifth studio album,{" "}
          <span className="home__stream__textHighlight">One More Shot</span>,
          now available on all streaming platforms.
        </p>

        <a className="home__stream__listenBtn" href="https://open.spotify.com/artist/01bkxnhOwAMHZzRODFCvuB?si=byQF_R5wTVeljSoRCu8MoA" target="_blank" rel="noreferrer">
          Listen on Spotify
        </a>

        {/* <div className="home__stream__vinylContainer">
          <div className="home__stream__vinylOuter"></div>
          <div className="home__stream__vinylMiddle"></div>
          <div className="home__stream__vinylInner">
            <div className="home__stream__vinylLogoContainer">
              <NattySVG
                nattySVGClass="home__stream__vinylLogo"
                nattySVGPathClass="home__stream__vinylLogoPath"
              />
            </div>
          </div>
        </div> */}
        {/* <div className="home__stream__backgroundImgContainer"></div>
        <div className="home__stream__header">
          <h2 className="home__stream__header1">In High Spirits</h2>
          <h2 className="home__stream__header2">Out Now!</h2>
        </div>

        <p className="home__stream__text">
          Naturally Sharp's fourth album,{" "}
          <span className="home__stream__textHighlight">In High Spirits</span>, is now
          available on all home__streaming platforms. The record features 9 tracks
          originally performed by Stevie Wonder, Panic! at the Disco, Måneskin,
          Sam Smith, and more.
        </p>

        <div className="home__stream__albumOuter">
          <div className="home__stream__albumNo" data-speed="clamp(1.1)">
            04
          </div>

          <div className="home__stream__albumContainer">
            <img src={in_high_spirits} className="home__stream__albumImg" alt="" />
          </div>
        </div>

        <p className="home__stream__text">
          <span className="home__stream__textHighlight">In High Spirits</span> is the
          culmination of an entire year of planning and hard work. We hope you
          enjoy listening!
        </p> */}
      </section>
    </div>
  );
};

export default Stream;
