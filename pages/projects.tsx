import MetaData from '@/components/MetaData';
import HeaderBasic from '@/components/HeaderBasic';
import CallToAction from '@/components/CallToAction';

export default function Projects() {
    return (
        <>
            <MetaData
                title="Projects"
            />
            <HeaderBasic
                title="Projects"
                wysiwyg="Lorem ipsum dolor sit projects."
            />
            <CallToAction
                index="2"
                title="Get in touch"
            />
        </>
    );
};