import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { navLinks } from '../data';

const cls = { open: "open", close: "close" };
let btnClass = cls.open;

const Navbar = ({ isSidebarOpen, toggleSidebar }) => {
    const hamburgerButton = useRef(null);

    const animateHamburger = () => {
        if (!isSidebarOpen) {
            hamburgerButton.current.classList.remove(btnClass);
            btnClass = cls.close;
        } else {
            hamburgerButton.current.classList.remove(btnClass);
            btnClass = cls.open;
        }

        void hamburgerButton.current.offsetWidth;
        hamburgerButton.current.classList.add(btnClass);
    };

    useEffect(() => {
        animateHamburger();
    });

    return (
        <Topnav>
            <div className='container'>
                <h3 className='fs-500 ff-header'>
                    Ayo Osota
                </h3>
                <nav className='display-sm-none'>
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
                <button
                    ref={hamburgerButton}
                    onClick={toggleSidebar}
                    className='hamburger-icon display-lg-none'
                    type='button'
                >
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </button>
            </div>
        </Topnav>
    )
}

export default Navbar;

const Topnav = styled.div`

// background-color:#f8f7f3;
// position: fixed;
// top: 0;
// left: 0;
width: 100%;
// display: flex;

.container {
padding: 2.5rem 0;
display: grid;
grid-auto-flow: column;
grid-template-columns: 1fr 1fr;
}
nav > ul.flex {
    gap: 0.625rem;
}

@media (max-width: 50em) {
.container {
    display: flex;
    justify-content: space-between;
  }
}
`