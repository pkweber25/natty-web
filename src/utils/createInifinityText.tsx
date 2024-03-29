import NattySVG from "../components/NattySVG";

import { Fragment } from "react";

const createInfinityText = function (
  mainClassPrefix: string,
  times: number,
  key: string,
  ...texts: string[]
) {
  return (
    <div
      className={
        mainClassPrefix + (key ? "__" + key : "") + "__infinityTextContainer"
      }
    >
      {Array(times * texts.length)
        .fill(0)
        .map((_, idx: number) => (
          <Fragment key={idx}>
            <span
              className={
                mainClassPrefix + (key ? "__" + key : "") + "__infinityText"
              }
            >
              <NattySVG
                nattySVGClass={
                  mainClassPrefix +
                  (key ? "__" + key : "") +
                  "__infinityTextLogoSVG"
                }
                nattySVGPathClass={
                  mainClassPrefix +
                  (key ? "__" + key : "") +
                  "__infinityTextLogoSVGPath"
                }
              />
            </span>
            <span
              className={
                mainClassPrefix + (key ? "__" + key : "") + "__infinityText"
              }
            >
              {texts[idx % texts.length]}
            </span>
          </Fragment>
        ))}
    </div>
  );
};

export default createInfinityText;
