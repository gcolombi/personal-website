import { ABOUT_HEADER, ABOUT_INTRODUCTION, META_ABOUT } from '@/data/about.data';
import { HOBBIES_TABS, MODELS } from '@/data/hobbies.data';
import { CALL_TO_ACTION } from '@/data/global.data';
import { AboutHeaderProps } from '@/types/components/headers';
import { AboutIntroductionContent } from '@/types/components/introductions';
import { HobbiesTabsContent } from '@/types/hobbies/tabs';
import { CallToActionContent, MetaDataProps } from '@/types/components/global';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import AboutHeader from '@/components/AboutHeader';
import AboutIntroduction from '@/components/AboutIntroduction';
import HobbiesTabs from '@/components/HobbiesTabs';
import CallToAction from '@/components/CallToAction';

export default function About({
    aboutHeader,
    aboutIntroduction,
    tabs,
    callToAction
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <AboutHeader
                {...aboutHeader}
            />
            <AboutIntroduction
                index="01"
                {...aboutIntroduction}
            />
            <HobbiesTabs
                index="02"
                {...tabs}
                models={MODELS}
            />
            <CallToAction
                index="03"
                {...callToAction}
            />
        </>
    );
};

export const getStaticProps: GetStaticProps<{
    metaData: MetaDataProps;
    aboutHeader: AboutHeaderProps;
    aboutIntroduction: AboutIntroductionContent;
    tabs: HobbiesTabsContent;
    callToAction: CallToActionContent;
}> = async ({ locale }) => {
    const lang = locale ?? '';
    const metaData = META_ABOUT[lang];
    const aboutHeader = ABOUT_HEADER[lang];
    const aboutIntroduction = ABOUT_INTRODUCTION[lang];
    const tabs = HOBBIES_TABS[lang];
    const callToAction = CALL_TO_ACTION[lang];

    return {
        props: {
            metaData,
            aboutHeader,
            aboutIntroduction,
            tabs,
            callToAction
        }
    }
}