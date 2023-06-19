import { ABOUT_HEADER, ABOUT_INTRODUCTION } from '@/data/about.data';
import { HOBBIES_TABS, MODELS } from '@/data/hobbies.data';
import MetaData from '@/components/MetaData';
import AboutHeader from '@/components/AboutHeader';
import AboutIntroduction from '@/components/AboutIntroduction';
import HobbiesTabs from '@/components/HobbiesTabs';
import CallToAction from '@/components/CallToAction';

export default function About() {
    return (
        <>
            <MetaData
                title="About | Gerard Colombi"
            />
            <AboutHeader
                {...ABOUT_HEADER}
            />
            <AboutIntroduction
                index="01"
                {...ABOUT_INTRODUCTION}
            />
            <HobbiesTabs
                index="02"
                tabs={HOBBIES_TABS}
                models={MODELS}
            />
            <CallToAction
                index="03"
                title="Get in touch"
            />
        </>
    );
};