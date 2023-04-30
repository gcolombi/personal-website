import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames';

export default function NavItem({
    href,
    title,
    onClick,
    className
}: {
    href: string;
    title: string;
    onClick?: () => void;
    className: string
}) {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
        <span>
            <Link
                href={href}
                className={classNames({
                    [className]: isActive
                })}
                onClick={onClick}
            >
                {title}
            </Link>
        </span>
    );
}