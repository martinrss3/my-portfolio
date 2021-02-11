import React from "react";
import { useHistory } from "react-router-dom";
import Terminal from "terminal-in-react";
import Typewriter from "typewriter-effect";
import MainImage from "../images/me/glitch-02.gif";
import "../css/scene6.css";

export const Scene6 = () => {
  let history = useHistory();

  return (
    <div>
      {/* <Terminal
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
          popup: () => alert("Terminal in React"),
        }}
        descriptions={{
          "fix-code": "type this command to fix all!",
          // showmsg: "shows a message",
          alert: "alert",
          popup: "alert",
        }}
        commandPassThrough={(cmd) =>
          `Command "${cmd}": is not working. Type "help" for available commands.`
        }
        msg="Hello! You are here because everything blew up. This is a terminal where you can type anything freely. Use it to fix all right now! Start typing 'help'."
      />
      <img
        className="main-image-scene6"
        src={MainImage}
        style={{ position: "absolute", bottom: 0, right: "-90px" }}
        alt="me glitched"
      /> */}
    </div>
  );
};
