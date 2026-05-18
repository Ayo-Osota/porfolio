import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import quadrant from "../content/quadrant";
import { assignBox } from "../lib/assignBox";

const Scale = ({ label, scaleLow, scaleHigh, value, onChange, idBase }) => (
  <Question>
    <p className="q">{label}</p>
    <div className="row">
      <span className="end">{scaleLow}</span>
      <div className="dots" role="radiogroup" aria-label={label}>
        {[1, 2, 3, 4, 5].map((n) => (
          <label key={n} className={value === n ? "dot is-on" : "dot"}>
            <input
              type="radio"
              name={idBase}
              value={n}
              checked={value === n}
              onChange={() => onChange(n)}
            />
            <span>{n}</span>
          </label>
        ))}
      </div>
      <span className="end">{scaleHigh}</span>
    </div>
  </Question>
);

const Result = ({ boxKey, onRetake }) => {
  const box = quadrant.boxes[boxKey];
  const ctaIsLink = box.cta.to && !box.cta.href;
  return (
    <ResultBox $box={boxKey}>
      <p className="kicker">Result</p>
      <h3>{box.name}</h3>
      <p className="summary">{box.summary}</p>
      <p className="para">{box.paragraph}</p>
      <div className="actions">
        {ctaIsLink ? (
          <Link className="cta" to={box.cta.to}>
            {box.cta.label}
          </Link>
        ) : (
          <a
            className="cta"
            href={box.cta.href}
            target={box.cta.external ? "_blank" : undefined}
            rel={box.cta.external ? "noreferrer" : undefined}
          >
            {box.cta.label}
          </a>
        )}
        <button className="retake" type="button" onClick={onRetake}>
          {quadrant.retakeLabel}
        </button>
      </div>
    </ResultBox>
  );
};

const Preview = ({ onExpand }) => (
  <PreviewGrid type="button" onClick={onExpand} aria-label="Open the Sanity Quadrant tool">
    <div className="cell box1"><span>Box 1</span><small>Early days</small></div>
    <div className="cell box2"><span>Box 2</span><small>Successful, overwhelmed</small></div>
    <div className="cell box4"><span>Box 4</span><small>Quiet, small</small></div>
    <div className="cell box3"><span>Box 3</span><small>Already there</small></div>
    <p className="prompt">Two questions. Find your box →</p>
  </PreviewGrid>
);

const SanityQuadrant = ({ surface = "standalone" }) => {
  const [expanded, setExpanded] = useState(surface === "standalone");
  const [success, setSuccess] = useState(null);
  const [sanity, setSanity] = useState(null);
  const [result, setResult] = useState(null);

  const canSubmit = success != null && sanity != null;

  const submit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setResult(assignBox(success, sanity));
  };

  const retake = () => {
    setSuccess(null);
    setSanity(null);
    setResult(null);
  };

  if (surface === "embedded" && !expanded) {
    return <Preview onExpand={() => setExpanded(true)} />;
  }

  return (
    <Wrap $surface={surface}>
      {result ? (
        <Result boxKey={result} onRetake={retake} />
      ) : (
        <form onSubmit={submit}>
          <Scale
            idBase="q-success"
            label={quadrant.axes.success.label}
            scaleLow={quadrant.axes.success.scaleLow}
            scaleHigh={quadrant.axes.success.scaleHigh}
            value={success}
            onChange={setSuccess}
          />
          <Scale
            idBase="q-sanity"
            label={quadrant.axes.sanity.label}
            scaleLow={quadrant.axes.sanity.scaleLow}
            scaleHigh={quadrant.axes.sanity.scaleHigh}
            value={sanity}
            onChange={setSanity}
          />
          <button type="submit" className="submit" disabled={!canSubmit}>
            {quadrant.submitLabel}
          </button>
        </form>
      )}
    </Wrap>
  );
};

export default SanityQuadrant;

