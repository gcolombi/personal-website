import MetaData from '@/components/MetaData';
import HeaderBasic from '@/components/HeaderBasic';
import AboutIntroduction from '@/components/AboutIntroduction';
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
            <AboutIntroduction />
            <CallToAction
                index="04"
                title="Get in touch"
            />
        </>
    );
};