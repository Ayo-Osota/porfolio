import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import caseStudies from "../content/caseStudies";
import Placeholder from "../components/primitives/Placeholder";
import SectionRule from "../components/primitives/SectionRule";
import DiscoveryCTASection from "../components/DiscoveryCTASection";
import NotFound from "./NotFound";

const CaseStudy = () => {
  const { slug } = useParams();
  const study = caseStudies.find((c) => c.slug === slug && c.hasDetailPage);

  if (!study) return <NotFound />;

  return (
    <main>
      <Container>
        <Top>
          <Link to="/work" className="back">← All case studies</Link>
          {study.compositeLabel && (
            <span className="label">{study.compositeLabel}</span>
          )}
        </Top>

        <Header>
          <p className="meta">{study.client} · {study.industry}</p>
          <h1>{study.title}</h1>
        </Header>

        {study.heroImageLabel && (
          <Placeholder label={study.heroImageLabel} aspect="16:9" />
        )}

        <Section>
          <SectionRule number={1} label="Problem" />
          <p className="long">{study.problem}</p>
        </Section>

        <Section>
          <SectionRule number={2} label="Solution" />
          <p className="long">{study.solution}</p>
        </Section>

        <Section>
          <SectionRule number={3} label="Outcomes" />
          <ul className="outcomes">
            {study.outcomes.map((o) => (
              <li key={o.metric}>
                <span className="value">{o.value}</span>
                <span className="metric">{o.metric}</span>
              </li>
            ))}
          </ul>
        </Section>

        {study.artifacts && study.artifacts.length > 0 && (
          <Section>
            <SectionRule number={4} label="What they walked away with" />
            <ul className="artifacts">
              {study.artifacts.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Section>
        )}

        {study.pullQuote && (
          <Quote>
            <p>"{study.pullQuote}"</p>
            {study.pullQuoteAttribution && (
              <cite>{study.pullQuoteAttribution}</cite>
            )}
          </Quote>
        )}
      </Container>

      <DiscoveryCTASection
        eyebrow="Recognize this?"
        title="If this sounds like your week — talk to me."
        intro="Ninety-minute call. I'll either sketch a fix, or tell you I'm not the right person."
      />
    </main>
  );
};

export default CaseStudy;

const Container = styled.div`
  width: min(960px, 100% - 3rem);
  margin: var(--space-12) auto var(--space-16);
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: var(--space-8);

  .back {
    font-family: var(--font-sans);
    font-size: var(--type-14);
    color: var(--ink-soft);
    text-decoration: none;
  }
  .back:hover {
    color: var(--ink);
  }
  .label {
    font-family: var(--font-sans);
    font-size: var(--type-12);
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--ink);
    background-color: var(--accent);
    padding: 0.25rem 0.5rem;
  }
`;

const Header = styled.header`
  margin: 0 0 var(--space-8);

  .meta {
    margin: 0 0 1rem;
    font-family: var(--font-sans);
    font-size: var(--type-14);
    color: var(--ink-soft);
    letter-spacing: 0.06em;
  }
  h1 {
    margin: 0;
    font-family: var(--font-serif);
    font-size: clamp(var(--type-32), 5vw, var(--type-60));
    line-height: 1.1;
    color: var(--ink);
    max-width: 22ch;
  }
`;

const Section = styled.section`
  margin: var(--space-12) 0;

  .long {
    margin: 0;
    font-family: var(--font-sans);
    font-size: var(--type-20);
    line-height: 1.65;
    color: var(--ink);
    max-width: 65ch;
  }

  .outcomes {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background-color: var(--rule);
    border: 1px solid var(--rule);
  }
  .outcomes li {
    background-color: var(--paper);
    padding: var(--space-6);
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .outcomes .value {
    font-family: var(--font-serif);
    font-size: var(--type-44);
    color: var(--ink);
    line-height: 1;
  }
  .outcomes .metric {
    font-family: var(--font-sans);
    font-size: var(--type-14);
    color: var(--ink-soft);
  }

  .artifacts {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.5rem;
    font-family: var(--font-sans);
    color: var(--ink);
  }
  .artifacts li::before {
    content: "├── ";
    color: var(--rule);
  }

  @media (max-width: 700px) {
    .outcomes {
      grid-template-columns: 1fr;
    }
  }
`;

const Quote = styled.blockquote`
  margin: var(--space-12) 0;
  padding: var(--space-6) var(--space-8);
  background-color: var(--paper-soft);
  border-left: 3px solid var(--accent);

  p {
    margin: 0;
    font-family: var(--font-serif);
    font-style: italic;
    font-size: var(--type-24);
    line-height: 1.4;
    color: var(--ink);
    max-width: 50ch;
  }
  cite {
    display: block;
    margin-top: 0.75rem;
    font-family: var(--font-sans);
    font-style: normal;
    font-size: var(--type-14);
    color: var(--ink-soft);
  }
`;
