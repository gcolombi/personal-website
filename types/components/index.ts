import { LinkProps } from 'next/link';
import { ButtonHTMLAttributes } from 'react';

/* Button */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    isExternal?: string;
    externalHref?: string;
    anchor?: string;
    className: string;
    wrapperClassName?: string;
}

export type ButtonType = ButtonProps & LinkProps;