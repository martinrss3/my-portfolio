import React from "react";
import Typewriter from "typewriter-effect";
import MainImage from "../images/badGuy/26.png";
import "../css/scene7.css";

export const Scene7 = () => {
  return (
    <div>
      <img className="main-img-scene7" src={MainImage} alt="bad guy" />
      {/* <Typed className="typed-scene7" typeSpeed={40} strings={typed}></Typed> */}
      {/* <div className="typing-slider">
        <p>{typed}</p>
      </div> */}
      {/* <Typewriter string={typed} delay={50} cursor="|" /> */}
      <div className="typed-scene7">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Que bueno Bruno!")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Que te guste el sanguche")
              .start();
          }}
        />
      </div>
    </div>
  );
};
