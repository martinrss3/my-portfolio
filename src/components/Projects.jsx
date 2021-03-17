import React from "react";
import Avatar from "../images/backgrounds/img_avatar.png";
import "../css/projects.css";

export const Projects = () => {
  return (
    <div className="container projects">
      <div className="flip-card card1">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={Avatar}
              alt="Avatar"
              style={{ width: "300px", height: "200px" }}
            />
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p className="flip-card-text">Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
      <div className="flip-card card2">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={Avatar}
              alt="Avatar"
              style={{ width: "300px", height: "200px" }}
            />
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p className="flip-card-text">Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
      <div className="flip-card card3">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={Avatar}
              alt="Avatar"
              style={{ width: "300px", height: "200px" }}
            />
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p className="flip-card-text">Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
      <div className="flip-card card4">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={Avatar}
              alt="Avatar"
              style={{ width: "300px", height: "200px" }}
            />
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p className="flip-card-text">Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
      <div className="flip-card card5">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={Avatar}
              alt="Avatar"
              style={{ width: "300px", height: "200px" }}
            />
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p className="flip-card-text">Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
      <div className="flip-card card6">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={Avatar}
              alt="Avatar"
              style={{ width: "300px", height: "200px" }}
            />
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p className="flip-card-text">Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
