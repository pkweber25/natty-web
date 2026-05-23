import "./Footer.css";

import NattySVG from "../NattySVG";
import { useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

import { gsap } from "gsap";

import {
  BsInstagram,
  BsYoutube,
  BsSpotify,
  BsFacebook,
  BsArrowUpRight,
  BsArrowUp,
  BsSuitHeartFill,
} from "react-icons/bs";
import { BiLogoVenmo } from "react-icons/bi";
import { SiApplemusic } from "react-icons/si";

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
            <a
              href="https://open.spotify.com/artist/01bkxnhOwAMHZzRODFCvuB?si=byQF_R5wTVeljSoRCu8MoA"
              className="footer__url footer__urlSpotify"
              target="_blank"
              rel="noreferrer"
            >
              Listen on Spotify <BsArrowUpRight />
            </a>
            <div className="footer__sectionHeader footer__navigate">
              Navigate
            </div>
            <Link to="/" className="footer__url footer__urlHome">
              Home
            </Link>
            <Link to="/about" className="footer__url footer__urlAbout">
              About
            </Link>
            <Link to="/boys" className="footer__url footer__urlBoys">
              The Boys
            </Link>
            <Link to="/music" className="footer__url footer__urlMusic">
              Music
            </Link>
            <Link to="/contact" className="footer__url footer__urlContact">
              Contact
            </Link>
            <div className="footer__sectionHeader footer__follow">
              Follow Us
            </div>
            <div className="footer__socialsGrid">
                <a
                href="https://www.instagram.com/naturallysharp/"
                target="_blank"
                rel="noreferrer"
                className="footer__socials footer__socials__instagram"
              >
                <BsInstagram />
              </a>
              <a
                href="https://www.facebook.com/naturallysharp/"
                target="_blank"
                rel="noreferrer"
                className="footer__socials footer__socials__facebook"
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.youtube.com/vtnattysharp"
                target="_blank"
                rel="noreferrer"
                className="footer__socials footer__socials__youtube"
              >
                <BsYoutube />
              </a>
              <a
                href="https://music.apple.com/us/artist/naturally-sharp/576611609"
                target="_blank"
                rel="noreferrer"
                className="footer__socials footer__socials__apple"
              >
                <SiApplemusic />
              </a>
              <a
                href="https://open.spotify.com/artist/01bkxnhOwAMHZzRODFCvuB?si=byQF_R5wTVeljSoRCu8MoA"
                target="_blank"
                rel="noreferrer"
                className="footer__socials footer__socials__spotify"
              >
                <BsSpotify />
              </a>
            </div>
            <div className="footer__sectionHeader footer__donateText">
              Donate
            </div>
            <div className="footer__donateGrid">
              <a
                href="https://account.venmo.com/u/NattySharp"
                target="_blank"
                rel="noreferrer"
                className="footer__donate footer__donate__venmo"
              >
                <BiLogoVenmo />
              </a>
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
            Kiet Nguyen, Peter Weber, and Sophia Spraker
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
