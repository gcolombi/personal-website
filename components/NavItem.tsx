import Link from 'next/link';
import useNavigationContext from '@/context/navigationContext';
import { ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';

function NavItem({
    href,
    title,
    onClick,
    className
}: {
    href: string;
    title: string;
    onClick?: () => void;
    className: string;
}, ref: ForwardedRef<HTMLAnchorElement>) {
    const { currentRoute } = useNavigationContext();
    const isActive = currentRoute === href;

    return (
        <span>
            <Link
                href={href}
                className={classNames({
                    [className]: isActive
                })}
                onClick={onClick}
                ref={ref}
            >
                {title}
            </Link>
        </span>
    );
}

export default forwardRef(NavItem);