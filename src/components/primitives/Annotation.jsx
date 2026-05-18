import styled from "styled-components";

const Annotation = ({ children, bracket = false, className = "" }) => (
  <Note className={className} $bracket={bracket}>
    {bracket && <span className="bracket-l" aria-hidden="true">┌</span>}
    <span className="text">{children}</span>
    {bracket && <span className="bracket-r" aria-hidden="true">┐</span>}
  </Note>
);

const Note = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-sans);
  font-size: var(--type-12);
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);

  .bracket-l,
  .bracket-r {
    color: var(--rule);
    font-weight: 400;
  }
`;

export default Annotation;
