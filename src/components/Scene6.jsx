import React from "react";
import { useHistory } from "react-router-dom";
import Terminal from "terminal-in-react";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import { format } from "date-fns";
import mainImage from "../images/me/glitch-02.gif";
import "../css/scene6.css";

export const Scene6 = () => {
  let history = useHistory();

  const firstErrorMsg = `<span class="intro-txt">SYSTEM ERROR</span>`;
  const secondErrorMsg = `<span class="intro-txt">YOU HAVE BEEN HACKED</span>`;
  const thirdErrorMsg = `<span class="intro-txt error1">Initializing Dr. Fix!</span>`;

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
    info: () => alert("AgUaNNTE TaLLERES!"),
  };

  const descriptions = {
    contact: "Get contact info",
    "fix-code": "type this command when a stranger hacks your web!",
    info: "Get random phrases",
  };

  return (
    <div className="container scene6">
      <Delay wait={3000}>
        <div className="text-scene6">
          <Typewriter
            options={{
              delay: 105,
              deleteSpeed: 10,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(firstErrorMsg)
                .pauseFor(3000)
                .deleteChars(13)
                .typeString(secondErrorMsg)
                .pauseFor(3000)
                .deleteChars(22)
                .typeString(thirdErrorMsg)
                .pauseFor(3000)
                .deleteChars(23)
                .start()
                .deleteAll();
            }}
          />
        </div>
      </Delay>

      <Delay wait={21000}>
        <div className="text-terminal">
          <Terminal
            backgroundColor="#0a0a0a"
            startState="maximised"
            promptSymbol=">"
            style={{
              width: "100%",
              height: "100vh",
            }}
            allowTabs={false}
            hideTopBar
            msg={msg}
            commands={commands}
            descriptions={descriptions}
            barColor="yellow"
          />
        </div>
      </Delay>
    </div>
  );
};
