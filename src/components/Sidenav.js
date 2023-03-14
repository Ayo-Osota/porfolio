import { navLinks, socialMedia } from "../data";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Sidenav = ({ isSidebarOpen }) => {
    return (
        <SidebarContainer>
            <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
                <nav>
                    <ul role="list" className='flex'>
                        {navLinks.map((navLink) => {
                            const { id, type, text, url } = navLink;
                            return (
                                <li key={id}>
                                    {type === "route" ?
                                        <Link className='nav-link' to={url}>{text}</Link> :
                                        <a className='nav-link' href={url}>{text}</a>
                                    }
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <nav className="nav_social-media">
                    <ul role="list" className="flex">
                        {socialMedia.map((socialMedium) => {
                            const { id, icon, link } = socialMedium;
                            return (
                                <li key={id}>
                                    <a href={link}>{icon}</a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </aside>
        </SidebarContainer>
    )
}

const SidebarContainer = styled.div`
  text-align: left;
  background-color: var(--clr-bg-light);

  .sidebar {
    padding: 7.5rem 0 0;
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    height: 100%;
    background: var(--clr-bg-light);
    transition: 0.3s;
    transform: translate(100%);
    z-index: -1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 99;
  }

  nav:first-of-type > ul {
    flex-direction: column;
    justify-content: space-between;
    gap: 0;
    width: 100%;
  }

  .nav-link {
    font-size: var(--fs-400);
    width: 100%;
    padding: 2rem;
    border-bottom: 1px solid var(--clr-bg-dark);
  }

  nav > ul li:first-child .nav-link {
    border-top: 1px solid var(--clr-bg-dark);
  }

  .nav-link::after {
    display: none;
  }

  .nav_social-media {
    padding: 1.5rem;
    border-top: 1px solid var(--clr-bg-dark);
  }

  .nav_social-media ul li a {
    color: var(--clr-bg-dark);
    font-size: var(--fs-500);
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidenav;