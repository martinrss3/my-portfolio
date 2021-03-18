import React, { useEffect, useRef, useState } from "react";
import { TweenLite, Power3 } from "gsap";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import "../css/cv.css";

export const CV = () => {
  let imageRef = useRef(null);

  const [mainImage, setMainImage] = useState(false);
  const [text, setText] = useState();

  const firstSpeech = `<span class="first-speech-cv">Here is \n the cv...</span>`;
  const secondSpeech = `<span class="second-speech-cv">he is a \n Junior \n Developer! xD</span>`;
  const thirdSpeech = `<span class="third-speech-cv">haha yes! \n I'm a Junior!</span>`;
  const fourthSpeech = `<span class="fourth-speech-cv">bleh...</span>`;

  useEffect(() => {
    TweenLite.to(imageRef, 1, {
      rotation: 360,
      scale: 1,
      ease: Power3.easeInOut,
      delay: 16,
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

      <div>
        <img
          className={
            mainImage
              ? "main-image img-cv-me"
              : "toggle-main-image img-cv-me-chg"
          }
          alt="me"
        />
      </div>

      <Delay wait={800}>
        <div className={text ? "toggle-text txt-cv-chg" : "text txt-cv"}>
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
                .pauseFor(2000)
                .deleteChars(35)
                .callFunction(() => {
                  setMainImage(!mainImage);
                  setText(!text);
                })
                .typeString(thirdSpeech)
                .pauseFor(2000)
                .deleteChars(40)
                .callFunction(() => {
                  setMainImage(mainImage);
                  setText(text);
                })
                .typeString(fourthSpeech)
                .start();
            }}
          />
        </div>
      </Delay>
    </div>
  );
};
