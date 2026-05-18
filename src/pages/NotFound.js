import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => (
  <Wrap>
    <p className="num">404</p>
    <h1>That page isn't here.</h1>
    <p className="copy">
      Could be a moved link, a typo, or something I retired. Either way, head
      back to the start.
    </p>
    <Link className="cta" to="/">
      Back to home
    </Link>
  </Wrap>
);

export default NotFound;

const Wrap = styled.main`
  width: min(720px, 100% - 3rem);
  margin: var(--space-24) auto var(--space-32);
  text-align: center;

  .num {
    font-family: var(--font-sans);
    font-size: var(--type-12);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--ink-soft);
    margin: 0 0 1rem;
  }

  h1 {
    font-family: var(--font-serif);
    font-size: var(--type-44);
    margin: 0;
    line-height: 1.1;
  }

  .copy {
    font-family: var(--font-sans);
    color: var(--ink-soft);
    margin: 1.5rem 0 2rem;
  }

  .cta {
    display: inline-block;
    background-color: var(--accent);
    color: var(--ink);
    border: 1px solid var(--ink);
    padding: 0.75rem 1.25rem;
    font-family: var(--font-sans);
    font-weight: 700;
    text-decoration: none;
  }
`;
