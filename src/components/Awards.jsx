import styled from "styled-components";
import awards from "../content/awards";
import SectionRule from "./primitives/SectionRule";

const Awards = ({ number = 3, label = "Awards & recognition" }) => {
  if (!awards || awards.length === 0) return null;
  return (
    <Wrap>
      <SectionRule number={number} label={label} />
      <h2>Selected awards & recognition.</h2>
      <ul>
        {awards.map((a) => (
          <li key={a.id}>
            <span className="year">{a.year}</span>
            <div className="body">
              <h3>{a.name}</h3>
              <p className="org">{a.org}</p>
              {a.note && <p className="note">{a.note}</p>}
            </div>
          </li>
        ))}
      </ul>
    </Wrap>
  );
};

export default Awards;

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

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    border-top: 1px solid var(--rule);
  }

  > ul > li {
    display: grid;
    grid-template-columns: 7rem 1fr;
    gap: var(--space-6);
    padding: var(--space-6) 0;
    border-bottom: 1px solid var(--rule);
    align-items: baseline;
  }

  .year {
    font-family: var(--font-sans);
    font-size: var(--type-14);
    font-weight: 700;
    letter-spacing: 0.14em;
    color: var(--ink-soft);
  }

  .body h3 {
    margin: 0 0 0.25rem;
    font-family: var(--font-serif);
    font-size: var(--type-24);
    color: var(--ink);
  }

  .body .org {
    margin: 0 0 0.5rem;
    font-family: var(--font-sans);
    font-size: var(--type-14);
    color: var(--ink-soft);
  }

  .body .note {
    margin: 0;
    font-family: var(--font-sans);
    font-size: var(--type-16);
    line-height: 1.5;
    color: var(--ink);
    max-width: 60ch;
  }

  @media (max-width: 640px) {
    > ul > li {
      grid-template-columns: 5rem 1fr;
      gap: 1rem;
    }
  }
`;
