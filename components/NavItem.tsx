import { NavItemProps } from '@/types/components/global';
import Link from 'next-translate-routes/link';
import useNavigationContext from '@/context/navigationContext';
import { ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';

function NavItem(
    { href, title, onClick, className }: NavItemProps,
    ref: ForwardedRef<HTMLAnchorElement>,
) {
    const { currentRoute } = useNavigationContext();
    const isActive = currentRoute === href;

    return (
        <span>
            <Link
                href={href}
                className={classNames({
                    [className]: isActive,
                })}
                ref={ref}
                onClick={onClick}
            >
                {title}
            </Link>
        </span>
    );
}

export default forwardRef(NavItem);