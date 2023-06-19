import { MetaDataProps } from '@/types/components/global';
import { BasicHeaderProps } from '@/types/components/headers';

export const META_CONTACT: MetaDataProps = {
    title: `Contact | ${process.env.NEXT_PUBLIC_SITE_NAME}`
};

export const CONTACT_HEADER: BasicHeaderProps = {
    title: 'Contact',
    content: 'Is there something on your mind you\'d like to talk about? Whether it\'s related to work, just a casual conversation or need help with some code. Feel free to contact me at anytime.'
}