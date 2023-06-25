import { CallToActionContent, FooterContent, Lang, MetaDataProps, NavigationRoutes } from '@/types/components/global';
import { BasicHeaderProps } from '@/types/components/headers';

export const NAVIGATION_ROUTES: Lang<NavigationRoutes> = {
    en: [
        {
            href: '/projects',
            title: 'Projects'
        },
        {
            href: '/about',
            title: 'About'
        },
        {
            href: '/contact',
            title: 'Contact'
        }
    ],
    fr: [
        {
            href: '/projects',
            title: 'Projets'
        },
        {
            href: '/about',
            title: 'A propos'
        },
        {
            href: '/contact',
            title: 'Contact'
        }
    ]
}

export const FOOTER: Lang<FooterContent> = {
    en: {
        title: 'Front-end Developer',
        copyright: 'All rights reserved'
    },
    fr: {
        title: 'Développeur Front-end',
        copyright: 'Tous droits réservés'
    }
};

export const CALL_TO_ACTION: Lang<CallToActionContent> = {
    en: {
        title: 'Get in touch',
        buttonLabel: 'Contact me',
        buttonHref: '/contact'

    },
    fr: {
        title: 'Prendre contact',
        buttonLabel: 'Contactez-moi',
        buttonHref: '/contact'
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

export const TRANSLATIONS: Lang<{key: string; value: string;}[]> = {
    en: [
        {
            key: 'Visit website',
            value: 'Visit website'
        }
    ],
    fr: [
        {
            key: 'Visit website',
            value: 'Visiter le site'
        }
    ]
}

export const GET_TRANSLATION = (string: string, lang: string): string => {
    const match = TRANSLATIONS[lang];

    if (match) {
        const target = match.find(el => el.key === string);

        if (target) {
            return target.value;
        }
        return string;
    }
    return '';
}