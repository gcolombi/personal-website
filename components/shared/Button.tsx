import { ButtonProps } from '@/types/components/button';
import styles from '@/styles/modules/Button.module.scss';
import Link from 'next-translate-routes/link';
import { translateUrl, useRouter } from 'next-translate-routes';
import ArrowOutward from './svg/ArrowOutward';
import Circle from './svg/Circle';
import { getTranslation } from '@/utils/translation';

export default function Button({
    label,
    href,
    isExternal,
    externalHref,
    icon,
    anchor,
    type,
    onClick,
    disabled,
    className = 'c-btn',
    wrapperClassName
}: ButtonProps) {
    const { locale } = useRouter();
    const loadingButtonLabel = getTranslation('Sending', locale ?? '');

    if (label && href) {
        return (
            <div className={wrapperClassName}>
                <Link
                    className={styles[className]}
                    href={translateUrl(href, locale ?? '')}
                    onClick={onClick}
                    scroll={false}
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
                    {icon &&
                        <ArrowOutward />
                    }
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
                {disabled ? `${loadingButtonLabel}...` : label}
            </button>
        </div>
    );
}