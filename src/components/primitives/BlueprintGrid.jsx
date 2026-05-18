import styled from "styled-components";

const BlueprintGrid = ({ columns = 8, className = "" }) => (
  <Grid aria-hidden="true" $columns={columns} className={className}>
    {Array.from({ length: columns + 1 }).map((_, i) => (
      <span key={i} />
    ))}
  </Grid>
);

const Grid = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(${(p) => p.$columns}, 1fr);
  pointer-events: none;
  z-index: 0;
  opacity: 0.35;

  span {
    border-left: 1px solid var(--rule);
  }
  span:last-child {
    border-right: 1px solid var(--rule);
  }
`;

export default BlueprintGrid;
