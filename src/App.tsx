import Header from "./components/Header/Header";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import "./App.css";

import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { TextPlugin } from "gsap/TextPlugin";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Footer from "./components/Footer/Footer";
import Contact from "./routes/Contact/Contact";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  TextPlugin,
  Observer,
  ScrollToPlugin
);

function App() {
  const appRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.normalizeScroll(true);

      // create the smooth scroller FIRST!
      const smoother = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        // smoothTouch: 0.1,
      });

      gsap.set(".app__scrollText", { yPercent: 100 });

      // ScrollTrigger.create({
      //   trigger: ".stream",
      //   start: "top top",
      //   // end: "bottom top-=200px",
      //   end: () =>
      //     "bottom top-=" +
      //     document.querySelector<HTMLElement>(".stream__hScroll")?.offsetWidth,
      //   animation: gsap
      //     .timeline({ defaults: { ease: "none" } })
      //     // .to(".app__scrollText", { yPercent: 0, duration: 0.5 })
      //     // .to(".app__scrollText", { rotation: 360, duration: 4.5 })
      //     .to(
      //       ".stream__backgroundImgOverlay",
      //       { autoAlpha: 0.6, duration: 0.25, delay: 0.75 }
      //       // ">-1"
      //     )
      //     .set({}, {}, "+=1"),
      //   // .set(".app__scrollText", { rotation: 0 })
      //   // .to(".app__scrollText", {
      //   //   text: "(PAUSE FOR MUSIC...)",
      //   //   duration: 0.25,
      //   // })
      //   // .to(".app__scrollText", {
      //   //   text: "(SCROLL)",
      //   //   duration: 0.25,
      //   //   delay: 1,
      //   // })
      //   // .to(".app__scrollText", { rotation: 90, duration: 1 })
      //   // .to(".app__scrollText", { yPercent: 100, duration: 0.5 }, ">-0.5"),
      //   scrub: 1,
      // });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={appRef}>
      <div className="app__scrollText">(SCROLL)</div>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* <About /> */}
          {/* <Home /> */}
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
