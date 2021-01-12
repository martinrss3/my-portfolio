import React, { useRef, useEffect } from "react";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import { TweenMax, Power3, TimelineLite } from "gsap";
import { Link } from "react-router-dom";
import MainImage from "../img/22.png";
import SpeechBubble from "../img/speech-bubble1.png";
import {
  containerStyle2,
  mainImageStyle2,
  speechBubbleStyle2,
  typedStyle2,
  nextSceneButtonStyle2,
} from "../utils/styles";

export const Scene2 = () => {
  let mainImage = useRef(null);
  let speechBubble = useRef(null);
  let nextScene = useRef(null);

  useEffect(() => {
    TweenMax.staggerTo(mainImage, 0.9, {
      opacity: 1,
      x: -100,
      ease: Power3.easeInOut,
      delay: 0.3,
    });

    TweenMax.fromTo(
      [speechBubble, nextScene],
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
    <div style={containerStyle2}>
      <img
        ref={(el) => {
          mainImage = el;
        }}
        style={mainImageStyle2}
        src={MainImage}
        alt="me"
      />
      <div
        ref={(el) => {
          speechBubble = el;
        }}
      >
        <img
          style={speechBubbleStyle2}
          src={SpeechBubble}
          alt="speech-bubble"
        />
        <Typed
          style={typedStyle2}
          strings={["I am looking \n for my first job \n as a developer!"]}
          typeSpeed={60}
        />
      </div>
      <Link to="/scene3">
        <button
          ref={(el) => {
            nextScene = el;
          }}
          style={nextSceneButtonStyle2}
        >
          Click to Next!
        </button>
      </Link>
    </div>
  );
};
