import { ABOUT_HEADER, ABOUT_INTRODUCTION, META_ABOUT } from '@/data/about.data';
import { HOBBIES_TABS, HOBBIES_TITLE, MODELS } from '@/data/hobbies.data';
import { CALL_TO_ACTION } from '@/data/global.data';
import { MetaDataProps } from '@/types/components/global';
import { GetStaticProps } from 'next';
import AboutHeader from '@/components/AboutHeader';
import AboutIntroduction from '@/components/AboutIntroduction';
import HobbiesTabs from '@/components/HobbiesTabs';
import CallToAction from '@/components/CallToAction';

export default function About() {
    return (
        <>
            <AboutHeader
                {...ABOUT_HEADER}
            />
            <AboutIntroduction
                index="01"
                {...ABOUT_INTRODUCTION}
            />
            <HobbiesTabs
                index="02"
                title={HOBBIES_TITLE}
                tabs={HOBBIES_TABS}
                models={MODELS}
            />
            <CallToAction
                index="03"
                {...CALL_TO_ACTION}
                buttonHref="/contact"
            />
        </>
    );
};

export const getStaticProps: GetStaticProps<{
    metaData: MetaDataProps;
}> = async ({ locale }) => {
    const lang = locale ?? '';
    const metaAbout = META_ABOUT[lang];

    return {
        props: {
            metaData: {
                ...metaAbout
            }
        }
    }
}