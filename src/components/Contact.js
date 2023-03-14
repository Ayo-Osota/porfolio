import styled from "styled-components";
import contactImage from "../assets/digital-lifestyle-pana.png"
import { useGlobalContext } from "../context/context";
import { socialMedia } from "../data";

const Contact = () => {
    const {buttonAnimation, buttonMouseLeave} = useGlobalContext();

    return (
        <ContactSection id="contact" className="section-mt container">
            <h1 className="fs-primary-heading ff-header fw-bold text-center">
                Get In Touch If You're Looking For A  <span className="text-accent">Front End Developer</span>
            </h1>
            <div className="even-columns">
                <form action="">
                    <div className="form-control">
                        <input type="text" name="name" placeholder="Enter name" />
                    </div>
                    <div className="form-control">
                        <input type="text" name="email" placeholder="Enter email address" />
                    </div>
                    <div className="form-control">
                        <textarea cols="30" rows="10" type="textarea" name="message" placeholder="Write message" ></textarea>
                    </div>
                    <button onMouseLeave={buttonMouseLeave} onMouseMove={buttonAnimation} type="submit" className="button">Send message</button>
                </form>
                <div>
                    <img src={contactImage} alt="Digital lifestyle" />
                    <p className="fs-500 text-center">
                        You can also reach out to me via social medias just a click below
                    </p>
                    <ul role="list" className="flex social-links-wrapper">
                        {socialMedia.map((socialMedium) => {
                            const { id, icon, link } = socialMedium;
                            return (
                                <li key={id}><a href={link}>{icon}</a></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </ContactSection>
    )
}

const ContactSection = styled.section`
margin-bottom: 3.5rem;

.even-columns {
    margin-top: 2rem;
    align-items: center;
    gap: 2.5rem;  
}

.even-columns > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}

form {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    align-items: flex-start;
    gap: 2rem;
}

input,
textarea {
    width: 100%;
    padding: 2.0625rem 1.5rem;
    font-size: var(--fs-400);
    font-family: var(--ff-primary);
    background: var(--clr-bg-input);
    border: 1px solid #EBE4E4;
}

input:focus,
textarea:focus {
    outline: none;
}

input::placeholder,
textarea::placeholder {
    font-family: var(--ff-primary);
    background: var(--clr-bg-input);
}

.button {
    text-align: center;
    display: inline;
}

textarea {
    resize: none;
}

.social-links-wrapper {
    width: 80%;
    margin-top: 1.375rem;
}

.social-links-wrapper svg {
    font-size: var(--fs-700);
    color: #E9DCE5;
}

@media (min-width: 50em) {
    .even-columns {
        margin-top: 5rem;
        grid-auto-flow: column;
        grid-template-columns: 42% 1fr;
    }

    .button {
        justify-self: flex-start;
    }
  }
`

export default Contact;