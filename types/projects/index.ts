/* Projects type */
export enum ProjectsType {
    PROJECTS = 'work',
    PERSONAL_PROJECTS = 'personal'
}

/* Projects List */
export type ProjectsList = {
    [key in ProjectsType]: Projects;
};

/* Projects */
export type Projects = ProjectProps[];

export type ProjectProps = {
    title: string;
    description?: string;
    image: string;
    url?: string;
    githubUrl?: string;
    type?: ProjectsType;
}