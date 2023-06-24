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
            'I\'m a Front-end Developer with years of experiences in building performant, accessible and responsive applications/websites. I like to code things from scratch, and enjoy bringing ideas to life in the browser. The life of a developer requires one to learn new things everyday, because technology keeps changing at a very fast pace. I have therefore, embraced the concept of being a life long learner and continue to learn new concepts and technologies in my free time.',
            'The things we make and the quality of the work we do reveal something about who we are, so I always strive to put my best into it.'
        ],
        image: '/static/images/about-portrait.jpg'
    },
    fr: {
        content: [
            'Je suis un Développeur Front-end avec des années d\'expérience dans la création d\'applications/sites web performants, accessibles et réactifs. J\'aime coder les choses à partir de zéro et donner vie à mes idées dans le navigateur. La vie d\'un développeur exige que l\'on apprenne de nouvelles choses tous les jours, car la technologie évolue à un rythme très rapide. J\'ai donc adopté le concept d\'apprentissage tout au long de ma vie et je continue à apprendre de nouveaux concepts et nouvelles technologies pendant mon temps libre.',
            'Les choses que nous créons et la qualité du travail que nous effectuons révèlent quelque chose sur notre personnalité, c\'est pourquoi je m\'efforce toujours de donner le meilleur de moi-même.'
        ],
        image: '/static/images/about-portrait.jpg'
    }
};