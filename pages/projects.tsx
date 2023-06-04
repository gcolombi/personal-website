import { PROJECTS_TABS } from '@/data/projects.data';
import MetaData from '@/components/MetaData';
import ProjectsTabs from '@/components/ProjectsTabs';
import CallToAction from '@/components/CallToAction';

export default function Projects() {
    return (
        <>
            <MetaData
                title="Projects"
            />
            <ProjectsTabs
                index="01"
                tabs={PROJECTS_TABS}
            />
            <CallToAction
                index="02"
                title="Get in touch"
            />
        </>
    );
};