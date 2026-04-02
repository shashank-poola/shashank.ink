"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { WORK_DATA } from "@/data/work";
import { EDUCATION_DATA } from "@/data/education";
import { PROJECTS_DATA } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import GitHubContributions from "@/components/github-contributions";
import BlogSection from "@/components/blog-section";
import { Icons } from "@/components/icons";
import { Mail, Calendar, MessageCircle, FileText } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import { useState, useState as ReactUseState } from "react";

const iconMap: Record<string, React.ReactNode> = {
  github: <Icons.github className="size-3" />,
  globe: <Icons.globe className="size-3" />,
};

const projectsWithIcons = PROJECTS_DATA.map(project => ({
  ...project,
  links: project.links?.map(link => ({
    ...link,
    icon: iconMap[link.icon as keyof typeof iconMap] || link.icon,
  })),
}));

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  return (
    <div className="relative min-h-[100dvh]">
      {/* Vertical Layout Guides */}
      <div
        className="fixed inset-y-0 pointer-events-none z-0"
        style={{
          left: 'max(1rem, calc((100% - 48rem) / 2))',
          width: 'min(calc(100% - 2rem), 48rem)',
        }}
      >
        <div className="h-full w-full relative">
          <div 
            className="absolute left-0 top-0 bottom-0 w-px dark:hidden"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='1' height='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='0' y2='12' stroke='%23e5e7eb' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat-y',
            }}
          />
          <div 
            className="absolute left-0 top-0 bottom-0 w-px hidden dark:block"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='1' height='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='0' y2='12' stroke='%23374151' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat-y',
            }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-px dark:hidden"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='1' height='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='0' y2='12' stroke='%23e5e7eb' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat-y',
            }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-px hidden dark:block"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='1' height='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='0' y2='12' stroke='%23374151' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat-y',
            }}
          />
        </div>
      </div>
      
      <main className="relative flex flex-col min-h-[100dvh] max-w-3xl mx-auto py-12 sm:py-20 z-10">
        <div 
          className="mb-8 h-px w-screen dark:hidden"
          style={{
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='12' y2='0' stroke='%23e5e7eb' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
          }}
        />
        <div 
          className="mb-8 h-px w-screen hidden dark:block"
          style={{
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='12' y2='0' stroke='%23374151' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
          }}
        />
        <div className="px-6">
        {/* Hero Section */}
        <section id="hero" className="mb-2">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar className="size-20 border-2 border-gray-200 dark:border-gray-800 rounded-lg">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="absolute bottom-6 right-0 translate-x-1/4 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 cursor-pointer"></div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-sm font-medium">Available for work</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <BlurFadeText
                    className="text-xl font-bold tracking-tighter"
                    delay={BLUR_FADE_DELAY * 2}
                    yOffset={8}
                    text={DATA.name}
                  />
                  <p className="text-muted-foreground text-base -mt-1">Full stack developer</p>
                </div>
              </div>
            </div>
          </BlurFade>
        </section>

        {/* About Section */}
        <section id="about" className="mb-8">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="space-y-3">
              <Markdown className="prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert [&_p:first-of-type]:mt-0">
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </section>

        {/* CTA Buttons */}
        <section id="cta" className="mb-8">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="flex flex-wrap gap-2">
              <Button asChild size="default" className="rounded-full text-sm">
                <Link href={DATA.contact.social.X.url}>
                  <Icons.x className="mr-1 h-4 w-4" />
                  Message on X
                </Link>
              </Button>
              <Button asChild variant="outline" size="default" className="rounded-full text-sm">
                <Link href="https://www.cal.eu/shashankpoola/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-1 h-4 w-4" />
                  Book a Call
                </Link>
              </Button>
            </div>
          </BlurFade>
        </section>
        </div>

        <div 
          className="mb-8 h-px w-screen dark:hidden"
          style={{
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='12' y2='0' stroke='%23e5e7eb' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
          }}
        />
        <div 
          className="mb-8 h-px w-screen hidden dark:block"
          style={{
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='12' y2='0' stroke='%23374151' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
          }}
        />

      <div className="px-6">
        {/* Social Links & GitHub Contributions Section */}
        <section id="socials" className="mb-8">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold mb-4">
              Here are my <span className="font-bold">socials</span>
            </h2>
          </BlurFade>

          {/* Social Links */}
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="flex flex-wrap gap-2 mb-4">
              <Button asChild variant="outline" size="default" className="rounded-full text-sm">
                <Link
                  href={DATA.contact.social.GitHub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.github className="mr-1 h-3 w-3" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" size="default" className="rounded-full text-sm">
                <Link
                  href={DATA.contact.social.X.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.x className="mr-1 h-4 w-4" />
                  Twitter
                </Link>
              </Button>
              <Button asChild variant="outline" size="default" className="rounded-full text-sm">
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.linkedin className="mr-1 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
              <Button asChild variant="outline" size="default" className="rounded-full text-sm">
                <Link href="mailto:shashankpoola123@gmail.com" target="_blank">
                  <Mail className="mr-1 h-4 w-4" />
                  Mail
                </Link>
              </Button>
              <Button asChild variant="outline" size="default" className="rounded-full text-sm">
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-1 h-4 w-4" />
                  Resume
                </Link>
              </Button>
            </div>
          </BlurFade>

          {/* GitHub Contributions */}
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="w-full">
              <GitHubContributions username="shashank-poola" />
            </div>
          </BlurFade>
        </section>
        </div>

        <div 
          className="mb-8 h-px w-screen dark:hidden"
          style={{
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='12' y2='0' stroke='%23e5e7eb' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
          }}
        />
        <div 
          className="mb-8 h-px w-screen hidden dark:block"
          style={{
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='12' y2='0' stroke='%23374151' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
          }}
        />

      <div className="px-6">
        {/* Work Experience Section */}
        <section id="work" className="mb-8">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-xl font-bold mb-4">Work Experience</h2>
          </BlurFade>
          <div className="space-y-3">
            {WORK_DATA.map((work, id) => (
              <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 11 + id * 0.05}>
                <ResumeCard
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        </div>

        <div 
          className="mb-8 h-px w-screen dark:hidden"
          style={{
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='12' y2='0' stroke='%23e5e7eb' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
          }}
        />
        <div 
          className="mb-8 h-px w-screen hidden dark:block"
          style={{
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='12' y2='0' stroke='%23374151' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
          }}
        />

      <div className="px-6">
        {/* Projects Section */}
        <section id="projects" className="mb-8">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 className="text-xl font-bold mb-4">Projects</h2>
          </BlurFade>
          {/** LIMIT TO 4 PROJECTS INITIALLY; SHOW ALL IF showAllProjects IS TRUE **/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(showAllProjects ? projectsWithIcons : projectsWithIcons.slice(0, 4)).map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 13 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>

          {/** Show 'View All' button when collapsed **/}
          {!showAllProjects && projectsWithIcons.length > 4 && (
            <div className="flex justify-center mt-4">
              <Button
                onClick={() => setShowAllProjects(true)}
                variant="outline"
                size="default"
                className="rounded-full"
              >
                View All Projects
              </Button>
            </div>
          )}
        </section>
        </div>

        <div 
          className="mb-8 h-px w-screen dark:hidden"
          style={{
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='12' y2='0' stroke='%23e5e7eb' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
          }}
        />
        <div 
          className="mb-8 h-px w-screen hidden dark:block"
          style={{
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='12' y2='0' stroke='%23374151' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
          }}
        />

         <div className="px-6">

                {/* Skills Section */}
                <section id="skills" className="mb-8">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <h2 className="text-xl font-bold mb-4">Technology & Tools I Use</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {SKILLS_DATA.map((skill, id) => {
              const skillIconMap: Record<string, string> = {
                "Javascript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                "Typescript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
                "React JS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                "NextJS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg",
                "ReactNative": "/reactnative.png",
                "Express JS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
                "Postgresql": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
                "Prisma": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
                "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg",
                "Anchor": "/anchor.png",
                "Solana": "/solana.jpg",
                "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
                "Github": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
                "Rust": "/rust.png",
                "MongoDb": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
                "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
                "Vercel": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
                "Tailwind": "/tailwindcss.png",
                "NodeJS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
                "Bun": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg",
              };
              const iconUrl = skillIconMap[skill] || null;
              return (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 9 + id * 0.05}>
                  <Badge variant="secondary" className="text-sm px-3 py-1.5 border border-gray-300 dark:border-gray-700 flex items-center gap-2">
                    {iconUrl && (
                      <img src={iconUrl} alt={skill} className="w-4 h-4" />
                    )}
                    {skill}
                  </Badge>
                </BlurFade>
              );
            })}
          </div>
        </section>
        </div>

        <div 
          className="mb-8 h-px w-screen dark:hidden"
          style={{
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='12' y2='0' stroke='%23e5e7eb' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
          }}
        />
        <div 
          className="mb-8 h-px w-screen hidden dark:block"
          style={{
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='12' y2='0' stroke='%23374151' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
          }}
        />



      <div className="px-6">
        {/* Blog Section */}
        <section id="blog" className="mb-8">
          <BlogSection />
        </section>
        </div>

        <div
          className="mb-8 h-px w-screen dark:hidden"
          style={{
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='12' y2='0' stroke='%23e5e7eb' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
          }}
        />
        <div
          className="mb-8 h-px w-screen hidden dark:block"
          style={{
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='12' y2='0' stroke='%23374151' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
          }}
        />

      <div className="px-6">
        {/* Education Section */}
        <section id="education" className="mb-8">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <h2 className="text-xl font-bold mb-4">Education</h2>
          </BlurFade>
          <div className="space-y-3">
            {EDUCATION_DATA.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 15 + id * 0.05}
              >
                <ResumeCard
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        </div>

        <div 
          className="mb-8 h-px w-screen dark:hidden"
          style={{
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='12' y2='0' stroke='%23e5e7eb' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
          }}
        />
        <div 
          className="mb-8 h-px w-screen hidden dark:block"
          style={{
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='12' y2='0' stroke='%23374151' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
          }}
        />

      <div className="px-6">
        {/* Contact Section */}
        <section id="contact">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-base">
              Open to conversations, ideas, and collaborations. Send a message anytime.
              </p>
            </div>
          </BlurFade>
        </section>
      </div>
    </main>
    </div>
  );
}
