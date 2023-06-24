import { ABOUT_HEADER, ABOUT_INTRODUCTION, META_ABOUT } from '@/data/about.data';
import { HOBBIES_TABS, HOBBIES_TITLE, MODELS } from '@/data/hobbies.data';
import { CALL_TO_ACTION } from '@/data/global.data';
import { CallToActionContent, MetaDataProps } from '@/types/components/global';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import AboutHeader from '@/components/AboutHeader';
import AboutIntroduction from '@/components/AboutIntroduction';
import HobbiesTabs from '@/components/HobbiesTabs';
import CallToAction from '@/components/CallToAction';

export default function About({
    callToAction
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
                {...callToAction}
            />
        </>
    );
};

export const getStaticProps: GetStaticProps<{
    metaData: MetaDataProps;
    callToAction: CallToActionContent;
}> = async ({ locale }) => {
    const lang = locale ?? '';
    const metaData = META_ABOUT[lang];
    const callToAction = CALL_TO_ACTION[lang];

    return {
        props: {
            metaData,
            callToAction
        }
    }
}