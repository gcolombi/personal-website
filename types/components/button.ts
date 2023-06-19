import { ButtonHTMLAttributes } from 'react';

/* Button */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    href?: string | Object;
    isExternal?: boolean;
    externalHref?: string;
    icon?: boolean;
    anchor?: string;
    onClick?: () => void;
    className?: string;
    wrapperClassName?: string;
}