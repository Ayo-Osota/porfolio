import styled from "styled-components";
import about from "../content/about";
import SectionLayout from "../components/SectionLayout";
import Placeholder from "../components/primitives/Placeholder";
import BlueprintGrid from "../components/primitives/BlueprintGrid";
import Awards from "../components/Awards";
import DiscoveryCTASection from "../components/DiscoveryCTASection";

const About = () => (
  <main>
    <Hero>
      <BlueprintGrid />
      <div className="inner">
        <p className="eyebrow">{about.hero.eyebrow}</p>
        <h1>{about.hero.title}</h1>
        <p className="subline">{about.hero.subline}</p>
      </div>
    </Hero>

    <Container>
      <StoryRow>
        <article className="story">
          {about.story.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>
        <aside className="portrait">
          <Placeholder label={about.portraitLabel} aspect="4:5" />
          <p className="caption">Ayo Osota — Automations Architect</p>
        </aside>
      </StoryRow>

      <SectionLayout
        number={1}
        label={about.values.eyebrow.replace(/^\d+ — /, "")}
        title={about.values.title}
      >
        <Values>
          {about.values.items.map((v) => (
            <li key={v.name}>
              <h3>{v.name}</h3>
              <p>{v.line}</p>
            </li>
          ))}
        </Values>
      </SectionLayout>

      <Awards number={2} label="Awards & recognition" />

      <SectionLayout
        number={3}
        label={about.whyMe.eyebrow.replace(/^\d+ — /, "")}
        title={about.whyMe.title}
        lead={about.whyMe.intro}
      >
        <Competitors>
          <thead>
            <tr>
              <th>Compared to</th>
              <th>Why me</th>
            </tr>
          </thead>
          <tbody>
            {about.whyMe.competitors.map((c) => (
              <tr key={c.type}>
                <td className="type">{c.type}</td>
                <td>{c.line}</td>
              </tr>
            ))}
          </tbody>
        </Competitors>
      </SectionLayout>
    </Container>

    <DiscoveryCTASection
      number={4}
      eyebrow={about.cta.eyebrow.replace(/^\d+ — /, "")}
      title={about.cta.title}
      intro={about.cta.intro}
    />
  </main>
);

export default About;

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
  .subline {
    margin: 1.5rem 0 0;
    font-family: var(--font-sans);
    font-size: var(--type-20);
    color: var(--ink);
    max-width: 60ch;
  }
`;

const StoryRow = styled.section`
  margin: var(--space-16) 0;
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: var(--space-12);
  align-items: start;

  .story p {
    margin: 0 0 1.25rem;
    font-family: var(--font-serif);
    font-size: var(--type-20);
    line-height: 1.55;
    color: var(--ink);
    max-width: 60ch;
  }
  .story p:first-child {
    font-size: clamp(var(--type-24), 2.5vw, var(--type-32));
    line-height: 1.35;
  }

  .portrait {
    position: sticky;
    top: 96px;
    align-self: start;
  }
  .caption {
    margin: 0.75rem 0 0;
    font-family: var(--font-sans);
    font-size: var(--type-12);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--ink-soft);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    .portrait {
      position: static;
      order: -1;
      max-width: 320px;
    }
  }
`;

const Values = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background-color: var(--rule);
  border: 1px solid var(--rule);

  li {
    background-color: var(--paper);
    padding: var(--space-6);
  }
  h3 {
    margin: 0 0 0.5rem;
    font-family: var(--font-serif);
    font-size: var(--type-20);
  }
  p {
    margin: 0;
    font-family: var(--font-sans);
    color: var(--ink);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Competitors = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-sans);

  th {
    text-align: left;
    padding: 0.5rem 0;
    font-size: var(--type-12);
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--ink-soft);
    border-bottom: 1px solid var(--ink);
  }
  td {
    padding: 1rem 0;
    border-bottom: 1px solid var(--rule);
    color: var(--ink);
    vertical-align: top;
  }
  td.type {
    width: 35%;
    font-weight: 600;
    padding-right: 2rem;
  }
`;
