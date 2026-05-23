import { useState } from "react";
import placeholderSvg from "../../assets/placeholder.svg";
import "./ImageSlot.css";

interface ImageSlotProps {
  src?: string;
  alt?: string;
  className?: string;
  /** Shown on placeholder, e.g. "public/images/hero/hero.jpg" */
  hint?: string;
  /** Cover parent when used as a background layer */
  fill?: boolean;
  /** Loading strategy: "lazy" defers offscreen images, "eager" loads immediately */
  loading?: "lazy" | "eager";
}

const ImageSlot = ({
  src,
  alt = "",
  className = "",
  hint,
  fill = false,
  loading = "eager",
}: ImageSlotProps) => {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  if (showPlaceholder) {
    return (
      <div
        className={`imageSlot imageSlot--placeholder ${fill ? "imageSlot--fill" : ""} ${className}`.trim()}
        role="img"
        aria-label={alt || "Image placeholder"}
      >
        <img
          src={placeholderSvg}
          alt=""
          className="imageSlot__placeholderArt"
          aria-hidden
        />
        {hint && <span className="imageSlot__hint">{hint}</span>}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      decoding="async"
      loading={loading}
      className={`imageSlot ${fill ? "imageSlot--fill" : ""} ${className}`.trim()}
      onError={() => setFailed(true)}
    />
  );
};

export default ImageSlot;
