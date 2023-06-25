import { HomeHeaderProps } from '@/types/components/headers';
import { HomeIntroductionContent } from '@/types/components/introductions';
import { HomeFeaturedProjectContent } from '@/types/components/sections';

export const HOME_HEADER: HomeHeaderProps = {
    titles: ['Front-end', 'Developer'],
    subfield: 'Full stack capable',
    image: '/static/images/home-portrait.jpg',
    content: 'Maker of things with passion and excellence',
    name: ['Gerard', 'Colombi']
};

export const HOME_INTRODUCTION: HomeIntroductionContent = {
    titles: [
        'Passionate about web technologies, I have always been excited about the entire development spectrum. Front-end addicted and frequently engage in backend.',
        'When I\'m not coding or exploring new web technologies, I am playing video games or watching the latest movies and tv shows released.'
    ],
    content: [
        'Over the years I have spent time converting designs into pixel-perfect, performant, accessible and responsive applications/websites. Each project is an opportunity to learn new concepts across multiple domains.',
        'I simply love working on ambitious projects on my own or with positive people.'
    ],
    button: {
        label: 'More about me'
    }
};

export const HOME_FEATURED_PROJECT_CONTENT: HomeFeaturedProjectContent = {
    title: 'Featured work',
    button: {
        label: 'See all projects'
    }
};

export const HOME_LATEST_PROJECT_CONTENT: HomeFeaturedProjectContent = {
    title: 'Latest personnal project',
    button: {
        label: 'See all personal projects'
    }
};