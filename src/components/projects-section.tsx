"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { Project, ProjectsSectionProps } from "@/types/project.type";

export function ProjectsSection({ projects, blurFadeDelay }: ProjectsSectionProps) {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const displayedProjects = showAllProjects
    ? projects
    : projects.slice(0, 4);

  return (
    <section id="projects" className="mb-8">
      <BlurFade delay={blurFadeDelay}>
        <h2 className="text-xl font-bold mb-4">Projects</h2>
      </BlurFade>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedProjects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={blurFadeDelay + 0.05 + id * 0.05}
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
      {!showAllProjects && projects.length > 4 && (
        <BlurFade delay={blurFadeDelay + 0.06}>
          <div className="mt-4">
            <Button
              onClick={() => setShowAllProjects(true)}
              variant="outline"
              size="default"
              className="rounded-full"
            >
              View All Projects
            </Button>
          </div>
        </BlurFade>
      )}
    </section>
  );
}
