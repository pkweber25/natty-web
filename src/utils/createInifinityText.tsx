import NattySVG from "../components/NattySVG";

const createInfinityText = function (
  mainClassPrefix: string,
  times: number,
  key: string,
  ...texts: string[]
) {
  const segment = key ? "__" + key : "";
  const itemClass = mainClassPrefix + segment + "__infinityTextItem";
  const textClass = mainClassPrefix + segment + "__infinityText";
  const logoClass = mainClassPrefix + segment + "__infinityTextLogoSVG";
  const logoPathClass = mainClassPrefix + segment + "__infinityTextLogoSVGPath";

  return (
    <div
      className={mainClassPrefix + segment + "__infinityTextContainer"}
    >
      {Array(times * texts.length)
        .fill(0)
        .map((_, idx: number) => (
          <div key={idx} className={itemClass}>
            <span className={`${textClass} ${textClass}--logo`}>
              <NattySVG
                nattySVGClass={logoClass}
                nattySVGPathClass={logoPathClass}
              />
            </span>
            <span className={`${textClass} ${textClass}--label`}>
              {texts[idx % texts.length]}
            </span>
          </div>
        ))}
    </div>
  );
};

export default createInfinityText;
