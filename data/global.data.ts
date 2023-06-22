import { CallToActionContent, FooterContent, MetaDataProps, NavigationRoutes } from '@/types/components/global';
import { BasicHeaderProps } from '@/types/components/headers';

export const FOOTER: FooterContent = {
    title: 'Front-end developer',
    copyright: 'All rights reserved'
};

export const NAVIGATION_ROUTES: NavigationRoutes = [
    {
        href: 'projects',
        title: 'Projects'
    },
    {
        href: 'about',
        title: 'About'
    },
    {
        href: 'contact',
        title: 'Contact'
    }
];

export const CALL_TO_ACTION: CallToActionContent = {
    title: 'Get in touch',
    buttonLabel: 'Contact me'
};

export const META_404: MetaDataProps = {
    title: `Error 404 | ${process.env.NEXT_PUBLIC_SITE_NAME}`
};

export const PAGE_NOT_FOUND_HEADER: BasicHeaderProps = {
    title: 'Page not found',
    content: 'Cannot read properties of undefined. The page you are looking for could not be found.',
    button: {
        label: 'Please get me out of here'
    }
};