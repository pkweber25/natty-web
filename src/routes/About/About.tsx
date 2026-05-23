import "./About.css";

import Title from "./components/Title";
import Body from "./components/Body";

const About = () => {
  return (
    <div className="about__container">
      <div className="about">
        <Title />
        <Body />
      </div>
      {/* <div className="fullscreen"></div> */}
    </div>
  );
};

export default About;
