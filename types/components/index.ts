import { ButtonHTMLAttributes } from 'react';

/* Button */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    href?: string;
    isExternal?: string;
    externalHref?: string;
    anchor?: string;
    onClick?: () => void;
    className: string;
    wrapperClassName?: string;
}