import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Shashank Poola",
  initials: "SP",
  url: "https://github.com/shashank-poola",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india", 
  summary:
    "I build things that actually work. Currently going deep on AI agents, multi-step reasoning, RAG pipelines, and autonomous systems. Background in full-stack (Next.js, Node.js, TypeScript) with a focus on distributed, real-time architectures. Shipped products from 0→1. Now pointing everything at AI. ",
  avatarUrl: "/xprofile.jpg",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "shashankpoola123@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/shashank-poola",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shashankpoola",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/shashankpoola",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:shashankpoola123@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      resume: {
        name: "Resume",
        url: "/resume.pdf",
        icon: Icons.file,
        navbar: true,
      },
    },
  },
} as const;
