import { FEATURED_PROJECT, LATEST_PERSONAL_PROJECT } from './projects.data';
import { Lang } from '@/types/components/global';
import { HomeHeaderProps } from '@/types/components/headers';
import { HomeIntroductionContent } from '@/types/components/introductions';
import { HomeFeaturedProjectContent } from '@/types/components/sections';

export const HOME_HEADER: Lang<HomeHeaderProps> = {
    en: {
        titles: ['Front-end', 'Developer'],
        subfield: 'Full stack capable',
        image: '/static/images/home-portrait.jpg',
        content: 'Maker of things with passion and excellence',
        name: ['Gerard', 'Colombi']
    },
    fr: {
        titles: ['Developpeur', 'Front-end'],
        subfield: 'Compétences Full stack',
        image: '/static/images/home-portrait.jpg',
        content: 'Créer des choses avec passion et excellence',
        name: ['Gerard', 'Colombi']
    }
};

export const HOME_INTRODUCTION: Lang<HomeIntroductionContent> = {
    en: {
        titles: [
            'Passionate about web technologies, I have always been excited about the entire development spectrum. Front-end addicted and frequently engage in backend.',
            'When I\'m not coding or exploring new web technologies, I am playing video games or watching the latest movies and tv shows released.'
        ],
        content: [
            'Over the years I have spent time converting designs into pixel-perfect, performant, accessible and responsive applications/websites. Each project is an opportunity to learn new concepts across multiple domains.',
            'I simply love working on ambitious projects on my own or with positive people.'
        ],
        button: {
            label: 'More about me',
            href: '/contact'
        }
    },
    fr: {
        titles: [
            'Passionné par les technologies web, j\'ai toujours été enthousiasmé par l\'ensemble du spectre de développement. Accro au front-end et fréquemment entrain de faire de la programmation back-end.',
            'Lorsque je ne suis pas en train de coder ou d\'explorer de nouvelles technologies web, je joue probablement à des jeux vidéo ou regarde les derniers films et séries télévisées sortis.'
        ],
        content: [
            'Au fil des années, j\'ai consacré du temps à convertir des conceptions en applications/sites web au pixel près, performants, accessibles et réactifs. Chaque projet est l\'occasion d\'apprendre de nouveaux concepts dans de multiples domaines.',
            'J\'aime tout simplement travailler sur des projets ambitieux, seul ou avec des personnes positives.'
        ],
        button: {
            label: 'En savoir plus sur moi',
            href: '/contact'
        }
    }
};

export const HOME_FEATURED_PROJECT_CONTENT: Lang<HomeFeaturedProjectContent> = {
    en: {
        title: 'Featured work',
        button: {
            label: 'See all projects',
            href: {
                pathname: '/projects',
                query: {
                    type: FEATURED_PROJECT['en'].type
                }
            }
        }
    },
    fr: {
        title: 'Projet en vedette',
        button: {
            label: 'Voir tous les projets',
            href: {
                pathname: '/projects',
                query: {
                    type: FEATURED_PROJECT['fr'].type
                }
            }
        }
    }
};

export const HOME_LATEST_PROJECT_CONTENT: Lang<HomeFeaturedProjectContent> = {
    en: {
        title: 'Latest personnal project',
        button: {
            label: 'See all personal projects',
            href: {
                pathname: '/projects',
                query: {
                    type: LATEST_PERSONAL_PROJECT['en'].type
                }
            }
        }
    },
    fr: {
        title: 'Dernier projet personnel',
        button: {
            label: 'Voir tous les projets personnels',
            href: {
                pathname: '/projects',
                query: {
                    type: LATEST_PERSONAL_PROJECT['fr'].type
                }
            }
        }
    }
};