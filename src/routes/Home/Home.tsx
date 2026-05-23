import Hero from "./components/Hero";
import Stream from "./components/StreamParallax";
import Events from "./components/Events";
import SupportUs from "./components/SupportUs";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <Stream />
      <Events />
      <SupportUs />
      {/* <div className="fullscreen"></div> */}
    </div>
  );
};

export default Home;
