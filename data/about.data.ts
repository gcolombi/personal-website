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

export const ABOUT_HEADER: Lang<AboutHeaderProps> = {
    en: {
        titles: ['Passionate', 'Front-end', 'Developer'],
        image: '/static/images/about-header.jpg'
    },
    fr: {
        titles: ['Developpeur', 'Front-end', 'Passionne'],
        image: '/static/images/about-header.jpg'
    }
};

export const ABOUT_INTRODUCTION: Lang<AboutIntroductionContent> = {
    en: {
        content: [
            'I\'m a front-end developer with years of experience in building performant, accessible, and responsive applications/websites. I enjoy coding things from scratch and bringing ideas to life in the browser. The life of a developer requires one to learn new things every day because technology changes at a rapid pace. Therefore, I have embraced the concept of being a lifelong learner and continue to explore new concepts and technologies in my free time.',
            'The things we create and the quality of our work reflect our true selves, so I always strive to give my best effort.'
        ],
        image: '/static/images/about-portrait.jpg'
    },
    fr: {
        content: [
            'Je suis un développeur front-end avec des années d\'expérience dans la création d\'applications/sites web performants, accessibles et réactifs. J\'aime coder les choses à partir de zéro et donner vie à mes idées dans le navigateur. La vie d\'un développeur exige que l\'on apprenne de nouvelles choses tous les jours, car la technologie évolue à un rythme rapide. C\'est pourquoi j\'ai adopté le concept d\'apprentissage tout au long de ma vie et je continue à explorer de nouveaux concepts et de nouvelles technologies pendant mon temps libre.',
            'Les choses que nous créons et la qualité de notre travail reflètent notre véritable personnalité, c\'est pourquoi je m\'efforce toujours de donner le meilleur de moi-même.'
        ],
        image: '/static/images/about-portrait.jpg'
    }
};