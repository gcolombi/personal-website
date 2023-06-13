import { ProjectsTabs } from '@/types/projects/tabs';
import { ProjectProps, Projects, ProjectsType } from '@/types/projects';
import { toTwoDigits } from '@/utils/number';

export const PROJECTS: Projects = [
    {
        title: 'Sweet sixteen',
        description: 'Online store built with shopify',
        image: 'https://source.unsplash.com/1200x630?candy',
        url: 'https://sweetsixteen.ca/en'
    },
    {
        title: 'Mondoux',
        description: 'Corporate website',
        image: 'https://source.unsplash.com/1200x630?store',
        url: 'https://mondoux.ca/en/'
    },
    {
        title: 'Sogetel',
        description: 'Telecommunications and media provider website',
        image: 'https://source.unsplash.com/1200x630?tv',
        url: 'https://sogetel.com/'
    }
];

export const PERSONAL_PROJECTS: Projects = [
    {
        title: 'Linklist',
        description: 'Linktree clone built with Next.js, typescript & Tailwind',
        image: 'https://source.unsplash.com/1200x630?tech',
        url: 'https://linklist-domain.vercel.app/'
    },
    {
        title: 'Next.js starter',
        description: 'A Next.js starter that includes a collection of reusable components, hooks, and utilities to build amazing projects with complex animations and page transitions using GSAP.',
        image: 'https://source.unsplash.com/1200x630?neon',
        url: 'https://nextjs-gsap-starter.vercel.app/'
    }
];

export const FEATURED_PROJECT: ProjectProps = {
    title: 'Sweet sixteen',
    description: 'Online store built with shopify',
    image: 'https://source.unsplash.com/1200x630?candy',
    url: 'https://sweetsixteen.ca/en',
    type: ProjectsType.PROJECTS
};

export const LATEST_PERSONAL_PROJECT: ProjectProps = {
    title: 'Linklist',
    description: 'Linktree clone built with Next.js, typescript & Tailwind',
    image: 'https://source.unsplash.com/1200x630?tech',
    url: 'https://linklist-domain.vercel.app/',
    type: ProjectsType.PERSONAL_PROJECTS
};

export const TOTAL_PROJECTS = PROJECTS.length;
export const TOTAL_PERSONAL_PROJECTS = PERSONAL_PROJECTS.length;

export const PROJECTS_TABS: ProjectsTabs = [
    {
        title: 'Work',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae voluptate inventore nisi aut ad est quo sunt cupiditate cum nemo quam.',
        type: ProjectsType.PROJECTS,
        total: toTwoDigits(TOTAL_PROJECTS)
    },
    {
        title: 'Personal',
        description: 'Consectetur adipisicing elit. Porro aliquam eius accusamus maxime necessitatibus, itaque reiciendis architecto voluptates at quisquam adipisci nostrum tempore, minima deserunt, sequi incidunt repellendus officiis veniam.',
        type: ProjectsType.PERSONAL_PROJECTS,
        total: toTwoDigits(TOTAL_PERSONAL_PROJECTS)
    }
];