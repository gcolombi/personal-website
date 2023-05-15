import styles from '@/styles/modules/MobileNavigation.module.scss';
import { gsap } from 'gsap';
import SplitText from 'gsap/dist/SplitText';
import CustomEase from 'gsap/dist/CustomEase';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import useNavigationContext from '@/context/navigationContext';
import { useRef } from 'react';
import NavItem from './NavItem';
import classNames from 'classnames';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(SplitText, CustomEase);
}

export default function MobileNavigation() {
    const { setMobileNavRef, open } = useNavigationContext();
    const navItemsRef = useRef<HTMLAnchorElement[]>([]);
    const navSocialsRef = useRef<HTMLAnchorElement[]>([]);

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
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
                            ease: CustomEase.create('custom', 'M0,0 C0.62,0.05 0.01,0.99 1,1'),
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

            navSocialsRef.current.forEach(social => {
                if (open) {
                    gsap.fromTo(social, {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        ease: CustomEase.create('custom', 'M0,0 C0.62,0.05 0.01,0.99 1,1'),
                        delay: 0.35,
                        duration: 1
                    });
                } else {
                    // gsap.to(social, {
                    //     opacity: 0,
                    //     ease: 'power4.in',
                    //     duration: 0.25
                    // });
                }
            });

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
                    ref={(el: HTMLElement) => setMobileNavRef(el)}
                >
                    <div className={styles['c-mobileNav__inner']}>
                        <div className={styles['c-mobileNav__nav']}>
                                <ul>
                                    <li>
                                        <span>
                                            <a
                                                href="#"
                                                ref={(el) => navItemsRef.current[0] = el!}
                                            >
                                                Projects
                                            </a>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <a
                                                href="#"
                                                ref={(el) => navItemsRef.current[1] = el!}
                                            >
                                                About
                                            </a>
                                        </span>
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
                            <ul>
                                <li>
                                    <a
                                        href="https://www.instagram.com/"
                                        ref={(el) => navSocialsRef.current[0] = el!}
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://twitter.com/"
                                        ref={(el) => navSocialsRef.current[1] = el!}
                                    >
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/"
                                        ref={(el) => navSocialsRef.current[2] = el!}
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