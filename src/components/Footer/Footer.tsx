import "./Footer.css";

import NattySVG from "../NattySVG";
import { useRef, useLayoutEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { AiFillInstagram } from "react-icons/ai";
import {
  BsInstagram,
  BsYoutube,
  BsSpotify,
  BsFacebook,
  BsArrowUpRight,
  BsArrowUp,
  BsBoxArrowRight,
  BsSuitHeartFill,
} from "react-icons/bs";
import { BiLogoVenmo, BiLogoPatreon } from "react-icons/bi";

interface Props {
  mode: string;
}

const Footer = ({ mode }: Props) => {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // ScrollTrigger.create({
      //   trigger: ".footer__inner",
      //   pin: true,
      //   scrub: true,
      //   start: "top top",
      //   end: "+=100vh",
      //   markers: true,
      // });
      // ScrollTrigger.create({
      //   trigger: ".footer__inner",
      //   scrub: true,
      //   start: "top bottom",
      //   end: "top top",
      //   animation: gsap.from(".footer", {
      //     yPercent: -100,
      //     ease: "none",
      //   }),
      // });

      document
        .querySelector<HTMLDivElement>(".footer__backToTop")
        ?.addEventListener("click", () =>
          gsap.to(window, { scrollTo: 0, duration: 1 })
        );
    }, footerRef);
    return () => ctx.revert();
  }, []);
  return (
    <div className="footer__container" ref={footerRef}>
      <div className="footer__inner">
        <div
          className={`footer ${
            mode === "primary" ? "footerPrimary" : "footerBackground"
          }`}
        >
          <h2 className="footer__header">Natty</h2>
          <h3 className="footer__header footer__headerSubtitle">Est. 2002</h3>

          <div className="footer__urlGrid">
            <NattySVG
              nattySVGClass="footer__logoSVG"
              nattySVGPathClass="footer__logoSVGPath"
            />
            <div className="footer__url footer__urlSpotify">
              Listen on Spotify <BsArrowUpRight />
            </div>
            <div className="footer__sectionHeader footer__navigate">
              Navigate
            </div>
            <div className="footer__url footer__urlHome">Home</div>
            <div className="footer__url footer__urlAbout">About</div>
            <div className="footer__url footer__urlBoys">The Boys</div>
            <div className="footer__url footer__urlMusic">Music</div>
            <div className="footer__url footer__urlContact">Contact</div>
            <div className="footer__sectionHeader footer__follow">
              Follow Us
            </div>
            <div className="footer__socialsGrid">
              <div className="footer__socials footer__socials__instagram">
                <BsInstagram />
              </div>
              <div className="footer__socials footer__socials__facebook">
                <BsFacebook />
              </div>
              <div className="footer__socials footer__socials__youtube">
                <BsYoutube />
              </div>
              <div className="footer__socials footer__socials__spotify">
                <BsSpotify />
              </div>
            </div>
            <div className="footer__sectionHeader footer__donateText">
              Donate
            </div>
            <div className="footer__donateGrid">
              <div className="footer__donate footer__donate__venmo">
                <BiLogoVenmo />
              </div>
              <div className="footer__donate footer__donate__patreon">
                <BiLogoPatreon />
              </div>
            </div>
            <div className="footer__url footer__backToTop">
              Back to top <BsArrowUp />
            </div>
            <div className="footer__divider">
              <div className="footer__dividerLine"></div>
            </div>
          </div>
          <div className="footer__credits">
            made with <BsSuitHeartFill className="footer__credits__icon" /> by
            Kiet Nguyen and Sophia Spraker
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
