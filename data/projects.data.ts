import { Lang, MetaDataProps } from '@/types/components/global';
import { ProjectsTabsType } from '@/types/projects/tabs';
import { ProjectProps, Projects, ProjectsList, ProjectsType } from '@/types/projects';
import { toTwoDigits } from '@/utils/number';

export const META_PROJECTS: Lang<MetaDataProps> = {
    en: {
        title: `Projects | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    },
    fr: {
        title: `Projets | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    }
};

export const PROJECTS: Lang<Projects> = {
    en: [
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
            url: 'https://sweetsixteen.ca/en/'
        }
    ],
    fr: [
        {
            title: 'Cartv',
            description: 'Organisme de surveillance et de défense de l\'authenticité des produits alimentaires reconnu par le gouvernement du Québec',
            image: '/static/images/projects/cartv.jpg',
            url: 'https://cartv.gouv.qc.ca/'
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
            url: 'https://mondoux.ca/'
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
    ]
};

export const PERSONAL_PROJECTS: Lang<Projects> = {
    en: [
        {
            title: 'Portfolio',
            description: 'Portfolio built with Next.js, Typescript and GSAP',
            image: '/static/images/projects/portfolio.jpg',
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
            description: 'Starter that includes a collection of reusable components, hooks, and utilities to build amazing projects with complex animations and page transitions using GSAP',
            image: '/static/images/projects/nextjs-starter.jpg',
            url: 'https://nextjs-gsap-starter.vercel.app/',
            githubUrl: 'https://github.com/gcolombi/nextjs-starter'
        }
    ],
    fr: [
        {
            title: 'Portfolio',
            description: 'Portfolio built with Next.js, Typescript and GSAP',
            image: '/static/images/projects/portfolio.jpg',
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
            description: 'Starter that includes a collection of reusable components, hooks, and utilities to build amazing projects with complex animations and page transitions using GSAP',
            image: '/static/images/projects/nextjs-starter.jpg',
            url: 'https://nextjs-gsap-starter.vercel.app/',
            githubUrl: 'https://github.com/gcolombi/nextjs-starter'
        }
    ]
};

export const FEATURED_PROJECT: Lang<ProjectProps> = {
    en: {
        title: 'Dici',
        description: 'Magazine and showcase on culture in Mauricie, Quebec (Canada)',
        image: '/static/images/projects/dici.jpg',
        url: 'https://dici.ca/',
        type: ProjectsType.PROJECTS
    },
    fr: {
        title: 'Dici',
        description: 'Magazine et vitrine sur la culture en Mauricie, Québec (Canada)',
        image: '/static/images/projects/dici.jpg',
        url: 'https://dici.ca/',
        type: ProjectsType.PROJECTS
    }
};

export const LATEST_PERSONAL_PROJECT: ProjectProps = {
    title: 'Linklist',
    description: 'Linktree clone built with Next.js, typescript and Tailwind',
    image: '/static/images/projects/linklist.jpg',
    url: 'https://linklist-domain.vercel.app/',
    type: ProjectsType.PERSONAL_PROJECTS
};

export const TOTAL_PROJECTS = {
    en: PROJECTS['en'].length,
    fr: PROJECTS['fr'].length
};

export const TOTAL_PERSONAL_PROJECTS = {
    en: PERSONAL_PROJECTS['en'].length,
    fr: PERSONAL_PROJECTS['fr'].length
};

export const PROJECTS_TABS: Lang<ProjectsTabsType> = {
    en: [
        {
            title: 'Work',
            description: 'A selected set of projects I\'ve built on my own or in teams in the last few years.',
            type: ProjectsType.PROJECTS,
            total: toTwoDigits(TOTAL_PROJECTS['en'])
        },
        {
            title: 'Personal',
            description: 'A selected set of personal projects I\'m building as I navigate through ideas and technologies.',
            type: ProjectsType.PERSONAL_PROJECTS,
            total: toTwoDigits(TOTAL_PERSONAL_PROJECTS['en'])
        }
    ],
    fr: [
        {
            title: 'Professionnel',
            description: 'Une sélection de projets que j\'ai réalisés seul ou en équipe au cours des dernières années.',
            type: ProjectsType.PROJECTS,
            total: toTwoDigits(TOTAL_PROJECTS['fr'])
        },
        {
            title: 'Personnel',
            description: 'Une sélection de projets personnels que j\'implémente des que j\'ai une idée ou que je découvre une technologie afin de la tester et l\'apprendre.',
            type: ProjectsType.PERSONAL_PROJECTS,
            total: toTwoDigits(TOTAL_PERSONAL_PROJECTS['fr'])
        }
    ]
};

export const PROJECTS_LIST: Lang<ProjectsList> = {
    en: {
        [ProjectsType.PROJECTS]: PROJECTS['en'],
        [ProjectsType.PERSONAL_PROJECTS]: PERSONAL_PROJECTS['en']
    },
    fr: {
        [ProjectsType.PROJECTS]: PROJECTS['fr'],
        [ProjectsType.PERSONAL_PROJECTS]: PERSONAL_PROJECTS['fr']
    }
};