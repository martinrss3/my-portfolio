import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/about.css";
import bg from "../images/parallax/99.jpg";
import moon from "../images/parallax/moon.png";
import cloud1 from "../images/parallax/cloud1.png";
import cloud2 from "../images/parallax/cloud2.png";
import star from "../images/parallax/star.png";
import me from "../images/me/25.png";
import grass from "../images/parallax/grass.png";

export const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to("#moon", {
      scrollTrigger: {
        scrub: true,
      },
      x: 1000,
      y: 300,
      scale: 2,
    });

    gsap.to("#cloud1", {
      scrollTrigger: {
        scrub: true,
      },
      x: -400,
    });

    gsap.to("#cloud2", {
      scrollTrigger: {
        scrub: true,
      },
      x: 300,
    });

    gsap.to("#star", {
      scrollTrigger: {
        scrub: true,
      },
      x: -3500,
      y: 3000,
      scale: 0,
    });

    gsap.to("#me", {
      scrollTrigger: {
        scrub: true,
      },
      x: 0,
      y: -1300,
      scale: 1,
    });

    gsap.to("#grass", {
      scrollTrigger: {
        scrub: true,
      },
      y: 0,
      scale: 1.2,
    });
  }, []);

  return (
    <div className="wrapper">
      <section>
        <img src={bg} id="bg" alt="bg" />
        <img src={moon} id="moon" alt="moon" />
        <img src={cloud1} id="cloud1" alt="cloud" />
        <img src={cloud2} id="cloud2" alt="cloud" />
        <img src={star} id="star" alt="star" />
        <img src={me} id="me" alt="me" />
        <img src={grass} id="grass" alt="grass" />
      </section>
      <div className="sec">
        <div className="content">
          <h2>My name is Martin Russo and i'm hungry.</h2>
          <p>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            <br />
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
            amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
            <br />
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
            amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};
