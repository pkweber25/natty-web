import "./Music.css";
import { useRef } from "react";
import Title from "./components/Title";
import Body from "./components/Body";

const Music = () => {
  const musicRef = useRef(null);

  return (
    <div className="music__container" ref={musicRef}>
      <div className="music">
        <Title />
        <Body />
      </div>
    </div>
  );
};

export default Music;
