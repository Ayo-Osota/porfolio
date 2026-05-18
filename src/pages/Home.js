import { Link } from "react-router-dom";
import styled from "styled-components";
import home from "../content/home";
import caseStudies from "../content/caseStudies";
import HeroSection from "../components/HeroSection";
import DayInLife from "../components/DayInLife";
import SectionLayout from "../components/SectionLayout";
import SanityQuadrant from "../components/SanityQuadrant";
import PhaseList from "../components/PhaseList";
import CaseStudyCard from "../components/CaseStudyCard";
import Testimonials from "../components/Testimonials";
import DiscoveryCTASection from "../components/DiscoveryCTASection";

const teasers = caseStudies.slice(0, 2);

const Home = () => (
  <main>
    <HeroSection />

    <Container>
      <SectionLayout
        number={1}
        label="Sound familiar?"
        title={home.dayInLife.title}
        lead={home.dayInLife.intro}
      >
        <DayInLife entries={home.dayInLife.entries} />
      </SectionLayout>

      <SectionLayout
        number={2}
        label="Find your box"
        title="Where are you, really?"
        lead="Two questions. Honest answers. Tells you whether you're who I built this practice for."
      >
        <SanityQuadrant surface="embedded" />
        <p className="more-link">
          <Link to="/quadrant">Open the full tool →</Link>
        </p>
      </SectionLayout>

      <SectionLayout
        layout="stacked"
        number={3}
        label="What I build"
        title={home.servicesRail.title}
        lead={home.servicesRail.intro}
      >
        <ServicesGrid>
          {home.servicesRail.items.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className={item.emphasis ? "tile is-emph" : "tile"}
            >
              <h3>{item.title}</h3>
              <p>{item.line}</p>
              <span className="arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </ServicesGrid>
      </SectionLayout>

      <SectionLayout
        number={4}
        label="How it works"
        title={home.process.title}
        lead={home.process.intro}
      >
        <PhaseList phases={home.process.phases} variant="compact" />
        <p className="more-link">
          <Link to={home.process.cta.to}>{home.process.cta.label} →</Link>
        </p>
      </SectionLayout>

      <SectionLayout
        number={5}
        label="Proof"
        title={home.proofTeaser.title}
        lead={home.proofTeaser.intro}
      >
        <TeaserGrid>
          {teasers.map((c) => (
            <CaseStudyCard key={c.slug} study={c} />
          ))}
        </TeaserGrid>
        <p className="more-link">
          <Link to={home.proofTeaser.cta.to}>{home.proofTeaser.cta.label} →</Link>
        </p>
      </SectionLayout>

      <Testimonials number={6} label="What clients say" />
    </Container>

    <DiscoveryCTASection
      number={7}
      eyebrow={home.closing.eyebrow.replace(/^\d+ — /, "")}
      title={home.closing.title}
      intro={home.closing.intro}
    />
  </main>
);

export default Home;

const Container = styled.div`
  width: min(1280px, 100% - 3rem);
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 1px;
  background-color: var(--rule);
  border: 1px solid var(--rule);

  .tile {
    display: block;
    padding: var(--space-8);
    background-color: var(--paper);
    text-decoration: none;
    color: var(--ink);
    position: relative;
    min-height: 220px;
    transition: background-color var(--motion-base) var(--easing);
  }
  .tile:hover {
    background-color: var(--paper-soft);
  }
  .tile.is-emph {
    background-color: var(--accent);
  }
  .tile.is-emph:hover {
    background-color: #ffd83a;
  }

  .tile h3 {
    margin: 0 0 0.5rem;
    font-family: var(--font-serif);
    font-size: var(--type-24);
    color: var(--ink);
  }
  .tile p {
    margin: 0;
    font-family: var(--font-sans);
    color: var(--ink);
    max-width: 36ch;
  }
  .tile .arrow {
    position: absolute;
    bottom: var(--space-6);
    right: var(--space-6);
    color: var(--ink-soft);
    font-size: var(--type-24);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const TeaserGrid = styled.div`
  display: grid;
  gap: var(--space-6);
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
