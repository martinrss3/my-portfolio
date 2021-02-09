import React, { useEffect, useRef, useState } from "react";
import { TweenMax, Power3, TimelineLite } from "gsap";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import "../css/scene5.css";

export const Scene5 = () => {
  let mainImage = useRef(null);
  let nextScene = useRef(null);
  let backScene = useRef(null);

  const firstSpeech = "this will be too easy..";
  const secondSpeech =
    "this guy \n is breaking my code... \n We must to stop him!";

  const [speechBubble, setSpeechBubble] = useState(false);
  const [text, setText] = useState(false);
  const [buttons, setButtons] = useState(false);

  useEffect(() => {
    // TweenMax.staggerTo(mainImage, 0.9, {
    //   opacity: 1,
    //   x: 0,
    //   ease: Power3.easeInOut,
    //   delay: 6,
    // });

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

    // let tl = new TimelineLite();
    // tl.to(mainImage, 0, { x: -600 });
  }, []);

  return (
    <div className="container-scene5">
      <div>
        <img className="main-image-scene5" alt="bad guy" />
      </div>
      <div>
        <Delay wait={3000}>
          <img
            className={
              speechBubble
                ? "speech-bubble-scene5-changed"
                : "speech-bubble-scene5"
            }
            alt="speech bubble"
          />
        </Delay>
        <div>
          <Delay wait={3000}>
            <div className={text ? "text-scene5-changed" : "text-scene5"}>
              <Typewriter
                options={{
                  delay: 75,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(firstSpeech)
                    .pauseFor(800)
                    .start()
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

      <Delay wait={6000}>
        <div className="frame">
          <img className="main-image2-scene5" alt="me" />
        </div>
      </Delay>
      <div>
        <Delay wait={6000}>
          <img className="speech-bubble2-scene5" alt="speech bubble" />
        </Delay>
        <div>
          <Delay wait={6000}>
            <div className="text2-scene5">
              <Typewriter
                options={{
                  delay: 75,
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
            className={buttons ? "back-scene3" : "back-scene3-changed"}
          >
            Back
          </button>
        </Link>
        <Link to="/scene6">
          <button
            ref={(el) => {
              nextScene = el;
            }}
            className={buttons ? "next-scene3" : "next-scene3-changed"}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
