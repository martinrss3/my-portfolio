import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { Contact } from "./Contact";
import "../css/about.css";
import bg from "../images/backgrounds/bg-about.jpg";
import moon from "../images/parallax/moon.png";
import cloud1 from "../images/parallax/cloud1.png";
import cloud2 from "../images/parallax/cloud2.png";
import star from "../images/parallax/star.png";
import me from "../images/me/25.png";
import grass from "../images/parallax/grass.png";

export const About = () => {
  const [t, i18n] = useTranslation("about");

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to("#moon", {
      scrollTrigger: {
        scrub: 1,
      },
      x: 1000,
      y: 300,
      scale: 2,
    });

    gsap.to("#cloud1", {
      scrollTrigger: {
        scrub: 1,
      },
      x: -400,
    });

    gsap.to("#cloud2", {
      scrollTrigger: {
        scrub: 1,
      },
      x: 300,
    });

    gsap.to("#star", {
      scrollTrigger: {
        scrub: 1,
      },
      x: -3500,
      y: 3000,
      scale: 0,
    });

    gsap.to("#me", {
      scrollTrigger: {
        scrub: 1,
      },
      x: 0,
      y: -1300,
      scale: 1,
    });

    gsap.to("#grass", {
      scrollTrigger: {
        scrub: 1,
      },
      y: 0,
      scale: 1.2,
    });
  }, []);

  return (
    <div className="wrapper">
      <section className="about-header">
        <img src={bg} id="bg" alt="bg" />
        <img src={moon} id="moon" alt="moon" />
        <img src={cloud1} id="cloud1" alt="cloud" />
        <img src={cloud2} id="cloud2" alt="cloud" />
        <img src={star} id="star" alt="star" />
        <img src={me} id="me" alt="me" />
        <img src={grass} id="grass" alt="grass" />
      </section>
      <div className="row">
        <div className="first column">
          <h2>{t("title.about-me")}</h2>
          <p className="about-text">{t("body.p")}</p>
        </div>

        <div className="lang-icons">
          <img
            className="en-btn"
            onClick={() => i18n.changeLanguage("en")}
            alt="united-kingdom"
          />
          <img
            className="es-btn"
            onClick={() => i18n.changeLanguage("es")}
            alt="spain"
          />
        </div>
        <br />
        <br />

        <div className="second column">
          <h2>FEEL FREE TO CONTACT ME</h2>
          <Contact />
        </div>
      </div>
    </div>
  );
};
