import styles from '@/styles/modules/Navigation.module.scss';
import Link from 'next/link';
import useNavigationContext from '@/context/navigationContext';
import useElementSize from '@/hooks/useElementSize';
import MobileNavigation from './MobileNavigation';
import NavItem from './NavItem';
import classNames from 'classnames';

export default function Navigation() {
    const { setRef, setMobileNavRef, open, sticky, hidden, toggle } = useNavigationContext();
    const [navigationRef, { height }] = useElementSize();
    // const mobileNavRef = useRef<HTMLElement>(null);

    const toggleNav = () => {
        toggle();

        // if (open) {
        //     gsap.to(mobileNavRef.current, {
        //         // scaleY: 0,
        //         y: '100%',
        //         // transformOrigin: 'top',
        //         willChange: 'transform',
        //         // ease: 'power3.out',
        //         ease: 'expo.inOut',
        //         delay: 0.5,
        //         duration: 0.5,
        //         onComplete: () => {
        //             console.log('done - end');
        //         }
        //     });
        // } else {
        //     gsap.to(mobileNavRef.current, {
        //         // scaleY: 1,
        //         y: 0,
        //         // transformOrigin: 'bottom',
        //         willChange: 'transform',
        //         // ease: 'power3.out',
        //         ease: 'expo.inOut',
        //         duration: 0.7,
        //         onComplete: () => {
        //             console.log('start - end');
        //         }
        //     });
        // }
    }

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
                            <Link href="/" title="Gerard Colombi">
                                Gerard Colombi
                            </Link>
                        </div>
                        <Toggler
                            open={open}
                            toggle={toggleNav}
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
            <MobileNavigation
                ref={(el: HTMLElement) => setMobileNavRef(el)}
            />
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