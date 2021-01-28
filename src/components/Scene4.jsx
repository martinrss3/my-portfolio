import React, { useEffect, useRef } from "react";
import { TweenMax } from "gsap";
import { Link } from "react-router-dom";
import Background1 from "../images/backgrounds/scene4.1-background.jpg";
import Background2 from "../images/backgrounds/scene4-background.jpg";
import "../css/scene4.css";

export const Scene4 = () => {
  let nextScene = useRef(null);
  let backScene = useRef(null);

  useEffect(() => {
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
  }, []);

  return (
    <div className="container-scene-four">
      <div>
        <img className="background1-scene-four" src={Background1} alt="background one" />
      </div>
      <div>
        <img className="background2-scene-four" src={Background2} alt="background two" />
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
        <Link to="/scene3">
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
