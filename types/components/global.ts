import { Dispatch, SetStateAction } from 'react';
import { SocialMedias } from '../socials';

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
export type NavItemProps = {
    href: string;
    title: string;
    onClick?: () => void;
    className: string;
}

export type NavigationProps = {
    socialMedias: SocialMedias;
}

export type MobileNavigationProps = {
    socialMedias: SocialMedias;
}

/* Footer */
export type FooterProps = {
    socialMedias: SocialMedias;
} & FooterContent;

export type FooterContent = {
    title: string;
    copyright: string;
}

/* Call to action */
export type CallToActionProps = {
    index: string;
    buttonHref: string | Object;
} & CallToActionContent;

export type CallToActionContent = {
    title: string;
    buttonLabel: string;
}