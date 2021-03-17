import React, { useEffect, useRef } from "react";
import { TweenLite, Power2 } from "gsap";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import "../css/cv.css";

export const CV = () => {
  let imageRef = useRef(null);

  const firstSpeech = `<span class="first-speech-cv">Here is \n the cv...</span>`;
  const secondSpeech = `<span class="second-speech-cv">of a \n Junior \n Developer! xD</span>`;

  useEffect(() => {
    TweenLite.to(imageRef, 1, {
      rotation: 720,
      scale: 1,
      ease: Power2.easeInOut,
      delay: 8,
      top: "5vh",
      left: "20vw",
      height: "90vh",
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

      <Delay wait={1200}>
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
                .pauseFor(2000)
                .deleteChars(20)
                .typeString(secondSpeech)
                .start();
            }}
          />
        </div>
      </Delay>
    </div>
  );
};
