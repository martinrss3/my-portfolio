import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import ReactHowler from "react-howler";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import BreakClassicMachine from "../audio/break-classic-machine.mp3";
import "../css/scene3.css";

export const Scene3 = () => {
  let imageRef = useRef(null);
  let nextSceneRef = useRef(null);
  let backSceneRef = useRef(null);

  const firstSpeech = `<span class="first-speech">hahahaha \n you will never \n get the job... \n i will...</span>`;
  const secondSpeech = `<span class="second-speech">BREAK \n YOUR \n CODE!</span>`;

  const [background, setBackground] = useState(false);
  const [mainImage, setMainImage] = useState(false);
  const [text, setText] = useState(false);
  const [buttons, setButtons] = useState(false);

  useEffect(() => {
    TweenMax.staggerTo(imageRef, 0.9, {
      opacity: 1,
      x: -100,
      ease: Power3.easeInOut,
      delay: 0.3,
    });

    TweenMax.fromTo(
      [nextSceneRef, backSceneRef],
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
    <div
      className={
        background ? "container bg-scene3-toggle" : "container bg-scene3"
      }
    >
      <ReactHowler src={BreakClassicMachine} playing={false} loop={true} />

      <div>
        <img
          ref={(el) => {
            imageRef = el;
          }}
          className={
            mainImage
              ? "toggle-main-image img-scene3-chg"
              : "main-image img-scene3"
          }
          alt="me"
        />
      </div>

      <Delay wait={1200}>
        <div
          className={text ? "toggle-text txt-scene3-chg" : "text txt-scene3"}
        >
          <Typewriter
            options={{
              strings: [firstSpeech],
              autoStart: true,
              delay: 50,
              deleteSpeed: 10,
              pauseFor: 2000,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .callFunction(() => {
                  setBackground(!background);
                  setMainImage(!mainImage);
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

      <div>
        <Link to="/scene2">
          <button
            ref={(el) => {
              backSceneRef = el;
            }}
            className={buttons ? "back-scene" : "back-scene-changed"}
          >
            Back
          </button>
        </Link>
        <Link to="/scene4">
          <button
            ref={(el) => {
              nextSceneRef = el;
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
