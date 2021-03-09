import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import "../css/scene8.css";

export const Scene8 = () => {
  let imageRef = useRef(null);
  let nextSceneRef = useRef(null);

  const firstSpeech = `<span class="first-speech-scene8">Yeahh!!! \n Thanks for \n helping me..!!</span>`;
  const secondSpeech = `<span class="second-speech-scene8">Luckily \n I had \n a backup...</span>`;
  const thirdSpeech = `<span class="third-speech-scene8">Anyway... \n you can keep \n browsing my web</span>`;

  const [image, setImage] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [buttons, setButtons] = useState(false);
  const [text, setText] = useState(false);

  useEffect(() => {
    TweenMax.staggerTo(imageRef, 0.9, {
      opacity: 1,
      x: -100,
      ease: Power3.easeInOut,
      delay: 0.3,
    });

    TweenMax.fromTo(
      nextSceneRef,
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
    tl.to(imageRef, 0, { x: 700 });
  }, []);

  return (
    <div className="container bg-scene8">
      <div>
        <img
          ref={(el) => {
            imageRef = el;
          }}
          className={
            image ? "toggle-main-image img-scene8-chg" : "main-image img-scene8"
          }
          alt="me"
        />
      </div>

      <div>
        <img
          className={
            image2
              ? "main-image img2-scene8"
              : "toggle-main-image img2-scene8-chg"
          }
          alt="me"
        />
      </div>

      <div>
        <img
          className={
            image3
              ? "main-image img3-scene8"
              : "toggle-main-image img3-scene8-chg"
          }
          alt="me"
        />
      </div>

      <Delay wait={1200}>
        <div
          className={text ? "toggle-text txt-scene8-chg" : "text txt-scene8"}
        >
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
                .deleteChars(42)
                .callFunction(() => {
                  setImage(!image);
                  setImage2(!image2);
                  setText(!text);
                })
                .typeString(secondSpeech)
                .pauseFor(2000)
                .deleteChars(30)
                .callFunction(() => {
                  setImage2(image2);
                  setImage3(!image3);
                })
                .typeString(thirdSpeech)
                .callFunction(() => {
                  setButtons(!buttons);
                })
                .start();
            }}
          />
        </div>
      </Delay>

      <div>
        <Link to="/about">
          <button
            ref={(el) => {
              nextSceneRef = el;
            }}
            className={buttons ? "next-scene" : "next-scene-changed"}
          >
            About Me
          </button>
        </Link>
      </div>
    </div>
  );
};
