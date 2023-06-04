/* Projects type */
export enum ProjectsType {
    PROJECTS,
    PERSONAL_PROJECTS
}

/* Projects */
export type Projects = ProjectProps[];

export type ProjectProps = {
    title: string;
    description?: string;
    image: string;
    url: string;
}