import React, { useEffect } from "react";
import gsap, { TimelineMax, Power4 } from "gsap";
import * as ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import $ from "jquery";
import CodepenImg from "../images/projects/codepen.png";
import SimpsonsImg from "../images/projects/simpsons.png";
import DrumkitImg from "../images/projects/drumkit.png";
import ChatImg from "../images/projects/chat.png";
import ImageSearchImg from "../images/projects/image-search.png";
import MoviesSearchImg from "../images/projects/movies-search.png";
import ExpenseTrackerImg from "../images/projects/expense-tracker.png";
import TravelWebImg from "../images/projects/travel-website.png";
import "../css/projectsdetails.css";

export const ProjectsDetails = () => {
  useEffect(() => {
    var controller = new ScrollMagic.Controller();

    ScrollMagicPluginGsap(ScrollMagic, gsap);

    $(".project").each(function () {
      var projectInfo = $(this).find(".project-info");
      var smallTitle = $(this).find(".small-title");
      var projectLink = $(this).find(".project-link");
      var title = $(this).find("h4");

      var animateIn = new TimelineMax();

      animateIn
        .from(
          projectInfo,
          0.5,
          {
            scaleY: 0,
            transformOrigin: "bottom left",
          },
          "-=0.5"
        )
        .from(
          smallTitle,
          0.3,
          { autoAlpha: 0, y: 30, ease: Power4.easeOut },
          "-=0.8"
        )
        .from(
          projectLink,
          0.3,
          {
            autoAlpha: 0,
            y: 30,
            ease: Power4.easeOut,
          },
          "-=0.8"
        )
        .from(
          title,
          0.3,
          {
            autoAlpha: 0,
            y: 30,
            ease: Power4.easeOut,
          },
          "-=0.8"
        );

      new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: "onEnter",
        offset: 100,
      })
        .setTween(animateIn)
        .addTo(controller);
    });
  }, []);

  return (
    <React.Fragment>
      <section className="sec">
        <div className="grid-12 project project-left">
          <div className="box">
            <img className="project-img cdpn" src={CodepenImg} alt="codepen" />
          </div>
          <div className="project-info">
            <p className="small-title">CSS // SVG // GSAP</p>
            <h4>CODEPEN</h4>
            <a
              className="project-link"
              href="https://codepen.io/martinrss3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try it!
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="grid-12 project project-left">
          <div className="box">
            <img className="project-img" src={SimpsonsImg} alt="simpsons" />
          </div>
          <div className="project-info">
            <p className="small-title">
              React // GSAP // The Simpsons Quote API
            </p>
            <h4>Simpsons Quotes Finder</h4>
            <a
              className="project-link"
              href="https://lucid-almeida-257e11.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try it!
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="grid-12 project project-left">
          <div className="box">
            <img className="project-img" src={DrumkitImg} alt="drumkit" />
          </div>
          <div className="project-info">
            <p className="small-title">JavaScript</p>
            <h4>Drumkit App</h4>
            <a
              className="project-link"
              href="https://gracious-lalande-e27e97.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try it!
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="grid-12 project project-left">
          <div className="box">
            <img className="project-img" src={ChatImg} alt="chat" />
          </div>
          <div className="project-info">
            <p className="small-title">React // Socket.io // Express</p>
            <h4>Chat App</h4>
            <a
              className="project-link"
              href="https://wonderful-minsky-570e8f.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try it!
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="grid-12 project project-left">
          <div className="box">
            <img
              className="project-img"
              src={ImageSearchImg}
              alt="img search"
            />
          </div>
          <div className="project-info">
            <p className="small-title">React // Pixabay API</p>
            <h4>Image Search App</h4>
            <a
              className="project-link"
              href="https://fervent-mcnulty-3c7f9a.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try It!
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="grid-12 project project-left">
          <div className="box">
            <img
              className="project-img"
              src={MoviesSearchImg}
              alt="movies search"
            />
          </div>
          <div className="project-info">
            <p className="small-title">React // The Movie Database API</p>
            <h4>Movies Search App</h4>
            <a
              className="project-link"
              href="https://admiring-meitner-5ca2e7.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try It!
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="grid-12 project project-left">
          <div className="box">
            <img className="project-img" src={ExpenseTrackerImg} alt="" />
          </div>
          <div className="project-info">
            <p className="small-title">React</p>
            <h4>Expense Tracker App</h4>
            <a
              className="project-link"
              href="https://vigorous-curie-c5bbb2.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try It!
            </a>
          </div>
        </div>
      </section>

      <section className="end">
        <div className="grid-12 project project-left">
          <div className="box">
            <img className="project-img" src={TravelWebImg} alt="" />
          </div>
          <div className="project-info">
            <p className="small-title">React</p>
            <h4>Travel Website</h4>
            <a
              className="project-link"
              href="https://hardcore-brahmagupta-8a26ed.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try it!
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
