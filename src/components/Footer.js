import { Link } from "react-router-dom";
import styled from "styled-components";
import { footerMenu } from "../data";

const Footer = () => {
    return (
        <FooterSection className="section-mt bg-dark">
            <div className="container">
                <h3 className='fs-500 ff-header text-neutral-100'>
                    Ayo Osota
                </h3>
                <nav className="footer-nav">
                    <ul role="list" className='flex'>
                        {footerMenu.map((menu) => {
                            const { id, type, text, url } = menu;
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
            </div>
            <div>
                <p className="container text-neutral-100">
                    Copyright © {new Date().getFullYear()} Ayomikun LLC All right reserved
                </p>
            </div>
        </FooterSection>
    )
}

const FooterSection = styled.footer`
div.container {
    padding: 2.5rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.footer-nav .flex {
    gap: 0.5rem;
}

.nav-link {
    color: var(--clr-neutral-100);
}

.nav-link::after {
    background-color: var(--clr-neutral-100);
}

div:last-child {
    border-top: 1px solid var(--clr-neutral-100);
}

div:last-child > p {
    padding: 2.5rem 0 0.9375rem;
    font-size: var(--fs-nav);
}
`

export default Footer;