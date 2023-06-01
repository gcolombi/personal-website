import MetaData from '@/components/MetaData';
import HeaderAbout from '@/components/HeaderAbout';
import AboutIntroduction from '@/components/AboutIntroduction';
import PersonalInterests from '@/components/PersonalInterests';
import CallToAction from '@/components/CallToAction';

export default function About() {
    return (
        <>
            <MetaData
                title="About"
            />
            <HeaderAbout />
            <AboutIntroduction />
            <PersonalInterests />
            <CallToAction
                index="03"
                title="Get in touch"
            />
        </>
    );
};