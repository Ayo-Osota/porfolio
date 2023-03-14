import artsyCover from "./assets/covers/artsy.png";
import musicaCover from "./assets/covers/musica.png";
import archiparkCover from "./assets/covers/archipark.jpeg";
import minimumLivingCostCover from "./assets/covers/minimum-living-cost.png";
import pawCareCover from "./assets/covers/paw-care.jpg";

import pawCareSite from "./assets/site-image/paw-care.jpg";


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
        url: '#projects',
    },
    // {
    //     id: 3,
    //     type: "route",
    //     text: 'Shopify',
    //     url: '/shopify',
    // },
    {
        id: 4,
        type: "onPage",
        text: 'Contact me',
        url: '#contact',
    }
]

const footerMenu = [
    {
        id: 1,
        type: "onPage",
        text: 'About',
        url: '#about',
    },
    {
        id: 2,
        type: "onPage",
        text: 'Projects',
        url: '#projects',
    },
    // {
    //     id: 3,
    //     type: "route",
    //     text: 'Shopify',
    //     url: '/shopify',
    // },
    {
        id: 4,
        type: "onPage",
        text: 'Contact me',
        url: '#contact',
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

const projects = [
    {
        id: 1,
        name: "Artsy",
        description: "A photography gallery that serves creators and collectors of art and photography generally. Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.",
        stacks: ["React", "javaScript", "css3", "bootstrap"],
        coverArt: artsyCover,
        projectRepoLink: "",
        projectLiveLink: ""
    },
    {
        id: 2,
        name: "Musica",
        description: "Online music streaming UI concept.",
        stacks: ["React", "javaScript", "css3", "bootstrap"],
        coverArt: musicaCover,
        projectRepoLink: "",
        projectLiveLink: ""
    },
    {
        id: 3,
        name: "Archipark",
        description: "An eCommerce furniture website for an Architectural company.",
        stacks: ["React", "javaScript", "css3", "bootstrap"],
        coverArt: archiparkCover,
        projectRepoLink: "",
        projectLiveLink: ""
    },
    {
        id: 4,
        name: "Minimum Living Home",
        description: "Home rental agency website design.The most affortable place to stay in the san franciso bay area.",
        stacks: ["React", "javaScript", "css3", "bootstrap"],
        coverArt: minimumLivingCostCover,
        projectRepoLink: "",
        projectLiveLink: ""
    },
    {
        id: 5,
        name: "Paw care",
        description: "Best Care Service For Your Lovely Fur Friends.",
        stacks: ["React", "javaScript", "css3", "bootstrap"],
        coverArt: pawCareCover,
        projectRepoLink: "",
        projectLiveLink: ""
    }
]

const testimonials = [
    {
        id: "t1",
        name: "Harry Wilson",
        designation: "Property Owner",
        siteName: "musica",
        siteLink: "",
        siteImage: pawCareSite,
        feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.",
        pfp: "https://res.cloudinary.com/dqtpsjrzn/image/upload/v1672530403/samples/people/smiling-man.jpg"
    },
    {
        id: "t2",
        name: "Sofiat Guy",
        designation: "Tenant",
        siteName: "musica",
        siteLink: "",
        siteImage: pawCareSite,
        feedback: "I want with this review to describe my personal experience after renting an apartment through MrLodge during the second semester of 2022. The price was decent regarding the service of MrLodge and the quality of the apartment. My apartment was at Perchastraße, in a recently constructed building.",
        pfp: "https://res.cloudinary.com/dqtpsjrzn/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1672530407/samples/people/bicycle.jpg"
    },
    {
        id: "t3",
        name: "Ayo Osota",
        designation: "Real Estate Investor",
        siteName: "musica",
        siteLink: "",
        siteImage: pawCareSite,
        feedback: "It was clean, safe, quiet, spacious, thermally insulated, very warm during freezing temperatures of December (down to -14 Celsius during the night), cool during the warmer months of summer. It had a great view of a quiet green garden and a wonderful balcony.",
        pfp: "https://res.cloudinary.com/dqtpsjrzn/image/upload/v1672530405/samples/people/boy-snow-hoodie.jpg"
    }
]

export { navLinks, socialMedia, projects, footerMenu, testimonials }