import { SocialMedias } from '../socials';

/* Meta data */
export type MetaDataProps = {
    title?: string;
    description?: string;
    image?: string;
    type?: string;
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