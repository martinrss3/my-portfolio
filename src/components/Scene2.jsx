import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import ReactHowler from "react-howler";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import BreakBooty from "../audio/break-booty.mp3";
import "../css/scene2.css";

export const Scene2 = () => {
  let imageRef = useRef(null);
  let nextScene = useRef(null);
  let backScene = useRef(null);

  const firstSpeech = "I love \n coding \n and make music";
  const secondSpeech = "You can contact me \n in the menu section";
  const thirdSpeech = "Hey you! \n You will never \n get the job...";
  const fourthSpeech = "\n What..?";

  const [mainImage, setMainImage] = useState(false);
  const [image2, setImage2] = useState(false);
  const [text, setText] = useState(false);
  const [buttons, setButtons] = useState(false);

  useEffect(() => {
    TweenMax.staggerTo(imageRef, 0.9, {
      opacity: 1,
      x: -100,
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
    tl.to(imageRef, 0, { x: 700 });
  }, []);

  return (
    <div className="container bg-scene2">
      <ReactHowler src={BreakBooty} playing={false} loop={true} />

      <div>
        <img
          ref={(el) => {
            imageRef = el;
          }}
          className={
            mainImage
              ? "toggle-main-image img-scene2-chg"
              : "main-image img-scene2"
          }
          alt="me"
        />
      </div>

      <div>
        <img
          className={image2 ? "image2-scene2" : "change-image2-scene2"}
          alt="bad guy"
        />
      </div>

      <Delay wait={1200}>
        <div
          className={text ? "toggle-text txt-scene2-chg" : "text txt-scene2"}
        >
          <Typewriter
            options={{
              strings: [firstSpeech, secondSpeech],
              autoStart: true,
              delay: 50,
              deleteSpeed: 10,
              pauseFor: 2000,
            }}
            onInit={(typewriter) => {
              typewriter
                .callFunction(() => {
                  setImage2(!image2);
                  setText(!text);
                })
                .typeString(thirdSpeech)
                .pauseFor(2500)
                .callFunction(() => {
                  setMainImage(!mainImage);
                })
                .deleteChars(45)
                .callFunction(() => {
                  setImage2(image2);
                  setText(text);
                })
                .typeString(fourthSpeech)
                .callFunction(() => {
                  setButtons(!buttons);
                });
            }}
          />
        </div>
      </Delay>

      <div>
        <Link to="/">
          <button
            ref={(el) => {
              backScene = el;
            }}
            className={buttons ? "back-scene" : "back-scene-changed"}
          >
            Back
          </button>
        </Link>
        <Link to="/scene3">
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
