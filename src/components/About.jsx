import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "emailjs-com";
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
    gsap.to("#bg", {
      scrollTrigger: {
        scrub: true,
      },
      y: 200,
      scale: 1.5,
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

    gsap.to("#moon", {
      scrollTrigger: {
        scrub: true,
      },
      x: 1500,
      y: 500,
      scale: 2,
    });

    gsap.to("#star", {
      scrollTrigger: {
        scrub: true,
      },
      x: -3000,
      y: 2000,
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
      scale: 1.2
    });
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="container">
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

      <div className="container2">
        <div className="inner">
          <div className="panel panel-left">
            <div className="panel-content">
              <div className="image-background"></div>
            </div>
          </div>
          <div className="panel panel-right">
            <div className="panel-content">
              <form className="form" onSubmit={sendEmail}>
                <div className="group">
                  <input type="text" name="field1" required />
                  <span className="highlight"></span>
                  <label>Leave me a comment</label>
                </div>
                <div className="group">
                  <input type="text" name="field2" required />
                  <span className="highlight"></span>
                  <label>Your name</label>
                </div>
                <div className="group">
                  <input type="text" name="field3" required />
                  <span className="highlight"></span>
                  <label>Your email</label>
                </div>
                <input className="send-btn" type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
