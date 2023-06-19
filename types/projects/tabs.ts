import { Dispatch, SetStateAction } from 'react';
import { Projects, ProjectsType } from '.';

/* Projects tabs */
export type ProjectsTabsProps = {
    index: string;
    tabs: ProjectsTabs;
    projects: Projects;
    projectsType: ProjectsType;
    setProjectsType: Dispatch<SetStateAction<ProjectsType>>;
}

export type ProjectsTabs = ProjectTab[];

export type ProjectTab = {
    title: string;
    description: string;
    type: ProjectsType;
    total: string;
}