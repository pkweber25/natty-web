import "./Events.css";

import NattySVG from "../../../components/NattySVG";
import horizontalLoop from "../../../utils/horizontalLoop";
import { useRef, useLayoutEffect } from "react";

import bow from "../../../assets/group_photos/bow_compressed.jpg";
import brendan from "../../../assets/group_photos/brendan_mobile.jpg";
import butter from "../../../assets/group_photos/butter_mobile.jpg";
import in_costume from "../../../assets/group_photos/in_costume_mobile.jpg";

import natty_running_vid from "../../../assets/natty_running.mp4";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Events = () => {
  const eventsRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const texts = gsap.utils.toArray(".home__events__infinityText");
      let loop = horizontalLoop(texts, {
        repeat: -1,
        speed: 0.5,
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

      const eventHeight = gsap.getProperty(
        ".home__events__eventContainer",
        "height"
      ) as number;

      const events = gsap.utils.toArray<HTMLDivElement>(
        ".home__events__eventContainer"
      );

      const eventCount = Math.min(2, events.length);

      const infinityContainer = document.querySelector<HTMLDivElement>(
        ".home__events__infinityTextContainer"
      );

      ScrollTrigger.create({
        trigger: infinityContainer,
        start: "top top",
        end:
          "bottom+=" +
          ((document.querySelector<HTMLDivElement>(
            ".home__events__mainContainer"
          )?.offsetHeight as number) -
            (infinityContainer?.offsetHeight as number)) +
          " top",
        pin: true,
        scrub: 2,
      });

      events.forEach((event, i) => {
        const numberContainerHeight = event.querySelector<HTMLDivElement>(
          ".home__events__eventNumberContainer"
        )!.offsetHeight;

        const toSubtract = Math.min(i, eventCount - 1);

        ScrollTrigger.create({
          trigger: event,
          start: "top-=" + numberContainerHeight * toSubtract + " top", // -= numberContainerHeight * toSubtract
          end:
            "+=" +
            // ((eventHeight - numberContainerHeight) * (eventCount - toSubtract) -
            //   (eventCount === events.length || i === events.length - 1
            //     ? eventHeight - numberContainerHeight
            //     : 0)),
            (eventHeight - numberContainerHeight) * (eventCount - toSubtract),
          pin: true,
          pinSpacing: false,
          // markers: { indent: 0 },
          // id: "event-" + i + "-first"
        });

        for (let j = 0; j < eventCount - 1; j++) {
          if (i > j && i < events.length - 1) {
            // && i < events.length - eventCount + j) {
            ScrollTrigger.create({
              trigger: event,
              start: "top-=" + numberContainerHeight * j + " top",
              end: "+=" + (eventHeight - numberContainerHeight),
              pin: true,
              pinSpacing: false,
            });
          }
        }
      });
    }, eventsRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="home__events__container" ref={eventsRef}>
      <section className="home__events">
        <div className="home__events__infinityTextContainer">
          <span className="home__events__infinityText">
            <NattySVG
              nattySVGClass="home__events__infinityTextLogoSVG"
              nattySVGPathClass="home__events__infinityTextLogoSVGPath"
            />
          </span>
          <span className="home__events__infinityText">
            Keeping Up with the Natty's
          </span>
          <span className="home__events__infinityText">
            <NattySVG
              nattySVGClass="home__events__infinityTextLogoSVG"
              nattySVGPathClass="home__events__infinityTextLogoSVGPath"
            />
          </span>
          <span className="home__events__infinityText">
            Keeping Up with the Natty's
          </span>
          <span className="home__events__infinityText">
            <NattySVG
              nattySVGClass="home__events__infinityTextLogoSVG"
              nattySVGPathClass="home__events__infinityTextLogoSVGPath"
            />
          </span>
          <span className="home__events__infinityText">
            Keeping Up with the Natty's
          </span>
        </div>

        <div className="home__events__mainContainer">
          <div className="home__events__mainTitleContainer">
            <div className="home__events__mainTitle">
              <div className="home__events__mainTitleLine1">
                <span className="home__events__mainTitleHighlight">
                  Upcoming
                </span>
              </div>
              <div className="home__events__mainTitleLine2">Events</div>
            </div>
          </div>

          <p className="home__events__mainText">
            Scroll to see what the boys are up to these days!
          </p>
        </div>
        <article className="home__events__eventContainer">
          <div className="home__events__eventBackgroundImgContainer">
            <div className="home__events__eventBackgroundImgOverlay"></div>
            <div className="home__events__eventBackgroundImgWrapper">
              <img
                className="home__events__eventBackgroundImg"
                src={bow}
                alt=""
              />
            </div>
          </div>
          <div className="home__events__eventNumberContainer">
            <h4 className="home__events__eventEventText">Shenattygan</h4>
            <h4 className="home__events__eventNumber">01</h4>
          </div>

          <div className="home__events__eventContent">
            <div className="home__events__eventTitleContainer">
              <h4 className="home__events__eventTitle">Fall Auditions</h4>
            </div>

            <div className="home__events__eventImgContainer">
              <div className="home__events__eventImgOverlay"></div>
              <img src={bow} alt="" className="home__events__eventImg" />
            </div>

            <div className="home__events__eventDetailsContainer">
              <p className="home__events__eventDetails">
                <span className="home__events__eventDetailsHighlight">
                  When?
                </span>{" "}
                7PM, September 5, 2023
              </p>
              <p className="home__events__eventDetails">
                <span className="home__events__eventDetailsHighlight">
                  Where?
                </span>{" "}
                Yorktown
              </p>
              <p className="home__events__eventDetails">
                Come audition for us! Prepare a short snippet of a song
                blablabla.
              </p>
            </div>
          </div>
        </article>

        <article className="home__events__eventContainer">
          <div className="home__events__eventBackgroundImgContainer">
            <div className="home__events__eventBackgroundImgOverlay"></div>
            <div className="home__events__eventBackgroundImgWrapper">
              <img
                className="home__events__eventBackgroundImg"
                src={brendan}
                alt=""
              />
            </div>
          </div>
          <div className="home__events__eventNumberContainer">
            <h4 className="home__events__eventEventText">Shenattygan</h4>
            <h4 className="home__events__eventNumber">02</h4>
          </div>

          <div className="home__events__eventContent">
            <div className="home__events__eventTitleContainer">
              <h4 className="home__events__eventTitle">Your Mom</h4>
            </div>

            <div className="home__events__eventImgContainer">
              <div className="home__events__eventImgOverlay"></div>
              <img src={brendan} alt="" className="home__events__eventImg" />
            </div>

            <div className="home__events__eventDetailsContainer">
              <p className="home__events__eventDetails">
                <span className="home__events__eventDetailsHighlight">
                  When?
                </span>{" "}
                Tonight
              </p>
              <p className="home__events__eventDetails">
                <span className="home__events__eventDetailsHighlight">
                  Where?
                </span>{" "}
                Your house
              </p>
              <p className="home__events__eventDetails">
                Hide your parents, nobody is safe.
              </p>
            </div>
          </div>
        </article>

        <article className="home__events__eventContainer">
          <div className="home__events__eventBackgroundImgContainer">
            <div className="home__events__eventBackgroundImgOverlay"></div>
            <div className="home__events__eventBackgroundImgWrapper">
              <img
                className="home__events__eventBackgroundImg"
                src={butter}
                alt=""
              />
            </div>
          </div>
          <div className="home__events__eventNumberContainer">
            <h4 className="home__events__eventEventText">Shenattygan</h4>
            <h4 className="home__events__eventNumber">03</h4>
          </div>

          <div className="home__events__eventContent">
            <div className="home__events__eventTitleContainer">
              <h4 className="home__events__eventTitle">Kiet's Bake Sale</h4>
            </div>

            <div className="home__events__eventImgContainer">
              <div className="home__events__eventImgOverlay"></div>
              <img src={butter} alt="" className="home__events__eventImg" />
            </div>

            <div className="home__events__eventDetailsContainer">
              <p className="home__events__eventDetails">
                <span className="home__events__eventDetailsHighlight">
                  When?
                </span>{" "}
                Whenever
              </p>
              <p className="home__events__eventDetails">
                <span className="home__events__eventDetailsHighlight">
                  Where?
                </span>{" "}
                Church St.
              </p>
              <p className="home__events__eventDetails">
                Come eat some bomb ass cookies.
              </p>
            </div>
          </div>
        </article>

        <article className="home__events__eventContainer">
          <div className="home__events__eventBackgroundImgContainer">
            <div className="home__events__eventBackgroundImgOverlay"></div>
            <div className="home__events__eventBackgroundImgWrapper">
              <img
                className="home__events__eventBackgroundImg"
                src={in_costume}
                alt=""
              />
            </div>
          </div>
          <div className="home__events__eventNumberContainer">
            <h4 className="home__events__eventEventText">Shenattygan</h4>
            <h4 className="home__events__eventNumber">04</h4>
          </div>

          <div className="home__events__eventContent">
            <div className="home__events__eventTitleContainer">
              <h4 className="home__events__eventTitle">Jail</h4>
            </div>

            <div className="home__events__eventImgContainer">
              <div className="home__events__eventImgOverlay"></div>
              <img src={in_costume} alt="" className="home__events__eventImg" />
            </div>

            <div className="home__events__eventDetailsContainer">
              <p className="home__events__eventDetails">
                <span className="home__events__eventDetailsHighlight">
                  When?
                </span>{" "}
                Right the heck now
              </p>
              <p className="home__events__eventDetails">
                <span className="home__events__eventDetailsHighlight">
                  Where?
                </span>{" "}
                The police station
              </p>
              <p className="home__events__eventDetails">
                Y'all been wilding out a little too much.
              </p>
            </div>
          </div>
        </article>

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
