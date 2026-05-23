import "./Events.css";

import horizontalLoop from "../../../utils/horizontalLoop";
import createInfinityText from "./../../../utils/createInifinityText";
import { useRef, useLayoutEffect } from "react";

import ImageSlot from "../../../components/ImageSlot/ImageSlot";

import { IoLocationSharp, IoTime } from "react-icons/io5";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

class NattyEvent {
  title: string;
  time: string;
  place: string;
  descriptions: string[];
  image: string;
  imageHint: string;
  index: number;
  eventCount: number;

  constructor(
    title: string,
    time: string,
    place: string,
    descriptions: string[],
    image: string,
    imageHint: string,
    index: number,
    eventCount: number
  ) {
    this.title = title;
    this.time = time;
    this.place = place;
    this.descriptions = descriptions;
    this.image = image;
    this.imageHint = imageHint;
    this.index = index;
    this.eventCount = eventCount;
  }

  generateEvent() {
    const hasImage = this.image && this.image.length > 0;
    return (
      <article key={this.index} className="home__events__eventContainer">
        <div className="home__events__eventContents">
          {hasImage && (
            <div className="home__events__eventBackgroundImgContainer">
              <div className="home__events__eventBackgroundImgOverlay"></div>
              <div className="home__events__eventBackgroundImgWrapper">
                <ImageSlot
                  className="home__events__eventBackgroundImg"
                  src={this.image}
                  hint={this.imageHint}
                  alt=""
                  fill
                />
              </div>
            </div>
          )}            <div className="home__events__eventContent">
              {hasImage ? (
                <div className="home__events__eventImgContainer">
                  <div className="home__events__eventTitleContainer">
                    <h4 className="home__events__eventTitle">{this.title}</h4>
                  </div>
                  <div className="home__events__eventImgOverlay"></div>
                  <ImageSlot
                    src={this.image}
                    hint={this.imageHint}
                    alt=""
                    className="home__events__eventImg"
                  />
                </div>
              ) : (
                <h4 className="home__events__eventTitle">{this.title}</h4>
              )}


            <div className="home__events__eventDetailsContainer">
              <p className="home__events__eventDetails">
                <IoTime />
                {this.time}
              </p>
              <p className="home__events__eventDetails">
                <IoLocationSharp />
                {this.place}
              </p>
              {this.descriptions.map((description, idx) => (
                <p key={idx} className="home__events__eventDetails">
                  {description}
                </p>
              ))}
            </div>
          </div>
          <div className="home__events__eventNumberIndicator">
            {Array(this.eventCount)
              .fill(0)
              .map((_, idx: number) => (
                <div
                  key={idx}
                  className={`home__event__eventNumberCircle ${
                    idx === this.index ? " current" : ""
                  }`}
                ></div>
              ))}
          </div>
        </div>
      </article>
    );
  }
}

