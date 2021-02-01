import React from "react";
import Terminal from "terminal-in-react";

export const Scene6 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Terminal
        color="green"
        backgroundColor="black"
        barColor="black"
        style={{ fontWeight: "bold", fontSize: "1em" }}
        commands={{
          "fix-this-page": () => "/scene7",
          // showmsg: "hola",
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
    </div>
  );
};
