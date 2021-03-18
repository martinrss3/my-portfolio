import React, { useEffect, useRef } from "react";
import { TweenLite, Power3 } from "gsap";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import "../css/cv.css";

export const CV = () => {
  let imageRef = useRef(null);

  const firstSpeech = `<span class="first-speech-cv">Here is \n the cv...</span>`;

  useEffect(() => {
    TweenLite.to(imageRef, 3, {
      rotation: 720,
      scale: 1,
      ease: Power3.easeOut,
      delay: 3,
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: "auto",
    });
  }, []);

  return (
    <div className="container bg-cv">
      <div>
        <img className="main-image img-cv-guy" alt="the guy" />
      </div>

      <div>
        <img
          ref={(el) => {
            imageRef = el;
          }}
          className="cv"
          alt="cv"
        />
      </div>

      <Delay wait={800}>
        <div className="text txt-cv">
          <Typewriter
            options={{
              delay: 50,
              deleteSpeed: 10,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(firstSpeech)

                .start();
            }}
          />
        </div>
      </Delay>
    </div>
  );
};
