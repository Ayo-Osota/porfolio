import styled from "styled-components";

const Placeholder = ({ label = "image", aspect = "16:9", className = "" }) => {
  const [w, h] = aspect.split(":").map(Number);
  return (
    <Box
      className={className}
      $ratio={`${w} / ${h}`}
      role="img"
      aria-label={`Placeholder for ${label}`}
    >
      <span className="bracket">[</span>
      <span className="label">{label} — {aspect}</span>
      <span className="bracket">]</span>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  width: 100%;
  aspect-ratio: ${(p) => p.$ratio};
  background-color: var(--paper-soft);
  border: 1px dashed var(--rule);
  color: var(--ink-soft);
  font-family: var(--font-sans);
  font-size: var(--type-12);
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;

  .bracket {
    color: var(--rule);
    font-weight: 400;
  }
`;

export default Placeholder;
