import React, { useEffect, useRef } from "react";
import { TweenMax, Power3, TimelineLite } from "gsap";
import { Link } from "react-router-dom";
import Background1 from "../images/backgrounds/scene4-background.jpg";
import Background2 from "../images/backgrounds/scene4.1-background.jpg";
import MainImage from "../images/me/05.png";
import MainImage2 from "../images/badGuy/12.png";
import SpeechBubble from "../images/speechBubbles/speech-bubble4.png";
import SpeechBubble2 from "../images/speechBubbles/speech-bubble1.png";
import "../css/scene4.css";

export const Scene4 = () => {
  let mainImage = useRef(null);
  let nextScene = useRef(null);
  let backScene = useRef(null);

  const firstSpeech = "WOW! \n who are you..? \n I need my CV";
  const secondSpeech = "bla bla bla";

  useEffect(() => {
    TweenMax.staggerTo(mainImage, 0.9, {
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
    tl.to(mainImage, 0, { x: 700 });
  }, []);

  return (
    <div className="container-scene-four">
      <div>
        <img
          className="background1-scene-four"
          src={Background1}
          alt="background one"
        />
        <div>
          <img
            className="main-image2-scene-four"
            src={MainImage2}
            alt="bad guy"
          />
        </div>
        <div>
          <img
            src={SpeechBubble2}
            className="speech-bubble2-scene-four"
            alt="speech bubble"
          />
          <p className="typed2-scene-four">{secondSpeech}</p>
        </div>
      </div>
      <div>
        <img
          className="background2-scene-four"
          src={Background2}
          alt="background two"
        />
        <div>
          <img
            ref={(el) => {
              mainImage = el;
            }}
            className="main-image-scene-four"
            src={MainImage}
            alt="me"
          />
        </div>
        <div>
          <img
            src={SpeechBubble}
            className="speech-bubble1-scene-four"
            alt="speech bubble"
          />
          <p className="typed-scene-four">{firstSpeech}</p>
        </div>
      </div>
      <div>
        <Link to="/scene3">
          <button
            ref={(el) => {
              backScene = el;
            }}
            className="back-scene-two"
          >
            Back
          </button>
        </Link>
        <Link to="/scene5">
          <button
            ref={(el) => {
              nextScene = el;
            }}
            className="next-scene-two"
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
