import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import "../css/scene8.css";

export const Scene8 = () => {
  let mainImage = useRef(null);
  let speechBubble = useRef(null);
  let nextScene = useRef(null);

  const firstSpeech = `Yeahh!!! \n Thanks for \n helping me..!!`;

  const [image, setImage] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [buttons, setButtons] = useState(false);

  useEffect(() => {
    TweenMax.staggerTo(mainImage, 0.9, {
      opacity: 1,
      x: -100,
      ease: Power3.easeInOut,
      delay: 0.3,
    });

    TweenMax.fromTo(
      [speechBubble, nextScene],
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
    <div className="container-scene8">
      <div>
        <div>
          <img
            ref={(el) => {
              mainImage = el;
            }}
            className={image ? "change-main-image-scene8" : "main-image-scene8"}
            alt="me"
          />
        </div>
      </div>
      <div>
        <div>
          <img
            className={
              image2 ? "main-image2-scene8" : "change-main-image2-scene8"
            }
            alt="me"
          />
        </div>
      </div>
      <div>
        <img
          className={
            image3 ? "main-image3-scene8" : "change-main-image3-scene8"
          }
          alt="me"
        />
      </div>
      <div
        ref={(el) => {
          speechBubble = el;
        }}
      >
        <img className="bubble-scene8" alt="speech bubble" />
      </div>
      <div>
        <Delay wait={1200}>
          <div className="text-scene8">
            <Typewriter
              options={{
                delay: 50,
                deleteSpeed: 10,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(firstSpeech)
                  .pauseFor(2000)
                  .deleteChars(42)
                  .callFunction(() => {
                    setImage(!image);
                    setImage2(!image2);
                  })
                  .typeString("Luckily \n I had \n a backup...")
                  .pauseFor(2000)
                  .deleteChars(30)
                  .callFunction(() => {
                    setImage2(image2);
                    setImage3(!image3);
                  })
                  .typeString("Anyway... \n you can keep \n browsing my web")
                  .callFunction(() => {
                    setButtons(!buttons);
                  })
                  .start();
              }}
            />
          </div>
        </Delay>
      </div>
      <div>
        <Link to="/about">
          <button
            ref={(el) => {
              nextScene = el;
            }}
            className={buttons ? "next-scene8" : "next-scene8-changed"}
          >
            About Me
          </button>
        </Link>
      </div>
    </div>
  );
};
