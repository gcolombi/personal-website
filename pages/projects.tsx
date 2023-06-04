import { PERSONAL_PROJECTS, PROJECTS, PROJECTS_TABS } from '@/data/projects.data';
import { ProjectsType } from '@/types/projects';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { useMemo, useState } from 'react';
import MetaData from '@/components/MetaData';
import ProjectsTabs from '@/components/ProjectsTabs';
import CallToAction from '@/components/CallToAction';

export const PROJECTS_LIST = {
    [ProjectsType.PROJECTS]: PROJECTS,
    [ProjectsType.PERSONAL_PROJECTS]: PERSONAL_PROJECTS
};

export default function Projects() {
    const [projectsType, setProjectsType] = useState<ProjectsType>(ProjectsType.PROJECTS);

    const projects = useMemo(() => {
        return PROJECTS_LIST[projectsType];
    }, [projectsType]);

    useIsomorphicLayoutEffect(() => {
        ScrollTrigger.refresh(true);
    }, [projectsType]);

    return (
        <>
            <MetaData
                title="Projects"
            />
            <ProjectsTabs
                index="01"
                tabs={PROJECTS_TABS}
                projects={projects}
                setProjectsType={setProjectsType}
            />
            <CallToAction
                index="02"
                title="Get in touch"
            />
        </>
    );
};