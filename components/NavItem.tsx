// import { useRouter } from 'next/router';
// import Link from 'next/link';

import { useRouter } from 'next-translate-routes/router';
import { translateUrl } from 'next-translate-routes';
import Link from 'next-translate-routes/link';

import { NavItemProps } from '@/types/components/global';
// import Link from 'next/link';
import useNavigationContext from '@/context/navigationContext';
import { ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';

function NavItem({
    href,
    title,
    onClick,
    className
}: NavItemProps, ref: ForwardedRef<HTMLAnchorElement>) {
    // const router = useRouter();
    // const isActive = translateUrl(router.asPath, router.locale ?? '') === href;
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
                scroll={false}
            >
                {title}
            </Link>
        </span>
    );
}

export default forwardRef(NavItem);