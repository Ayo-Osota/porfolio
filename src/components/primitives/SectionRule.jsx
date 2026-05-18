import styled from "styled-components";

const SectionRule = ({ number, label, className = "" }) => (
  <Rule className={className}>
    <span className="tick">├──</span>
    {number != null && (
      <span className="num">{String(number).padStart(2, "0")}.</span>
    )}
    {label && <span className="label">{label}</span>}
    <span className="line" aria-hidden="true" />
  </Rule>
);

const Rule = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: var(--space-16) 0 var(--space-8);
  color: var(--ink-soft);
  font-family: var(--font-sans);
  font-size: var(--type-12);
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;

  .tick {
    color: var(--rule);
    font-weight: 400;
  }

  .num {
    color: var(--ink);
  }

  .label {
    color: var(--ink);
  }

  .line {
    flex: 1;
    height: 1px;
    background-color: var(--rule);
  }
`;

export default SectionRule;
