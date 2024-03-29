import Hero from "./components/Hero";
import Stream from "./components/StreamParallax";
import Events from "./components/Events";
import SupportUs from "./components/SupportUs";

import "./Home.css";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Stream />
      <Events />
      <SupportUs />
      {/* <div className="fullscreen"></div> */}
      <Footer mode="background" />
    </div>
  );
};

export default Home;
