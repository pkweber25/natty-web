import "./SupportUs.css";

import NattySVG from "../../../components/NattySVG";
import ImageSlot from "../../../components/ImageSlot/ImageSlot";
import horizontalLoop from "../../../utils/horizontalLoop";
import createInfinityText from "../../../utils/createInifinityText";
import { useRef, useLayoutEffect } from "react";
import { IMAGES } from "../../../config/images";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SupportUs = () => {
  const supportRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const texts = gsap.utils.toArray(".home__supportUs__infinityTextItem");
      horizontalLoop(texts, {
        repeat: -1,
        speed: 0.5,
      });

      gsap.to(".home__supportUs__titleContainer", {
        rotation: 360,
        repeat: -1,
        duration: 30,
        ease: "none",
        onReverseComplete: function () {
          this.progress(1);
        },
        // onUpdate: (self) => {
        //   if (self.direction > 0)
        // }
      });

      //   ScrollTrigger.create({
      //     trigger: ".supportUs",
      //     start: "top bottom",
      //     end: "bottom top+=100vh",
      //     scrub: 0,
      //     onUpdate(self) {
      //       gsap.fromTo(
      //         spinningVinyl,
      //         {
      //           timeScale: self.direction === 1 ? 2 : 0.1,
      //         },
      //         {
      //           timeScale: 1,
      //           overwrite: true,
      //         }
      //       );
      //     },
      //   });

      const infinityContainer = document.querySelector<HTMLDivElement>(
        ".home__supportUs__infinityTextContainer"
      );

      ScrollTrigger.create({
        trigger: infinityContainer,
        start: "top top",
        end:
          "bottom+=" +
          ((document.querySelector<HTMLDivElement>(".home__supportUs")
            ?.offsetHeight as number) -
            2 * (infinityContainer?.offsetHeight as number)) +
          " top",
        pin: true,
        scrub: 2,
      });

      gsap.set(".home__supportUs__titleContainer", { autoAlpha: 0 });
      gsap.set(".home__supportUs__text", { autoAlpha: 0 });
      gsap.set(".home__supportUs__btn", { autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: ".home__supportUs__titleContainer",
        start: "top 70%",
        end: "top 40%",
        animation: gsap
          .timeline({ defaults: { duration: 1 } })
          .fromTo(
            ".home__supportUs__titleContainer",
            { autoAlpha: 0 },
            { autoAlpha: 1 }
          ),
        scrub: true,
      });

      ScrollTrigger.create({
        trigger: ".home__supportUs__text",
        start: "top 70%",
        end: "top 40%",
        animation: gsap
          .timeline({ defaults: { duration: 1 } })
          .fromTo(
            ".home__supportUs__text",
            { autoAlpha: 0, yPercent: 10 },
            { autoAlpha: 1, yPercent: 0 }
          )
          .fromTo(
            ".home__supportUs__btn",
            { autoAlpha: 0, yPercent: 10 },
            { autoAlpha: 1, yPercent: 0, stagger: 1 },
            ">"
          ),
        scrub: true,
      });
    }, supportRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="home__supportUs__container" ref={supportRef}>
      <div className="home__supportUs">
        {createInfinityText("home__supportUs", 6, "", "We need money")}

        <div className="home__supportUs__titleContainer">
          <svg
            className="home__supportUs__circleTextSvg"
            viewBox="0 0 500 500"
            data-duration="5"
          >
            <path
              id="home__supportUs__circleId"
              className="home__supportUs__circle"
              d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
            ></path>

            <text className="home__supportUs__circleText">
              <textPath xlinkHref="#home__supportUs__circleId">
                Support
                <tspan className="home__supportUs__circleTextHighlight">
                  Natty
                </tspan>
                Support
                <tspan className="home__supportUs__circleTextHighlight">
                  Natty
                </tspan>{" "}
                Support
                <tspan className="home__supportUs__circleTextHighlight">
                  Natty
                </tspan>{" "}
                Support
                <tspan className="home__supportUs__circleTextHighlight">
                  Natty
                </tspan>{" "}
              </textPath>
            </text>
          </svg>
          <div className="home__supportUs__vinylContainer">
            <div className="home__supportUs__vinylOuter"></div>
            <div className="home__supportUs__vinylMiddle"></div>
            <div className="home__supportUs__vinylInner">
              <div className="home__supportUs__vinylLogoContainer">
                <NattySVG
                  nattySVGClass="home__supportUs__vinylLogo"
                  nattySVGPathClass="home__supportUs__vinylLogoPath"
                />
              </div>
            </div>
          </div>
        </div>

        <p className="home__supportUs__text">
          Help Naturally Sharp carry on our legacy. Any amount is appreciated!
        </p>

        <a
          href="https://account.venmo.com/u/NattySharp"
          target="_blank"
          rel="noreferrer"
          className="home__supportUs__btn home__supportUs__venmoBtn"
        >
          Venmo us
        </a>

        <div className="home__supportUs__venmoQR">
          <ImageSlot
            src={IMAGES.venmoQR}
            alt="Venmo QR code"
            className="home__supportUs__venmoQRImg"
            loading="lazy"
          />
        </div>

        {/* <div className="home__supportUs__titleContainer">
          <div className="home__supportUs__title">
            <div className="home__supportUs__titleLine1">
              <span className="home__supportUs__titleHighlight">Support</span>
            </div>

            <div className="home__supportUs__vinylContainer">
              <div className="home__supportUs__vinylOuter"></div>
              <div className="home__supportUs__vinylMiddle"></div>
              <div className="home__supportUs__vinylInner">
                <div className="home__supportUs__vinylLogoContainer">
                  <NattySVG
                    nattySVGClass="home__supportUs__vinylLogo"
                    nattySVGPathClass="home__supportUs__vinylLogoPath"
                  />
                </div>
              </div>
            </div>
            <div className="home__supportUs__titleLine2">Natty</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SupportUs;
