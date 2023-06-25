import { Dispatch, SetStateAction } from 'react';
import { SocialMedias } from '../socials';
import { NextRouter } from 'next-translate-routes';

/* Lang */
export type Lang<Type> = {
    [key: string]: Type;
}

/* Loader */
export type LoaderProps = {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    setIsReady: Dispatch<SetStateAction<boolean>>;
}

/* Meta data */
export type MetaDataProps = {
    title?: string;
    description?: string;
    image?: string;
    type?: string;
}

/* Navigation */
export type TogglerProps = {
    open: boolean;
    toggle: () => void;
}

export type ThemeTogglerProps = {
    resolvedTheme: string | undefined;
    setTheme: (theme: string) => void;
}

export type LanguageSwitcherProps = {
    router: NextRouter;
}

export type NavItemProps = {
    href: string;
    title: string;
    onClick?: () => void;
    className: string;
}

export type NavigationProps = {
    routes: NavigationRoutes;
    socialMedias: SocialMedias;
}

export type MobileNavigationProps = {
    routes: NavigationRoutes;
    socialMedias: SocialMedias;
}

export type NavigationRoutes = NavigationRoute[];

export type NavigationRoute = {
    href: string;
    title: string;
}

/* Footer */
export type FooterProps = {
    socialMedias: SocialMedias;
} & FooterContent;

export type FooterContent = {
    title: string;
}

/* Call to action */
export type CallToActionProps = {
    index: string;
} & CallToActionContent;

export type CallToActionContent = {
    title: string;
    buttonLabel: string;
    buttonHref: string | Object;
}