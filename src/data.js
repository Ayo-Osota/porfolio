// import artsyCover from "./assets/covers/artsy.png";
import musicaCover from "./assets/covers/musica.png";
import archiparkCover from "./assets/covers/archipark.jpeg";
import minimumLivingCostCover from "./assets/covers/minimum-living-cost.png";
import pawCareCover from "./assets/covers/paw-care.jpg";

import pawCareSite from "./assets/site-image/paw-care.jpg";
import artsySite from "./assets/site-image/artsy.jpg";
import minimumLivingCostSite from "./assets/site-image/minimum-living-cost.jpg";
import ultiverseDemo from "./assets/site-image/ultiverse-demo.png";
import boxEks from "./assets/BoxEks.jpg";


import {
    AiOutlineTwitter,
    AiFillLinkedin,
    AiOutlineGithub,
    AiFillInstagram,
    AiOutlineMail
} from "react-icons/ai";

import { BsWhatsapp, BsDiscord } from "react-icons/bs";

const navLinks = [
    {
        id: 1,
        type: "route",
        text: 'Home',
        url: '/',
    },
    {
        id: 2,
        type: "onPage",
        text: 'Projects',
        url: 'https://github.com/Ayo-Osota',
    },
    {
        id: 3,
        type: "route",
        text: 'Shopify',
        url: '/shopify',
    },
    // {
    //     id: 4,
    //     type: "route",
    //     text: 'Playground',
    //     url: '/playground',
    // },
    {
        id: 5,
        type: "onPage",
        text: 'Contact me',
        url: './#contact',
    }
]

const footerMenu = [
    {
        id: 1,
        type: "onPage",
        text: 'About',
        url: './#about',
    },
    {
        id: 2,
        type: "onPage",
        text: 'Projects',
        url: 'https://github.com/Ayo-Osota',
    },
    {
        id: 3,
        type: "route",
        text: 'Shopify',
        url: '/shopify',
    },
    {
        id: 4,
        type: "onPage",
        text: 'Contact me',
        url: './#contact',
    }
]

const socialMedia = [
    {
        id: 1,
        name: "twitter",
        icon: <AiOutlineTwitter />,
        link: "https://twitter.com/messages/compose?recipient_id=843231377264926720"
    },
    {
        id: 2,
        name: "github",
        icon: <AiOutlineGithub />,
        link: "https://github.com/Ayo-Osota"
    },
    {
        id: 3,
        name: "linkedin",
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/ayo-osota/"
    },
    {
        id: 4,
        name: "gmail",
        icon: <AiOutlineMail />,
        link: "mailto:osotaayomikun@gmail.com"
    },
    {
        id: 5,
        name: "whatsapp",
        icon: <BsWhatsapp />,
        link: "https://wa.me/9038866071"
    },
    {
        id: 6,
        name: "discord",
        icon: <BsDiscord />,
        link: "https://discordapp.com/channels/@me/Ayo Osota#2026/"
    },
    {
        id: 7,
        name: "instagram",
        icon: <AiFillInstagram />,
        link: "https://ig.me/m/ayomikun_osota"
    }
]

const projectsno = [
    // {
    //     id: 1,
    //     name: "Artsy",
    //     description: "A photography gallery that serves creators and collectors of art and photography generally. Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.",
    //     stacks: ["React", "javaScript", "css3", "bootstrap"],
    //     coverArt: artsyCover,
    //     projectRepoLink: "",
    //     projectLiveLink: ""
    // },
    {
        id: 7,
        name: "Ultiverse Demo",
        description: "UTILIZING METAFI, UE5, AND WEB3 TECHNOLOGY TO CREATE A SOCIAL AND IMMERSIVE GAMING METAVERSE.",
        stacks: ["Nextjs", "tailwindcss"],
        coverArt: ultiverseDemo,
        projectRepoLink: "https://github.com/Ayo-Osota/UltiVerse-demo",
        projectLiveLink: "https://ultiverse-olive.vercel.app/"
    },
    {
        id: 2,
        name: "Musica",
        description: "Online music streaming UI concept.",
        stacks: ["React", "javaScript", "css3", "bootstrap"],
        coverArt: musicaCover,
        projectRepoLink: "https://github.com/Ayo-Osota/musica",
        projectLiveLink: "https://musica-webapp.vercel.app/"
    },
    {
        id: 3,
        name: "Archipark",
        description: "An eCommerce furniture website for an Architectural company.",
        stacks: ["React", "javaScript", "css3", "bootstrap"],
        coverArt: archiparkCover,
        projectRepoLink: "https://github.com/Ayo-Osota/archipark-store",
        projectLiveLink: "https://archipark-store.netlify.app/"
    },
    {
        id: 4,
        name: "Minimum Living Home",
        description: "Home rental agency website design.The most affortable place to stay in the san franciso bay area.",
        stacks: ["React", "javaScript", "css3", "bootstrap"],
        coverArt: minimumLivingCostCover,
        projectRepoLink: "https://github.com/Ayo-Osota/minimum-living-cost",
        projectLiveLink: "https://minimum-leaving-cost.netlify.app/"
    },
    {
        id: 5,
        name: "Paw care",
        description: "Best Care Service For Your Lovely Fur Friends.",
        stacks: ["React", "javaScript", "css3", "bootstrap"],
        coverArt: pawCareCover,
        projectRepoLink: "https://github.com/Ayo-Osota/paw-friends",
        projectLiveLink: "https://paw-friends99.netlify.app/"
    }
]

const projects = [
    {
        id: 1,
        name: "Gaming",
        description: "A photography gallery that serves creators and collectors of art and photography generally. Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.",
        stacks: ["React", "javaScript", "css3", "bootstrap"],
        coverArt: boxEks,
        projectRepoLink: "",
        projectLiveLink: "https://www.instagram.com/boxeks_gaming/"
    },]

