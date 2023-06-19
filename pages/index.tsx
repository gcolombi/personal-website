import { FEATURED_PROJECT, LATEST_PERSONAL_PROJECT } from '@/data/projects.data';
import { CALL_TO_ACTION } from '@/data/global.data';
import MetaData from '@/components/MetaData';
import HomeHeader from '@/components/HomeHeader';
import HomeIntroduction from '@/components/HomeIntroduction';
import HomeFeaturedProject from '@/components/HomeFeaturedProject';
import CallToAction from '@/components/CallToAction';
import { HOME_FEATURED_PROJECT_CONTENT } from '@/data/home.data';

export default function Home() {
    return (
        <>
            <MetaData />
            <HomeHeader />
            <HomeIntroduction />
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
                    },
                    className: 'c-btn'
                }}
            />
            <HomeFeaturedProject
                index="03"
                title="Latest personnal project"
                project={LATEST_PERSONAL_PROJECT}
                button={{
                    label: 'Sell all personal projects',
                    href: {
                        pathname: '/projects',
                        query: {
                            type: LATEST_PERSONAL_PROJECT.type
                        }
                    },
                    className: 'c-btn'
                }}
            />
            <CallToAction
                index="04"
                {...CALL_TO_ACTION}
                buttonHref="/about"
            />
        </>
    )
}