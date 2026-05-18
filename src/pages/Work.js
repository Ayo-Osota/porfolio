import styled from "styled-components";
import work from "../content/work";
import CaseStudyCard from "../components/CaseStudyCard";
import BlueprintGrid from "../components/primitives/BlueprintGrid";
import DiscoveryCTASection from "../components/DiscoveryCTASection";

const Work = () => (
  <main>
    <Hero>
      <BlueprintGrid />
      <div className="inner">
        <p className="eyebrow">{work.hero.eyebrow}</p>
        <h1>{work.hero.title}</h1>
        <p className="intro">{work.hero.intro}</p>
      </div>
    </Hero>

    <Container>
      <Grid>
        {work.cases.map((c) => (
          <CaseStudyCard key={c.slug} study={c} />
        ))}
      </Grid>
    </Container>

    <DiscoveryCTASection
      eyebrow="Talk to me"
      title="Recognize one of these problems in your business?"
      intro="Ninety-minute call. I'll either sketch a fix, or refer you to someone better suited."
    />
  </main>
);

export default Work;

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
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--ink-soft);
  }
  h1 {
    margin: 0;
    font-family: var(--font-serif);
    font-size: clamp(var(--type-44), 6vw, var(--type-84));
    line-height: 1.05;
    color: var(--ink);
    max-width: 22ch;
  }
  .intro {
    margin: 1.5rem 0 0;
    font-family: var(--font-sans);
    font-size: var(--type-20);
    line-height: 1.5;
    color: var(--ink);
    max-width: 60ch;
  }
`;

const Grid = styled.div`
  margin: var(--space-16) 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
