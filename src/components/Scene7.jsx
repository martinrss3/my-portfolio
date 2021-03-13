import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax } from "gsap";
import Typewriter from "typewriter-effect";
import "../css/scene7.css";

export const Scene7 = () => {
  let nextSceneRef = useRef(null);
  let backSceneRef = useRef(null);

  const firstSpeech = `<span class="first-speech-scene7">I hate the rain!</span>`;

  const [buttons, setButtons] = useState(false);

  useEffect(() => {
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
  }, []);

  return (
    <div className="container bg-scene7">
      <div>
        <img className="main-image img-scene7" alt="bad guy" />
      </div>

      <div className="text txt-scene7">
        <Typewriter
          options={{
            delay: 75,
            cursor: "",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(firstSpeech)
              .callFunction(() => {
                setButtons(!buttons);
              })
              .start();
          }}
        />
      </div>

      <div>
        <Link to="/scene6">
          <button
            ref={(el) => {
              backSceneRef = el;
            }}
            className={buttons ? "back-scene" : "back-scene-changed"}
          >
            Back
          </button>
        </Link>
        <Link to="/scene8">
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
