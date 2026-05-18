import styled from "styled-components";
import SectionRule from "./primitives/SectionRule";

// Editorial two-column section: heading + lead on the left, content on the right.
// Use layout="stacked" when the content needs the full row (e.g. grids that already
// span the column on their own).

const SectionLayout = ({
  number,
  label,
  title,
  lead,
  children,
  layout = "split",
}) => (
  <Wrap>
    <SectionRule number={number} label={label} />
    <Inner $layout={layout}>
      {(title || lead) && (
        <Header>
          {title && <h2>{title}</h2>}
          {lead && <p className="lead">{lead}</p>}
        </Header>
      )}
      <Content>{children}</Content>
    </Inner>
  </Wrap>
);

export default SectionLayout;

const Wrap = styled.section`
  margin: var(--space-16) 0;
`;

const Inner = styled.div`
  display: grid;
  grid-template-columns: ${(p) =>
    p.$layout === "stacked" ? "1fr" : "minmax(260px, 0.85fr) 1.6fr"};
  gap: var(--space-12);
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
`;

const Header = styled.div`
  h2 {
    margin: 0;
    font-family: var(--font-serif);
    font-size: clamp(var(--type-32), 3.5vw, var(--type-60));
    line-height: 1.08;
    letter-spacing: -0.01em;
    color: var(--ink);
  }

  .lead {
    margin: 1rem 0 0;
    font-family: var(--font-sans);
    font-size: var(--type-16);
    line-height: 1.55;
    color: var(--ink-soft);
    max-width: 36ch;
  }
`;

const Content = styled.div`
  min-width: 0;

  .more-link {
    margin: var(--space-6) 0 0;
    font-family: var(--font-sans);
    font-size: var(--type-14);
  }
  .more-link a {
    color: var(--ink);
    text-decoration: none;
    border-bottom: 1px solid var(--ink);
  }
`;
