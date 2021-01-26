import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import Delay from "react-delay";
import MainImage from "../images/me/22.png";
import SpeechBubble from "../images/speechBubbles/speech-bubble1.png";
import HandClick from "../images/hand-click.gif";
import "../css/scene2.css";

export const Scene2 = () => {
  let mainImage = useRef(null);
  let speechBubble = useRef(null);
  let cv = useRef(null);
  let nextScene = useRef(null);
  let backScene = useRef(null);

  const firstSpeech = "You can check \n my CV down here...";
  const secondSpeech = "I am looking \n for my first job \n as a developer!";

  const [typed, setTyped] = useState([firstSpeech]);
  const [showHandClick, setShowHandClick] = useState(false);

  useEffect(() => {
    TweenMax.staggerTo(mainImage, 0.9, {
      opacity: 1,
      x: -100,
      ease: Power3.easeInOut,
      delay: 0.3,
    });

    TweenMax.fromTo(
      [speechBubble, cv, nextScene, backScene],
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
          onClick={() => {
            setTyped(secondSpeech);
            setShowHandClick(!showHandClick);
          }}
          alt="speech-bubble"
        />
        <div>
          <p
            className="typed-scene-two"
            onClick={() => {
              setTyped(secondSpeech);
              setShowHandClick(!showHandClick);
            }}
          >
            {typed}
          </p>
        </div>
        <div>
          <Delay wait={2500}>
            <img
              className={
                showHandClick
                  ? "hand-click-scene-two-hide"
                  : "hand-click-scene-two"
              }
              src={HandClick}
              onClick={() => {
                setTyped(secondSpeech);
                setShowHandClick(!showHandClick);
              }}
              alt="hand click"
            />
          </Delay>
        </div>
      </div>
      <div>
        <button
          ref={(el) => {
            cv = el;
          }}
          className="cv-scene-two"
          onClick={() => window.open("http://google.com.ar", "_blank")}
        >
          View my CV
        </button>
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
