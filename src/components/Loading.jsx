import React from "react";
import BoredHand from "../images/bored-hand.gif";
import "../css/loading.css";

export const Loading = () => {
  return (
    <div className="loader-wrapper">
      <img className="loader" src={BoredHand} alt="Bored Hand Loading" />
    </div>
  );
};