const Wrap = styled.div`
  background-color: var(--paper);
  border: 1px solid var(--rule);
  padding: var(--space-8);
  ${(p) => p.$surface === "standalone" ? "max-width: 720px;" : ""}

  form {
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
  }

  .submit {
    align-self: flex-start;
    background-color: var(--accent);
    color: var(--ink);
    border: 1px solid var(--ink);
    padding: 0.75rem 1.25rem;
    font-family: var(--font-sans);
    font-weight: 700;
    cursor: pointer;
    transition: background-color var(--motion-base) var(--easing),
      color var(--motion-base) var(--easing);
  }
  .submit:hover:not(:disabled) {
    background-color: var(--ink);
    color: var(--accent);
  }
  .submit:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .q {
    margin: 0;
    font-family: var(--font-serif);
    font-size: var(--type-20);
    color: var(--ink);
  }

  .row {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 1rem;
    align-items: center;
  }
  .end {
    font-family: var(--font-sans);
    font-size: var(--type-12);
    color: var(--ink-soft);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .dots {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  }
  .dot {
    flex: 1;
    border: 1px solid var(--rule);
    text-align: center;
    padding: 0.6rem 0;
    cursor: pointer;
    font-family: var(--font-sans);
    font-weight: 600;
    transition: background-color var(--motion-base) var(--easing),
      color var(--motion-base) var(--easing);
  }
  .dot input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  .dot:hover {
    background-color: var(--paper-soft);
  }
  .dot.is-on {
    background-color: var(--ink);
    color: var(--accent);
    border-color: var(--ink);
  }

  @media (max-width: 640px) {
    .row {
      grid-template-columns: 1fr;
    }
    .end {
      text-align: left;
    }
  }
`;

const ResultBox = styled.div`
  .kicker {
    margin: 0;
    font-family: var(--font-sans);
    font-size: var(--type-12);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--ink-soft);
  }
  h3 {
    margin: 0.25rem 0 0.5rem;
    font-family: var(--font-serif);
    font-size: var(--type-32);
  }
  .summary {
    margin: 0 0 1.25rem;
    font-family: var(--font-sans);
    color: var(--ink-soft);
  }
  .para {
    margin: 0 0 1.5rem;
    font-family: var(--font-sans);
    font-size: var(--type-16);
    line-height: 1.6;
    max-width: 60ch;
  }
  .actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .cta {
    background-color: var(--accent);
    color: var(--ink);
    border: 1px solid var(--ink);
    padding: 0.75rem 1.25rem;
    font-family: var(--font-sans);
    font-weight: 700;
    text-decoration: none;
  }
  .cta:hover {
    background-color: var(--ink);
    color: var(--accent);
  }
  .retake {
    background: transparent;
    border: 1px solid var(--rule);
    color: var(--ink);
    padding: 0.75rem 1.25rem;
    font-family: var(--font-sans);
    cursor: pointer;
  }
  .retake:hover {
    border-color: var(--ink);
  }
`;

const PreviewGrid = styled.button`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background-color: var(--rule);
  border: 1px solid var(--rule);
  padding: 0;
  width: 100%;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
  position: relative;
  transition: border-color var(--motion-base) var(--easing);

  &:hover {
    border-color: var(--ink);
  }

  .cell {
    background-color: var(--paper);
    padding: var(--space-6);
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .cell span {
    font-family: var(--font-serif);
    font-size: var(--type-20);
    color: var(--ink);
  }
  .cell small {
    font-family: var(--font-sans);
    font-size: var(--type-12);
    color: var(--ink-soft);
    letter-spacing: 0.06em;
  }
  .cell.box2 {
    background-color: var(--accent);
  }
  .cell.box2 small {
    color: var(--ink);
  }

  .prompt {
    grid-column: 1 / -1;
    background-color: var(--paper);
    margin: 0;
    padding: var(--space-4) var(--space-6);
    font-family: var(--font-sans);
    font-size: var(--type-14);
    font-weight: 600;
    color: var(--ink);
    border-top: 1px solid var(--rule);
  }
`;
