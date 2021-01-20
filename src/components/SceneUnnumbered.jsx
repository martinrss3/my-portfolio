import React, { useRef, useEffect } from "react";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import { TweenMax, Power3, TimelineLite } from "gsap";
import { Link } from "react-router-dom";
import MainImage from "../images/me/05.png";
import Monster from "../images/badGuy/12.png";
import SpeechBubble from "../images/speechBubbles/speech-bubble4.png";
import SpeechBubble2 from "../images/speechBubbles/speech-bubble1.png";
import "../css/scene-unnumbered.css";

export const SceneUnnumbered = () => {
  let mainImage = useRef(null);
  let monster = useRef(null);
  let speechBubble = useRef(null);
  let nextScene = useRef(null);
  let backScene = useRef(null);

  useEffect(() => {
    TweenMax.staggerTo(
      [mainImage, monster],
      0.9,
      {
        opacity: 1,
        x: -100,
        ease: Power3.easeInOut,
        delay: 0.3,
      },
      {
        opacity: 1,
        x: -100,
        ease: Power3.easeInOut,
        delay: 0.3,
      }
    );

    TweenMax.fromTo(
      [speechBubble, nextScene, backScene],
      1,
      {
        delay: 1.2,
        opacity: 0,
      },
      {
        delay: 1.2,
        opacity: 1,
      }
    );

    let tl = new TimelineLite();
    tl.to(mainImage, 0, { x: -700 });
    tl.to(monster, 0, { x: 700 });
  }, []);

  return (
    <div className="container-scene-unnumbered">
      <div>
        <img
          ref={(el) => {
            mainImage = el;
          }}
          className="martin-scene-unnumbered"
          src={MainImage}
          alt="me"
        />
        <div
          ref={(el) => {
            speechBubble = el;
          }}
        >
          <img
            src={SpeechBubble}
            className="speech-bubble1-scene-unnumbered"
            alt="speech bubble"
          />
          <Typed
            className="typed1-scene-unnumbered"
            strings={["wait hmm.. \n who are you?"]}
            typeSpeed={60}
          />
        </div>
      </div>
      <div>
        <img
          ref={(el) => {
            monster = el;
          }}
          src={Monster}
          className="monster-scene-unnumbered"
          alt="monster"
        />
        <div
          ref={(el) => {
            speechBubble = el;
          }}
        >
          <img
            src={SpeechBubble2}
            className="speech-bubble2-scene-unnumbered"
            alt="speech bubble"
          />
          <Typed
            className="typed2-scene-unnumbered"
            strings={["I am a creature \n of the night"]}
            typeSpeed={60}
          />
        </div>
      </div>
      <Link to="/scene3">
        <button
          ref={(el) => {
            backScene = el;
          }}
          className="back-scene-unnumbered"
        >
          Back
        </button>
      </Link>
      <Link to="/">
        <button
          ref={(el) => {
            nextScene = el;
          }}
          className="next-scene-unnumbered"
        >
          Next
        </button>
      </Link>
    </div>
  );
};
