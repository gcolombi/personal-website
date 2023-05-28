import MetaData from '@/components/MetaData';
import HeaderBasic from '@/components/HeaderBasic';
import CallToAction from '@/components/CallToAction';

export default function About() {
    return (
        <>
            <MetaData
                title="About"
            />
            <HeaderBasic
                title="About"
                wysiwyg="Lorem ipsum dolor sit about."
            />
            <CallToAction
                index="4"
                title="Get in touch"
            />
        </>
    );
};