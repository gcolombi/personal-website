/* Projects type */
export enum ProjectsType {
    PROJECTS = 'work',
    PERSONAL_PROJECTS = 'personal'
}

/* Projects */
export type Projects = ProjectProps[];

export type ProjectProps = {
    title: string;
    description?: string;
    image: string;
    url: string;
    type?: ProjectsType;
}