import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import ReactHowler from "react-howler";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import BreakBooty from "../audio/break-booty.mp3";
import "../css/scene2.css";

export const Scene2 = () => {
  let mainImage = useRef(null);
  let speechBubble = useRef(null);
  let nextScene = useRef(null);
  let backScene = useRef(null);

  const firstSpeech = "I love \n computers \n and music";
  const secondSpeech =
    "You can check my CV \n and contact me \n in the menu section";
  const thirdSpeech = "Hey you! \n You will never get \n the job...";
  const fourthSpeech = "Who said that..?";

  const [changeMainImage, setChangeMainImage] = useState(false);
  const [speechBubbles, setSpeechBubbles] = useState(false);
  const [text, setText] = useState(false);
  const [buttons, setButtons] = useState(false);

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
    <div className="container-scene2">
      <ReactHowler src={BreakBooty} playing={false} loop={true} />
      <img
        ref={(el) => {
          mainImage = el;
        }}
        className={
          changeMainImage ? "main-image-scene2-changed" : "main-image-scene2"
        }
        alt="me"
      />
      <div
        ref={(el) => {
          speechBubble = el;
        }}
      >
        <img
          className={
            speechBubbles
              ? "speech-bubble-scene2-changed"
              : "speech-bubble-scene2"
          }
          alt="speech-bubble"
        />
        <div>
          <Delay wait={1200}>
            <div className={text ? "typed-scene2-changed" : "typed-scene2"}>
              <Typewriter
                options={{
                  strings: [firstSpeech, secondSpeech],
                  autoStart: true,
                  delay: 50,
                  deleteSpeed: 10,
                  pauseFor: 1200,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .callFunction(() => {
                      setSpeechBubbles(!speechBubbles);
                      setText(!text);
                    })
                    .typeString(thirdSpeech)
                    .pauseFor(3000)
                    .callFunction(() => {
                      setChangeMainImage(!changeMainImage);
                    })
                    .deleteChars(50)
                    .callFunction(() => {
                      setSpeechBubbles(speechBubbles);
                      setText(text);
                    })
                    .typeString(fourthSpeech)
                    .callFunction(() => {
                      setButtons(!buttons);
                    });
                }}
              />
            </div>
          </Delay>
        </div>
      </div>
      <div>
        <Link to="/">
          <button
            ref={(el) => {
              backScene = el;
            }}
            className={buttons ? "back-scene" : "back-scene-changed"}
          >
            Back
          </button>
        </Link>
        <Link to="/scene3">
          <button
            ref={(el) => {
              nextScene = el;
            }}
            className={buttons ? "next-scene" : "next-scene-changed"}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
