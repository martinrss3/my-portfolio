import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import "../css/scene4.css";

export const Scene4 = () => {
  let mainImage1 = useRef(null);
  let mainImage2 = useRef(null);
  let nextScene = useRef(null);
  let backScene = useRef(null);

  const firstSpeech = "WTF who are you?!";
  const secondSpeech = "Just watch...";

  const [buttons, setButtons] = useState(false);

  useEffect(() => {
    TweenMax.staggerTo([mainImage1, mainImage2], 0.9, {
      opacity: 1,
      x: 0,
      ease: Power3.easeInOut,
      delay: 0.3,
    });

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
    tl.to([mainImage1], 0, { x: -700 });
    tl.to([mainImage2], 0, { x: 700 });
  }, []);

  return (
    <div className="container-scene4">
      <div>
        <img className="background1-scene4" alt="background one" />
        <div>
          <img
            ref={(el) => {
              mainImage1 = el;
            }}
            className="main-image-scene4"
            alt="me"
          />
        </div>
        <div>
          <Delay wait={2000}>
            <img className="speech-bubble1-scene4" alt="speech bubble" />
          </Delay>
          <div>
            <Delay wait={2000}>
              <div className="text-scene4">
                <Typewriter
                  options={{
                    strings: [firstSpeech],
                    autoStart: true,
                    delay: 50,
                    deleteSpeed: 10,
                    pauseFor: 100000,
                  }}
                />
              </div>
            </Delay>
          </div>
        </div>
      </div>
      <div>
        <img className="background2-scene4" alt="background two" />
        <div>
          <img
            ref={(el) => {
              mainImage2 = el;
            }}
            className="main-image2-scene4"
            alt="bad guy"
          />
        </div>
        <div>
          <Delay wait={3500}>
            <img className="speech-bubble2-scene4" alt="speech bubble" />

            <div>
              <div className="text2-scene4">
                <Typewriter
                  options={{
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
            </div>
          </Delay>
        </div>
      </div>
      <div>
        <Link to="/scene3">
          <button
            ref={(el) => {
              backScene = el;
            }}
            className={buttons ? "back-scene3" : "back-scene3-changed"}
          >
            Back
          </button>
        </Link>
        <Link to="/scene5">
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
