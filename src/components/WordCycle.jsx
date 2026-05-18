import { useEffect, useState } from "react";
import styled from "styled-components";
import home from "../content/home";

const CYCLE_MS = 1800;
const RESOLVE_PAUSE_MS = 1500;

const WordCycle = () => {
  const { prefix, words, resolution } = home.hero.wordCycle;
  const [index, setIndex] = useState(0);
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    let timer;
    if (resolved) {
      timer = setTimeout(() => {
        setResolved(false);
        setIndex(0);
      }, RESOLVE_PAUSE_MS);
    } else {
      timer = setTimeout(() => {
        if (index >= words.length - 1) {
          setResolved(true);
        } else {
          setIndex((i) => i + 1);
        }
      }, CYCLE_MS);
    }
    return () => clearTimeout(timer);
  }, [index, resolved, words.length]);

  return (
    <Cycle aria-live="polite">
      <span className="prefix">{prefix}&nbsp;</span>
      <span className={resolved ? "word resolved" : "word"}>
        {resolved ? resolution : words[index]}
      </span>
      <span className="dot">.</span>
    </Cycle>
  );
};

export default WordCycle;

const Cycle = styled.p`
  margin: 1.5rem 0 0;
  font-family: var(--font-serif);
  font-size: clamp(var(--type-20), 2.5vw, var(--type-32));
  line-height: 1.2;
  color: var(--ink);

  .prefix {
    color: var(--ink-soft);
  }
  .word {
    color: var(--ink);
    font-style: italic;
    transition: color var(--motion-base) var(--easing);
  }
  .word.resolved {
    color: var(--ink);
    font-style: normal;
    background-color: var(--accent);
    padding: 0 0.25rem;
  }
  .dot {
    color: var(--ink);
  }
`;
