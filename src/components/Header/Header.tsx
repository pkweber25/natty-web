import "./Header.css";
import { useRef, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import NattySVG from "../NattySVG";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "header__navbarLink header__navbarLink--active" : "header__navbarLink";

const Header = () => {
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const navbarToggleTl = gsap
        .timeline({
          paused: true,
          defaults: { duration: 0.4, ease: "power3.inOut" },
        })
        .fromTo(
          ".header__overlay",
          { autoAlpha: 0 },
          { autoAlpha: 1, pointerEvents: "auto" },
          0
        )
        .fromTo(
          ".header__navbar",
          { xPercent: 100, autoAlpha: 0 },
          { xPercent: 0, autoAlpha: 1, pointerEvents: "auto" },
          0
        )
        .to(".header__logoPath", { fill: "#c3332b" }, 0)
        .to(
          ".header__toggleContainer",
          { text: "CLOSE", color: "#c3332b" },
          0
        )
        .fromTo(
          ".header__navbarLink",
          { autoAlpha: 0 },
          { autoAlpha: 1, stagger: 0.06, duration: 0.35, ease: "power2.out" },
          ">-0.15"
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
      const closeMenu = () => {
        if (!navbarToggleTl.reversed()) {
          navbarToggleTl.reverse();
        }
      };

      const toggleMenu = () => {
        if (navbarToggleTl.reversed()) {
          navbarToggleTl.play();
        } else {
          navbarToggleTl.reverse();
        }
      };

      navbarToggle?.addEventListener("click", toggleMenu);

      document
        .querySelectorAll(".header__navbarLink")
        .forEach((link) => link.addEventListener("click", closeMenu));

      const overlay = document.querySelector(".header__overlay");
      overlay?.addEventListener("click", closeMenu);
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={headerRef}>
      <div className="header__buttons">
        <div className="header__logoContainer">
          <NavLink to="/" className="header__logoLink">
            <NattySVG
              nattySVGClass="header__logo"
              nattySVGPathClass="header__logoPath"
            />
          </NavLink>
        </div>
        <div className="header__toggleContainer">MENU</div>
      </div>
      <div className="header__overlay"></div>
      <header className="header">
        <div className="header__container">
          <nav className="header__navbar">
            <ul className="header__navbarList">
              <li className="header__navbarListItem">
                <NavLink to="/" className={navLinkClass} end>
                  Home
                </NavLink>
              </li>
              <li className="header__navbarListItem">
                <NavLink to="/about" className={navLinkClass}>
                  About
                </NavLink>
              </li>
              <li className="header__navbarListItem">
                <NavLink to="/boys" className={navLinkClass}>
                  The Boys
                </NavLink>
              </li>
              <li className="header__navbarListItem">
                <NavLink to="/music" className={navLinkClass}>
                  Music
                </NavLink>
              </li>
              <li className="header__navbarListItem">
                <NavLink to="/contact" className={navLinkClass}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
