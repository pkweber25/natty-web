import "./Contact.css";

import Title from "./components/Title";
import Body from "./components/Body";

const Contact = () => {
  return (
    <div className="contact__container">
      <div className="contact">
        <Title />
        <Body />
      </div>
      {/* <div className="fullscreen"></div> */}
    </div>
  );
};

export default Contact;
