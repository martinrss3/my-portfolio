import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Contact } from "./Contact";
import "../css/projects.css";
import bg from "../images/backgrounds/bg-scene7.jpg";
import moon from "../images/parallax/moon.png";
import cloud1 from "../images/parallax/cloud1.png";
import cloud2 from "../images/parallax/cloud2.png";
import star from "../images/parallax/star.png";
import guy from "../images/badGuy/25.png";
import grass from "../images/parallax/grass.png";

export const Projects = () => {
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

    gsap.to("#guy", {
      scrollTrigger: {
        scrub: 1,
      },
      x: 0,
      y: -1600,
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
        <img src={guy} id="guy" alt="guy" />
        <img src={grass} id="grass" alt="grass" />
      </section>

      <section>
        <h2>MY PROJECTS</h2>
        <Contact />
      </section>
      <section>
        <h2>FEEL FREE TO CONTACT ME</h2>
        <Contact />
      </section>
      <section>
        <h2>FEEL FREE TO CONTACT ME</h2>
        <Contact />
      </section>
    </div>
  );
};
