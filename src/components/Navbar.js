import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { navItems, siteName } from "../content/site";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <Top>
      <div className="bar">
        <Link to="/" className="brand">
          {siteName}
        </Link>
        <nav className="desktop" aria-label="Primary">
          <ul>
            {navItems.map((item) =>
              item.external ? (
                <li key={item.id}>
                  <a href={item.href} target="_blank" rel="noreferrer" className="link">
                    {item.label}
                  </a>
                </li>
              ) : (
                <li key={item.id}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      isActive ? "link is-active" : "link"
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
          <a href="/#discovery" className="cta">
            Book a discovery call
          </a>
        </nav>
        <button
          type="button"
          className="burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={open ? "line open" : "line"} />
          <span className={open ? "line open" : "line"} />
          <span className={open ? "line open" : "line"} />
        </button>
      </div>
      {open && (
        <div className="overlay" role="dialog" aria-modal="true">
          <ul>
            {navItems.map((item) =>
              item.external ? (
                <li key={item.id}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ) : (
                <li key={item.id}>
                  <Link to={item.to} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              )
            )}
            <li>
              <a
                href="/#discovery"
                className="mobile-cta"
                onClick={() => setOpen(false)}
              >
                Book a discovery call
              </a>
            </li>
          </ul>
        </div>
      )}
    </Top>
  );
};

export default Navbar;

const Top = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: var(--paper);
  border-bottom: 1px solid var(--rule);

  .bar {
    width: min(1280px, 100% - 3rem);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }

  .brand {
    font-family: var(--font-serif);
    font-size: var(--type-20);
    color: var(--ink);
    text-decoration: none;
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  .desktop {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .desktop ul {
    display: flex;
    gap: 1.25rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .desktop .link {
    font-family: var(--font-sans);
    font-size: var(--type-14);
    font-weight: 500;
    color: var(--ink);
    text-decoration: none;
    padding: 0.25rem 0;
    border-bottom: 1px solid transparent;
  }
  .desktop .link.is-active {
    border-bottom-color: var(--accent);
  }
  .desktop .link:hover {
    color: var(--ink);
    border-bottom-color: var(--ink);
  }
  .cta {
    background-color: var(--accent);
    color: var(--ink);
    border: 1px solid var(--ink);
    text-decoration: none;
    font-family: var(--font-sans);
    font-size: var(--type-14);
    font-weight: 700;
    padding: 0.6rem 1rem;
    transition: background-color var(--motion-base) var(--easing),
      color var(--motion-base) var(--easing);
  }
  .cta:hover {
    background-color: var(--ink);
    color: var(--accent);
  }

  .burger {
    display: none;
    background: transparent;
    border: 0;
    cursor: pointer;
    padding: 0.5rem;
    flex-direction: column;
    gap: 5px;
  }
  .burger .line {
    width: 22px;
    height: 2px;
    background: var(--ink);
    display: block;
    transition: transform var(--motion-base) var(--easing),
      opacity var(--motion-base) var(--easing);
  }
  .burger .line.open:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  .burger .line.open:nth-child(2) {
    opacity: 0;
  }
  .burger .line.open:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .overlay {
    position: fixed;
    inset: 64px 0 0 0;
    background-color: var(--paper);
    padding: 2rem 1.5rem;
    z-index: 49;
  }
  .overlay ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .overlay a {
    font-family: var(--font-serif);
    font-size: var(--type-32);
    color: var(--ink);
    text-decoration: none;
  }
  .overlay .mobile-cta {
    display: inline-block;
    background-color: var(--accent);
    color: var(--ink);
    border: 1px solid var(--ink);
    font-family: var(--font-sans);
    font-size: var(--type-16);
    font-weight: 700;
    padding: 0.75rem 1.25rem;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    .desktop {
      display: none;
    }
    .burger {
      display: flex;
    }
  }
`;
