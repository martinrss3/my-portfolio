import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import "../css/scene7.css";

export const Scene7 = () => {
  let mainImage = useRef(null);
  let speechBubble = useRef(null);
  let nextScene = useRef(null);
  let backScene = useRef(null);

  const firstSpeech = "I was so close...";

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
    <div className="container-scene7">
      <div>
        <img
          ref={(el) => {
            mainImage = el;
          }}
          className="main-img-scene7"
          alt="bad guy"
        />
      </div>
      <div
        ref={(el) => {
          speechBubble = el;
        }}
      >
        <img className="speech-bubble-scene1" alt="speech bubble" />
        <Delay wait={1200}>
          <div className="typed-scene7">
            <Typewriter
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
        </Delay>
      </div>
      <div>
        <Link to="/scene6">
          <button
            ref={(el) => {
              backScene = el;
            }}
            className={buttons ? "back-scene2" : "back-scene2-changed"}
          >
            Back
          </button>
        </Link>
        <Link to="/scene8">
          <button
            ref={(el) => {
              nextScene = el;
            }}
            className={buttons ? "next-scene2" : "next-scene2-changed"}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
