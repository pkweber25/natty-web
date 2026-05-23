import "./Performances.css";

import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ImageSlot from "../../../../components/ImageSlot/ImageSlot";
import { IMAGES } from "../../../../config/images";

const Performances = () => {
  const performancesRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils
        .toArray(".about__body__performances__textHighlight")
        .forEach((highlight: any) => {
          ScrollTrigger.create({
            trigger: highlight,
            start: "top 50%",
            end: "bottom 40%",
            animation: gsap.to(highlight, {
              backgroundSize: "100% 100%",
            }),
            scrub: 1,
          });
        });

      gsap.utils
        .toArray(".about__body__performances__text")
        .forEach((text: any) => {
          ScrollTrigger.create({
            trigger: text,
            start: "top 70%",
            end: "top 40%",
            animation: gsap.fromTo(
              text,
              { autoAlpha: 0, yPercent: 10 },
              { autoAlpha: 1, yPercent: 0, duration: 1 }
            ),
            scrub: true,
          });
        });

      const imgsContainer = gsap.utils.selector(
        ".about__body__performances__imgsContainer"
      );

      gsap.set(".about__body__performances__imgContainer", { autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: ".about__body__performances__imgsContainer",
        start: "top 70%",
        end: "top 40%",
        animation: gsap.to(
          imgsContainer(".about__body__performances__imgContainer"),
          {
            autoAlpha: 1,
            duration: 1,
            stagger: 1,
          }
        ),
        scrub: true,
      });
    }, performancesRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={performancesRef}>
      <div className="about__body__performances">
        <p className="about__body__performances__text">
          Priding ourselves with our{" "}
          <span className="about__body__performances__textHighlight">
            energetic stage presence
          </span>
          , we hold a themed concert each semester and are the only group to
          produce a comedic video to show at the concerts that ties into our
          theme.
        </p>
        <p className="about__body__performances__text">
          We also have several performances throughout the year. Namely, we have
          an annual performance at Sinkland Farms in the Fall, we recently
          performed at a NASCAR event, and we frequently perform in
          riff&#x2011;offs held by other student organizations.
        </p>

        <div className="about__body__performances__imgsContainer">
          <div
            className="about__body__performances__imgContainer left"
            data-speed="1.1"
          >
            <div
              className="about__body__performances__imgCaption"
              data-speed="1.05"
            >
              Riff-Off Champs
            </div>
            <ImageSlot
              src={IMAGES.about.performanceRiffoff}
              hint="public/images/events/relayForLife.png"
              alt="Riff-off"
              className="about__body__performances__img"
            />
          </div>
          <div
            className="about__body__performances__imgContainer center"
            data-speed="1.1"
          >
            <div
              className="about__body__performances__imgCaption"
              data-speed="1.05"
            >
              Sinkland Farms
            </div>
            <ImageSlot
              src={IMAGES.about.sinklandFarms}
              hint="public/images/events/sinklandfarms.png"
              alt="Sinkland Farms performance"
              className="about__body__performances__img"
            />
          </div>
          <div
            className="about__body__performances__imgContainer right"
            data-speed="1.2"
          >
            <div
              className="about__body__performances__imgCaption"
              data-speed="1.08"
            >
              NASCAR
            </div>
            <ImageSlot
              src={IMAGES.about.performanceNascar}
              hint="public/images/events/nascar.png"
              alt="NASCAR performance"
              className="about__body__performances__img"
            />
          </div>
        </div>

        <p className="about__body__performances__text">
          Over the years, we’ve released several albums and EP's, hosted a concert every semester, and recently competed for the first time at CNU's Blue Tie Affair We are also proud to be featured
          in{" "}
          <span className="about__body__performances__textHighlight">
            BOCA 2014: Best Of College A Cappella
          </span>
          .
        </p>

        <p className="about__body__performances__text">
          Aside from our love of music, Naturally Sharp is just a group of guys
          who love to have a good time, creating lifelong friendships and valued
          alumni relationships. With auditions being held at the beginning of
          each semester, we welcome new members with open arms.
        </p>
      </div>
    </div>
  );
};

export default Performances;
