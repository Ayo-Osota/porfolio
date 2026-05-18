import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { footerLinks, siteName, blogUrl, contactEmail } from "../content/site";

const socialIcon = {
  twitter: <BsTwitterX />,
  github: <AiOutlineGithub />,
  linkedin: <AiFillLinkedin />,
  email: <AiOutlineMail />,
};

const Footer = () => (
  <FooterBar>
    <div className="inner">
      <div className="row top">
        <div>
          <p className="brand">{siteName}</p>
          <p className="tagline">
            Automations Architect. Plain language. Honest work.
          </p>
        </div>

        <nav aria-label="Services">
          <p className="col-title">Services</p>
          <ul>
            {footerLinks.services.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Site">
          <p className="col-title">Site</p>
          <ul>
            {footerLinks.site.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Elsewhere">
          <p className="col-title">Elsewhere</p>
          <ul>
            <li>
              <a href={blogUrl} target="_blank" rel="noreferrer">
                Blog
              </a>
            </li>
            <li>
              <a href={`mailto:${contactEmail}`}>Email me</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="row bottom">
        <p>
          © {new Date().getFullYear()} Ayomikun Osota. All rights reserved.
        </p>
        <ul className="socials">
          <li>
            <a
              href="https://x.com/messages/compose?recipient_id=843231377264926720"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X"
            >
              {socialIcon.twitter}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Ayo-Osota"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              {socialIcon.github}
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ayo-osota/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              {socialIcon.linkedin}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${contactEmail}`}
              aria-label="Email"
            >
              {socialIcon.email}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </FooterBar>
);

export default Footer;

const FooterBar = styled.footer`
  background-color: var(--paper-soft);
  border-top: 1px solid var(--rule);
  margin-top: var(--space-24);
  color: var(--ink);

  .inner {
    width: min(1280px, 100% - 3rem);
    margin: 0 auto;
    padding: var(--space-16) 0 var(--space-8);
  }

  .row {
    display: grid;
    gap: var(--space-8);
  }

  .top {
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
  }

  .bottom {
    grid-template-columns: 1fr auto;
    align-items: center;
    margin-top: var(--space-12);
    padding-top: var(--space-6);
    border-top: 1px solid var(--rule);
    font-family: var(--font-sans);
    font-size: var(--type-14);
    color: var(--ink-soft);
  }

  .brand {
    font-family: var(--font-serif);
    font-size: var(--type-24);
    color: var(--ink);
    margin: 0;
  }
  .tagline {
    font-family: var(--font-sans);
    font-size: var(--type-14);
    color: var(--ink-soft);
    margin: 0.25rem 0 0;
    max-width: 28ch;
  }

  .col-title {
    font-family: var(--font-sans);
    font-size: var(--type-12);
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--ink-soft);
    margin: 0 0 0.5rem;
  }

  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  nav a {
    color: var(--ink);
    text-decoration: none;
    font-family: var(--font-sans);
    font-size: var(--type-14);
  }
  nav a:hover {
    text-decoration: underline;
  }

  .socials {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1rem;
  }
  .socials a {
    color: var(--ink);
    font-size: var(--type-20);
    display: inline-flex;
  }
  .socials a:hover {
    color: var(--accent);
  }

  @media (max-width: 768px) {
    .top {
      grid-template-columns: 1fr 1fr;
    }
    .bottom {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
`;
