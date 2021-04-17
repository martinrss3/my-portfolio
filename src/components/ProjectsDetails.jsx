import React, { useEffect } from "react";
import gsap, { TimelineMax, Power4 } from "gsap";
import * as ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import $ from "jquery";
import "../css/projectsdetails.css";

export const ProjectsDetails = () => {
  useEffect(() => {
    var controller = new ScrollMagic.Controller();

    ScrollMagicPluginGsap(ScrollMagic, gsap);

    $(".project").each(function () {
      var picOverlay = $(this).find(".overlay");
      var projectInfo = $(this).find(".project-info");
      var smallTitle = $(this).find(".small-title");
      var projectLink = $(this).find(".project-link");
      var title = $(this).find("h4");

      var animateIn = new TimelineMax();

      animateIn
        .fromTo(
          picOverlay,
          2,
          { skewX: 30, scale: 5 },
          {
            skewX: 0,
            xPercent: 100,
            transformOrigin: "0% 100%",
            ease: Power4.easeOut,
          }
        )
        .from(
          projectInfo,
          1,
          {
            scaleY: 0,
            transformOrigin: "bottom left",
          },
          "-=1.5"
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
            <img
              className="project-img"
              src="https://source.unsplash.com/71vAb1FXB6g"
              alt=""
            />
            <div className="overlay"></div>
          </div>
          <div className="project-info">
            <p className="small-title">Identity // Website // Print</p>
            <h4>This is the first project</h4>
            <a className="project-link" href="link-to-project">
              See case study
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="grid-12 project project-right">
          <div className="box">
            <img
              className="project-img"
              src="https://source.unsplash.com/71vAb1FXB6g"
              alt=""
            />
            <div className="overlay"></div>
          </div>
          <div className="project-info">
            <p className="small-title">Identity // Website // Print</p>
            <h4>This is the first project</h4>
            <a className="project-link" href="link-to-project">
              See case study
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="grid-12 project project-left">
          <div className="box">
            <img
              className="project-img"
              src="https://source.unsplash.com/71vAb1FXB6g"
              alt=""
            />
            <div className="overlay"></div>
          </div>
          <div className="project-info">
            <p className="small-title">Identity // Website // Print</p>
            <h4>This is the first project</h4>
            <a className="project-link" href="link-to-project">
              See case study
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="grid-12 project project-right">
          <div className="box">
            <img
              className="project-img"
              src="https://source.unsplash.com/71vAb1FXB6g"
              alt=""
            />
            <div className="overlay"></div>
          </div>
          <div className="project-info">
            <p className="small-title">Identity // Website // Print</p>
            <h4>This is the first project</h4>
            <a className="project-link" href="link-to-project">
              See case study
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="grid-12 project project-left">
          <div className="box">
            <img
              className="project-img"
              src="https://source.unsplash.com/71vAb1FXB6g"
              alt=""
            />
            <div className="overlay"></div>
          </div>
          <div className="project-info">
            <p className="small-title">Identity // Website // Print</p>
            <h4>This is the first project</h4>
            <a className="project-link" href="link-to-project">
              See case study
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="grid-12 project project-right">
          <div className="box">
            <img
              className="project-img"
              src="https://source.unsplash.com/71vAb1FXB6g"
              alt=""
            />
            <div className="overlay"></div>
          </div>
          <div className="project-info">
            <p className="small-title">Identity // Website // Print</p>
            <h4>This is the first project</h4>
            <a className="project-link" href="link-to-project">
              See case study
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
