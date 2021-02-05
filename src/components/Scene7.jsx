import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { TweenMax } from "gsap";
// import Typewriter from "typewriter-effect";
import MainImage from "../images/badGuy/26.png";
import "../css/scene7.css";

export const Scene7 = () => {
  let nextScene = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(
      nextScene,
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
    <div>
      <div>
        <img className="main-img-scene7" src={MainImage} alt="bad guy" />
      </div>
      <div>
        <Link to="/scene8">
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
