/* Projects type */
export enum ProjectsType {
    PROJECTS,
    PERSONAL_PROJECTS
}

/* Project */
export type ProjectProps = {
    title: string;
    description?: string;
    image: string;
    url: string;
}