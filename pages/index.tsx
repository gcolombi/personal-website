import { HOME_FEATURED_PROJECT_CONTENT, HOME_HEADER, HOME_INTRODUCTION, HOME_LATEST_PROJECT_CONTENT } from '@/data/home.data';
import { FEATURED_PROJECT, LATEST_PERSONAL_PROJECT } from '@/data/projects.data';
import { CALL_TO_ACTION } from '@/data/global.data';
import { CallToActionContent } from '@/types/components/global';
import { HomeHeaderProps } from '@/types/components/headers';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { translateUrl, useRouter } from 'next-translate-routes';
import HomeHeader from '@/components/HomeHeader';
import HomeIntroduction from '@/components/HomeIntroduction';
import HomeFeaturedProject from '@/components/HomeFeaturedProject';
import CallToAction from '@/components/CallToAction';

export default function Home({
    homeHeader,
    callToAction
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { locale } = useRouter();

    return (
        <>
            <HomeHeader
                {...homeHeader}
            />
            <HomeIntroduction
                index="01"
                {...HOME_INTRODUCTION}
                button={{
                    ...HOME_INTRODUCTION.button,
                    href: '/about'
                }}
            />
            <HomeFeaturedProject
                index="02"
                title={HOME_FEATURED_PROJECT_CONTENT.title}
                project={FEATURED_PROJECT}
                button={{
                    ...HOME_FEATURED_PROJECT_CONTENT.button,
                    href: {
                        pathname: '/projects',
                        query: {
                            type: FEATURED_PROJECT.type
                        }
                    }
                }}
            />
            <HomeFeaturedProject
                index="03"
                title={HOME_LATEST_PROJECT_CONTENT.title}
                project={LATEST_PERSONAL_PROJECT}
                button={{
                    ...HOME_LATEST_PROJECT_CONTENT.button,
                    href: {
                        pathname: '/projects',
                        query: {
                            type: LATEST_PERSONAL_PROJECT.type
                        }
                    }
                }}
            />
            <CallToAction
                index="04"
                {...callToAction}
                buttonHref={translateUrl('/contact', locale ?? '')}
            />
        </>
    )
}

export const getStaticProps: GetStaticProps<{
    homeHeader: HomeHeaderProps;
    callToAction: CallToActionContent;
}> = async ({ locale }) => {
    const lang = locale ?? '';
    const homeHeader = HOME_HEADER[lang];
    const callToAction = CALL_TO_ACTION[lang];

    return {
        props: {
            homeHeader: {
                ...homeHeader
            },
            callToAction: {
                ...callToAction
            }
        }
    }
}