import styles from '@/styles/modules/MobileNavigation.module.scss';
import { gsap } from 'gsap';
import SplitText from 'gsap/dist/SplitText';
import useTransitionContext from '@/context/transitionContext';
import useNavigationContext from '@/context/navigationContext';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';
import NavItem from './NavItem';
import classNames from 'classnames';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(SplitText);
}

export default function MobileNavigation() {
    const { primaryEase } = useTransitionContext();
    const { mobileNavRef, open } = useNavigationContext();
    const navItemsRef = useRef<HTMLAnchorElement[]>([]);
    const navSocialsRef = useRef<HTMLUListElement>(null);

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            /* Animates navigation items */
            navItemsRef.current.forEach(item => {
                const splitText = new SplitText(item);
                const chars = splitText.chars;

                const increment = 0.07;
                let initialDelay = 0.35;
                let initialDelayOut = 0 + increment * chars.length;

                chars.forEach(char => {
                    if (open) {
                        gsap.fromTo(char, {
                            y: '100%'
                        },
                        {
                            y: 0,
                            willChange: 'transform',
                            ease: primaryEase,
                            delay: initialDelay,
                            duration: 1.25
                        });

                        initialDelay += increment;
                    } else {
                        // gsap.to(char, {
                        //     y: '100%',
                        //     ease: 'power4.in',
                        //     // delay: initialDelayOut,
                        //     delay: 0.25,
                        //     duration: 0.25
                        // });

                        // initialDelayOut -= increment;
                    }
                });
            });

            /* Animates navigation socials list */
            if (open) {
                gsap.fromTo(navSocialsRef.current, {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    ease: primaryEase,
                    delay: 0.35,
                    duration: 1
                });
            } else {
                // gsap.to(navSocialsRef.current, {
                //     opacity: 0,
                //     ease: 'power4.in',
                //     duration: 0.25
                // });
            }
        });
        return () => ctx.revert();
    }, [open]);

    return (
        <>
            {/* {open && */}
                <nav
                    className={classNames(
                        styles['c-mobileNav'],
                        {
                            [styles['is-open']]: open
                        }
                    )}
                    ref={mobileNavRef}
                >
                    <div className={styles['c-mobileNav__inner']}>
                        <div className={styles['c-mobileNav__nav']}>
                                <ul>
                                    <li>
                                        <NavItem
                                            href="/projects"
                                            title="Projects"
                                            className={styles['is-current-page']}
                                            ref={(el) => navItemsRef.current[0] = el!}
                                        />
                                    </li>
                                    <li>
                                        <NavItem
                                            href="/about"
                                            title="About"
                                            className={styles['is-current-page']}
                                            ref={(el) => navItemsRef.current[1] = el!}
                                        />
                                    </li>
                                    <li>
                                        <NavItem
                                            href="/contact"
                                            title="Contact"
                                            className={styles['is-current-page']}
                                            ref={(el) => navItemsRef.current[2] = el!}
                                        />
                                    </li>
                                </ul>
                        </div>
                        <div className={styles['c-mobileNav__footer']}>
                            <ul ref={navSocialsRef}>
                                <li>
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://twitter.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            {/* } */}
        </>
    )
}