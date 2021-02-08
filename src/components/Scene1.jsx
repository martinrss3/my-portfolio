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

  const firstSpeech =
    "Hi! My name is Martín \n and I am a \n Full Stack Developer...";
  const secondSpeech = "I am looking \n for my first job \n as a developer!";

  const [changeMainImage, setChangeMainImage] = useState(false);
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
      <div style={{ position: "absolute", right: 0 }}>
        <ReactHowler src={Bouncy} playing={true} loop={true} />
      </div>
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
        <img className="speech-bubble-scene1" alt="speech bubble" />
        <Delay wait={1200}>
          <div className="typed-scene1">
            <Typewriter
              options={{
                strings: [firstSpeech],
                autoStart: true,
                delay: 50,
                deleteSpeed: 10,
                pauseFor: 3000,
              }}
              onInit={(typewriter) => {
                typewriter
                  .callFunction(() => {
                    setChangeMainImage(!changeMainImage);
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
            className={nextButton ? "next-scene1" : "next-scene1-changed"}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
