import React, { useRef, useEffect } from "react";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import { TweenMax, Power3, TimelineLite } from "gsap";
import { Link } from "react-router-dom";
import MainImage from "../img/5.png";
import Monster from "../img/Sombra.gif";
import SpeechBubble from "../img/speech-bubble4.png";
import SpeechBubble2 from "../img/speech-bubble1.png";
import {
  containerStyle3,
  mainImageStyle3,
  speechBubbleStyle3,
  typed1Style3,
  monsterStyle3,
  speechBubble2Style3,
  typed2Style3,
  nextSceneButtonStyle3,
} from "../utils/styles";

export const Scene3 = () => {
  let mainImage = useRef(null);
  let monster = useRef(null);
  let speechBubble = useRef(null);
  let nextScene = useRef(null);

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
      [speechBubble, nextScene],
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
    <div style={containerStyle3}>
      <div>
        <img
          ref={(el) => {
            mainImage = el;
          }}
          style={mainImageStyle3}
          src={MainImage}
          alt="me"
        />
        <div
          ref={(el) => {
            speechBubble = el;
          }}
        >
          <img src={SpeechBubble} style={speechBubbleStyle3} alt="speech bubble" />
          <Typed
            style={typed1Style3}
            strings={[""]}
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
          style={monsterStyle3}
          alt="monster"
        />
        <div
          ref={(el) => {
            speechBubble = el;
          }}
        >
          <img
            src={SpeechBubble2}
            style={speechBubble2Style3}
            alt="speech bubble"
          />
          <Typed
            style={typed2Style3}
            strings={[""]}
            typeSpeed={60}
          />
        </div>
      </div>
      <Link to="/">
        <button
          ref={(el) => {
            nextScene = el;
          }}
          style={nextSceneButtonStyle3}
        >
          Click to Next!
        </button>
      </Link>
    </div>
  );
};
