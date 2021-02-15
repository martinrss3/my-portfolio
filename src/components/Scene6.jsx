import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Terminal from "terminal-in-react";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import "../css/scene6.css";

export const Scene6 = () => {
  let history = useHistory();

  const firstSpeech = `Please type "help"`;
  const secondSpeech = "Search for \n a command \n to fix this mess";

  const [mainImage, setMainImage] = useState(false);
  const [speechBubbles, setSpeechBubbles] = useState(false);
  const [text, setText] = useState(false);

  return (
    <div className="container-scene6">
      <Delay wait={2000}>
        <div className="typewriter-container">
          <Typewriter
            options={{
              delay: 100,
              cursor: "_",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  '<span style="color: green; font-weight: bold; font-size: 1em;">SYSTEM ERROR</span>'
                )
                .pauseFor(3000)
                .deleteChars(15)
                .changeDeleteSpeed(2)
                .typeString(
                  '<span style="color: green; font-weight: bold; font-size: 1em;">Opening Terminal...</span>'
                )
                .pauseFor(2000)
                .deleteChars(20)
                .changeDeleteSpeed(2)
                .start();
            }}
          />
        </div>
      </Delay>
      <Delay wait={15000}>
        <Terminal
          color="green"
          backgroundColor="black"
          barColor="black"
          style={{
            fontWeight: "bold",
            fontSize: "1em",
            position: "fixed",
            width: "100%",
            height: "60%",
            top: "10%",
          }}
          commands={{
            "fix-code": () => {
              history.push("/scene7");
            },
            // showmsg: "hola",
            info: () =>
              alert(
                "Talleres de Córdoba is the best soccer team in the world!"
              ),
          }}
          descriptions={{
            "fix-code": "type this command to fix all!",
            // showmsg: "shows a message",
            alert: "alert",
            info: "alert",
          }}
          commandPassThrough={(cmd) =>
            `Command "${cmd}": is not working. Type "help" for available commands.`
          }
          msg="Hello! You are here because everything blew up. This is a terminal where you can type anything freely. Use it to fix all right now! Start typing 'help'."
        />
      </Delay>
      <Delay wait={17000}>
        <div>
          <img
            className={
              mainImage ? "main-image-scene6-changed" : "main-image-scene6"
            }
            alt="glitched me"
          />
          <div>
            {/* <img
              className={
                speechBubbles
                  ? "speech-bubble-scene6-changed"
                  : "speech-bubble-scene6"
              }
              alt="speech bubble"
            /> */}
            <div className={text ? "typed-scene6-changed" : "typed-scene6"}>
              <Typewriter
                options={{
                  strings: [firstSpeech],
                  autoStart: true,
                  delay: 100,
                  pauseFor: 1000,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .callFunction(() => {
                      setMainImage(!mainImage);
                      setSpeechBubbles(!speechBubbles);
                      setText(!text);
                    })
                    .typeString(secondSpeech);
                }}
              />
            </div>
          </div>
        </div>
      </Delay>
    </div>
  );
};
