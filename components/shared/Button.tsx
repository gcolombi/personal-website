import styles from '@/styles/modules/Button.module.scss';
import { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import Circle from './svg/Circle';

export default function Button({
    label,
    href,
    isExternal,
    externalHref,
    anchor,
    type = 'button',
    onClick,
    disabled,
    className,
    wrapperClassName
}: {
    label: string;
    href?: string;
    isExternal?: string;
    externalHref?: string;
    anchor?: string;
    type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    onClick?: () => void;
    disabled?: boolean;
    className: string;
    wrapperClassName?: string;
}) {

    if (label && href) {
        return (
            <div className={wrapperClassName}>
                <Link
                    className={styles[className]}
                    href={href}
                    onClick={onClick}
                >
                    {label}
                </Link>
            </div>
        );
    }

    if (label && (isExternal && externalHref || anchor)) {
        return (
            <div className={wrapperClassName}>
                <a
                    className={styles[className]}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    href={externalHref ? externalHref : `#${anchor}`}
                >
                    {label}
                </a>
            </div>
        );
    }

    if (label) {
        return (
            <div className={wrapperClassName}>
                <button
                    type={type}
                    className={styles[className]}
                    onClick={onClick}
                    disabled={disabled}
                >
                    {disabled && <Circle />}
                    {disabled ? 'Sending...' : label}
                </button>
            </div>
        );
    }
}