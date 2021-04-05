import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/projects.css";

export const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sections = gsap.utils.toArray("section");
    const lastIndex = sections.length - 1;

    sections.forEach((section, i) => {
      section._bg = section.querySelector(".bg-project");
      section._h1 = section.querySelector("h1");

      // Give the backgrounds some random images
      section._bg.style.backgroundImage = `url(https://picsum.photos/${
        window.innerWidth
      }/${window.innerHeight * 2}?random=${i})`;

      // Create a standalone ST instance, and use the progress value (0 - 1) to tween the timeline's progress
      ScrollTrigger.create({
        trigger: section,
        start: () => (i === 0 ? "top top" : "top bottom"), // The FIRST section will use a different start value than the rest
        end: () => (i === lastIndex ? "top top" : "bottom top"), // The LAST section will use a different start value than the rest
        onRefresh: (self) => {
          // onRefresh (so it gets reset upon resize), create a timeline that moves the h1 + bg vertically
          section._tl = gsap
            .timeline({
              paused: true,
              defaults: { ease: "none", overwrite: "auto" },
            })
            .fromTo(
              section._h1,
              { y: () => (i === 0 ? 0 : (window.innerHeight / 2) * 1.5) },
              {
                y: () =>
                  i === lastIndex ? 0 : (-window.innerHeight / 2) * 1.5,
              },
              0
            )
            .fromTo(
              section._bg,
              { y: () => (i === 0 ? -window.innerHeight / 2 : 0) },
              {
                y: () =>
                  i === lastIndex
                    ? -window.innerHeight / 2
                    : -window.innerHeight,
              },
              0
            )
            .progress(self.progress); //use progress to position the timeline correctly
        },
        onUpdate: (self) => {
          gsap.to(section._tl, { duration: 0.75, progress: self.progress });
        },
      });
    });
  }, []);

  return (
    <React.Fragment>
      <section className="project-item">
        <div className="bg-project"></div>
        <h1 className="project-text">Drumkit App</h1>
      </section>
      <section className="project-item">
        <div className="bg-project"></div>
        <h1 className="project-text">Chat App</h1>
      </section>
      <section className="project-item">
        <div className="bg-project"></div>
        <h1 className="project-text">Expense Tracker App</h1>
      </section>
      <section className="project-item">
        <div className="bg-project"></div>
        <h1 className="project-text">Movie Search App</h1>
      </section>
      <section className="project-item">
        <div className="bg-project"></div>
        <h1 className="project-text">Image Search App</h1>
      </section>
    </React.Fragment>
  );
};
