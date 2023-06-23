import { META_PROJECTS, PROJECTS_LIST, PROJECTS_TABS } from '@/data/projects.data';
import { CALL_TO_ACTION } from '@/data/global.data';
import { MetaDataProps } from '@/types/components/global';
import { ProjectsTabsType } from '@/types/projects/tabs';
import { ProjectsList, ProjectsType } from '@/types/projects';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { useMemo, useState } from 'react';
import { useRouter } from 'next-translate-routes';
import ProjectsTabs from '@/components/ProjectsTabs';
import CallToAction from '@/components/CallToAction';

export default function Projects({
    projectsList,
    tabs
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { query } = useRouter();
    const [projectsType, setProjectsType] = useState<ProjectsType>(ProjectsType.PROJECTS);

    const projects = useMemo(() => {
        return projectsList[projectsType] ?? [];
    }, [projectsList, projectsType]);

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
                tabs={tabs}
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

export const getStaticProps: GetStaticProps<{
    metaData: MetaDataProps;
    projectsList: ProjectsList;
    tabs: ProjectsTabsType;
}> = async ({ locale }) => {
    const lang = locale ?? '';
    const metaProjects = META_PROJECTS[lang];
    const projectsList = PROJECTS_LIST[lang];
    const projectsTabs = PROJECTS_TABS[lang] ?? [];

    return {
        props: {
            metaData: {
                ...metaProjects
            },
            projectsList: {
                ...projectsList
            },
            tabs: [
                ...projectsTabs
            ]
        }
    }
}