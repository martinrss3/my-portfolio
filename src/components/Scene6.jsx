import React from "react";
import { useHistory } from "react-router-dom";
import Terminal from "terminal-in-react";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import styled from "styled-components";
import { format } from "date-fns";
import "../css/scene6.css";

import mainImage from "../images/me/glitch-02.gif";

export const Scene6 = () => {
  let history = useHistory();

  const Container = styled.div`
    div,
    pre {
      width: -webkit-max-content;
      width: -moz-max-content;
      font-size: 20px;
      line-height: 20px;
      color: green;
      font-family: monospace !important;
      text-shadow: 0px 0px 1px rgba(0, 255, 0, 0.9),
        -2px 0px 2px rgba(255, 0, 0, 1), 2px 0px 2px rgba(0, 0, 255, 1);
      animation: holahola 0.1s ease 3;
      -webkit-animation: holahola 0.1s ease 3;
    }

    @-webkit-keyframes holahola {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes holahola {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    input,
    input:focus {
      margin: 0px 0px 0px 12px;
      font-size: 20px;
      line-height: 20px;
      outline: none;
      color: green;
      font-family: monospace !important;
      text-shadow: 0px 0px 1px rgba(0, 255, 0, 0.9),
        -2px 0px 2px rgba(255, 0, 0, 0.5), 2px 0px 2px rgba(0, 0, 255, 0.8);
    }
  `;

  const msg = `
=========================================
=       ===============        ==========
=  ====  ==============  ================
=  ====  =  =   =======  =======  =  =  =
=  ====  =    =  ======      ======  =  =
=  ====  =  ===========  =======  ==   ==
=  ====  =  =====  ====  =======  =  =  =
=       ==  =====  ====  =======  =  =  =
=========================================


It is ${format(new Date(), "MMMM dd, yyyy")}

Logged in user: martin

Hello! I am Dr. Fix! 
Fix is my name, Fix is what I do best!

You can always type 'help' to get started.

`;

  const commands = {
    contact: (e) => (
      <React.Fragment>
        <br />
        Martín Russo
        <br />
        +54 351 7642827
        <br />
        martinrusso1@gmail.com
        <br />
        Córdoba Capital, Argentina
        <br />
        <br />
        <br />
        <div style={{ background: "green", display: "inline-flex" }}>
          <img
            src={mainImage}
            style={{
              width: "150px",
              height: "auto",
              mixBlendMode: "multiply",
              imageRendering: "pixelated",
              filter: "blur(0.5px)",
            }}
            alt="ve vo"
          />
        </div>
      </React.Fragment>
    ),
    "fix-code": () => {
      history.push("/scene7");
    },
    info: () =>
      alert("Talleres de Córdoba is the best soccer team in the world!"),
  };

  const descriptions = {
    contact: "Get contact info",
    "fix-code": "type this command when a stranger hacks your web!",
    info: "Get random phrases",
  };

  return (
    <div className="container-scene6">
      <Delay wait={3000}>
        <div className="typewriter-container">
          <Typewriter
            options={{
              delay: 50,
              deleteSpeed: 10,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  '<span style="color: green; font-weight: bold; font-size: 1em;">SYSTEM ERROR</span>'
                )
                .pauseFor(3000)
                .deleteChars(13)
                .typeString(
                  '<span style="color: green; font-weight: bold; font-size: 1em;">YOU HAVE BEEN HACKED</span>'
                )
                .pauseFor(3000)
                .deleteChars(22)
                .typeString(
                  '<span style="color: green; font-weight: bold; font-size: 1em;">Opening Terminal...</span>'
                )
                .pauseFor(2000)
                .deleteChars(20)
                .typeString(
                  '<span style="color: green; font-weight: bold; font-size: 1em;">Initializing Dr. Fix!</span>'
                )
                .pauseFor(2000)
                .deleteChars(23)
                .start()
                .deleteAll();
            }}
          />
        </div>
      </Delay>
      <Delay wait={21000}>
        <div className="terminal-style">
          <Container>
            <Terminal
              backgroundColor="#0a0a0a"
              startState="maximised"
              promptSymbol=">"
              style={{
                width: "100vw",
                height: "100vh",
              }}
              allowTabs={false}
              hideTopBar
              msg={msg}
              commands={commands}
              descriptions={descriptions}
            />
          </Container>
        </div>
      </Delay>
    </div>
  );
};
