import "./Title.css";
import ImageSlot from "../../../components/ImageSlot/ImageSlot";
import { IMAGES } from "../../../config/images";

const Title = () => (
  <div>
    <div className="music__title__titleContainer">
      <ImageSlot
        src={IMAGES.music.title}
        alt=""
        className="music__title__bg"
        fill
      />
      <div className="music__title__overlay" />
      <h1 className="music__title__title">
        <span className="music__title__titleHighlight">Our</span> Music
      </h1>
    </div>
  </div>
);

export default Title;
