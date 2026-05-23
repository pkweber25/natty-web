import "./Body.css";

import { useLayoutEffect, useRef } from "react";

import horizontalLoop from "../../../utils/horizontalLoop";
import createInfinityText from "../../../utils/createInifinityText";
import GoogleFormEmbed from "../../../components/GoogleFormEmbed/GoogleFormEmbed";
import {
  BIRTHDAY_SEX_BOOKING_FORM_URL,
  CONCERT_TICKETS_FORM_URL,
} from "../../../config/forms";

import { gsap } from "gsap";

const Body = () => {
  const bodyRef = useRef(null);

  const mainClassPrefix = "contact__body";

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(
        ".contact__body__reach__infinityTextItem"
      );
      horizontalLoop(items, {
        repeat: -1,
        speed: 0.5,
        paddingRight: 32,
      });
    }, bodyRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={bodyRef}>
      <div className="contact__body">
        {createInfinityText(mainClassPrefix, 6, "reach", "Let's collaborate")}

        <div className="contact__body__content">

          <GoogleFormEmbed
            title="Concert Tickets"
            description="Reserve tickets for our next themed semester concert. Form opens a few weeks before the concert."
            formUrl={CONCERT_TICKETS_FORM_URL}
            envHint="VITE_CONCERT_TICKETS_FORM_URL"
          />

          <GoogleFormEmbed
            title="Book Birthday Sex"
            description="Request Naturally Sharp for a private performance of birthday sex. Tell us your date, location, and time and we'll follow up over instagram."
            formUrl={BIRTHDAY_SEX_BOOKING_FORM_URL}
            envHint="VITE_BIRTHDAY_SEX_BOOKING_FORM_URL"
          />

          <section className="contact__body__general">
            <h3 className="contact__body__generalTitle">General inquiries</h3>
            <p className="contact__body__generalText">
              For collaborations, media, or anything else, reach us at{" "}
              <a
                href="mailto:naturallysharp@gmail.com"
                className="contact__body__email"
              >
                naturallysharp@gmail.com
              </a>{" "}
              or DM us on Instagram.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Body;
