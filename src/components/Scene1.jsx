import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import ReactHowler from "react-howler";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import Bouncy from "../audio/bouncy.mp3";
import "../css/scene1.css";

export const Scene1 = () => {
  let imageRef = useRef(null);
  let speechBubbleRef = useRef(null);
  let nextSceneRef = useRef(null);

  const firstSpeech = `Hi! My name is <el>Martín</el> \n and I am a \n Full Stack Developer...`;
  const secondSpeech = "I am looking \n for my first job \n as a developer!";

  const [mainImage, setMainImage] = useState(false);
  const [speechBubble, setSpeechBubble] = useState(false);
  const [text, setText] = useState(false);
  const [nextButton, setNextButton] = useState(false);

  useEffect(() => {
    TweenMax.staggerTo(imageRef, 0.9, {
      opacity: 1,
      x: -100,
      ease: Power3.easeInOut,
      delay: 0.3,
    });

    TweenMax.fromTo(
      [speechBubbleRef, nextSceneRef],
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
    tl.to(imageRef, 0, { x: 700 });
  }, []);

  return (
    <div className="wrapper">
      <ReactHowler src={Bouncy} playing={false} loop={true} />

      <div className="columns">
        <div className="col col-1">
          <img
            ref={(el) => {
              imageRef = el;
            }}
            className={mainImage ? "change-main-image" : "main-image"}
            alt="me"
          />
        </div>
      </div>

      <div className="columns">
        <div className="col col-2">
          <img
            ref={(el) => {
              speechBubbleRef = el;
            }}
            className={speechBubble ? "change-speech-bubble" : "speech-bubble"}
            alt="speech bubble"
          />
        </div>
        <div className="col col-2">
          <Delay wait={1200}>
            <div className={text ? "toogle-text-scene1 col-2" : "text-scene1"}>
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
                      setMainImage(!mainImage);
                      setSpeechBubble(!speechBubble);
                      setText(!text);
                    })
                    .typeString(secondSpeech)
                    .callFunction(() => {
                      setNextButton(!nextButton);
                    });
                }}
              />
            </div>
          </Delay>
        </div>
      </div>

      <div className="buttons">
        <Link to="/scene2">
          <button
            ref={(el) => {
              nextSceneRef = el;
            }}
            className={nextButton ? "next-scene" : "change-next-scene"}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
