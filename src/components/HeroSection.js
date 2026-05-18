import styled from "styled-components";
import home from "../content/home";
import BlueprintGrid from "./primitives/BlueprintGrid";
import WordCycle from "./WordCycle";

const HeroSection = () => {
  const { tagline, subline, primaryCta } = home.hero;
  return (
    <Hero>
      <BlueprintGrid />
      <div className="inner">
        <p className="eyebrow">Automations Architect — Ayo Osota</p>
        <h1>{tagline}</h1>
        <p className="subline">{subline}</p>
        <WordCycle />
        <div className="cta-row">
          <a className="cta-primary" href={primaryCta.to}>
            {primaryCta.label}
          </a>
          <a className="cta-secondary" href="/quadrant">
            Or — find your box first
          </a>
        </div>
      </div>
    </Hero>
  );
};

export default HeroSection;

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
    margin: 0 0 1.5rem;
    font-family: var(--font-sans);
    font-size: var(--type-12);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--ink-soft);
  }

  h1 {
    margin: 0;
    font-family: var(--font-serif);
    font-size: clamp(var(--type-44), 6.5vw, var(--type-84));
    line-height: 1.04;
    letter-spacing: -0.015em;
    color: var(--ink);
    max-width: 20ch;
  }

  .subline {
    margin: 2rem 0 0;
    font-family: var(--font-sans);
    font-size: clamp(var(--type-16), 1.5vw, var(--type-20));
    line-height: 1.6;
    color: var(--ink);
    max-width: 54ch;
  }

  .cta-row {
    margin-top: var(--space-8);
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
  }

  .cta-primary {
    display: inline-block;
    background-color: var(--accent);
    color: var(--ink);
    border: 1px solid var(--ink);
    padding: 0.875rem 1.5rem;
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: var(--type-16);
    text-decoration: none;
    transition: background-color var(--motion-base) var(--easing),
      color var(--motion-base) var(--easing);
  }
  .cta-primary:hover {
    background-color: var(--ink);
    color: var(--accent);
  }

  .cta-secondary {
    color: var(--ink);
    text-decoration: none;
    font-family: var(--font-sans);
    font-size: var(--type-14);
    font-weight: 600;
    border-bottom: 1px solid var(--ink-soft);
    padding-bottom: 0.15rem;
  }
  .cta-secondary:hover {
    border-bottom-color: var(--ink);
  }
`;
