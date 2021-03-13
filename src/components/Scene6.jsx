import React, { useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import "../css/scene6.css";

export const Scene6 = () => {
  let imageRef = useRef(null);

  const laptopMessages = `<span class="messages-scene6">te estoy hackeando chabal \n que pasa que pasa</span>`;

  useEffect(() => {
    TweenMax.staggerTo(imageRef, 1.5, {
      opacity: 1,
      y: -600,
      ease: Power3.easeInOut,
      delay: 0.3,
    });
  }, []);

  return (
    <div className="container bg-scene6">
      <div>
        <img
          ref={(el) => {
            imageRef = el;
          }}
          className="main-image img-scene6"
          alt="me"
        />
      </div>

      <Delay wait={1500}>
        <div className="text txt-scene6">
          <Typewriter
            options={{
              delay: 50,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter.typeString(laptopMessages).start();
            }}
          />
        </div>
      </Delay>
    </div>
  );
};
