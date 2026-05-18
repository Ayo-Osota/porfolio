import styled from "styled-components";
import BlueprintGrid from "./primitives/BlueprintGrid";
import SectionLayout from "./SectionLayout";
import PhaseList from "./PhaseList";
import FAQ from "./FAQ";
import CrossRail from "./CrossRail";
import DiscoveryCTASection from "./DiscoveryCTASection";

const ServicePageLayout = ({
  content,
  currentRoute,
  extraSection = null,
}) => {
  const phaseVariant = content.process.phases[0]?.deliverables
    ? "full"
    : "compact";

  return (
    <main>
      <Hero>
        <BlueprintGrid />
        <div className="inner">
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1>{content.hero.title}</h1>
          <p className="subline">{content.hero.subline}</p>
          <a className="cta" href={content.hero.primaryCta.to}>
            {content.hero.primaryCta.label}
          </a>
        </div>
      </Hero>

      <Container>
        <SectionLayout
          layout="stacked"
          number={1}
          label={content.whatIBuild.eyebrow.replace(/^\d+ — /, "")}
          title={content.whatIBuild.title}
          lead={content.whatIBuild.intro}
        >
          <Builds>
            {content.whatIBuild.items.map((item) => (
              <li key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.line}</p>
              </li>
            ))}
          </Builds>
        </SectionLayout>

        {extraSection}

        <SectionLayout
          number={3}
          label={content.process.eyebrow.replace(/^\d+ — /, "")}
          title={content.process.title}
        >
          <PhaseList phases={content.process.phases} variant={phaseVariant} />
          {content.process.cta && (
            <p className="more-link">
              <a href={content.process.cta.to}>{content.process.cta.label} →</a>
            </p>
          )}
        </SectionLayout>

        {content.faq && (
          <SectionLayout
            number={4}
            label={content.faq.eyebrow.replace(/^\d+ — /, "")}
            title="Questions you're probably asking."
          >
            <FAQ items={content.faq.items} />
          </SectionLayout>
        )}
      </Container>

      <DiscoveryCTASection
        number={5}
        eyebrow={content.cta.eyebrow.replace(/^\d+ — /, "")}
        title={content.cta.title}
        intro={content.cta.intro}
      />

      <Container>
        <CrossRail exclude={currentRoute} />
      </Container>
    </main>
  );
};

export default ServicePageLayout;

const Container = styled.div`
  width: min(1280px, 100% - 3rem);
  margin: 0 auto;
`;

const Hero = styled.section`
  position: relative;
  overflow: hidden;
  padding: var(--space-16) 0 var(--space-12);
  border-bottom: 1px solid var(--rule);

  .inner {
    width: min(1280px, 100% - 3rem);
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .eyebrow {
    margin: 0 0 1rem;
    font-family: var(--font-sans);
    font-size: var(--type-12);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--ink-soft);
  }

  h1 {
    margin: 0;
    font-family: var(--font-serif);
    font-size: clamp(var(--type-44), 6vw, var(--type-84));
    line-height: 1.05;
    letter-spacing: -0.01em;
    color: var(--ink);
    max-width: 22ch;
  }

  .subline {
    margin: 1.5rem 0 2rem;
    font-family: var(--font-sans);
    font-size: var(--type-20);
    line-height: 1.5;
    color: var(--ink);
    max-width: 56ch;
  }

  .cta {
    display: inline-block;
    background-color: var(--accent);
    color: var(--ink);
    border: 1px solid var(--ink);
    padding: 0.875rem 1.5rem;
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: var(--type-16);
    text-decoration: none;
  }
  .cta:hover {
    background-color: var(--ink);
    color: var(--accent);
  }
`;

const Builds = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1px;
  background-color: var(--rule);
  border: 1px solid var(--rule);
  grid-template-columns: 1fr 1fr;

  li {
    background-color: var(--paper);
    padding: var(--space-6);
  }
  h3 {
    margin: 0 0 0.5rem;
    font-family: var(--font-serif);
    font-size: var(--type-20);
    color: var(--ink);
  }
  p {
    margin: 0;
    font-family: var(--font-sans);
    font-size: var(--type-16);
    line-height: 1.55;
    color: var(--ink);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
