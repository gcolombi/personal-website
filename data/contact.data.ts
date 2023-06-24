import { Lang, MetaDataProps } from '@/types/components/global';
import { BasicHeaderProps } from '@/types/components/headers';

export const META_CONTACT: Lang<MetaDataProps> = {
    en: {
        title: `Contact | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    },
    fr: {
        title: `Contact | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    }
};

export const CONTACT_HEADER: Lang<BasicHeaderProps> = {
    en: {
        title: 'Contact',
        content: 'Is there something on your mind you\'d like to talk about? Whether it\'s related to work, just a casual conversation or need help with some code. Feel free to contact me at anytime.'
    },
    fr: {
        title: 'Contact',
        content: 'Il y a quelque chose qui vous préoccupe et dont vous aimeriez parler ? Que ce soit dans le cadre du travail, d\'une conversation informelle ou besoin d\'aide avec du code. N\'hésitez pas à me contacter à tout moment.'
    }
};