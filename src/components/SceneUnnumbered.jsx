import React, { useRef, useEffect } from "react";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import { TweenMax, Power3, TimelineLite } from "gsap";
import { Link } from "react-router-dom";
import MainImage from "../images/me/5.png";
import Monster from "../images/badGuy/12.png";
import SpeechBubble from "../images/speechBubbles/speech-bubble4.png";
import SpeechBubble2 from "../images/speechBubbles/speech-bubble1.png";
import {
  containerStyle,
  mainImageStyle,
  speechBubbleStyle,
  typed1Style,
  monsterStyle,
  speechBubble2Style,
  typed2Style,
  nextSceneButtonStyle,
  backSceneButtonStyle,
} from "../utils/SceneUnnumberedStyles";

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
    <div style={containerStyle}>
      <div>
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
          <img
            src={SpeechBubble}
            style={speechBubbleStyle}
            alt="speech bubble"
          />
          <Typed style={typed1Style} strings={["wait hmm.. \n who are you?"]} typeSpeed={60} />
        </div>
      </div>
      <div>
        <img
          ref={(el) => {
            monster = el;
          }}
          src={Monster}
          style={monsterStyle}
          alt="monster"
        />
        <div
          ref={(el) => {
            speechBubble = el;
          }}
        >
          <img
            src={SpeechBubble2}
            style={speechBubble2Style}
            alt="speech bubble"
          />
          <Typed style={typed2Style} strings={["I am a creature \n of the night"]} typeSpeed={60} />
        </div>
      </div>
      <Link to="/scene3">
        <button
          ref={(el) => {
            backScene = el;
          }}
          style={backSceneButtonStyle}
        >
          Back!
        </button>
      </Link>
      <Link to="/">
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
  );
};
