import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Shashank Poola",
  initials: "SP",
  url: "https://github.com/shashank-poola",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india", 
  summary:
    "engineer, polymath, shipping from 0→1\ngoing deep in AI agents, RAG pipelines & autonomous systems\nfull-stack in Next.js, Node.js, TypeScript",
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