const Events = () => {
  const eventsRef = useRef(null);

  // const nattyEventDescriptions = [
  //   {
  //     title: "Fall Auditions",
  //     time: "7PM, September 5, 2023",
  //     place: "Yorktown",
  //     descriptions: [
  //       "Come audition for us! Prepare a short snippet of a song blablabla.",
  //       "We'd love to hear your voice! No experience required.",
  //     ],
  //     image: bow,
  //   },
  //   {
  //     title: "Your Mom",
  //     time: "Tonight",
  //     place: "Your house",
  //     descriptions: ["Hide your parents, nobody is safe."],
  //     image: brendan,
  //   },
  //   {
  //     title: "Kiet's Bake Sale At Church St.",
  //     time: "Whenever",
  //     place: "Church St.",
  //     descriptions: ["Come eat some bomb ass cookies."],
  //     image: butter,
  //   },
  //   {
  //     title: "Jail",
  //     time: "Right the heck now",
  //     place: "The police station",
  //     descriptions: ["Y'all been wilding out a little too much."],
  //     image: in_costume,
  //   },
  // ];

  const nattyEventDescriptions = [
    {
      title: "Auditions",
      time: "TBD — held once in Fall and once in Spring",
      place: "TBD",
      descriptions: [
        "Come audition for us! Prepare a verse and chorus of a song of your choosing.",
        "We'd love to hear your voice! No experience required.",
      ],
      image: "",
      imageHint: "",
    },
  ];

  const concertsSection = {
    title: "Concerts",
    subtitle: "Fall & Spring",
    descriptions: [
      "We hold a themed concert each semester — dates, times, and locations TBD.",
      "Follow us on social media for announcements!",
    ],
    time: "TBD",
    place: "TBD",
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".home__events__infinityTextItem");
      horizontalLoop(items, {
        repeat: -1,
        speed: 0.5,
        paddingRight: 32,
      });

      // ScrollTrigger.create({
      //   trigger: ".home__events",
      //   start: "top top",
      //   end: "bottom bottom",
      //   pin: ".home__events__infinityTextContainer",
      // });

      // gsap.utils
      //   .toArray<HTMLDivElement>(".home__events__eventContainer")
      //   .forEach((panel, i) => {
      //     ScrollTrigger.create({
      //       trigger: panel,
      //       start: "top top",
      //       pin: true,
      //       pinSpacing: false,
      //     });
      //   });

      // const home__events = gsap.utils.toArray<HTMLDivElement>(
      //   ".home__events__eventContainer"
      // );

      // home__events.forEach((event, i) => {
      //   const numberContainerHeight = event.querySelector<HTMLDivElement>(
      //     ".home__events__eventNumberContainer"
      //   )!.offsetHeight;

      //   ScrollTrigger.create({
      //     trigger: event,
      //     start: "top-=" + numberContainerHeight * i + " top",
      //     end: "bottom bottom",
      //     endTrigger: ".end-element",
      //     pin: true,
      //     pinSpacing: false,
      //     // markers: true,
      //     // id: "card-" + i,
      //   });
      // });

      const events = gsap.utils.toArray<HTMLDivElement>(
        ".home__events__eventContainer"
      );

      // const eventCount = Math.min(2, events.length);

      const infinityContainer = document.querySelector<HTMLDivElement>(
        ".home__events__infinityTextContainer"
      );

      ScrollTrigger.create({
        trigger: infinityContainer,
        start: "top top",
        end:
          "bottom+=" +
          ((document.querySelector<HTMLDivElement>(".home__events")
            ?.offsetHeight as number) -
            2 * (infinityContainer?.offsetHeight as number)) +
          " top",
        pin: true,
        scrub: 2,
      });

      // events.forEach((event, i) => {
      //   const numberContainerHeight = event.querySelector<HTMLDivElement>(
      //     ".home__events__eventNumberContainer"
      //   )!.offsetHeight;

      //   const toSubtract = Math.min(i, eventCount - 1);

      //   ScrollTrigger.create({
      //     trigger: event,
      //     start: "top-=" + numberContainerHeight * toSubtract + " top", // -= numberContainerHeight * toSubtract
      //     end:
      //       "+=" +
      //       // ((eventHeight - numberContainerHeight) * (eventCount - toSubtract) -
      //       //   (eventCount === events.length || i === events.length - 1
      //       //     ? eventHeight - numberContainerHeight
      //       //     : 0)),
      //       (eventHeight - numberContainerHeight) * (eventCount - toSubtract),
      //     pin: true,
      //     pinSpacing: false,
      //     // markers: { indent: 0 },
      //     // id: "event-" + i + "-first"
      //   });

      //   for (let j = 0; j < eventCount - 1; j++) {
      //     if (i > j && i < events.length - 1) {
      //       // && i < events.length - eventCount + j) {
      //       ScrollTrigger.create({
      //         trigger: event,
      //         start: "top-=" + numberContainerHeight * j + " top",
      //         end: "+=" + (eventHeight - numberContainerHeight),
      //         pin: true,
      //         pinSpacing: false,
      //       });
      //     }
      //   }
      // });

      events.forEach((event) => {
        const eventContents = event.querySelector<HTMLDivElement>(
          ".home__events__eventContents"
        );

        ScrollTrigger.create({
          trigger: event,
          pin: true,
          scrub: true,
          start: "top top+=" + (infinityContainer?.offsetHeight as number),
          end: "bottom top",
        });

        ScrollTrigger.create({
          trigger: event,
          scrub: true,
          start: "top bottom+=" + (infinityContainer?.offsetHeight as number),
          end: "top top+=" + (infinityContainer?.offsetHeight as number),
          animation: gsap.from(eventContents, {
            yPercent: -100,
            ease: "none",
          }),
        });
      });

      // gsap.utils
      //   .toArray<HTMLDivElement>(".home__events__eventContainer")
      //   .forEach((eventContainer, eventIdx) => {
      //     gsap.utils
      //       .toArray<HTMLDivElement>(
      //         ".home__event__eventNumberCircle",
      //         eventContainer
      //       )
      //       .forEach((circle, circleIdx) => {
      //         const handleClick = () => {
      //           console.log(eventIdx, circleIdx);
      //           gsap.to(window, {
      //             duration: 1,
      //             scrollTo: {
      //               y: `.home__events__eventContainer.index${circleIdx}`,
      //               offsetY: infinityContainer?.offsetHeight as number,
      //             },
      //           });
      //         };
      //         circle.addEventListener("click", handleClick);

      //         return () => circle.removeEventListener("click", handleClick);
      //       });
      //   });

      gsap.set(".home__events__mainTitleLine", { autoAlpha: 0 });
      gsap.set(".home__events__mainText", { autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: ".home__events__mainContainer",
        start: "top 30%",
        end: "top top",
        animation: gsap
          .timeline({ defaults: { duration: 1 } })
          .fromTo(
            ".home__events__mainTitleLine",
            { autoAlpha: 0, yPercent: 10 },
            { autoAlpha: 1, yPercent: 0, stagger: 0.5, duration: 1 }
          )
          .fromTo(
            ".home__events__mainText",
            { autoAlpha: 0, yPercent: 10 },
            { autoAlpha: 1, yPercent: 0, duration: 1 },
            ">"
          ),
        scrub: true,
      });
    }, eventsRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="home__events__container" ref={eventsRef}>
      <section className="home__events">
        {createInfinityText(
          "home__events",
          3,
          "",
          "Keeping Up with the Natty's"
        )}

        <div className="home__events__mainContainer">
          <div className="home__events__mainTitleContainer">
            <div className="home__events__mainTitle">
              <div className="home__events__mainTitleLine home__events__mainTitleLine1">
                <span className="home__events__mainTitleHighlight">
                  Upcoming
                </span>
              </div>
              <div className="home__events__mainTitleLine home__events__mainTitleLine2">
                Events
              </div>
            </div>
          </div>

          <p className="home__events__mainText">
            Scroll to see what the boys are up to these days!
          </p>
        </div>

        {/* Concerts info section */}
        <div className="home__events__eventContainer">
          <div className="home__events__eventContents">
            <div className="home__events__eventBackgroundImgContainer">
              <div className="home__events__eventBackgroundImgOverlay"></div>
            </div>
            <div className="home__events__eventContent">
              <h4 className="home__events__eventTitle">{concertsSection.title}</h4>
              <p className="home__events__eventSubtitle">{concertsSection.subtitle}</p>
              <div className="home__events__eventDetailsContainer">
                <p className="home__events__eventDetails">
                  <IoTime />
                  {concertsSection.time}
                </p>
                <p className="home__events__eventDetails">
                  <IoLocationSharp />
                  {concertsSection.place}
                </p>
                {concertsSection.descriptions.map((desc, idx) => (
                  <p key={idx} className="home__events__eventDetails">
                    {desc}
                  </p>
                ))}
              </div>
            </div>
            <div className="home__events__eventNumberIndicator">
              <div className="home__event__eventNumberCircle current"></div>
            </div>
          </div>
        </div>

        {nattyEventDescriptions.map(
          ({ title, time, place, descriptions, image, imageHint }, idx) => {
            const nattyEvent = new NattyEvent(
              title,
              time,
              place,
              descriptions,
              image,
              imageHint,
              idx + 1,
              nattyEventDescriptions.length + 1
            );
            return nattyEvent.generateEvent();
          }
        )}

        {/* <div className="home__events__videoContainer">
          <video
            src={natty_running_vid}
            playsInline
            webkit-playsinline="true"
            preload="auto"
            autoPlay
            loop
            muted
            className="home__events__video"
          ></video>
        </div> */}
      </section>
    </div>
  );
};

export default Events;
