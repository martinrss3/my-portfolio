import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import ReactHowler from "react-howler";
// import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import SpeechBubble from "../images/speechBubbles/speech-bubble1.png";
import HandClick from "../images/hand-click.gif";
import Bouncy from "../audio/bouncy.mp3";
import "../css/scene1.css";

export const Scene1 = () => {
  let mainImage = useRef(null);
  let speechBubble = useRef(null);
  let nextScene = useRef(null);

  const firstSpeech =
    "Hi! My name is Martín \n and I am a \n Full Stack Developer...";
  const secondSpeech = "I am looking \n for my first job \n as a developer!";

  const [typed, setTyped] = useState(firstSpeech);
  const [showHandClick, setShowHandClick] = useState(false);
  const [changeMainImage, setChangeMainImage] = useState(false);

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
      <div style={{ position: "absolute", right: 0 }}>
        <ReactHowler src={Bouncy} playing={true} loop={true} />
      </div>
      <img
        ref={(el) => {
          mainImage = el;
        }}
        className={
          changeMainImage
            ? "main-image-scene-one-changed"
            : "main-image-scene-one"
        }
        alt="me"
      />
      <div
        ref={(el) => {
          speechBubble = el;
        }}
      >
        <img
          className="speech-bubble-scene-one"
          src={SpeechBubble}
          onClick={() => {
            setTyped(secondSpeech);
            setShowHandClick(!showHandClick);
            setChangeMainImage(!changeMainImage);
          }}
          alt="speech bubble"
        />
        <div>
          <p
            className="typed-scene-one"
            onClick={() => {
              setTyped(secondSpeech);
              setShowHandClick(!showHandClick);
              setChangeMainImage(!changeMainImage);
            }}
          >
            {typed}
          </p>
        </div>
        {/* <div className="typed-scene-one">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(typed).start();
            }}
          />
        </div> */}
        <div>
          <Delay wait={2500}>
            <img
              className={
                showHandClick
                  ? "hand-click-scene-one-hide"
                  : "hand-click-scene-one"
              }
              src={HandClick}
              onClick={() => {
                setTyped(secondSpeech);
                setShowHandClick(!showHandClick);
                setChangeMainImage(!changeMainImage);
              }}
              alt="hand click"
            />
          </Delay>
        </div>
      </div>
      <div>
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
    </div>
  );
};
