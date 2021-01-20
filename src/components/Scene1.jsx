import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import { TweenMax, Power3, TimelineLite } from "gsap";
import MainImage from "../images/me/23.png";
import SpeechBubble from "../images/speechBubbles/speech-bubble1.png";
import "../css/scene1.css";

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

  return (
    <div className="container-scene-one">
      <img
        ref={(el) => {
          mainImage = el;
        }}
        className="main-image-scene-one"
        src={MainImage}
        alt="me"
      />
      <div
        ref={(el) => {
          speechBubble = el;
        }}
      >
        <img className="speech-bubble-scene-one" src={SpeechBubble} alt="speech bubble" />
        <Typed
          className="typed-scene-one"
          strings={[
            "Hi! My name is Martín \n and I am a \n Full Stack Developer",
          ]}
          typeSpeed={60}
        />
      </div>
      <Link to="/scene2">
        <button
          ref={(el) => {
            nextScene = el;
          }}
          className="next-scene-one"
        >
          Next
        </button>
      </Link>
    </div>
  );
};
