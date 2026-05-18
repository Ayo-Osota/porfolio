import styled from "styled-components";

// Renders a list of phases. `compact` shows num + name + weeks + line.
// `full` shows num + name + weeks + a deliverables bullet list.
// Both variants share the same two-column layout for consistency.

const PhaseList = ({ phases, variant = "compact" }) => (
  <List>
    {phases.map((p) => (
      <li key={p.num}>
        <div className="rail">
          <span className="num">{p.num}</span>
          <span className="weeks">{p.weeks}</span>
        </div>
        <div className="body">
          <h4>{p.name}</h4>
          {variant === "compact" && p.line && <p className="line">{p.line}</p>}
          {variant === "full" && p.deliverables && (
            <ul className="bullets">
              {p.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          )}
        </div>
      </li>
    ))}
  </List>
);

export default PhaseList;

const List = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid var(--rule);

  > li {
    display: grid;
    grid-template-columns: 7rem 1fr;
    gap: var(--space-8);
    padding: var(--space-12) 0;
    border-bottom: 1px solid var(--rule);
    align-items: baseline;
  }

  .rail {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .num {
    font-family: var(--font-serif);
    font-size: clamp(var(--type-44), 5vw, var(--type-60));
    line-height: 0.9;
    color: var(--ink);
    letter-spacing: -0.02em;
  }

  .weeks {
    font-family: var(--font-sans);
    font-size: var(--type-12);
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--ink-soft);
  }

  .body h4 {
    margin: 0 0 0.75rem;
    font-family: var(--font-serif);
    font-size: clamp(var(--type-24), 2.5vw, var(--type-32));
    line-height: 1.15;
    color: var(--ink);
  }

  .body .line {
    margin: 0;
    font-family: var(--font-sans);
    font-size: var(--type-16);
    line-height: 1.65;
    color: var(--ink);
    max-width: 62ch;
  }

  .body .bullets {
    list-style: none;
    padding: 0;
    margin: 0.25rem 0 0;
    display: grid;
    gap: 0.5rem;
    font-family: var(--font-sans);
    font-size: var(--type-16);
    line-height: 1.55;
    color: var(--ink);
  }

  .body .bullets li {
    padding-left: 1.25rem;
    position: relative;
  }

  .body .bullets li::before {
    content: "├──";
    position: absolute;
    left: 0;
    color: var(--rule);
    font-family: var(--font-sans);
  }

  @media (max-width: 640px) {
    > li {
      grid-template-columns: 1fr;
      gap: var(--space-4);
      padding: var(--space-8) 0;
    }
    .rail {
      flex-direction: row;
      align-items: baseline;
      gap: 1rem;
    }
    .num {
      font-size: var(--type-44);
    }
  }
`;
