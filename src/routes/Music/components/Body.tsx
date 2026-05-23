import "./Body.css";

import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import horizontalLoop from "../../../utils/horizontalLoop";
import createInfinityText from "../../../utils/createInifinityText";
import ImageSlot from "../../../components/ImageSlot/ImageSlot";
import { IMAGES } from "../../../config/images";
import { gsap } from "gsap";
import { SiApplemusic } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";

const albums = [
  {
    title: "One More Shot",
    year: "2026",
    cover: IMAGES.music.oneMoreShotAlbumCover,
    blurb: "Our fifth studio album — out now on all streaming platforms.",
    spotify: "https://open.spotify.com/album/4K2xusVE34XdQfp1AoLBo2",
    appleMusic: "https://music.apple.com/us/album/one-more-shot/1875361013",
  },
  {
    title: "Casting Off",
    year: "2020",
    cover: IMAGES.music.castingOff,
    blurb: "Fan favorites from past semesters and themed concerts.",
    spotify: "https://open.spotify.com/album/6eDZRup8yqnVTpv8tM8MKD",
    appleMusic: "https://music.apple.com/us/album/casting-off-ep/1531167556",
  },
];

const Body = () => {
  const bodyRef = useRef(null);
  const mainClassPrefix = "music__body";

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".music__body__tunes__infinityTextItem");
      horizontalLoop(items, { repeat: -1, speed: 0.5, paddingRight: 32 });
    }, bodyRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={bodyRef}>
      <div className="music__body">
        {createInfinityText(mainClassPrefix, 6, "tunes", "New music alert")}
        <div className="music__body__content">
          <p className="music__body__intro">
            Stream Naturally Sharp on Spotify, or grab tickets to hear us live.
          </p>
          <div className="music__body__albums">
            {albums.map((album) => (
              <article key={album.title} className="music__body__album">
                <ImageSlot
                  src={album.cover}
                  alt={`${album.title} album cover`}
                  className="music__body__albumCover"
                />
                <h3 className="music__body__albumTitle">{album.title}</h3>
                <p className="music__body__albumYear">{album.year}</p>
                <p className="music__body__albumBlurb">{album.blurb}</p>
                <div className="music__body__albumLinks">
                  <a
                    href={album.spotify}
                    className="music__body__albumLink"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaSpotify /> Spotify
                  </a>
                  <a
                    href={album.appleMusic}
                    className="music__body__albumLink music__body__albumLink--apple"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiApplemusic /> Apple Music
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="music__body__cta">
            <Link to="/contact" className="music__body__ctaBtn">
              Get concert tickets
            </Link>
            <Link
              to="/contact"
              className="music__body__ctaBtn music__body__ctaBtn--secondary"
            >
              Book a private gig
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
