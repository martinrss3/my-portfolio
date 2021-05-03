import React, { useEffect } from "react";
import "../css/scrolldown.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ScrollDown = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(".scrolldown", {
      scrollTrigger: {
        scrub: true,
      },
      opacity: 0,
    });
  }, []);

  return (
    <div className="scrolldown-wrapper">
      <div className="scrolldown">
        <svg height="30" width="10">
          <circle className="scrolldown-p1" cx="5" cy="15" r="2" />
          <circle className="scrolldown-p2" cx="5" cy="15" r="2" />
        </svg>
      </div>
    </div>
  );
};
