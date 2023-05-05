import { ButtonProps } from '@/types/components/button';
import styles from '@/styles/modules/Button.module.scss';
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
}: ButtonProps) {
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