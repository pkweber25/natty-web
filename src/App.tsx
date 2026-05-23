import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Boys from "./routes/Boys/Boys";
import Music from "./routes/Music/Music";
import Contact from "./routes/Contact/Contact";
import "./App.css";

import { useLayoutEffect, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { TextPlugin } from "gsap/TextPlugin";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  TextPlugin,
  Observer,
  ScrollToPlugin
);

function ScrollRefresh() {
  const location = useLocation();

  useEffect(() => {
    ScrollTrigger.refresh();
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  const appRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.normalizeScroll(true);

      ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });

      gsap.set(".app__scrollText", { yPercent: 100 });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <BrowserRouter>
      <ScrollRefresh />
      <div ref={appRef}>
        <div className="app__scrollText">(SCROLL)</div>
        <Header />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/boys" element={<Boys />} />
              <Route path="/music" element={<Music />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer mode="primary" />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
