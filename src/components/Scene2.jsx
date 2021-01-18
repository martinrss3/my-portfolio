import React, { useRef, useEffect } from "react";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import { TweenMax, Power3, TimelineLite } from "gsap";
import { Link } from "react-router-dom";
import MainImage from "../images/me/22.png";
import SpeechBubble from "../images/speechBubbles/speech-bubble1.png";
import {
  containerStyle,
  mainImageStyle,
  speechBubbleStyle,
  typedStyle,
  nextSceneButtonStyle,
  backSceneButtonStyle,
} from "../utils/Scene2Styles";

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
    <div style={containerStyle}>
      <img
        ref={(el) => {
          mainImage = el;
        }}
        style={mainImageStyle}
        src={MainImage}
        alt="me"
      />
      <div
        ref={(el) => {
          speechBubble = el;
        }}
      >
        <img style={speechBubbleStyle} src={SpeechBubble} alt="speech-bubble" />
        <Typed
          style={typedStyle}
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
            style={backSceneButtonStyle}
          >
            Back!
          </button>
        </Link>
        <Link to="/scene3">
          <button
            ref={(el) => {
              nextScene = el;
            }}
            style={nextSceneButtonStyle}
          >
            Next!
          </button>
        </Link>
      </div>
    </div>
  );
};
