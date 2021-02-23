import React, { useEffect, useRef, useState } from "react";
import { TweenMax, Power3, TimelineLite } from "gsap";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import "../css/scene5.css";

export const Scene5 = () => {
  let mainImage = useRef(null);
  let speechBubble1 = useRef(null);
  let speechBubble2 = useRef(null);
  let nextScene = useRef(null);
  let backScene = useRef(null);

  const firstSpeech = "this will be very easy...";
  const secondSpeech =
    "this guy \n is trying to \n break the code... \n We must stop him!";

  const [speechBubble, setSpeechBubble] = useState(false);
  const [text, setText] = useState(false);
  const [buttons, setButtons] = useState(false);

  useEffect(() => {
    TweenMax.staggerTo([mainImage, speechBubble2], 0.9, {
      opacity: 1,
      x: 0,
      ease: Power3.easeInOut,
      delay: 5,
    });

    TweenMax.fromTo(
      speechBubble1,
      1,
      {
        delay: 1,
        opacity: 0,
      },
      {
        delay: 1,
        opacity: 1,
      }
    );

    TweenMax.fromTo(
      [nextScene, backScene],
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
    tl.to([mainImage, speechBubble2], 0, { x: -1000 });
  }, []);

  return (
    <div className="container-scene5">
      <div>
        <img className="main-image-scene5" alt="bad guy" />
      </div>
      <div>
        <img
          className={
            speechBubble
              ? "speech-bubble-scene5-changed"
              : "speech-bubble-scene5"
          }
          ref={(el) => {
            speechBubble1 = el;
          }}
          alt="speech bubble"
        />
        <div>
          <Delay wait={1400}>
            <div className={text ? "text-scene5-changed" : "text-scene5"}>
              <Typewriter
                options={{
                  delay: 70,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(firstSpeech)
                    .start()
                    .pauseFor(1800)
                    .callFunction(() => {
                      setSpeechBubble(!speechBubble);
                      setText(!text);
                    });
                }}
              />
            </div>
          </Delay>
        </div>
      </div>

      <div
        className="frame"
        ref={(el) => {
          mainImage = el;
        }}
      >
        <img className="main-image2-scene5" alt="me" />
      </div>
      <div>
        <img
          className="speech-bubble2-scene5"
          ref={(el) => {
            speechBubble2 = el;
          }}
          alt="speech bubble"
        />
        <div>
          <Delay wait={5700}>
            <div className="text2-scene5">
              <Typewriter
                options={{
                  delay: 50,
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
        </div>
      </div>
      <div>
        <Link to="/scene4">
          <button
            ref={(el) => {
              backScene = el;
            }}
            className={buttons ? "back-scene" : "back-scene-changed"}
          >
            Back
          </button>
        </Link>
        <Link to="/scene6">
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
