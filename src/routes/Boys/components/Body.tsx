import "./Body.css";

import { useLayoutEffect, useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import horizontalLoop from "../../../utils/horizontalLoop";
import createInfinityText from "../../../utils/createInifinityText";
import ImageSlot from "../../../components/ImageSlot/ImageSlot";
import { IMAGES } from "../../../config/images";
import { gsap } from "gsap";
import { IoClose } from "react-icons/io5";

interface MemberInfo {
  name: string;
  part: string;
  class: string;
  role?: string;
}

const MEMBERS: MemberInfo[] = [
  { name: "Aidan Furey", part: "Baritone", class: "Masters student", role: "President" },
  { name: "Armaan Ali", part: "Tenor 2", class: "Junior" },
  { name: "Chester Johnston", part: "Tenor 1", class: "Junior" },
  { name: "Chris Junio", part: "Tenor 2", class: "Senior" },
  { name: "CJ Branch", part: "Tenor 2", class: "Senior" },
  { name: "Daniel Moir", part: "Baritone", class: "Junior" },
  { name: "Evan Oh", part: "Baritone", class: "Masters student", role: "Treasurer" },
  { name: "Isum Addo", part: "Tenor 2", class: "Senior", role: "Vice President" },
  { name: "Matthias Kozusko", part: "Baritone", class: "Masters student" },
  { name: "Nick Siew", part: "Bass", class: "Senior" },
  { name: "Peter Weber", part: "Bass", class: "Masters student" },
  { name: "Phillip Truong", part: "Baritone", class: "Junior", role: "Member at Large" },
  { name: "Steven Lee", part: "Bass", class: "Senior", role: "Music Director" },
];

const Body = () => {
  const bodyRef = useRef(null);
  const mainClassPrefix = "boys__body";

  const [selectedMember, setSelectedMember] = useState<MemberInfo | null>(null);

  const closeModal = useCallback(() => setSelectedMember(null), []);

  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedMember]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (selectedMember) {
      window.addEventListener("keydown", onKey);
    }
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedMember, closeModal]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".boys__body__crew__infinityTextItem");
      horizontalLoop(items, { repeat: -1, speed: 0.5, paddingRight: 32 });
    }, bodyRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={bodyRef}>
      <div className="boys__body">
        {createInfinityText(mainClassPrefix, 6, "crew", "Meet the crew")}
        <div className="boys__body__content">
          <div className="boys__body__grid">
            {IMAGES.boys.members.map((photo, i) => (
              <article
                key={photo}
                className="boys__body__card"
                onClick={() => MEMBERS[i] && setSelectedMember(MEMBERS[i])}
              >
                <div className="boys__body__cardImgWrap">
                  <ImageSlot
                    src={photo}
                    hint={`public/images/boys/${MEMBERS[i].name.toLowerCase().replace(/\s+/g, "")}.jpg`}
                    alt={MEMBERS[i].name}
                    className="boys__body__cardImg"
                  />
                </div>
                <h4 className="boys__body__cardName">{MEMBERS[i].name}</h4>
              </article>
            ))}
          </div>
          <p className="boys__body__legacy">
            Want to see alumni and history? Check out{" "}
            <Link to="/about" className="boys__body__link">
              About Natty
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Member detail modal */}
      {selectedMember && (
        <div
          className="boys__body__modalBackdrop"
          onClick={closeModal}
        >
          <div
            className="boys__body__modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="boys__body__modalClose"
              onClick={closeModal}
              aria-label="Close"
            >
              <IoClose />
            </button>
            <h2 className="boys__body__modalName">{selectedMember.name}</h2>
            <div className="boys__body__modalDetail">
              <span className="boys__body__modalLabel">Class</span>
              <span className="boys__body__modalValue">{selectedMember.class}</span>
            </div>
            <div className="boys__body__modalDetail">
              <span className="boys__body__modalLabel">Voice Part</span>
              <span className="boys__body__modalValue">{selectedMember.part}</span>
            </div>
            {selectedMember.role && (
              <div className="boys__body__modalDetail">
                <span className="boys__body__modalLabel">E-Board</span>
                <span className="boys__body__modalValue boys__body__modalRole">{selectedMember.role}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
