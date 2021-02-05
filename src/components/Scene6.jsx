import React from "react";
import { useHistory } from "react-router-dom";
import Terminal from "terminal-in-react";
import MainImage from "../images/me/glitch-02.gif";
// import SpeechBubble from "../images/speechBubbles/glitch-bubble.gif";
import "../css/scene6.css";

export const Scene6 = () => {
  let history = useHistory();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
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
          "fix-this-page": () => {
            history.push('/scene7');
          },
          showmsg: "hola",
          popup: () => alert("Terminal in React"),
        }}
        descriptions={{
          "fix-this-page": "type this command to fix the page",
          showmsg: "shows a message",
          alert: "alert",
          popup: "alert",
        }}
        msg="You can write anything here. Type help."
      />
      <img
        className="main-image-scene6"
        src={MainImage}
        style={{ position: "absolute", bottom: 0, right: "-90px" }}
        alt="me glitched"
      />
      {/* <img
        className="speech-bubble-scene6"
        src={SpeechBubble}
        alt="speech bubble"
      /> */}
    </div>
  );
};
