import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import Delay from "react-delay";
import SpeechBubble from "../images/speechBubbles/speech-bubble1.png";
import HandClick from "../images/hand-click.gif";
import "../css/scene3.css";

export const Scene3 = () => {
  let mainImage = useRef(null);
  let speechBubble = useRef(null);
  let nextScene = useRef(null);
  let backScene = useRef(null);

  const [showHandClick, setShowHandClick] = useState(false);
  const [changeBackground, setChangeBackground] = useState(false);
  const [changeMainImage, setChangeMainImage] = useState(false);
  const [changeText, setChangeText] = useState(false);

  useEffect(() => {
    TweenMax.staggerTo(mainImage, 0.9, {
      opacity: 1,
      x: -100,
      ease: Power3.easeInOut,
      delay: 0.3,
    });

    TweenMax.fromTo(
      [speechBubble, nextScene, backScene],
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
    <div className="container-scene-three">
      <div
        className={
          changeBackground
            ? "background-scene-three-changed"
            : "background-scene-three"
        }
      >
        <img
          ref={(el) => {
            mainImage = el;
          }}
          className={
            changeMainImage
              ? "main-image-scene-three-changed"
              : "main-image-scene-three"
          }
          alt="me"
        />
        <div
          ref={(el) => {
            speechBubble = el;
          }}
        >
          <img
            className="speech-bubble-scene-three"
            onClick={() => {
              setChangeText(!changeText);
              setShowHandClick(!showHandClick);
              setChangeMainImage(!changeMainImage);
              setChangeBackground(!changeBackground);
            }}
            src={SpeechBubble}
            alt="speech bubble"
          />
          <p
            className={
              changeText ? "typed-scene-three-changed" : "typed-scene-three"
            }
            onClick={() => {
              setChangeText(!changeText);
              setShowHandClick(!showHandClick);
              setChangeMainImage(!changeMainImage);
              setChangeBackground(!changeBackground);
            }}
          ></p>
        </div>
        <div>
          <Delay wait={2500}>
            <img
              className={
                showHandClick
                  ? "hand-click-scene-three-hide"
                  : "hand-click-scene-three"
              }
              src={HandClick}
              onClick={() => {
                setChangeText(!changeText);
                setShowHandClick(!showHandClick);
                setChangeMainImage(!changeMainImage);
                setChangeBackground(!changeBackground);
              }}
              alt="hand click"
            />
          </Delay>
        </div>
        <div>
          <Link to="/scene2">
            <button
              ref={(el) => {
                backScene = el;
              }}
              className="back-scene-three"
            >
              Back
            </button>
          </Link>
          <Link to="/scene4">
            <button
              ref={(el) => {
                nextScene = el;
              }}
              className="next-scene-three"
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
