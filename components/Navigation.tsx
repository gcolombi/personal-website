import styles from '@/styles/modules/Navigation.module.scss';
import Link from 'next/link';
import useNavigationContext from '@/context/navigationContext';
import useElementSize from '@/hooks/useElementSize';
import Logo from './shared/svg/Logo';
import MobileNavigation from './MobileNavigation';
import NavItem from './NavItem';
import classNames from 'classnames';

export default function Navigation() {
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
                                            <NavItem
                                                href="/form"
                                                title="Form"
                                                className={styles['is-current-page']}
                                            />
                                        </li>
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