import { Lang, MetaDataProps } from '@/types/components/global';
import { AboutHeaderProps } from '@/types/components/headers';
import { AboutIntroductionContent } from '@/types/components/introductions';

export const META_ABOUT: Lang<MetaDataProps> = {
    en: {
        title: `About | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    },
    fr: {
        title: `À propos | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    }
};

export const ABOUT_HEADER: AboutHeaderProps = {
    titles: ['Passionate', 'Front-end', 'Developer'],
    image: '/static/images/about-header.jpg'
};

export const ABOUT_INTRODUCTION: AboutIntroductionContent = {
    content: [
        'I\'m a front-end developer with years of experiences in building performant, accessible and responsive applications/websites. I like to code things from scratch, and enjoy bringing ideas to life in the browser. The life of a developer requires one to learn new things everyday, because technology keeps changing at a very fast pace. I have therefore, embraced the concept of being a life long learner and continue to learn new concepts and technologies in my free time.',
        'The things we make and the quality of the work we do reveal something about who we are, so I always strive to put my best into it.'
    ],
    image: '/static/images/about-portrait.jpg'
};