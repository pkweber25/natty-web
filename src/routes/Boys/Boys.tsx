import "./Boys.css";
import { useRef } from "react";
import Title from "./components/Title";
import Body from "./components/Body";

const Boys = () => {
  const boysRef = useRef(null);

  return (
    <div className="boys__container" ref={boysRef}>
      <div className="boys">
        <Title />
        <Body />
      </div>
    </div>
  );
};

export default Boys;
