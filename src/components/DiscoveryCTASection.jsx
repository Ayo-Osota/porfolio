import styled from "styled-components";
import DiscoveryCallForm from "./DiscoveryCallForm";
import SectionRule from "./primitives/SectionRule";

const DiscoveryCTASection = ({
  number = 7,
  eyebrow = "Talk to me",
  title = "Tell me what's stuck. I'll tell you honestly if I can help.",
  intro = "Ninety-minute call. No deck. I'll either sketch a fix, or tell you I'm not the right person.",
}) => (
  <Wrap id="discovery">
    <div className="inner">
      <SectionRule number={number} label={eyebrow} />
      <h2>{title}</h2>
      <p className="intro">{intro}</p>
      <DiscoveryCallForm />
    </div>
  </Wrap>
);

export default DiscoveryCTASection;

const Wrap = styled.section`
  background-color: var(--paper-soft);
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
  padding: var(--space-16) 0;

  .inner {
    width: min(1280px, 100% - 3rem);
    margin: 0 auto;
  }

  h2 {
    margin: 0 0 1rem;
    font-family: var(--font-serif);
    font-size: clamp(var(--type-32), 4vw, var(--type-60));
    line-height: 1.1;
    max-width: 22ch;
    color: var(--ink);
  }
  .intro {
    margin: 0 0 var(--space-8);
    font-family: var(--font-sans);
    font-size: var(--type-20);
    color: var(--ink);
    max-width: 60ch;
  }
`;
