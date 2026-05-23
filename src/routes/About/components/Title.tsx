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
      <div className="about__title__titleContainer">
        <ImageSlot
          src={IMAGES.about.title}
          alt=""
          className="about__title__bg"
          fill
        />
        <div className="about__title__overlay"></div>
        <div className="about__title__title">
          <div className="about__title__titleLine1">
            <span className="about__title__titleHighlight">About</span>
          </div>
          <div className="about__title__titleLine2">Natty</div>
        </div>
      </div>
    </div>
  );
};

export default Title;
