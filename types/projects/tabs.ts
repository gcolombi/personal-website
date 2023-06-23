import { Dispatch, SetStateAction } from 'react';
import { Projects, ProjectsType } from '.';

/* Projects tabs */
export type ProjectsTabsProps = {
    index: string;
    tabs: ProjectsTabsType;
    projects: Projects;
    projectsType: ProjectsType;
    setProjectsType: Dispatch<SetStateAction<ProjectsType>>;
}

export type ProjectsTabsType = ProjectTab[];

export type ProjectTab = {
    title: string;
    description: string;
    type: ProjectsType;
    total: string;
}