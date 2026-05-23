import "./Title.css";

import { useRef, useLayoutEffect } from "react";
import ImageSlot from "../../../components/ImageSlot/ImageSlot";
import { IMAGES } from "../../../config/images";
import { gsap } from "gsap";

const Title = () => {
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, titleRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={titleRef}>
      <div className="contact__title__titleContainer">
        <ImageSlot
          src={IMAGES.contact.title}
          hint="public/images/contact/title.jpg"
          alt=""
          className="contact__title__bg"
          fill
        />
        <div className="contact__title__overlay"></div>
        <div className="contact__title__title">
          <div className="contact__title__titleLine1">
            <span className="contact__title__titleHighlight">Contact</span>
          </div>
          <div className="contact__title__titleLine2">Us</div>
        </div>
      </div>
    </div>
  );
};

export default Title;
