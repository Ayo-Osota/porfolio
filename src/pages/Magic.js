import styled from "styled-components";
import { codePenData } from "../data";
import Codepen from "react-codepen-embed";

const Magic = () => {

    return (
        <MagicSection id="contact" className="section-mt container">
            <h1 className="fs-primary-heading ff-header fw-bold text-center">
                Creative Playground
            </h1>
            <p className="fs-400 text-center">
                Unleash your creativity with my interactive animations and code snippets.
            </p>
            <div className="codepen-wrapper flow">
                {codePenData.map((datum) => {
                    const { id, hash, user, title } = datum;
                    return (
                        <div>
                            <h3 className="fs-700">{title}</h3>
                            <Codepen
                                key={id}
                                hash={hash}
                                user={user}
                                defaultTab="result"
                                preview={false}
                                editable={true}
                                title={title}
                            />
                        </div>
                    )
                })
                }
            </div>
        </MagicSection>
    )
}

const MagicSection = styled.main`
.codepen-wrapper {
    --flow-spacer: 3rem;
    
    margin-top: 3rem;
}


`

export default Magic;