import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import ReactHowler from "react-howler";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import Bouncy from "../audio/bouncy.mp3";
import "../css/scene1.css";

export const Scene1 = () => {
  let mainImage = useRef(null);
  let speechBubble = useRef(null);
  let nextScene = useRef(null);

  const firstSpeech = `Hi! My name is <el style="text-shadow: 2px 2px 2px #FF5F1F;">Martín</el> \n and I am a \n Full Stack Developer...`;
  const secondSpeech = "I am looking \n for my first job \n as a developer!";

  const [changeMainImage, setChangeMainImage] = useState(false);
  const [speechBubbles, setSpeechBubbles] = useState(false);
  const [text, setText] = useState(false);
  const [nextButton, setNextButton] = useState(false);

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
    <div className="container-scene1">
      <ReactHowler src={Bouncy} playing={false} loop={true} />
      <img
        ref={(el) => {
          mainImage = el;
        }}
        className={
          changeMainImage ? "main-image-scene1-changed" : "main-image-scene1"
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
              ? "speech-bubble-scene1-changed"
              : "speech-bubble-scene1"
          }
          alt="speech bubble"
        />
        <Delay wait={1200}>
          <div className={text ? "typed-scene1-changed" : "typed-scene1"}>
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
                    setChangeMainImage(!changeMainImage);
                    setSpeechBubbles(!speechBubbles);
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
      <div>
        <Link to="/scene2">
          <button
            ref={(el) => {
              nextScene = el;
            }}
            className={nextButton ? "next-scene" : "next-scene-changed"}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
