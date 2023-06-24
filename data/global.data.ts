import { CallToActionContent, FooterContent, Lang, MetaDataProps, NavigationRoutes } from '@/types/components/global';
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

export const CALL_TO_ACTION: Lang<CallToActionContent> = {
    en: {
        title: 'Get in touch',
        buttonLabel: 'Contact me'
    },
    fr: {
        title: 'Prendre contact',
        buttonLabel: 'Contactez-moi'
    }
};

export const META_404: Lang<MetaDataProps> = {
    en: {
        title: `Error 404 | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    },
    fr: {
        title: `Erreur 404 | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    }
};

export const PAGE_NOT_FOUND_HEADER: Lang<BasicHeaderProps> = {
    en: {
        title: 'Page not found',
        content: 'Cannot read properties of undefined. The page you are looking for could not be found.',
        button: {
            label: 'Please get me out of here'
        }
    },
    fr: {
        title: 'Page non trouvee',
        content: 'La page que vous recherchez n\'a pas pu être trouvée.',
        button: {
            label: 'S\'il vous plaît, faites-moi sortir d\'ici'
        }
    }
};