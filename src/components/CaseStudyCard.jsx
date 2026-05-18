import { Link } from "react-router-dom";
import styled from "styled-components";
import Placeholder from "./primitives/Placeholder";

const CaseStudyCard = ({ study }) => {
  const inner = (
    <>
      {study.heroImageLabel && (
        <div className="art">
          <Placeholder label={study.heroImageLabel} aspect="16:9" />
        </div>
      )}
      <div className="body">
        {study.compositeLabel && (
          <span className="label">{study.compositeLabel}</span>
        )}
        <h3>{study.title}</h3>
        <p className="meta">{study.client} · {study.industry}</p>
        {study.primaryMetric && (
          <p className="metric">
            <strong>{study.primaryMetric.value}</strong>
            <span>{study.primaryMetric.label}</span>
          </p>
        )}
        {!study.hasDetailPage && study.pullQuote && (
          <blockquote className="inline-quote">
            <p>"{study.pullQuote}"</p>
            {study.pullQuoteAttribution && (
              <cite>{study.pullQuoteAttribution}</cite>
            )}
          </blockquote>
        )}
        {study.hasDetailPage && (
          <span className="cta" aria-hidden="true">Read the story →</span>
        )}
      </div>
    </>
  );

  if (study.hasDetailPage) {
    return (
      <Card as={Link} to={`/work/${study.slug}`} className="is-link">
        {inner}
      </Card>
    );
  }
  return <Card as="article">{inner}</Card>;
};

export default CaseStudyCard;

const Card = styled.article`
  display: block;
  background-color: var(--paper);
  border: 1px solid var(--rule);
  color: var(--ink);
  text-decoration: none;
  transition: border-color var(--motion-base) var(--easing);

  &.is-link:hover {
    border-color: var(--ink);
  }

  .art {
    border-bottom: 1px solid var(--rule);
  }

  .body {
    padding: var(--space-6);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .label {
    font-family: var(--font-sans);
    font-size: var(--type-12);
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--ink-soft);
  }

  h3 {
    margin: 0;
    font-family: var(--font-serif);
    font-size: var(--type-24);
    line-height: 1.2;
    color: var(--ink);
  }

  .meta {
    margin: 0;
    font-family: var(--font-sans);
    font-size: var(--type-14);
    color: var(--ink-soft);
  }

  .metric {
    margin: 0.75rem 0 0;
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
  }
  .metric strong {
    font-family: var(--font-serif);
    font-size: var(--type-32);
    color: var(--ink);
  }
  .metric span {
    font-family: var(--font-sans);
    font-size: var(--type-14);
    color: var(--ink-soft);
  }

  .inline-quote {
    margin: 1rem 0 0;
    padding: 1rem;
    background-color: var(--paper-soft);
    border-left: 2px solid var(--accent);
  }
  .inline-quote p {
    margin: 0;
    font-family: var(--font-serif);
    font-style: italic;
    color: var(--ink);
  }
  .inline-quote cite {
    display: block;
    margin-top: 0.5rem;
    font-family: var(--font-sans);
    font-style: normal;
    font-size: var(--type-12);
    color: var(--ink-soft);
  }

  .cta {
    margin-top: 0.75rem;
    font-family: var(--font-sans);
    font-size: var(--type-14);
    font-weight: 700;
    color: var(--ink);
  }
`;
