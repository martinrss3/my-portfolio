import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import ReactHowler from "react-howler";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import BreakBooty from "../audio/break-booty.mp3";
import "../css/scene2.css";

export const Scene2 = () => {
  let mainImage = useRef(null);
  let speechBubble = useRef(null);
  let nextScene = useRef(null);
  let backScene = useRef(null);

  const firstSpeech = "You can check \n my CV down here...";
  const secondSpeech = "Wow sorry... \n what happened \n with my CV..?";

  const [changeMainImage, setChangeMainImage] = useState(false);
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
    <div className="container-scene2">
      <ReactHowler src={BreakBooty} playing={false} loop={true} />
      <img
        ref={(el) => {
          mainImage = el;
        }}
        className={
          changeMainImage ? "main-image-scene2-changed" : "main-image-scene2"
        }
        alt="me"
      />
      <div
        ref={(el) => {
          speechBubble = el;
        }}
      >
        <img className="speech-bubble-scene2" alt="speech-bubble" />
        <div>
          <Delay wait={1200}>
            <div className="typed-scene2">
              <Typewriter
                options={{
                  strings: [firstSpeech],
                  autoStart: true,
                  delay: 50,
                  deleteSpeed: 10,
                  pauseFor: 800,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .callFunction(() => {
                      setChangeMainImage(!changeMainImage);
                    })
                    .typeString(secondSpeech)
                    .callFunction(() => {
                      setButtons(!buttons);
                    });
                }}
              />
            </div>
          </Delay>
        </div>
      </div>
      <div>
        <Link to="/">
          <button
            ref={(el) => {
              backScene = el;
            }}
            className={buttons ? "back-scene2" : "back-scene2-changed"}
          >
            Back
          </button>
        </Link>
        <Link to="/scene3">
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
