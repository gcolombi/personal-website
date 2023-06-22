import { MobileNavigationProps } from '@/types/components/global';
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

export default function MobileNavigation({
    routes,
    socialMedias
}: MobileNavigationProps) {
    const { primaryEase } = useTransitionContext();
    const { mobileNavRef, open } = useNavigationContext();
    const navItemsRef = useRef<HTMLAnchorElement[] | null[]>([]);
    const navSocialsRef = useRef<HTMLUListElement | null>(null);

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            /* Animates navigation items */
            navItemsRef.current.forEach(item => {
                const splitText = new SplitText(item);
                const chars = splitText.chars;

                const increment = 0.07;
                let initialDelay = 0.35;

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
            }
        });
        return () => ctx.revert();
    }, [open]);

    return (
        <div
            className={classNames(
                styles['c-mobileNav'],
                {
                    [styles['is-open']]: open
                }
            )}
            ref={mobileNavRef}
        >
            <div className={styles['c-mobileNav__inner']}>
                <nav className={styles['c-mobileNav__nav']}>
                        <ul>
                            {routes.map(({ href, title }, i) => (
                                <li key={i}>
                                    <NavItem
                                        href={`/${href}`}
                                        title={title}
                                        className={styles['is-current-page']}
                                        ref={(el) => navItemsRef.current[i] = el}
                                    />
                                </li>
                            ))}
                        </ul>
                </nav>
                <div className={styles['c-mobileNav__footer']}>
                    <ul ref={navSocialsRef}>
                        {socialMedias.map(({ title, url }, i) => (
                            <li key={i}>
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}