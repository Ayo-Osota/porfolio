import { Link } from "react-router-dom";
import styled from "styled-components";
import SectionRule from "./primitives/SectionRule";

const ALL = [
  { to: "/automation", title: "AI & automated systems", line: "Workflows, dashboards, AI helpers." },
  { to: "/websites", title: "Websites & low-code builds", line: "Code, Shopify, WordPress, templates." },
  { to: "/products", title: "Full-scale tech products", line: "Multi-feature builds, owned by you." },
];

const CrossRail = ({ exclude }) => {
  const items = ALL.filter((i) => i.to !== exclude);
  return (
    <Wrap>
      <SectionRule number={6} label="Other services I offer" />
      <ul>
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to}>
              <h4>{i.title}</h4>
              <p>{i.line}</p>
              <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </Wrap>
  );
};

export default CrossRail;

const Wrap = styled.section`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background-color: var(--rule);
    border: 1px solid var(--rule);
  }
  li a {
    display: block;
    padding: var(--space-8);
    background-color: var(--paper);
    color: var(--ink);
    text-decoration: none;
    position: relative;
    transition: background-color var(--motion-base) var(--easing);
  }
  li a:hover {
    background-color: var(--paper-soft);
  }
  h4 {
    margin: 0 0 0.5rem;
    font-family: var(--font-serif);
    font-size: var(--type-24);
  }
  p {
    margin: 0;
    font-family: var(--font-sans);
    color: var(--ink-soft);
    max-width: 30ch;
  }
  .arrow {
    position: absolute;
    top: var(--space-8);
    right: var(--space-8);
    color: var(--ink-soft);
    font-size: var(--type-20);
  }
  @media (max-width: 768px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
`;
