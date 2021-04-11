import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TimelineLite, Back } from "gsap";
import "../css/projects.css";
import bg from "../images/backgrounds/bg-scene7.jpg";
import moon from "../images/parallax/moon.png";
import cloud1 from "../images/parallax/cloud1.png";
import cloud2 from "../images/parallax/cloud2.png";
import star from "../images/parallax/star.png";
import guy from "../images/badGuy/25.png";
import grass from "../images/parallax/grass.png";

export const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to("#moon", {
      scrollTrigger: {
        scrub: true,
      },
      x: 1000,
      y: 300,
      scale: 2,
    });

    gsap.to("#cloud1", {
      scrollTrigger: {
        scrub: true,
      },
      x: -400,
    });

    gsap.to("#cloud2", {
      scrollTrigger: {
        scrub: true,
      },
      x: 300,
    });

    gsap.to("#star", {
      scrollTrigger: {
        scrub: true,
      },
      x: -3500,
      y: 3000,
      scale: 0,
    });

    gsap.to("#guy", {
      scrollTrigger: {
        scrub: true,
      },
      x: 0,
      y: -1300,
      scale: 1,
    });

    gsap.to("#grass", {
      scrollTrigger: {
        scrub: true,
      },
      y: 0,
      scale: 1.2,
    });

    var slides = document.querySelectorAll(".slide"),
      tl = new TimelineLite({ paused: true });
    for (var i = 0; i < slides.length; i++) {
      var D = document.createElement("div");
      D.className = "Dot";
      D.id = "Dot" + i;
      D.addEventListener("click", function () {
        tl.seek(this.id).pause();
      });
      document.getElementById("Dots").appendChild(D);
      if (i !== 0) {
        tl.addPause("Dot" + i);
      }
      if (i !== slides.length - 1) {
        tl.to(slides[i], 0.5, { scale: 0.8, ease: Back.easeOut })
          .to(slides[i], 0.7, { xPercent: -100, rotationY: 80 }, "L" + i)
          .from(slides[i + 1], 0.7, { xPercent: 100, rotationY: -80 }, "L" + i)
          .to(
            "#Dot" + i,
            0.7,
            { backgroundColor: "rgba(255,255,255,0.2)" },
            "L" + i
          )
          .from(slides[i + 1], 0.5, { scale: 0.8, ease: Back.easeIn });
      }
    }
    function GO(e) {
      var SD = isNaN(e) ? e.wheelDelta || -e.detail : e;
      if (SD < 0) {
        tl.play();
      } else {
        tl.reverse();
      }
    }

    document.addEventListener("mousewheel", GO);
    document.addEventListener("DOMMouseScroll", GO);
    document.getElementById("nextBtn").addEventListener("click", function () {
      GO(-1);
    });
    document.getElementById("prevtBtn").addEventListener("click", function () {
      GO(1);
    });
  }, []);

  return (
    <div className="wrapper">
      <section className="about-header">
        <img src={bg} id="bg" alt="bg" />
        <img src={moon} id="moon" alt="moon" />
        <img src={cloud1} id="cloud1" alt="cloud" />
        <img src={cloud2} id="cloud2" alt="cloud" />
        <img src={star} id="star" alt="star" />
        <img src={guy} id="guy" alt="guy" />
        <img src={grass} id="grass" alt="grass" />
      </section>

      <section>
        <h2>MY PROJECTS</h2>
      </section>

      <section className="project-container">
        <div className="box slide">
          <span>Full Screen Slider (linear) #1</span>
        </div>
        <div className="box slide">
          <span>GSAP Timeline</span>
        </div>
        <div className="box slide">
          <span>Responsive</span>
        </div>
        <div className="box slide">
          <span>Super Simple</span>
        </div>
        <div className="box slide">
          <span>What else you want ! ;)</span>
        </div>
        <div id="navig">
          <div id="prevtBtn" class="fa fa-chevron-circle-left"></div>
          <div id="nextBtn" class="fa fa-chevron-circle-right"></div>
        </div>
        <div id="Dots"></div>
      </section>
    </div>
  );
};
