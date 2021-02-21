import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax } from "gsap";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import "../css/scene7.css";

export const Scene7 = () => {
  let nextScene = useRef(null);

  const firstSpeech = "I was so close..!!";

  const [buttons, setButtons] = useState(false);

  useEffect(() => {
    TweenMax.fromTo(
      nextScene,
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
    <div className="container-scene7">
      <Delay wait={3000}>
        <div>
          <img className="main-img-scene7" alt="bad guy" />
        </div>
      </Delay>
      <Delay wait={5500}>
        <div>
          <img className="speech-bubble-scene7" alt="speech bubble" />
          <div className="typed-scene7">
            <Typewriter
              options={{
                delay: 75,
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
        </div>
      </Delay>
      <div>
        <Link to="/scene8">
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
