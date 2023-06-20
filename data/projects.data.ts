import { MetaDataProps } from '@/types/components/global';
import { ProjectsTabs } from '@/types/projects/tabs';
import { ProjectProps, Projects, ProjectsType } from '@/types/projects';
import { toTwoDigits } from '@/utils/number';
import { randomItem } from '@/utils/array';

export const META_PROJECTS: MetaDataProps = {
    title: `Projects | ${process.env.NEXT_PUBLIC_SITE_NAME}`
};

export const PROJECTS: Projects = [
    {
        title: 'Cartv',
        description: 'Organization guarding and defending the authenticity of food products recognized by the Quebec Government',
        image: '/static/images/projects/cartv.jpg',
        url: 'https://cartv.gouv.qc.ca/en/'
    },
    {
        title: 'Dici',
        description: 'Magazine and showcase on culture in Mauricie, Quebec (Canada)',
        image: '/static/images/projects/dici.jpg',
        url: 'https://dici.ca/'
    },
    {
        title: 'Mondoux',
        description: 'Leading Canadian packager and distributor of top quality candies and chocolates',
        image: '/static/images/projects/mondoux.jpg',
        url: 'https://mondoux.ca/en/'
    },
    {
        title: 'Sogetel',
        description: 'Canadian telecommunications company that serves multiple areas in Quebec',
        image: '/static/images/projects/sogetel.jpg',
        url: 'https://sogetel.com/'
    },
    {
        title: 'Sweet sixteen',
        description: 'Online candy store built with shopify',
        image: '/static/images/projects/sweet-sixteen.jpg',
        url: 'https://sweetsixteen.ca/'
    }
];

export const PERSONAL_PROJECTS: Projects = [
    {
        title: 'Portfolio',
        description: 'Portfolio built with Next.js, Typescript and GSAP.',
        image: '/static/images/projects/portfolio.jpg',
        url: 'https://github.com/gcolombi/personal-website',
        githubUrl: 'https://github.com/gcolombi/personal-website'
    },
    {
        title: 'Linklist',
        description: 'Linktree clone built with Next.js, typescript and Tailwind',
        image: '/static/images/projects/linklist.jpg',
        url: 'https://linklist-domain.vercel.app/',
        githubUrl: 'https://github.com/gcolombi/linklist'
    },
    {
        title: 'Next.js starter',
        description: 'Starter that includes a collection of reusable components, hooks, and utilities to build amazing projects with complex animations and page transitions using GSAP.',
        image: '/static/images/projects/nextjs-starter.jpg',
        url: 'https://nextjs-gsap-starter.vercel.app/',
        githubUrl: 'https://github.com/gcolombi/nextjs-starter'
    }
];

export const FEATURED_PROJECT: ProjectProps = {
    ...randomItem(PROJECTS),
    type: ProjectsType.PROJECTS
};

export const LATEST_PERSONAL_PROJECT: ProjectProps = {
    title: 'Linklist',
    description: 'Linktree clone built with Next.js, typescript and Tailwind',
    image: '/static/images/projects/linklist.jpg',
    url: 'https://linklist-domain.vercel.app/',
    type: ProjectsType.PERSONAL_PROJECTS
};

export const TOTAL_PROJECTS = PROJECTS.length;
export const TOTAL_PERSONAL_PROJECTS = PERSONAL_PROJECTS.length;

export const PROJECTS_TABS: ProjectsTabs = [
    {
        title: 'Work',
        description: 'A selected set of projects I\'ve built on my own or in teams in the last few years.',
        type: ProjectsType.PROJECTS,
        total: toTwoDigits(TOTAL_PROJECTS)
    },
    {
        title: 'Personal',
        description: 'A selected set of personal projects I\'m building as I navigate through ideas and technologies.',
        type: ProjectsType.PERSONAL_PROJECTS,
        total: toTwoDigits(TOTAL_PERSONAL_PROJECTS)
    }
];