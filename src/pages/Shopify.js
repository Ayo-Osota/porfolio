import styled from "styled-components";
import { shopifyArticleContent } from "../data";

const Shopify = () => {
    return (
        <ShopifySection id="contact" className="section-mt container">
            <h1 className="fs-primary-heading ff-header fw-bold text-center">
                Why Shopify?
            </h1>
            <article className="flow">
                {shopifyArticleContent.map((content) => {
                    return (
                        <p>{content}</p>
                    )
                })}
            </article>
        </ShopifySection>
    )
}

const ShopifySection = styled.main`
.fs-primary-heading {
    text-decoration: underline;
    padding-bottom: 1rem;
}
`

export default Shopify;