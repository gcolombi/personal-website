import { MobileNavigationProps } from '@/types/components/global';
import styles from '@/styles/modules/MobileNavigation.module.scss';
import { gsap } from 'gsap';
import SplitText from 'gsap/dist/SplitText';
import useTransitionContext from '@/context/transitionContext';
import useNavigationContext from '@/context/navigationContext';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { useRef, useState } from 'react';
import { translateUrl, useRouter } from 'next-translate-routes';
import LanguageSwitcher from './LanguageSwitcher';
import NavItem from './NavItem';
import classNames from 'classnames';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(SplitText);
}

export default function MobileNavigation({
    routes,
    socialMedias
}: MobileNavigationProps) {
    const router = useRouter();
    const { primaryEase } = useTransitionContext();
    const { mobileNavRef, open, currentLocale } = useNavigationContext();
    const navItemsRef = useRef<HTMLAnchorElement[] | null[]>([]);
    const navSocialsRef = useRef<HTMLUListElement | null>(null);
    const languageSwitcherRef = useRef<HTMLDivElement | null>(null);
    const [splitTexts, setSplitTexts] = useState<SplitText[]>([]);

    useIsomorphicLayoutEffect(() => {
        if (currentLocale !== router.locale) {
            /* Reverts old SplitTexts */
            splitTexts.forEach(splitText => {
                splitText.revert();
            });

            /* Split each navigation item */
            setTimeout(() => {
                const splitTextTree: SplitText[] = [];
                navItemsRef.current.forEach(item => {
                    const splitTextItem = new SplitText(item);
                    splitTextTree.push(splitTextItem);
                });
                setSplitTexts(splitTextTree);
            }, 0);
        } else {
            const ctx = gsap.context(() => {
                /* Split each navigation item */
                const splitTextTree: SplitText[] = [];
                navItemsRef.current.forEach(item => {
                    const splitTextItem = new SplitText(item);
                    splitTextTree.push(splitTextItem);
                });
                setSplitTexts(splitTextTree);
            });
            return () => ctx.revert();
        }
    }, [router.locale])

    useIsomorphicLayoutEffect(() => {
        if (open) {
            const ctx = gsap.context(() => {
                /* Animates navigation items */
                navItemsRef.current.forEach((item, index) => {
                    const chars = splitTexts[index].chars;
    
                    const increment = 0.07;
                    let initialDelay = 0.35;
    
                    chars.forEach(char => {
                        gsap.fromTo(char, {
                            y: '100%'
                        },
                        {
                            y: 0,
                            willChange: 'transform',
                            ease: primaryEase,
                            delay: initialDelay,
                            duration: 1.25,
                        });

                        initialDelay += increment;
                    });
                });

                /* Animates navigation item underline */
                gsap.fromTo(mobileNavRef.current,
                    {
                        '--li-line-width': '0',
                    },
                    {
                        '--li-line-width': '100%',
                        ease: primaryEase,
                        delay: 1.25,
                        duration: 0.7
                    }
                );
    
                /* Animates navigation socials list & language switcher */
                gsap.fromTo(navSocialsRef.current, {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    ease: primaryEase,
                    delay: 0.35,
                    duration: 1
                });

                gsap.fromTo(languageSwitcherRef.current, {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    ease: primaryEase,
                    delay: 0.35,
                    duration: 1
                });
            });
            return () => ctx.revert();
        }
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
                                    href={translateUrl(href, router.locale ?? '')}
                                    title={title}
                                    className={styles['is-current-page']}
                                    ref={(el) => {
                                        navItemsRef.current[i] =
                                            el;
                                    }}
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
                    <div className={styles['c-mobileNav__footer--language']} ref={languageSwitcherRef}>
                        <LanguageSwitcher router={router} />
                    </div>
                </div>
            </div>
        </div>
    )
}