import { useState } from "react";
import styled from "styled-components";

const FAQ = ({ items }) => {
  const [open, setOpen] = useState(null);
  return (
    <List>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <li key={i} className={isOpen ? "row is-open" : "row"}>
            <button
              type="button"
              className="q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{it.q}</span>
              <span className="chev" aria-hidden="true">{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen && <p className="a">{it.a}</p>}
          </li>
        );
      })}
    </List>
  );
};

export default FAQ;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid var(--rule);

  .row {
    border-bottom: 1px solid var(--rule);
  }

  .q {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    padding: var(--space-4) 0;
    background: transparent;
    border: 0;
    text-align: left;
    cursor: pointer;
    font-family: var(--font-serif);
    font-size: var(--type-20);
    color: var(--ink);
  }
  .chev {
    font-family: var(--font-sans);
    font-size: var(--type-24);
    color: var(--ink-soft);
  }
  .a {
    margin: 0 0 var(--space-4);
    font-family: var(--font-sans);
    font-size: var(--type-16);
    line-height: 1.6;
    color: var(--ink);
    max-width: 70ch;
  }
`;
