import { LinkProps } from 'next/link';
import { ButtonHTMLAttributes } from 'react';

/* Button */
export interface ButtonProps extends LinkProps {
    label: string;
    isExternal?: boolean;
    externalHref?: string;
    anchor?: string;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'] | undefined;
    onClick?: () => void;
    disabled?: boolean;
    className: string;
    wrapperClassName?: string;
}