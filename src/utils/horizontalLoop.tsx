import { gsap } from "gsap";

interface HorizontalLoopConfig {
  repeat?: number;
  paused?: boolean;
  speed?: number;
  snap?: number | false;
  paddingRight?: number;
  reversed?: boolean;
}

function horizontalLoop(
  items: gsap.TweenTarget,
  config?: HorizontalLoopConfig
) {
  items = gsap.utils.toArray(items);
  config = config || {};
  const tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => {
        tl.totalTime(tl.rawTime() + tl.duration() * 100);
      },
    }),
    length = (items as HTMLElement[]).length,
    startX = (items as HTMLElement[])[0].offsetLeft;
  const times: number[] = [],
    widths: number[] = [],
    xPercents: number[] = [],
    pixelsPerSecond = (config.speed || 1) * 100,
    snap =
      config.snap === false
        ? (v: number) => v
        : gsap.utils.snap(config.snap || 1);
  let curIndex = 0,
    totalWidth: number,
    curX: number,
    distanceToStart: number,
    distanceToLoop: number,
    item: HTMLElement,
    i: number;

  gsap.set(items, {
    // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
    xPercent: (i: number, el: HTMLElement) => {
      const w = (widths[i] = parseFloat(
        String(gsap.getProperty(el, "width", "px"))
      ));
      xPercents[i] = snap(
        (parseFloat(String(gsap.getProperty(el, "x", "px"))) / w) * 100 +
          Number(gsap.getProperty(el, "xPercent"))
      );
      return xPercents[i];
    },
  });
  gsap.set(items, { x: 0 });
  totalWidth =
    (items as HTMLElement[])[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    (items as HTMLElement[])[length - 1].offsetWidth *
      Number(
        gsap.getProperty((items as HTMLElement[])[length - 1], "scaleX")
      ) +
    (config.paddingRight || 0);
  for (i = 0; i < length; i++) {
    item = (items as HTMLElement[])[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * Number(gsap.getProperty(item, "scaleX"));
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index: number, vars?: Record<string, unknown>) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length);
    const newIndex = gsap.utils.wrap(0, length, index);
    let time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = (vars?: Record<string, unknown>) => toIndex(curIndex + 1, vars);
  tl.previous = (vars?: Record<string, unknown>) =>
    toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index: number, vars?: Record<string, unknown>) =>
    toIndex(index, vars);
  tl.times = times;
  if (config.reversed) {
    tl.vars.onReverseComplete?.();
    tl.reverse();
  }
  return tl;
}

export default horizontalLoop;
