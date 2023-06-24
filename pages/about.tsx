import { ABOUT_HEADER, ABOUT_INTRODUCTION, META_ABOUT } from '@/data/about.data';
import { HOBBIES_TABS, HOBBIES_TITLE, MODELS } from '@/data/hobbies.data';
import { CALL_TO_ACTION } from '@/data/global.data';
import { AboutHeaderProps } from '@/types/components/headers';
import { AboutIntroductionContent } from '@/types/components/introductions';
import { CallToActionContent, MetaDataProps } from '@/types/components/global';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import AboutHeader from '@/components/AboutHeader';
import AboutIntroduction from '@/components/AboutIntroduction';
import HobbiesTabs from '@/components/HobbiesTabs';
import CallToAction from '@/components/CallToAction';

export default function About({
    aboutHeader,
    aboutIntroduction,
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
                title={HOBBIES_TITLE}
                tabs={HOBBIES_TABS}
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
    callToAction: CallToActionContent;
}> = async ({ locale }) => {
    const lang = locale ?? '';
    const metaData = META_ABOUT[lang];
    const aboutHeader = ABOUT_HEADER[lang];
    const aboutIntroduction = ABOUT_INTRODUCTION[lang];
    const callToAction = CALL_TO_ACTION[lang];

    return {
        props: {
            metaData,
            aboutHeader,
            aboutIntroduction,
            callToAction
        }
    }
}