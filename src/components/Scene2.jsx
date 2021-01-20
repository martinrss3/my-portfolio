import React, { useRef, useEffect } from "react";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import { TweenMax, Power3, TimelineLite } from "gsap";
import { Link } from "react-router-dom";
import MainImage from "../images/me/22.png";
import SpeechBubble from "../images/speechBubbles/speech-bubble1.png";
import "../css/scene2.css";

export const Scene2 = () => {
  let mainImage = useRef(null);
  let speechBubble = useRef(null);
  let nextScene = useRef(null);
  let backScene = useRef(null);

  useEffect(() => {
    TweenMax.staggerTo(mainImage, 0.9, {
      opacity: 1,
      x: -100,
      ease: Power3.easeInOut,
      delay: 0.3,
    });

    TweenMax.fromTo(
      [speechBubble, nextScene, backScene],
      1,
      {
        delay: 2,
        opacity: 0,
      },
      {
        delay: 1.2,
        opacity: 1,
      }
    );

    let tl = new TimelineLite();
    tl.to(mainImage, 0, { x: 700 });
  }, []);

  return (
    <div className="container-scene-two">
      <img
        ref={(el) => {
          mainImage = el;
        }}
        className="main-image-scene-two"
        src={MainImage}
        alt="me"
      />
      <div
        ref={(el) => {
          speechBubble = el;
        }}
      >
        <img
          className="speech-bubble-scene-two"
          src={SpeechBubble}
          alt="speech-bubble"
        />
        <Typed
          className="typed-scene-two"
          strings={["I am looking \n for my first job \n as a developer!"]}
          typeSpeed={60}
        />
      </div>
      <div>
        <Link to="/">
          <button
            ref={(el) => {
              backScene = el;
            }}
            className="back-scene-two"
          >
            Back
          </button>
        </Link>
        <Link to="/scene3">
          <button
            ref={(el) => {
              nextScene = el;
            }}
            className="next-scene-two"
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
