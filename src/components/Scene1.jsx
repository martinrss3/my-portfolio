import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import { TweenMax, Power3, TimelineLite } from "gsap";
import MainImage from "../img/23.png";
import SpeechBubble from "../img/speech-bubble1.png";
import Sound from "../img/ding.wav";
import {
  containerStyle1,
  mainImageStyle1,
  speechBubbleStyle1,
  typedStyle1,
  nextSceneButtonStyle1,
} from "../utils/styles";
import "../css/main.css";

export const Scene1 = () => {
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

  let audio = new Audio(Sound);

  const start = () => {
    audio.play();
  };

  return (
    <div style={containerStyle1}>
      <img
        ref={(el) => {
          mainImage = el;
        }}
        style={mainImageStyle1}
        src={MainImage}
        alt="me"
      />
      <div
        ref={(el) => {
          speechBubble = el;
        }}
        onClick={start}
      >
        <img
          style={speechBubbleStyle1}
          src={SpeechBubble}
          alt="speech bubble"
        />
        <Typed
          style={typedStyle1}
          strings={["Hi! My name is Martín \n I am a \n Full Stack Developer"]}
          typeSpeed={60}
        />
      </div>
      <Link to="/scene2">
        <button
          ref={(el) => {
            nextScene = el;
          }}
          style={nextSceneButtonStyle1}
        >
          Click to Next!
        </button>
      </Link>
    </div>
  );
};
