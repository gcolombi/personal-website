import { HOME_FEATURED_PROJECT_CONTENT, HOME_HEADER, HOME_INTRODUCTION, HOME_LATEST_PROJECT_CONTENT } from '@/data/home.data';
import { FEATURED_PROJECT, LATEST_PERSONAL_PROJECT } from '@/data/projects.data';
import { CALL_TO_ACTION } from '@/data/global.data';
import { CallToActionContent } from '@/types/components/global';
import { HomeHeaderProps } from '@/types/components/headers';
import { HomeIntroductionContent } from '@/types/components/introductions';
import { HomeFeaturedProjectContent } from '@/types/components/sections';
import { ProjectProps } from '@/types/projects';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { translateUrl, useRouter } from 'next-translate-routes';
import HomeHeader from '@/components/HomeHeader';
import HomeIntroduction from '@/components/HomeIntroduction';
import HomeFeaturedProject from '@/components/HomeFeaturedProject';
import CallToAction from '@/components/CallToAction';

export default function Home({
    homeHeader,
    homeIntroduction,
    homeFeaturedProjectContent,
    featuredProject,
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
                {...homeIntroduction}
            />
            <HomeFeaturedProject
                index="02"
                {...homeFeaturedProjectContent}
                project={featuredProject}
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
    homeIntroduction: HomeIntroductionContent;
    homeFeaturedProjectContent: HomeFeaturedProjectContent;
    featuredProject: ProjectProps;
    callToAction: CallToActionContent;
}> = async ({ locale }) => {
    const lang = locale ?? '';
    const homeHeader = HOME_HEADER[lang];
    const homeIntroduction = HOME_INTRODUCTION[lang];
    const homeFeaturedProjectContent = HOME_FEATURED_PROJECT_CONTENT[lang];
    const featuredProject = FEATURED_PROJECT[lang];
    const callToAction = CALL_TO_ACTION[lang];

    return {
        props: {
            homeHeader,
            homeIntroduction,
            homeFeaturedProjectContent,
            featuredProject,
            callToAction
        }
    }
}