import "./Title.css";
import ImageSlot from "../../../components/ImageSlot/ImageSlot";
import { IMAGES } from "../../../config/images";

const Title = () => (
  <div>
    <div className="boys__title__titleContainer">
      <ImageSlot
        src={IMAGES.boys.title}
        hint="public/images/boys/title.jpg"
        alt=""
        className="boys__title__bg"
        fill
      />
      <div className="boys__title__overlay" />
      <div className="boys__title__title">
        <div className="boys__title__titleLine1">
          <span className="boys__title__titleHighlight">The</span>
        </div>
        <div className="boys__title__titleLine2">Boys</div>
      </div>
    </div>
  </div>
);

export default Title;
