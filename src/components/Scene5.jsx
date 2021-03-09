import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import "../css/scene5.css";

export const Scene5 = () => {
  let imageRef = useRef(null);
  let nextSceneRef = useRef(null);
  let backSceneRef = useRef(null);

  const firstSpeech = `<span class="first-speech-scene5">this will be \n very easy...</span>`;
  const secondSpeech = `<span class="second-speech-scene5">this guy \n is trying to \n break the code... \n We must stop him!</span>`;

  const [text, setText] = useState(false);
  const [buttons, setButtons] = useState(false);

  useEffect(() => {
    TweenMax.staggerTo(imageRef, 0.9, {
      opacity: 1,
      x: 0,
      ease: Power3.easeInOut,
      delay: 5,
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
    tl.to(imageRef, 0, { x: -1000 });
  }, []);

  return (
    <div className="container bg-scene5">
      <div>
        <img className="main-image img-scene5" alt="bad guy" />
      </div>

      <Delay wait={1400}>
        <div
          className={text ? "toggle-text txt-scene5-chg" : "text txt-scene5"}
        >
          <Typewriter
            options={{
              delay: 70,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(firstSpeech)
                .start()
                .pauseFor(1700)
                .callFunction(() => {
                  setText(!text);
                });
            }}
          />
        </div>
      </Delay>

      <div
        className="frame"
        ref={(el) => {
          imageRef = el;
        }}
      >
        <img className="main-image img2-scene5" alt="me" />
      </div>

      <Delay wait={6300}>
        <div className="text txt2-scene5">
          <Typewriter
            options={{
              delay: 50,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(secondSpeech)
                .callFunction(() => {
                  setButtons(!buttons);
                })
                .start();
            }}
          />
        </div>
      </Delay>

      <div>
        <Link to="/scene4">
          <button
            ref={(el) => {
              backSceneRef = el;
            }}
            className={buttons ? "back-scene" : "back-scene-changed"}
          >
            Back
          </button>
        </Link>
        <Link to="/scene6">
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
