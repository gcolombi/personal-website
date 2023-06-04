import { ProjectsType } from '.';

export type ProjectsTabs = ProjectTab[];

export type ProjectTab = {
    title: string;
    description: string;
    projectsType: ProjectsType;
    total: string;
}