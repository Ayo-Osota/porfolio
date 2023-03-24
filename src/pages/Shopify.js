import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import styled from "styled-components";
import { shopifyArticleContent } from "../data";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
    type: 'column2d',
    width: "100%",
    height: 600,
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Retail e-commerce sales worldwide from 2014 to 2026",
            "subCaption": "(in billion U.S. dollars)",
            "xAxisName": "Year",
            "yAxisName": "Amount",
            "theme": "fusion"
        },
        "data": [
            {
                "label": "2014",
                "value": "1336"
            },
            {
                "label": "2015",
                "value": "1548"
            },
            {
                "label": "2016",
                "value": "1845"
            },
            {
                "label": "2017",
                "value": "2382"
            },
            {
                "label": "2018",
                "value": "2982"
            },
            {
                "label": "2019",
                "value": "3351"
            },
            {
                "label": "2020",
                "value": "4248"
            },
            {
                "label": "2021",
                "value": "5211"
            },
            {
                "label": "2022",
                "value": "5717"
            },
            {
                "label": "2023",
                "value": "6310"
            },
            {
                "label": "2024",
                "value": "6913"
            },
            {
                "label": "2025",
                "value": "7538"
            },
            {
                "label": "2026",
                "value": "8148"
            }
        ]
    },
};



const Shopify = () => {
    return (
        <ShopifySection id="contact" className="section-mt container">
            <h1 className="fs-primary-heading ff-header fw-bold text-center">
                Why Shopify?
            </h1>
            <article className="flow">
                <p>
                    An online presence today is essential for any business that intends to progress and increase its presence at a worldwide level.  There are several benefits of having an online store and one of them is <b>an increase in visibility and accessibility</b>. An online store allows you to be able to reach a wider audience and allows your business to be easily found by customers. It also allows your customers to have 24-hour access to your business. With the rise of e-commerce, more and more consumers are choosing to shop online, and having an online store allows merchants to tap into this growing market. In fact, according to a report by Statista, global e-commerce sales are projected to reach $6.5 trillion by 2023.
                </p>
                <ReactFC {...chartConfigs} />
                <p>
                    In 2021, retail e-commerce sales amounted to approximately 5.2 trillion U.S. dollars worldwide. This figure is forecast to grow by 56 percent over the next years, reaching about 8.1 trillion dollars by 2026.
                </p>
                <p>
                    Another benefit of having an online store is <b>an increase in your business's revenue</b>. Since an online store connects you to customers in a way that physical stores can't, you have the added benefit of being able to sell your product any time any day anywhere in the world. You can even sell your product when you aren't actively working via automation.
                </p>
                <p>
                    An online store also <b>reduces your utility bills while -at the same time- giving you added flexibility</b>. With an online store, you don't have to pay for rent or staff and you have the advantage of conducting your business from anywhere in the world using your laptop or mobile device.
                </p>
                <p>
                    Finally, having an online store allows you to <b>tailor your store to each customer that visits or buy from you</b> . Using cookies, you can track a customer's behavior and preferences in real-time. This can lead to a higher conversion rate and increased customer loyalty.
                </p>
                <p>
                    Several online stores can help you increase your reach and audience. <b>Shopify</b> is one of the leading and best online stores out there for merchants to use. With their features and capabilities, you can take your business online without any hassle.
                </p>
                <p>
                    There are a lot of things that Shopify allows you to do in your store. One of them includes the <b>benefit of customization and setup</b>. This feature includes themes, design, relevant keywords, and product descriptions. This allows your business to stand out and reflect your brand. It also allows your website to be visually appealing.
                </p>
                <p>
                    Every business aims to make a profit and Shopify facilitates the profit-making process by including <b>a secure and smooth payment process</b>  like Paypal and Applepay that allows you to receive payment from anywhere in the world. It also gives you a range of shipping fulfilments and options and allows you to integrate third-party shipping providers to save time.
                </p>
                <p>
                    Although Shopify is relatively easy to use, you might need the help of trained professionals to help you build and design your website.
                </p>
                <footer>
                    <h5>References</h5>
                    <ol>
                        <li>
                            Shopify.(2020).WhatisShopify?Retrievedfrom <a href="https://www.shopify.ca/what-is-shopify">www.shopify.ca/what-is-shopify</a>
                        </li>
                        <li>
                            Number of active Shopify stores from 2015 to 2019. Retrieved from <a href="https://www.statista.com/statistics/756041/number-of-active-shopify-stores/">www.statista.com/statistics/756041/number-of-active-shopify-stores/</a>
                        </li>
                        <li>
                            Statista (2020).
                        </li>
                        <li>
                            Number of global online shoppers from 2014 to 2021. Retrieved from <a href="https://www.statista.com/statistics/325578/number-of-online-shoppers-worldwide/">www.statista.com/statistics/325578/number-of-online-shoppers-worldwide/ Appendix</a>
                        </li>
                    </ol>
                </footer>
            </article>
        </ShopifySection>
    )
}

const ShopifySection = styled.main`
.fs-primary-heading {
    text-decoration: underline;
    padding-bottom: 1rem;
}

article > footer {
    margin-top: 3rem;
}

li {
    margin-left: 1.1875rem;
}
`

export default Shopify;