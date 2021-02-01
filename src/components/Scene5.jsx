import React, { useEffect, useRef } from "react";
import { TweenMax, Power3, TimelineLite } from "gsap";
import { Link } from "react-router-dom";
import MainImage from "../images/badGuy/08.png";
import MainImage2 from "../images/me/26.png";
import SpeechBubble from "../images/speechBubbles/speech-bubble4.png";
import "../css/scene5.css";

export const Scene5 = () => {
  let mainImage2 = useRef(null);
  let nextScene = useRef(null);
  let backScene = useRef(null);

  const speech = "this guy \n is breaking my code... \n We must to stop him!";

  useEffect(() => {
    TweenMax.staggerTo(mainImage2, 0.9, {
      opacity: 1,
      x: 0,
      ease: Power3.easeInOut,
      delay: 3,
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
    tl.to(mainImage2, 0, { x: -600 });
  }, []);

  return (
    <div className="container-scene5">
      <div>
        <img className="main-image-scene5" src={MainImage} alt="bad guy" />
      </div>
      <div>
        <img
          src={SpeechBubble}
          className="speech-bubble-scene5"
          alt="speech bubble"
        />
        <p className="typed-scene5">{speech}</p>
      </div>
      <div
        ref={(el) => {
          mainImage2 = el;
        }}
        className="frame"
      >
        <img className="main-image2-scene5" src={MainImage2} alt="me" />
      </div>
      <div>
        <Link to="/scene4">
          <button
            ref={(el) => {
              backScene = el;
            }}
            className="back-scene-two"
          >
            Back
          </button>
        </Link>
        <Link to="/scene6">
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
