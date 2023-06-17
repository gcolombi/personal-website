import { ProjectsType } from '.';

/* Projects tabs */
export type ProjectsTabs = ProjectTab[];

export type ProjectTab = {
    title: string;
    description: string;
    type: ProjectsType;
    total: string;
}