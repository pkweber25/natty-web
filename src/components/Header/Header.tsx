import "./Header.css";
import { useRef, useLayoutEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import NattySVG from "../NattySVG";

const Header = () => {
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const navbarToggleTl = gsap
        .timeline({
          paused: true,
          reversed: true,
          defaults: { duration: 0.5, ease: "slow" },
        })
        // .to(".header__navbar", { left: 0 })
        // .to(
        //   ".header__naturalH1",
        //   {
        //     // autoAlpha: 0,
        //     width: 0,
        //     ease: "slow",
        //   },
        //   0
        // )
        // .to(
        //   ".header__naturalH2",
        //   {
        //     // autoAlpha: 0,
        //     width: 0,
        //     left: "100%",
        //   },
        //   0
        // )
        // .to(".header__natural", { transform: "skewY(0deg)" }, 0)
        // .to(".header__navbar", { height: "100vh", top: 0 }, ">")
        // .to(
        //   ".header__toggleContainer",
        //   {
        //     border: "1px solid #fff",
        //     backgroundColor: "#c3332b",
        //   },
        //   ">"
        // )
        // .to(
        //   ".header__naturalV1",
        //   {
        //     transform: "rotate(45deg)",
        //     backgroundColor: "#fff",
        //     xPercent: -600,
        //     // yPercent: 20,
        //   },
        //   ">"
        // )
        // .to(
        //   ".header__naturalV2",
        //   {
        //     transform: "rotate(-45deg)",
        //     backgroundColor: "#fff",
        //     xPercent: -1400,
        //     yPercent: -3,
        //     // yPercent: -20,
        //   },
        //   "<"
        // );
        .to(".header__logoPath", { fill: "#c3332b" })
        .to(
          ".header__toggleContainer",
          { text: "CLOSE", color: "#c3332b" },
          "<"
        );

      const showAnim = gsap
        .from(".header__buttons", {
          yPercent: -100,
          paused: true,
          duration: 0.2,
        })
        .progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse();
        },
      });

      const navbarToggle = document.querySelector(".header__toggleContainer");
      navbarToggle!.addEventListener("click", () => {
        if (navbarToggleTl.reversed()) {
          navbarToggleTl.play();
        } else {
          navbarToggleTl.reverse();
        }
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={headerRef}>
      <div className="header__buttons">
        <div className="header__logoContainer">
          <a href="#" className="header__logoLink">
            <NattySVG
              nattySVGClass="header__logo"
              nattySVGPathClass="header__logoPath"
            />
          </a>
        </div>
        <div className="header__toggleContainer">
          {/* <div className="header__natural">
            <span className="header__naturalV header__naturalV1"></span>
            <span className="header__naturalV header__naturalV2"></span>
            <span className="header__naturalH header__naturalH1"></span>
            <span className="header__naturalH header__naturalH2"></span>
          </div> */}
          MENU
        </div>
      </div>
      <header className="header">
        <div className="header__container">
          <nav className="header__navbar">
            <ul className="header__navbarList">
              <li className="header__navbarListItem">
                <a href="#" className="header__navbarLink">
                  Home
                </a>
              </li>
              <li className="header__navbarListItem">
                <a href="#" className="header__navbarLink">
                  About
                </a>
              </li>
              <li className="header__navbarListItem">
                <a href="#" className="header__navbarLink">
                  The Boys
                </a>
                {/* <div className="header__liMoreContainer">
                <div className="header__liMore">
                  <span className="header__liMoreLine header__liMoreLine1"></span>
                  <span className="header__liMoreLine header__liMoreLine2"></span>
                </div>
              </div>
              <ul className="header__navbarSublist">
                <li className="header__navbarSublistItem">
                  <div className="header__navbarSublistItemBg"></div>
                  <a href="#" className="header__navbarSublink">
                    Current Members
                  </a>
                </li>
                <li className="header__navbarSublistItem">
                  <div className="header__navbarSublistItemBg"></div>
                  <a href="#" className="header__navbarSublink">
                    Legacy
                  </a>
                </li>
              </ul> */}
              </li>
              <li className="header__navbarListItem">
                <a href="#" className="header__navbarLink">
                  Music
                </a>
                {/* <div className="header__liMoreContainer">
                <div className="header__liMore">
                  <span className="header__liMoreLine header__liMoreLine1"></span>
                  <span className="header__liMoreLine header__liMoreLine2"></span>
                </div>
              </div>
              <ul className="header__navbarSublist">
                <li className="header__navbarSublistItem">
                  <a href="#" className="header__navbarSublink">
                    Current Setlist
                  </a>
                  <div className="header__navbarSublistItemBg"></div>
                </li>
                <li className="header__navbarSublistItem">
                  <div className="header__navbarSublistItemBg"></div>
                  <a href="#" className="header__navbarSublink">
                    Concerts
                  </a>
                </li>
                <li className="header__navbarSublistItem">
                  <div className="header__navbarSublistItemBg"></div>
                  <a href="#" className="header__navbarSublink">
                    Discography
                  </a>
                </li>
              </ul> */}
              </li>
              <li className="header__navbarListItem">
                <a href="#" className="header__navbarLink">
                  Gallery
                </a>
              </li>
              <li className="header__navbarListItem">
                <a href="#" className="header__navbarLink">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
