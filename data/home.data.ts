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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. At cupiditate maxime accusamus deserunt tempore quam odio in sapiente obcaecati perspiciatis.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolorum facilis libero enim officia commo.'
    ],
    content: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias cumque odit quod aut? Molestiae labore deleniti aperiam commodi quos, nam id, tenetur illo sit iste, vel iure. Nulla, eius. Molestiae labore deleniti aperiam modus.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quos doloribus maiores laboriosam aspernatur voluptatibus.'
    ],
    button: {
        label: 'More about me'
    }
};

export const HOME_FEATURED_PROJECT_CONTENT: HomeFeaturedProjectContent = {
    title: 'Featured work',
    button: {
        label: 'Sell all projects'
    }
};

export const HOME_LATEST_PROJECT_CONTENT: HomeFeaturedProjectContent = {
    title: 'Latest personnal project',
    button: {
        label: 'Sell all personal projects'
    }
};