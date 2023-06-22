import { META_PROJECTS, PERSONAL_PROJECTS, PROJECTS, PROJECTS_TABS } from '@/data/projects.data';
import { CALL_TO_ACTION } from '@/data/global.data';
import { MetaDataProps } from '@/types/components/global';
import { GetStaticProps } from 'next';
import { ProjectsType } from '@/types/projects';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import ProjectsTabs from '@/components/ProjectsTabs';
import CallToAction from '@/components/CallToAction';

export const PROJECTS_LIST = {
    [ProjectsType.PROJECTS]: PROJECTS,
    [ProjectsType.PERSONAL_PROJECTS]: PERSONAL_PROJECTS
};

export default function Projects() {
    const { query } = useRouter();
    const [projectsType, setProjectsType] = useState<ProjectsType>(ProjectsType.PROJECTS);

    const projects = useMemo(() => {
        return PROJECTS_LIST[projectsType];
    }, [projectsType]);

    useIsomorphicLayoutEffect(() => {
        ScrollTrigger.refresh(true);
    }, [projectsType]);

    useIsomorphicLayoutEffect(() => {
        if (query.type) {
            Object.entries(ProjectsType).forEach(([key, value]) => {
                if (value === query.type) setProjectsType(value);
            });
        }
    }, [query])

    return (
        <>
            <ProjectsTabs
                index="01"
                tabs={PROJECTS_TABS}
                projects={projects}
                projectsType={projectsType}
                setProjectsType={setProjectsType}
            />
            <CallToAction
                index="02"
                {...CALL_TO_ACTION}
                buttonHref="/contact"
            />
        </>
    );
};

export const getStaticProps: GetStaticProps<{metaData: MetaDataProps}> = async () => {
    return {
        props: {
            metaData: {
                ...META_PROJECTS
            }
        }
    }
}