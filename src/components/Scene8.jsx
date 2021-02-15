import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import "../css/scene8.css";

export const Scene8 = () => {
  let mainImage = useRef(null);
  let speechBubble = useRef(null);
  let nextScene = useRef(null);

  const firstSpeech = "Thanks for \n helping me..!!";

  const [buttons, setButtons] = useState(false);

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
    <div className="container-scene8">
      <div>
        <img
          ref={(el) => {
            mainImage = el;
          }}
          className="main-image-scene8"
          alt="me"
        />
      </div>
      <div
        ref={(el) => {
          speechBubble = el;
        }}
      >
        <img className="speech-bubble-scene1" alt="speech bubble" />
        <Delay wait={1200}>
          <div className="typed-scene8">
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
        </Delay>
      </div>
      <div>
        <Link to="/">
          <button
            ref={(el) => {
              nextScene = el;
            }}
            className={buttons ? "next-scene8" : "next-scene8-changed"}
          >
            The End
          </button>
        </Link>
      </div>
    </div>
  );
};
