import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import ReactHowler from "react-howler";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import BreakClassicMachine from "../audio/break-classic-machine.mp3";
import "../css/scene3.css";

export const Scene3 = () => {
  let mainImg = useRef(null);
  let speechBubble = useRef(null);
  let nextScene = useRef(null);
  let backScene = useRef(null);

  const firstSpeech =
    "hahahaha \n you will never \n get the job \n because i will...";
  const secondSpeech = "BREAK YOUR CODE!";

  const [background, setBackground] = useState(false);
  const [mainImage, setMainImage] = useState(false);
  const [speechBubbles, setSpeechBubbles] = useState(false);
  const [text, setText] = useState(false);
  const [buttons, setButtons] = useState(false);

  useEffect(() => {
    TweenMax.staggerTo(mainImg, 0.9, {
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
    tl.to(mainImg, 0, { x: 700 });
  }, []);

  return (
    <div
      className={background ? "container-scene3-changed" : "container-scene3"}
    >
      <ReactHowler src={BreakClassicMachine} playing={false} loop={true} />
      <img
        ref={(el) => {
          mainImg = el;
        }}
        className={
          mainImage ? "main-image-scene3-changed" : "main-image-scene3"
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
              ? "speech-bubble-scene3-changed"
              : "speech-bubble-scene3"
          }
          alt="speech bubble"
        />
        <div>
          <Delay wait={1200}>
            <div className={text ? "text-scene3-changed" : "text-scene3"}>
              <Typewriter
                options={{
                  strings: [firstSpeech],
                  autoStart: true,
                  delay: 50,
                  deleteSpeed: 10,
                  pauseFor: 1500,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .callFunction(() => {
                      setBackground(!background);
                      setMainImage(!mainImage);
                      setSpeechBubbles(!speechBubbles);
                      setText(!text);
                    })
                    .typeString(secondSpeech)
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
        <Link to="/scene2">
          <button
            ref={(el) => {
              backScene = el;
            }}
            className={buttons ? "back-scene" : "back-scene-changed"}
          >
            Back
          </button>
        </Link>
        <Link to="/scene4">
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
