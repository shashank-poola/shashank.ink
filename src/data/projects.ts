import { LucideIcon } from "lucide-react";

export const PROJECTS_DATA = [
  {
    title: "TradeX",
    href: "https://github.com/shashank-poola/exness-v3",
    active: true,
    description:
      "Real-time crypto trading platform using live Backpack market data, supporting leveraged long/short trades, slippage control, stop loss, and PnL tracking.",
    technologies: [
      "Typescript",
      "ReactJs",
      "Bun",
      "ExpressJS",
      "Redis streams",
      "Postgresql",
      "Docker",
      "MongoDb",
    ],
    links: [
      {
        type: "Website",
        href: "https://tradex.foo",
        icon: "globe",
      },
      {
        type: "Github",
        href: "https://github.com/shashank-poola/exness-v3",
        icon: "github",
      },
    ],
    image: "/projects/tradex.png",
    video: "",
  },
  {
    title: "Rivet(n8n)",
    href: "https://github.com/shashank-poola/rivet",
    active: true,
    description:
      "Rivet is a lightweight automation platform and n8n alternative built to simplify workflow creation. Create AI automation using manual triggers, Email, Telegram, AI bots, and Web Search integrations.",
    technologies: [
      "Typescript",
      "Reactflow",
      "Redis Queue",
      "ReactJS",
      "Gemini",
      "Turborepo",
      "Docker",
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/shashank-poola/rivet",
        icon: "github",
      },
    ],
    image: "/projects/rivet.png",
    video: "",
  },
  {
    title: "TradeX(Mobile)",
    href: "https://github.com/shashank-poola/exness-v3.git",
    active: true,
    description:
      "A crypto trading application built with React Native and Expo, featuring leverage trading, stop-loss, take-profit, and live P&L tracking. Designed for fast execution and a smooth, professional trading experience on mobile devices.",
    technologies: [
      "React Native",
      "Expo",
      "Bun",
      "Typescript",
      "Redis",
      "Prisma",
      "Postgresql",
      "Docker",
    ],
    links: [
      {
        type: "Website",
        href: "https://www.youtube.com/watch?v=XcdYgKJN1LI",
        icon: "globe",
      },
      {
        type: "Github",
        href: "https://github.com/shashank-poola/exness-v3",
        icon: "github",
      },
    ],
    image: "",
    video: "/projects/exnessvideo.mp4",
  },
  {
    title: "Plutolab",
    href: "#",
    active: true,
    description:
      "AI-powered platform that generates full-stack applications from simple prompts, Built to turn ideas into production-ready software within seconds.",
    technologies: [
      "NextJS",
      "Typescript",
      "turborepo",
      "bun",
      "Gemini",
      "Openrouter",
      "Docker",
      "ExpressJS"
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/shashank-poola/plutolab",
        icon: "github",
      },
    ],
    image: "/projects/plutolab.png",
    video: "",
  },
  {
    title: "Tipfinity",
    href: "https://github.com/shashank-poola/tipfinity-v2",
    active: true,
    description:
      "Tipfinity is an instant creator tipping platform built on Solana, allowing fans to support creators in seconds with near-zero fees.",
    technologies: [
      "Solana",
      "NextJS",
      "Bun",
      "Typescript",
      "Prisma",
      "Postgresql",
      "Docker",
    ],
    links: [
      {
        type: "Website",
        href: "https://tipfinity.xyz",
        icon: "globe",
      },
      {
        type: "Github",
        href: "https://github.com/shashank-poola/tipfinity",
        icon: "github",
      },
    ],
    image: "/projects/tipfinity.png",
    video: "",
  },
  {
    title: "AgentOS",
    href: "https://github.com/shashank-poola/agentos.git",
    active: true,
    description:
      "AgentOS is an AI-powered search and knowledge platform that connects to Google Drive, indexes user files into a vector database, and enables natural-language search across personal documents and the web from one place.",
    technologies: [
      "NodeJS",
      "Typescript",
      "Bun",
      "NextJS",
      "Gemini",
      "Serper",
      "Qdrant",
    ],
    links: [
      {
        type: "Website",
        href: "https://tryagentos.vercel.app",
        icon: "globe",
      },
      {
        type: "Github",
        href: "https://github.com/shashank-poola/agentos.git",
        icon: "github",
      },
    ],
    image: "/projects/agentos.png",
    video: "",
  },
  {
    title: "Tidder - Social Media Platform ",
    href: "https://github.com/shashank-poola/tidder.git",
    active: true,
    description:
      "Tidder is a Reddit-inspired social media app built using Expo and React Native, designed for community-based discussions, content sharing, and mobile-first user interaction with a clean and responsive experience.",
    technologies: [
      "React Native",
      "Expo",
      "Typescript",
      "Prisma",
      "Postgresql",
      "Docker",
    ],
    links: [
      {
        type: "Website",
        href: "https://www.tella.tv/video/tidder-reddit-style-mobile-application-a84g",
        icon: "globe",
      },
      {
        type: "Github",
        href: "https://github.com/shashank-poola/tidder.git",
        icon: "github",
      },
    ],
    image: "",
    video: "/projects/tidder.mp4",
  },
  {
    title: "HighlightText",
    href: "https://github.com/shashank-poola/highlightnow",
    active: true,
    description:
      "HighlightText is a simple web extension that lets you highlight text on any website in multiple colors for quick reference.Menu has colors (different colors), Copy, Export option and clear all section.",
    technologies: [
      "Typescript",
      "Chrome Extension",
      "Javascript",
      "Bun"
    ],
    links: [
      {
        type: "Website",
        href: "https://chromewebstore.google.com/detail/ecpddieccnjppapnicmfoddgbedcadgb?utm_source=item-share-cb",
        icon: "globe",
      },
      {
        type: "Github",
        href: "https://github.com/shashank-poola/highlightnow",
        icon: "github",
      },
    ],
    image: "/projects/highlighttext.png",
    video: "",
  },
  {
    title: "Rxdecode",
    href: "https://rxdecode.shasha.ink",
    active: true,
    description:
      "AI-powered prescription generator using Gemini that explains medicines based on doctor prescription, Provides detailed medicine information including usage, dosage, side effects, precautions, and warnings.",
    technologies: [
      "ReactJS",
      "Typescript",
      "NodeJS",
      "npm",
      "Google gemini"
    ],
    links: [
      {
        type: "Website",
        href: "https://rxdecode.shasha.ink",
        icon: "globe",
      },
      {
        type: "Github",
        href: "https://github.com/shashank-poola/rxdecode-next",
        icon: "github",
      },
    ],
    image: "/projects/rxdecode.png",
    video: "",
  },
  {
    title: "Nexora - GSAP Animation",
    href: "https://nexora.shasha.ink",
    active: true,
    description:
      "A modern web application featuring GSAP animations and built with React. Showcases smooth animations and interactive user experience.",
    technologies: [
      "Javascript",
      "ReactJS",
      "Appwrite",
      "ExpressJS",
      "npm"
    ],
    links: [
      {
        type: "Website",
        href: "https://nexora.shasha.ink",
        icon: "globe",
      },
      {
        type: "Github",
        href: "https://github.com/shashank-poola/nexora",
        icon: "github",
      },
    ],
    image: "/projects/nexora.png",
    video: "",
  },
] as const;
