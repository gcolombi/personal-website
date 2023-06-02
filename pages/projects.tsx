import MetaData from '@/components/MetaData';
import ProjectsTabs from '@/components/ProjectsTabs';
import CallToAction from '@/components/CallToAction';

export default function Projects() {
    return (
        <>
            <MetaData
                title="Projects"
            />
            <ProjectsTabs />
            <CallToAction
                index="02"
                title="Get in touch"
            />
        </>
    );
};