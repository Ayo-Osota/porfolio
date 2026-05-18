import styled from "styled-components";
import quadrant from "../content/quadrant";
import SanityQuadrant from "../components/SanityQuadrant";
import BlueprintGrid from "../components/primitives/BlueprintGrid";
import DiscoveryCTASection from "../components/DiscoveryCTASection";

const Quadrant = () => (
  <main>
    <Hero>
      <BlueprintGrid />
      <div className="inner">
        <p className="eyebrow">{quadrant.framing.eyebrow}</p>
        <h1>{quadrant.framing.title}</h1>
        <p className="intro">{quadrant.framing.intro}</p>
      </div>
    </Hero>

    <ToolWrap>
      <SanityQuadrant surface="standalone" />
    </ToolWrap>

    <DiscoveryCTASection
      eyebrow="Already know your box"
      title="Box 2? Let's talk."
      intro="If the result landed on Box 2, you're who I built the practice for. Book a call below."
    />
  </main>
);

export default Quadrant;

const Hero = styled.section`
  position: relative;
  overflow: hidden;
  padding: var(--space-16) 0 var(--space-12);
  border-bottom: 1px solid var(--rule);

  .inner {
    width: min(960px, 100% - 3rem);
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
    max-width: 16ch;
  }
  .intro {
    margin: 1.5rem 0 0;
    font-family: var(--font-sans);
    font-size: var(--type-20);
    color: var(--ink);
    max-width: 60ch;
  }
`;

const ToolWrap = styled.div`
  width: min(960px, 100% - 3rem);
  margin: var(--space-12) auto;
`;
