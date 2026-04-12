import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Sora as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),

  title: {
    default: "Shashank Poola – Full Stack Developer | React, Node.js, TypeScript",
    template: `%s | Shashank Poola`,
  },

  description:
    "Shashank Poola is a full stack developer building real-time applications using React, Next.js, Node.js, Redis and PostgreSQL.",

  keywords: [
    "Shashank Poola",
    "Shashank Poola developer",
    "Full Stack Developer",
    "Full stack AI developer",
    "Building AI Agents",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Real-time systems",
  ],

  authors: [{ name: "Shashank Poola", url: "https://shasha.ink" }],

  alternates: {
    canonical: "https://shasha.ink",
  },

  icons: {
    icon: "/xprofile.jpg",
    shortcut: "/xprofile.jpg",
    apple: "/xprofile.jpg",
  },

  openGraph: {
    title: "Shashank Poola – Full Stack Developer",
    description:
      "Portfolio of Shashank Poola, a full stack developer building scalable real-time systems.",
    url: DATA.url,
    siteName: "Shashank Poola",

    images: [
      {
        url: "/icons/shashank-poola-portrait.jpeg",
        width: 1200,
        height: 630,
        alt: "Shashank Poola Full Stack Developer",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shashank Poola – Full Stack Developer",
    images: ["/icons/shashank-poola-portrait.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "Jus8_A2xvu_BBPr4A3t422FclD96lF480WajOzJhDEo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PSJJ84TVRK"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PSJJ84TVRK');
          `
        }} />

        {/* Structured Data for SEO */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",

              name: "Shashank Poola",
              url: "https://shasha.ink",

              image: "https://shasha.ink/icons/shashank-poola-portrait.jpeg",

              jobTitle: "Full Stack Developer",

              description:
                "Full stack developer specializing in React, Next.js, Node.js and real-time systems.",

                sameAs: [
                  "https://github.com/shashank-poola",
                  "https://www.linkedin.com/in/shashankpoola",
                  "https://x.com/shashankpoola",
                  "https://instagram.com/shashankpoola"
                ],

              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "WebSockets",
                "Redis",
                "PostgreSQL",
                "Real-time trading systems"
              ]
            }),
            }}
            />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased w-full overflow-x-hidden",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
