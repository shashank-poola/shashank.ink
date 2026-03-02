export interface Project {
    title: string;
    href: string;
    description: string;
    technologies: readonly string[];
    image?: string;
    video?: string;
    links?: Array<{
        type: string;
        href: string;
        icon: any;
    }>;
}

export interface ProjectsSectionProps {
    projects: Project[];
    blurFadeDelay: number;
}
