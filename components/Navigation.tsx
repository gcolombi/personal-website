import styles from '@/styles/modules/Navigation.module.scss';
import { gsap } from 'gsap';
import Link from 'next/link';
import useTransitionContext from '@/context/transitionContext';
import useNavigationContext from '@/context/navigationContext';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import useElementSize from '@/hooks/useElementSize';
import useScrollbar from '@/hooks/useScrollbar';
import { useRef } from 'react';
import MobileNavigation from './MobileNavigation';
import NavItem from './NavItem';
import classNames from 'classnames';


export default function Navigation() {
    const { timeline } = useTransitionContext();
    const { setRef, open, sticky, hidden, toggle } = useNavigationContext();
    const [navigationRef, { height }] = useElementSize();
    const headerRef = useRef<HTMLElement | null>(null);
    const { scrollY } = useScrollbar();

    /* Animates navigation on first render */
    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            /* Intro animation */
            gsap.fromTo(headerRef.current, {
                y: '-100%'
            },
            {
                opacity: 1,
                y: 0,
                willChange: 'transform',
                ease: 'expo.InOut',
                delay: 1,
                duration: 0.45,
                onComplete: () => {
                    console.log('navigation to');
                }
            });

            /* Outro animation */
            timeline?.add(
                gsap.to(headerRef.current,
                    {
                        y: '-100%',
                        willChange: 'transform',
                        ease: 'expo.InOut',
                        duration: 0.45,
                        onComplete: () => {
                            console.log('timeline from navigation');
                        }
                    }
                ),
                0
            );
        });

        return () => ctx.revert();
    }, []);

    /* Watches scrollY to hide navigation */
    useIsomorphicLayoutEffect(() => {
        if (scrollY > 0) {
            if (hidden) {
                gsap.to(headerRef.current,
                    {
                        y: '-100%',
                        willChange: 'transform',
                        ease: 'expo.InOut',
                        duration: 0.45,
                    }
                );
                return;
            }

            gsap.to(headerRef.current,
                {
                    y: 0,
                    willChange: 'transform',
                    ease: 'expo.InOut',
                    duration: 0.45,
                }
            );
        }
    }, [scrollY, hidden]);

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
                    headerRef.current = el;
                }}
                style={{ opacity: 0 }}
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