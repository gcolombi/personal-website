import { ProjectsTabs } from '@/types/projects/tabs';
import { ProjectProps, Projects, ProjectsType } from '@/types/projects';
import { toTwoDigits } from '@/utils/number';
import { randomItem } from '@/utils/array';

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
        title: 'Linklist',
        description: 'Linktree clone built with Next.js, typescript & Tailwind',
        image: '/static/images/projects/linklist.jpg',
        url: 'https://linklist-domain.vercel.app/'
    },
    {
        title: 'Next.js starter',
        description: 'A Next.js starter that includes a collection of reusable components, hooks, and utilities to build amazing projects with complex animations and page transitions using GSAP.',
        image: '/static/images/projects/nextjs-starter.jpg',
        url: 'https://nextjs-gsap-starter.vercel.app/'
    }
];

export const FEATURED_PROJECT: ProjectProps = randomItem(PROJECTS);

export const LATEST_PERSONAL_PROJECT: ProjectProps = {
    title: 'Linklist',
    description: 'Linktree clone built with Next.js, typescript & Tailwind',
    image: '/static/images/projects/linklist.jpg',
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