const testimonials = [
    {
        id: "t1",
        name: "Harry Wilson",
        designation: "Photographer",
        siteName: "artsy",
        siteLink: "https://github.com/Ayo-Osota/artsy2",
        siteImage: artsySite,
        feedback: "I had the pleasure of working with Ay on a recent web development project, and I must say, I was thoroughly impressed with his skills and work ethic. He has an excellent understanding of frontend technologies, and his attention to detail and commitment to delivering high-quality work is truly admirable. Ay is a great communicator, and he always kept me informed about the project's progress. I would highly recommend him to anyone looking for a top-notch frontend developer.",
        pfp: "https://res.cloudinary.com/dqtpsjrzn/image/upload/v1672530403/samples/people/smiling-man.jpg"
    },
    {
        id: "t2",
        name: "Adewale Onakoya",
        designation: "Tenant",
        siteName: "minimum living cost",
        siteLink: "https://minimum-leaving-cost.netlify.app/",
        siteImage: minimumLivingCostSite,
        feedback: "Working with Ayomikun was an absolute pleasure. He was able to take our design concepts and turn them into a beautiful, responsive website that exceeded our expectations. Ayomikun has an excellent eye for design and a deep understanding of frontend technologies. He is a great collaborator and always willing to go the extra mile to ensure that the project is a success. I would highly recommend Ayomikun to anyone looking for a talented and dedicated frontend developer.",
        pfp: "https://res.cloudinary.com/dqtpsjrzn/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1672530407/samples/people/bicycle.jpg"
    },
    {
        id: "t3",
        name: "Lord Garry",
        designation: "Designer",
        siteName: "paw care",
        siteLink: "https://paw-friends99.netlify.app/",
        siteImage: pawCareSite,
        feedback: "Ayomikun's attention to detail and expertise in frontend development are truly impressive, and they are always willing to provide valuable insights and recommendations to improve the project's overall performance. Ayomikun is an excellent communicator, and they always keep me updated on the project's progress.",
        pfp: "https://res.cloudinary.com/dqtpsjrzn/image/upload/v1672530405/samples/people/boy-snow-hoodie.jpg"
    }
]

const shopifyArticleContent = [
    "In today's digital age, having an online presence is essential for any business that wants to thrive and reach a wider audience. This is especially true for merchants and e-commerce business owners, who can greatly benefit from putting their business online and having an online store. In this article, we will discuss why merchants should put their business online and the benefits they stand to gain from doing so.",
    "Firstly, having an online store means that merchants can reach a wider audience than they would through a brick and mortar store. With the rise of e-commerce, more and more consumers are choosing to shop online, and having an online store allows merchants to tap into this growing market. In fact, according to a report by Statista, global e-commerce sales are projected to reach $6.5 trillion by 2023.",
    "In addition to reaching a wider audience, having an online store also allows merchants to offer their products and services 24/7, which is convenient for customers who may not have the time to shop during regular business hours. This can lead to increased sales and revenue for merchants.",
    "Another benefit of having an online store is that it allows merchants to track customer behavior and preferences through the use of analytics tools. This information can be used to improve the customer experience and tailor marketing efforts to specific customer segments.",
    "Now, if you're convinced that putting your store online is the way to go, why should you choose Shopify as your e-commerce platform? Shopify is a leading e-commerce platform that offers a wide range of features and tools to help merchants create and manage their online store with ease.",
    "Shopify is an Easy-to-use eCommerce platform for the average user, not just skilled developers. The admin dashboard is user-friendly and the multiple features are self-explanatory. However, to alleviate any stress, you may consider hiring experts and adding them as staff to assist you with any tasks on Shopify.",
    "Another major advantage of shopify is it's relatively low startup costs, with monthly subscription fees as low as $29 per month. With access to technologies like Google Analytics, Oberlo,  Facebook Shops, and Remix.js, etc.",
    "While Shopify has over  hundred beautiful and customizable free and paid themes themes, developing your own store can offer several advantages. By developing your own store, you can customize every aspect of your website to your liking, from the layout and design to the features and functionality. This can result in a more unique and tailored customer experience that sets your store apart from competitors.",
    "Additionally, by building your own store, you have full control over the platform's performance and can optimize it to meet your specific needs. If you do not have the expertise to develop your own theme, Shopify offers over a hundred beautiful and customizable free and paid themes that you can choose from.",
    "Shopify also offers a range of built-in marketing tools such as a logo maker, QR code generator, business card maker, and shipping label templates, which can help merchants save time and money on marketing efforts. On top of that, Shopify offers a range of shop solutions such as enterprise online store, Shopify flow and scripts, multichannel e-commerce, launchpad, international e-commerce, Shopify POS (which makes it easy to sell in-person as well as online), headless e-commerce, wholesale, and B2B e-commerce, which can help merchants customize their online store to fit their specific business needs.",
    "Furthermore, Shopify syncs with hundreds of certified app technologies that work seamlessly with the platform for wider consumer reach and an enhanced customer experience. These apps include Refersion (affiliate marketing), Justuno (conversion optimization), and Loop & Returning (for managing returns and exchanges).",
    "What's more? You can find solutions to any issues you might face from Shopify's award winning support team. Additionally, your store is in safe hands because Shopify offers safety and reliability with security measures in place to protect sensitive customer data."
]

const codePenData = [
    {
        id: "1",
        hash: "ZEMRPNg",
        user: "ayo_osota",
        title: "Spotlight button"
    },
    {
        id: "2",
        hash: "vYzQRPB",
        user: "ayo_osota",
        title: "Vibrating button"
    }
]

export { navLinks, socialMedia, projects, footerMenu, testimonials, shopifyArticleContent, codePenData }