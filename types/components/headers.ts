import { ButtonProps } from './button';

/* Home */
export type HomeHeaderProps = {
    titles: string[];
    subfield: string;
    image: string;
    content: string;
    name: string[];
}

/* About */
export type AboutHeaderProps = {
    titles: string[];
    image: string;
}

/* Basic Header */
export type BasicHeaderProps = {
    title: string;
    content?: string;
    button?: ButtonProps;
    className?: string;
}