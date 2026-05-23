import "./Boys.css";
import { useRef } from "react";
import Title from "./components/Title";
import Body from "./components/Body";
import Footer from "../../components/Footer/Footer";

const Boys = () => {
  const boysRef = useRef(null);

  return (
    <div className="boys__container" ref={boysRef}>
      <div className="boys">
        <Title />
        <Body />
        <Footer mode="primary" />
      </div>
    </div>
  );
};

export default Boys;
