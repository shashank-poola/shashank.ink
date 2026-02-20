import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Shashank Poola",
  initials: "SP",
  url: "https://github.com/shashank-poola",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india", 
  summary:
    "I’m a Full-Stack developer with hands-on experience taking products from 0 → 1. I enjoy building fast, reliable, and user-focused web applications. I work comfortably across both frontend and backend, with a strong focus on clean architecture, better UI/UX execution.",
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
