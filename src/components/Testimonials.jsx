import { useState } from "react";
import styled from "styled-components";
import testimonials from "../content/testimonials";
import SectionRule from "./primitives/SectionRule";

const Testimonials = ({ number = 6, label = "What clients say" }) => {
  const [active, setActive] = useState(0);
  if (!testimonials || testimonials.length === 0) return null;
  const current = testimonials[active];

  return (
    <Wrap>
      <SectionRule number={number} label={label} />
      <h2>Real words from people I've worked with.</h2>

      <blockquote>
        <p className="mark" aria-hidden="true">"</p>
        <p className="quote">{current.quote}</p>
        <footer>
          <cite>
            <span className="name">{current.name}</span>
            <span className="meta">
              {current.role}
              {current.project ? ` · ${current.project}` : ""}
            </span>
          </cite>
        </footer>
      </blockquote>

      {testimonials.length > 1 && (
        <ul className="picker" role="tablist" aria-label="Choose a testimonial">
          {testimonials.map((t, i) => (
            <li key={t.id}>
              <button
                type="button"
                role="tab"
                aria-selected={i === active}
                className={i === active ? "dot is-on" : "dot"}
                onClick={() => setActive(i)}
              >
                <span className="visually-hidden">{t.name}</span>
                <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </Wrap>
  );
};

export default Testimonials;

const Wrap = styled.section`
  margin: var(--space-16) 0;

  h2 {
    margin: 0 0 var(--space-8);
    font-family: var(--font-serif);
    font-size: clamp(var(--type-32), 4vw, var(--type-60));
    line-height: 1.1;
    color: var(--ink);
    max-width: 22ch;
  }

  blockquote {
    position: relative;
    padding: var(--space-8);
    background-color: var(--paper-soft);
    border-left: 3px solid var(--accent);
    margin: 0;
  }

  .mark {
    margin: 0;
    font-family: var(--font-serif);
    font-size: var(--type-84);
    line-height: 0.7;
    color: var(--accent);
  }

  .quote {
    margin: 1rem 0 0;
    font-family: var(--font-serif);
    font-size: clamp(var(--type-20), 2vw, var(--type-32));
    font-style: italic;
    line-height: 1.45;
    color: var(--ink);
    max-width: 60ch;
  }

  footer {
    margin-top: var(--space-6);
    padding-top: var(--space-4);
    border-top: 1px solid var(--rule);
  }

  cite {
    font-style: normal;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .name {
    font-family: var(--font-serif);
    font-size: var(--type-20);
    color: var(--ink);
  }

  .meta {
    font-family: var(--font-sans);
    font-size: var(--type-12);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ink-soft);
  }

  .picker {
    margin: var(--space-6) 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    gap: 0.5rem;
  }

  .dot {
    background: transparent;
    border: 1px solid var(--rule);
    color: var(--ink-soft);
    padding: 0.4rem 0.75rem;
    font-family: var(--font-sans);
    font-size: var(--type-12);
    font-weight: 700;
    letter-spacing: 0.14em;
    cursor: pointer;
    transition: background-color var(--motion-base) var(--easing),
      color var(--motion-base) var(--easing),
      border-color var(--motion-base) var(--easing);
  }
  .dot:hover {
    border-color: var(--ink);
  }
  .dot.is-on {
    background-color: var(--ink);
    color: var(--accent);
    border-color: var(--ink);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
