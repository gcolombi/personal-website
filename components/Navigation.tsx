import styles from '@/styles/modules/Navigation.module.scss';

// import Link from 'next/link';

import { useRouter } from 'next-translate-routes/router';
import Link from 'next-translate-routes/link';
import { translateUrl } from 'next-translate-routes';

import useNavigationContext from '@/context/navigationContext';
import useElementSize from '@/hooks/useElementSize';
import Logo from './shared/svg/Logo';
import MobileNavigation from './MobileNavigation';
import NavItem from './NavItem';
import classNames from 'classnames';

export default function Navigation() {

    const router = useRouter();

    const { setRef, open, sticky, hidden } = useNavigationContext();
    const [navigationRef, { height }] = useElementSize();

    return (
        <>
            <style jsx global>{`
                :root {
                    --navigation-height: ${height}px;
                }
            `}</style>
            <header
                className={classNames(
                    styles['c-navigation'],
                    {
                        [styles['is-sticky']]: sticky,
                        [styles['is-hidden']]: hidden,
                        [styles['is-open']]: open
                    }
                )}
                ref={(el: HTMLDivElement) => {
                    navigationRef(el);
                    setRef(el);
                }}
            >
                <div className="o-container">
                    <div className={styles['c-navigation__row']}>
                        <div className={styles['c-navigation__logo']}>
                            <Link href="/" title="Next.js starter">
                                <Logo />
                            </Link>
                        </div>
                        <MobileNavigation />
                        <nav className={styles['c-navigation__nav']}>
                            <div className={styles['c-navigation__nav__primary']}>
                                <div className={styles['c-navigation__nav__primary--list']}>
                                    <ul>
                                        <li>
                                            {/* <NavItem
                                                href="/form"
                                                title="Form"
                                                className={styles['is-current-page']}
                                            /> */}
                                            <NavItem
                                                href={translateUrl('/form', router.locale ?? '')}
                                                title="Form"
                                                className={styles['is-current-page']}
                                            />
                                        </li>
                                        <LanguageSwitcher />
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}

function LanguageSwitcher() {
    const router = useRouter();
    const getLocales = () => {
        const locales = router.locales ?? [];
        return locales.filter(l => l !== router.locale);
    }
    const locales = getLocales();

    return (
        <>
            {locales.map((locale: string, i) => (
                <li key={locale}>
                    <span>
                        <Link
                            href={translateUrl(router.asPath, router.locale ?? '')}
                            locale={locale}
                        >
                            {locale}
                        </Link>
                    </span>
                </li>
            ))}
        </>
    );
}