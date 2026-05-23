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
          <p className="contact__body__intro">
            Want Natty at your event, or tickets to our next show? Use the forms
            below — we&apos;ll get back to you soon.
          </p>

          <GoogleFormEmbed
            title="Book Birthday Sex"
            description="Request Naturally Sharp for a private gig. Tell us your date, venue, and what you're looking for — we'll follow up with availability and pricing."
            formUrl={BIRTHDAY_SEX_BOOKING_FORM_URL}
            envHint="VITE_BIRTHDAY_SEX_BOOKING_FORM_URL"
          />

          <GoogleFormEmbed
            title="Concert Tickets"
            description="Reserve tickets for our next themed semester concert. Spots fill up fast — submit the form to secure yours."
            formUrl={CONCERT_TICKETS_FORM_URL}
            envHint="VITE_CONCERT_TICKETS_FORM_URL"
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
