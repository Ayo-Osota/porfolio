import styled from "styled-components";

const DayInLife = ({ entries }) => (
  <List>
    {entries.map((row) => (
      <li key={row.time}>
        <span className="time">{row.time}</span>
        <span className="line">{row.line}</span>
      </li>
    ))}
  </List>
);

export default DayInLife;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid var(--rule);

  > li {
    display: grid;
    grid-template-columns: 6rem 1fr;
    gap: 1.5rem;
    padding: var(--space-4) 0;
    border-bottom: 1px solid var(--rule);
    align-items: baseline;
  }

  .time {
    font-family: var(--font-sans);
    font-size: var(--type-14);
    font-weight: 700;
    letter-spacing: 0.06em;
    color: var(--ink-soft);
  }

  .line {
    font-family: var(--font-serif);
    font-size: clamp(var(--type-16), 1.6vw, var(--type-20));
    line-height: 1.45;
    color: var(--ink);
    max-width: 60ch;
  }

  @media (max-width: 640px) {
    > li {
      grid-template-columns: 4.5rem 1fr;
      gap: 1rem;
    }
  }
`;
