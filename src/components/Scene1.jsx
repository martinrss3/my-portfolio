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
  let nextSceneRef = useRef(null);

  const firstSpeech = `Hi! \n My name is <el>Martín</el> \n and I am a \n Full Stack \n Developer...`;
  const secondSpeech = "I am looking \n for my first job \n as a developer!";

  const [mainImage, setMainImage] = useState(false);
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
      nextSceneRef,
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
    <div className="container bg-scene1">
      <ReactHowler src={Bouncy} playing={false} loop={true} />

      <div>
        <img
          ref={(el) => {
            imageRef = el;
          }}
          className={
            mainImage
              ? "toggle-main-image img-scene1-chg"
              : "main-image img-scene1"
          }
          alt="me"
        />
      </div>

      <Delay wait={1200}>
        <div className={text ? "toggle-text txt-scene1-chg" : "text txt-scene1"}>
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

      <div>
        <Link to="/scene2">
          <button
            ref={(el) => {
              nextSceneRef = el;
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
