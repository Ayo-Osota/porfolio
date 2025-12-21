import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded";
import "../styles/scroll-gallery.css";
import { projectsActive } from "../data";

gsap.registerPlugin(ScrollTrigger);

const ScrollGallery = () => {
  const wrapperRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    const images = gsap.utils.toArray("img", wrapperRef.current);
    const loader = loaderRef.current.querySelector(".loader--text");

    const updateProgress = (instance) => {
      loader.textContent = `${Math.round(
        (instance.progressedCount * 100) / images.length
      )}%`;
    };

    const showDemo = () => {
      document.body.style.overflow = "auto";
      document.scrollingElement.scrollTo(0, 0);
      gsap.to(loaderRef.current, { autoAlpha: 0 });

      gsap.utils
        .toArray("section", wrapperRef.current)
        .forEach((section, index) => {
          const w = section.querySelector(".wrapper");
          if (!w) return;

          const [x, xEnd] =
            index % 2
              ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
              : [w.scrollWidth * -1, 0];

          gsap.fromTo(
            w,
            { x },
            {
              x: xEnd,
              scrollTrigger: {
                trigger: section,
                scrub: 0.5,
              },
            }
          );
        });
    };

    if (images.length > 0) {
      imagesLoaded(images)
        .on("progress", updateProgress)
        .on("always", showDemo);
    } else {
      showDemo();
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={wrapperRef} className="demo-wrapper no-scrollbar">
      <div ref={loaderRef} className="loader df aic jcc">
        <div>
          <h1>Loading</h1>
          <h2 className="loader--text">0%</h2>
        </div>
      </div>

      <header className="df aic jcc">
        <div>
          <h1>Experience</h1>
          <h2>Featured Projects</h2>
        </div>
      </header>

      <section className="demo-text">
        <div className="wrapper text">RECENTWORKS</div>
      </section>

      {(() => {
        const projectsPerSection = 4;
        const sections = [];

        for (let i = 0; i < projectsActive.length; i += projectsPerSection) {
          sections.push(projectsActive.slice(i, i + projectsPerSection));
        }

        return sections.map((sectionProjects, sectionIndex) => (
          <section key={sectionIndex} className="demo-gallery ">
            <ul className="wrapper ">
              {sectionProjects.map((project, projectIndex) => (
                <li key={projectIndex}>
                  <a
                    href={project.projectLiveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.coverArt}
                      width="1240"
                      height="874"
                      alt={project.title || `Gallery item ${projectIndex + 1}`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ));
      })()}

      <section className="demo-text">
        <div className="wrapper text">READY2COLLABORATE?</div>
      </section>
    </div>
  );
};

export default ScrollGallery;
