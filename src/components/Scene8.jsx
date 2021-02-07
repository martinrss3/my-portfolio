import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { TweenMax } from "gsap";
import "../css/scene8.css";

export const Scene8 = () => {
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
    <div className="container-scene8">
      <div>
        <img className="main-image-scene8" alt="me" />
      </div>
      <div>
        <Link to="/scene7">
          <button
            ref={(el) => {
              backScene = el;
            }}
            className="back-scene-two"
          >
            Back
          </button>
        </Link>
        <Link to="/">
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
