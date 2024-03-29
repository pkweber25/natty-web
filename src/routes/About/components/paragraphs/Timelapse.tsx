import "./Timelapse.css";

import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../../../../assets/old_natty/2010.jpg";
import img2 from "../../../../assets/old_natty/2011.jpg";
import img3 from "../../../../assets/old_natty/2012.jpg";
import img4 from "../../../../assets/old_natty/sinkland_2011.jpg";
import img5 from "../../../../assets/old_natty/2011_2.jpg";
import img6 from "../../../../assets/old_natty/2013.jpg";
import img7 from "../../../../assets/old_natty/2002.jpeg";
import img8 from "../../../../assets/old_natty/2017.jpg";
import img9 from "../../../../assets/old_natty/2016_2.jpg";
import img10 from "../../../../assets/old_natty/2017_2.jpg";
import bow from "../../../../assets/group_photos/bow_compressed.jpg";
import in_costume from "../../../../assets/group_photos/in_costume_mobile.jpg";
import butter from "../../../../assets/group_photos/butter_mobile.jpg";

const Timelapse = () => {
  const timelapseRef = useRef(null);

  const mainClassPrefix = "about__body__timelapse";

  const imgsLtr = [img1, img2, img8, bow];
  const imgsRtl = [img4, img3, img9, in_costume];
  const imgsLtr2 = [img7, img6, img10, butter];

  const createLtrSlides = function (imgs: string[]) {
    return (
      <div className={mainClassPrefix + "__slides leftToRight"}>
        {imgs.map((img, idx: number) => (
          <div className={mainClassPrefix + "__slide leftToRight"} key={idx}>
            <img src={img} alt="" className={mainClassPrefix + "__img"} />
          </div>
        ))}
      </div>
    );
  };

  const createRtlSlides = function (imgs: string[]) {
    return (
      <div className={mainClassPrefix + "__slides rightToLeft"}>
        {imgs.map((img, idx: number) => (
          <div className={mainClassPrefix + "__slide rightToLeft"} key={idx}>
            <img src={img} alt="" className={mainClassPrefix + "__img"} />
          </div>
        ))}
      </div>
    );
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".about__body__timelapseContainer",
        start: "top 70%",
        end: "top 50%",
        animation: gsap.fromTo(
          ".about__body__timelapse__year",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 2 }
        ),
        scrub: true,
      });

      ScrollTrigger.create({
        trigger: ".about__body__timelapseContainer",
        start: "top 50%",
        end: "top 10%",
        animation: gsap.to(".about__body__timelapse__slides", {
          autoAlpha: 1,
          duration: 2,
          stagger: 1,
        }),
        scrub: true,
      });

      const slidesLtrContainer = document.querySelector<HTMLDivElement>(
        ".about__body__timelapse__slides.leftToRight"
      );

      const slidesLtrContainerWidth = slidesLtrContainer?.offsetWidth as number;

      const scrollExtraPixels = 2000;

      gsap.utils
        .toArray(".about__body__timelapse__slides.leftToRight")
        .forEach((slidesLtrContainer: any) => {
          // const slidesLtrContainer = document.querySelector<HTMLDivElement>(
          //   ".about__body__timelapse__slides.leftToRight"
          // );

          const slidesLtrContainerWidth =
            slidesLtrContainer?.offsetWidth as number;

          const slidesLtr = gsap.utils.toArray(
            ".about__body__timelapse__slide",
            slidesLtrContainer
          );

          gsap.to(slidesLtr, {
            xPercent: -100 * (slidesLtr.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: ".about__body__timelapse",
              start: "top top",
              scrub: true,
              // snap: 1 / (slidesLtr.length - 1),
              end: () => "+=" + (slidesLtrContainerWidth + scrollExtraPixels),
            },
          });
        });

      gsap.utils
        .toArray(".about__body__timelapse__slides.rightToLeft")
        .forEach((slidesRtlContainer: any) => {
          // const slidesRtlContainer = document.querySelector<HTMLDivElement>(
          //   ".about__body__timelapse__slides.rightToLeft"
          // );

          const slidesRtlContainerWidth =
            slidesRtlContainer?.offsetWidth as number;

          const slidesRtl = gsap.utils.toArray(
            ".about__body__timelapse__slide",
            slidesRtlContainer
          );

          gsap.to(slidesRtl, {
            xPercent: 100 * (slidesRtl.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: ".about__body__timelapse",
              start: "top top",
              scrub: true,
              end: () => "+=" + (slidesRtlContainerWidth + scrollExtraPixels),
            },
          });
        });

      // gsap.set(".about__body__timelapse__slides", { autoAlpha: 0 });

      // ScrollTrigger.create({
      //   trigger: ".about__body__timelapse",
      //   start: "top center",
      //   end: "top top",
      //   scrub: true,
      //   animation: gsap.to(gsap.utils.toArray(".about__body__timelapse__slides"), {
      //     autoAlpha: 1,
      //     stagger: 1,
      //     duration: 1,
      //   }),
      // });

      gsap.set(".about__body__timelapse__year", { fontSize: "9rem" });

      ScrollTrigger.create({
        trigger: ".about__body__timelapse",
        start: "top top",
        end: () => "+=" + (slidesLtrContainerWidth + scrollExtraPixels),
        animation: gsap.to(".about__body__timelapse__year", {
          textContent: 2024,
          snap: { textContent: 1 },
          ease: "none",
          scale: 1,
          fontSize: "14rem",
        }),
        scrub: true,
      });

      ScrollTrigger.create({
        trigger: ".about__body__timelapse",
        start: "top top",
        end: () => "+=" + (slidesLtrContainerWidth + scrollExtraPixels + 200),
        scrub: true,
        pin: true,
        pinSpacing: true,
      });
    }, timelapseRef);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={timelapseRef}>
      <div className="about__body__timelapseContainer">
        <div className="about__body__timelapse">
          <div className="about__body__timelapse__year">2002</div>
          {createLtrSlides(imgsLtr)}
          {createRtlSlides(imgsRtl)}
          {createLtrSlides(imgsLtr2)}
        </div>
      </div>
    </div>
  );
};

export default Timelapse;
