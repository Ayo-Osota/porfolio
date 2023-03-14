import artsyCover from "./assets/covers/artsy.png";
import musicaCover from "./assets/covers/musica.png";
import archiparkCover from "./assets/covers/archipark.jpeg";
import minimumLivingCostCover from "./assets/covers/minimum-living-cost.png";
import pawCareCover from "./assets/covers/paw-care.jpg";


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

export { navLinks, socialMedia, projects, footerMenu }