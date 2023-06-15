import MetaData from '@/components/MetaData';
import AboutHeader from '@/components/AboutHeader';
import AboutIntroduction from '@/components/AboutIntroduction';
import PersonalInterests from '@/components/PersonalInterests';
import CallToAction from '@/components/CallToAction';

export default function About() {
    return (
        <>
            <MetaData
                title="About | Gerard Colombi"
            />
            <AboutHeader />
            <AboutIntroduction />
            <PersonalInterests />
            <CallToAction
                index="03"
                title="Get in touch"
            />
        </>
    );
};