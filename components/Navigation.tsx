import styles from '@/styles/modules/Navigation.module.scss';
import Link from 'next/link';
import useNavigationContext from '@/context/navigationContext';
import useElementSize from '@/hooks/useElementSize';
import MobileNavigation from './MobileNavigation';
import NavItem from './NavItem';
import classNames from 'classnames';

export default function Navigation() {
    const { setRef, open, sticky, hidden, toggle } = useNavigationContext();
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
                        [styles['is-hidden']]: hidden
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
                            <Link href="/" title="Gerard Colombi">
                                Gerard Colombi
                            </Link>
                        </div>
                        <Toggler
                            open={open}
                            toggle={toggle}
                        />
                        <nav className={styles['c-navigation__nav']}>
                            <div className={styles['c-navigation__nav__primary']}>
                                <div className={styles['c-navigation__nav__primary--list']}>
                                    <ul>
                                        <li>
                                            <span>
                                                <a href="#">Projects</a>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <a href="#">About</a>
                                            </span>
                                        </li>
                                        <li>
                                            <NavItem
                                                href="/contact"
                                                title="Contact"
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
            <MobileNavigation />
        </>
    );
}

function Toggler({
    open,
    toggle
}: {
    open: boolean;
    toggle: () => void;
}) {
    return (
        <button
            className={classNames(
                'h4',
                styles['m-toggler'],
            )}
            type="button"
            aria-label="Menu toggler"
            onClick={toggle}
        >
            {open ? 'Close' : 'Menu'}
        </button>
    );
}