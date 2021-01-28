import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import MainImage from "../images/badGuy/04.png";
import SpeechBubble from "../images/speechBubbles/speech-bubble1.png";
import "../css/scene3.css";

export const Scene3 = () => {
  let mainImage = useRef(null);
  let speechBubble = useRef(null);
  let nextScene = useRef(null);
  let backScene = useRef(null);

  const firstSpeech = "Are you looking \n for this...?";

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
    <div className="container-scene-three">
      <img
        ref={(el) => {
          mainImage = el;
        }}
        className="main-image-scene-three"
        src={MainImage}
        alt="me"
      />
      <div
        ref={(el) => {
          speechBubble = el;
        }}
      >
        <img
          className="speech-bubble-scene-three"
          src={SpeechBubble}
          alt="speech bubble"
        />
        <p className="typed-scene-three">{firstSpeech}</p>
      </div>
      <div>
        <Link to="/scene2">
          <button
            ref={(el) => {
              backScene = el;
            }}
            className="back-scene-three"
          >
            Back
          </button>
        </Link>
        <Link to="/scene4">
          <button
            ref={(el) => {
              nextScene = el;
            }}
            className="next-scene-three"
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
