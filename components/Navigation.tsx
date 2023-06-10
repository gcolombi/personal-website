import styles from '@/styles/modules/Navigation.module.scss';
import { gsap } from 'gsap';
import Link from 'next/link';
import useTransitionContext from '@/context/transitionContext';
import useNavigationContext from '@/context/navigationContext';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import useElementSize from '@/hooks/useElementSize';
import MobileNavigation from './MobileNavigation';
import NavItem from './NavItem';

export default function Navigation() {
    const { timeline, primaryEase } = useTransitionContext();
    const { navigationRef, open, toggle } = useNavigationContext();
    const [headerRef, { height }] = useElementSize();

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            /* Intro animation */
            gsap.fromTo(
                navigationRef.current, {
                    y: '-100%'
                },
                {
                    opacity: 1,
                    y: 0,
                    willChange: 'transform',
                    ease: primaryEase,
                    delay: 1,
                    duration: 1.25
                }
            );

            /* Outro animation */
            timeline?.add(
                gsap.to(navigationRef.current,
                    {
                        opacity: 0,
                        ease: primaryEase,
                        duration: 0.35
                    }
                ),
                0
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <style jsx global>{`
                :root {
                    --navigation-height: ${height}px;
                }
            `}</style>
            <header
                className={styles['c-navigation']}
                ref={(el: HTMLDivElement) => {
                    headerRef(el);
                    navigationRef.current = el;
                }}
                style={{ opacity: 0 }}
            >
                <div className="o-container">
                    <div className={styles['c-navigation__row']}>
                        <div className={styles['c-navigation__logo']}>
                            <Link href="/" aria-label="Gerard Colombi" scroll={false}>
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
                                            <NavItem
                                                href="/projects"
                                                title="Projects"
                                                className={styles['is-current-page']}
                                            />
                                        </li>
                                        <li>
                                            <NavItem
                                                href="/about"
                                                title="About"
                                                className={styles['is-current-page']}
                                            />
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
            className={styles['m-toggler']}
            type="button"
            aria-label="Menu toggler"
            onClick={toggle}
        >
            {open ? 'Close' : 'Menu'}
        </button>
    );
}