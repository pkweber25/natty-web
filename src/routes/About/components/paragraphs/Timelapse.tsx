import "./Timelapse.css";

import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ImageSlot from "../../../../components/ImageSlot/ImageSlot";
import { IMAGES } from "../../../../config/images";

interface YearGroup {
  year: number;
  start: number;
  count: number;
}

const YEAR_GROUPS: YearGroup[] = [
  { year: 2008, start: 0, count: 3 },
  { year: 2010, start: 3, count: 2 },
  { year: 2011, start: 5, count: 2 },
  { year: 2012, start: 7, count: 3 },
  { year: 2013, start: 10, count: 2 },
  { year: 2014, start: 12, count: 3 },
  { year: 2015, start: 15, count: 1 },
  { year: 2016, start: 16, count: 2 },
  { year: 2017, start: 18, count: 3 },
  { year: 2018, start: 21, count: 2 },
  { year: 2019, start: 23, count: 2 },
  { year: 2020, start: 25, count: 2 },
  { year: 2021, start: 27, count: 1 },
  { year: 2022, start: 28, count: 2 },
  { year: 2023, start: 30, count: 3 },
  { year: 2024, start: 33, count: 3 },
];

const Timelapse = () => {
  const timelapseRef = useRef(null);
  const mainClassPrefix = "about__body__timelapse";
  const allImgs = IMAGES.about.timelapse;

  // Distribute 16 year-groups across 3 rows (5 + 5 + 6)
  const row1Groups = [YEAR_GROUPS[0], YEAR_GROUPS[3], YEAR_GROUPS[6], YEAR_GROUPS[9], YEAR_GROUPS[12]]; // 2008, 2012, 2015, 2018, 2021
  const row2Groups = [YEAR_GROUPS[1], YEAR_GROUPS[4], YEAR_GROUPS[7], YEAR_GROUPS[10], YEAR_GROUPS[13]]; // 2010, 2013, 2016, 2019, 2022
  const row3Groups = [YEAR_GROUPS[2], YEAR_GROUPS[5], YEAR_GROUPS[8], YEAR_GROUPS[11], YEAR_GROUPS[14], YEAR_GROUPS[15]]; // 2011, 2014, 2017, 2020, 2023, 2024

  const createYearSlide = (group: YearGroup, dir: string) => {
    const imgs: string[] = [];
    for (let i = 0; i < group.count; i++) {
      imgs.push(allImgs[group.start + i]);
    }

    return (
      <div className={`${mainClassPrefix}__slide ${dir}`} key={group.year}>
        <div className={`${mainClassPrefix}__slideImages`}>
          {imgs.map((img, i) => (
            <ImageSlot
              key={i}
              src={img}
              alt={`Naturally Sharp ${group.year}`}
              className={`${mainClassPrefix}__slideImg`}
            />
          ))}
        </div>
      </div>
    );
  };

  const createRow = (groups: YearGroup[], dir: string) => (
    <div className={`${mainClassPrefix}__slides ${dir}`}>
      {groups.map((g) => createYearSlide(g, dir))}
    </div>
  );

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // --- fade in the year label ---
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

      // --- fade in slides ---
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

      const scrollExtraPixels = 2000;

      // --- horizontal scroll LTR rows ---
      gsap.utils
        .toArray(".about__body__timelapse__slides.leftToRight")
        .forEach((slidesContainer: any) => {
          const containerWidth = slidesContainer?.offsetWidth || 0;
          const slides = gsap.utils.toArray(
            ".about__body__timelapse__slide",
            slidesContainer
          ) as HTMLElement[];
          gsap.to(slides, {
            xPercent: -100 * (slides.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: ".about__body__timelapse",
              start: "top top",
              scrub: true,
              end: () => "+=" + (containerWidth + scrollExtraPixels),
            },
          });
        });

      // --- horizontal scroll RTL rows ---
      gsap.utils
        .toArray(".about__body__timelapse__slides.rightToLeft")
        .forEach((slidesContainer: any) => {
          const containerWidth = slidesContainer?.offsetWidth || 0;
          const slides = gsap.utils.toArray(
            ".about__body__timelapse__slide",
            slidesContainer
          ) as HTMLElement[];
          gsap.to(slides, {
            xPercent: 100 * (slides.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: ".about__body__timelapse",
              start: "top top",
              scrub: true,
              end: () => "+=" + (containerWidth + scrollExtraPixels),
            },
          });
        });

      // --- year counter animation ---
      // Use the widest LTR row so the counter doesn't finish before scrolling ends
      const ltrContainers = document.querySelectorAll<HTMLElement>(
        ".about__body__timelapse__slides.leftToRight"
      );
      let maxLtrWidth = 0;
      ltrContainers.forEach(
        (c) => (maxLtrWidth = Math.max(maxLtrWidth, c?.offsetWidth || 0))
      );

      gsap.set(".about__body__timelapse__year", { fontSize: "9rem" });

      ScrollTrigger.create({
        trigger: ".about__body__timelapse",
        start: "top top",
        end: () => "+=" + (maxLtrWidth + scrollExtraPixels),
        animation: gsap.to(".about__body__timelapse__year", {
          textContent: 2024,
          snap: { textContent: 1 },
          ease: "none",
          scale: 1,
          fontSize: "14rem",
        }),
        scrub: true,
      });

      // --- pin the whole timelapse section ---
      ScrollTrigger.create({
        trigger: ".about__body__timelapse",
        start: "top top",
        end: () => "+=" + (maxLtrWidth + scrollExtraPixels + 200),
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
          <div className="about__body__timelapse__year">2008</div>
          {createRow(row1Groups, "leftToRight")}
          {createRow(row2Groups, "rightToLeft")}
          {createRow(row3Groups, "leftToRight")}
        </div>
      </div>
    </div>
  );
};

export default Timelapse;
