import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../word-cycle.css";

gsap.registerPlugin(ScrollTrigger);

const words = [
  "code.",
  "build.",
  "design.",
  "debug.",
  "optimize.",
  "test.",
  "fix.",
  "launch.",
  "scale.",
];

const WordCycle = () => {
  const listRef = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(listRef.current.children);

    gsap.set(items, { opacity: (i) => (i !== 0 ? 0.2 : 1) });

    const dimmer = gsap
      .timeline()
      .to(items.slice(1), { opacity: 1, stagger: 0.5 })
      .to(items.slice(0, items.length - 1), { opacity: 0.2, stagger: 0.5 }, 0);

    ScrollTrigger.create({
      trigger: items[0],
      endTrigger: items[items.length - 1],
      start: "top center",
      end: "bottom center",
      animation: dimmer,
      scrub: 0.2,
    });

    const scroller = gsap
      .timeline()
      .fromTo(
        document.documentElement,
        { "--hue": 0 },
        { "--hue": 240, ease: "none" }
      );

    ScrollTrigger.create({
      trigger: items[0],
      endTrigger: items[items.length - 1],
      start: "top center",
      end: "bottom center",
      animation: scroller,
      scrub: 0.2,
    });
  }, []);

  return (
    <section className="container section-mt word-cycle fluid">
      <h2>
        <span aria-hidden="true">i&nbsp;</span>
      </h2>
      <ul ref={listRef}>
        {words.map((word, index) => (
          <li style={{ "--i": index }} key={index}>
            {word}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WordCycle;
