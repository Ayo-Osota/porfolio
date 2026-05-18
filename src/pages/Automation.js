import styled from "styled-components";
import automation from "../content/automation";
import ServicePageLayout from "../components/ServicePageLayout";
import SectionRule from "../components/primitives/SectionRule";

const Pricing = () => (
  <PricingSection>
    <SectionRule number={2} label={automation.pricing.eyebrow.replace(/^\d+ — /, "")} />
    <h2>{automation.pricing.title}</h2>
    <p className="lead">{automation.pricing.intro}</p>

    <div className="columns">
      <div>
        <h3>What changes the price</h3>
        <ul>
          {automation.pricing.influencers.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>What doesn't</h3>
        <ul>
          {automation.pricing.notInfluencers.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </div>

    <div className="chaos">
      <h3>{automation.pricing.costOfChaos.title}</h3>
      <table>
        <tbody>
          {automation.pricing.costOfChaos.rows.map((row) => (
            <tr key={row.label} className={row.strong ? "strong" : ""}>
              <td>{row.label}</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </PricingSection>
);

const Automation = () => (
  <ServicePageLayout
    content={automation}
    currentRoute="/automation"
    extraSection={<Container><Pricing /></Container>}
  />
);

export default Automation;

const Container = styled.div`
  width: min(1280px, 100% - 3rem);
  margin: 0 auto;
`;

const PricingSection = styled.section`
  margin: var(--space-16) 0;

  h2 {
    margin: 0 0 1rem;
    font-family: var(--font-serif);
    font-size: clamp(var(--type-32), 4vw, var(--type-60));
    line-height: 1.1;
    color: var(--ink);
    max-width: 22ch;
  }

  .lead {
    margin: 0 0 var(--space-8);
    font-family: var(--font-sans);
    font-size: var(--type-20);
    color: var(--ink-soft);
    max-width: 60ch;
  }

  .columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
    margin-bottom: var(--space-12);
  }

  .columns h3 {
    margin: 0 0 0.75rem;
    font-family: var(--font-sans);
    font-size: var(--type-12);
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--ink-soft);
  }
  .columns ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: var(--font-sans);
    color: var(--ink);
  }
  .columns li {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--rule);
  }

  .chaos h3 {
    margin: 0 0 1rem;
    font-family: var(--font-serif);
    font-size: var(--type-24);
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-family: var(--font-sans);
  }
  td {
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--rule);
    color: var(--ink);
  }
  td:last-child {
    text-align: right;
    font-weight: 600;
    color: var(--ink);
  }
  tr.strong td {
    border-top: 2px solid var(--ink);
    border-bottom: 2px solid var(--ink);
    font-weight: 700;
    background-color: var(--paper-soft);
  }

  @media (max-width: 768px) {
    .columns {
      grid-template-columns: 1fr;
    }
  }
`;
