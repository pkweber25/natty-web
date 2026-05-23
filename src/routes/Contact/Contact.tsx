import "./Contact.css";

import { useRef, useLayoutEffect } from "react";

import { gsap } from "gsap";

import Title from "./components/Title";
import Body from "./components/Body";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  const contactRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {}, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="contact__container" ref={contactRef}>
      <div className="contact">
        <Title />
        <Body />
        <Footer mode="primary" />
      </div>
      {/* <div className="fullscreen"></div> */}
    </div>
  );
};

export default Contact;
