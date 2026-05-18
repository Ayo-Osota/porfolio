import styled from "styled-components";
import products from "../content/products";
import ServicePageLayout from "../components/ServicePageLayout";
import SectionRule from "../components/primitives/SectionRule";
import Placeholder from "../components/primitives/Placeholder";

const References = () => (
  <ReferencesSection>
    <SectionRule number={2} label={products.references.eyebrow.replace(/^\d+ — /, "")} />
    <h2>{products.references.title}</h2>
    <p className="lead">{products.references.intro}</p>

    <div className="grid">
      {products.references.builds.map((b) => (
        <a
          key={b.name}
          className="card"
          href={b.href}
          target="_blank"
          rel="noreferrer"
        >
          <Placeholder label={b.imageLabel} aspect="16:10" />
          <div className="body">
            <h3>{b.name}</h3>
            <p>{b.line}</p>
            <span className="ext">Visit the live site →</span>
          </div>
        </a>
      ))}
    </div>
  </ReferencesSection>
);

const Products = () => (
  <ServicePageLayout
    content={products}
    currentRoute="/products"
    extraSection={<Container><References /></Container>}
  />
);

export default Products;

const Container = styled.div`
  width: min(1280px, 100% - 3rem);
  margin: 0 auto;
`;

const ReferencesSection = styled.section`
  margin: var(--space-16) 0;

  h2 {
    margin: 0 0 1rem;
    font-family: var(--font-serif);
    font-size: clamp(var(--type-32), 4vw, var(--type-60));
    line-height: 1.1;
    color: var(--ink);
  }
  .lead {
    margin: 0 0 var(--space-8);
    font-family: var(--font-sans);
    font-size: var(--type-20);
    color: var(--ink-soft);
    max-width: 60ch;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-6);
  }
  .card {
    display: block;
    background-color: var(--paper);
    border: 1px solid var(--rule);
    color: var(--ink);
    text-decoration: none;
    transition: border-color var(--motion-base) var(--easing);
  }
  .card:hover {
    border-color: var(--ink);
  }
  .body {
    padding: var(--space-6);
  }
  .body h3 {
    margin: 0 0 0.5rem;
    font-family: var(--font-serif);
    font-size: var(--type-24);
  }
  .body p {
    margin: 0 0 1rem;
    font-family: var(--font-sans);
    color: var(--ink);
  }
  .ext {
    font-family: var(--font-sans);
    font-size: var(--type-14);
    font-weight: 700;
    color: var(--ink);
  }
  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;
