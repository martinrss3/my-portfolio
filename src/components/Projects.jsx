import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/projects.css";

export const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let container = document.querySelector(".portfolio");
    let tl = gsap.timeline({
      scrollTrigger: {
        pin: true,
        scrub: 1,
        trigger: container,
        end: () =>
          container.scrollWidth -
          document.documentElement.clientWidth +
          container.offsetWidth,
      },
      invalidateOnRefresh: true,
      defaults: { ease: "none", duration: 1 },
    });

    tl.to(".parallax", { x: 300 })
      .to(
        ".panel",
        {
          x: () =>
            -(container.scrollWidth - document.documentElement.clientWidth),
        },
        0
      )
      .from(
        ".secondAn",
        {
          opacity: 0,
          scale: 0.25,
          duration: 0.2,
          stagger: {
            amount: 0.8,
          },
        },
        0
      );

    gsap.from(".firstAn", {
      duration: 1,
      opacity: 0,
      scale: 0.25,
      scrollTrigger: {
        trigger: container,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <React.Fragment>
      <div className="spacer-lg">
        <h1>LARGE SPACER</h1>
        <h2>Scroll Down</h2>
      </div>

      <section className="section portfolio">
        <h2 className="portfolio_title parallax">Portfolio</h2>
        <div className="panel">
          <div className="panel_item">
            <img
              className="panel_img firstAn"
              src="https://via.placeholder.com/800x600.jpg"
              alt="item1"
            />
          </div>
        </div>

        <div className="panel">
          <div className="panel_item">
            <img
              className="panel_img firstAn"
              src="https://via.placeholder.com/800x600.jpg"
              alt="item2"
            />
          </div>
        </div>

        <div className="panel">
          <div className="panel_item">
            <img
              className="panel_img secondAn"
              src="https://via.placeholder.com/800x600.jpg"
              alt="item3"
            />
          </div>
        </div>

        <div className="panel">
          <div className="panel_item">
            <img
              className="panel_img secondAn"
              src="https://via.placeholder.com/800x600.jpg"
              alt="item4"
            />
          </div>
        </div>

        <div className="panel">
          <div className="panel_item">
            <img
              className="panel_img secondAn"
              src="https://via.placeholder.com/800x600.jpg"
              alt="item5"
            />
          </div>
        </div>

        <div className="panel">
          <div className="panel_item">
            <img
              className="panel_img secondAn"
              src="https://via.placeholder.com/800x600.jpg"
              alt="item6"
            />
          </div>
        </div>

        <div className="panel">
          <div className="panel_item">
            <img
              className="panel_img secondAn"
              src="https://via.placeholder.com/800x600.jpg"
              alt="item7"
            />
          </div>
        </div>

        <div className="panel">
          <div className="panel_item">
            <img
              className="panel_img secondAn"
              src="https://via.placeholder.com/800x600.jpg"
              alt="item8"
            />
          </div>
        </div>
      </section>

      <div className="spacer margin">
        <h1>The End</h1>
      </div>
    </React.Fragment>
  );
};
