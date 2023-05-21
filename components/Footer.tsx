import styles from '@/styles/modules/Footer.module.scss';
import { gsap } from 'gsap';
import useTransitionContext from '@/context/transitionContext';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import Link from 'next/link';
import classNames from 'classnames';

export default function Footer() {
    const { timeline, primaryEase, footerRef } = useTransitionContext();

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            /* Intro animation */
            gsap.to(footerRef.current,
                {
                    opacity: 1,
                    ease: primaryEase,
                    duration: 1,
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: 'top bottom',
                        end: 'bottom top'
                    }
                }
            );

            /* Outro animation */
            timeline?.add(
                gsap.to(footerRef.current,
                    {
                        opacity: 0,
                        ease: primaryEase,
                        duration: 0.45
                    }
                ),
                0
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <footer className={styles['c-footer']}>
            <div className="o-container">
                <div className={classNames
                    (
                        'o-grid',
                        styles['c-footer__row']
                    )}
                    ref={footerRef}
                    style={{ opacity: 0 }}
                >

                    <div className={styles['c-footer__title']}>
                        <div className={styles['c-footer__title--name']}>
                            <Link href="/" aria-label="Gerard Colombi">
                                Gerard Colombi
                            </Link>
                        </div>
                        <div className={classNames
                            (
                                'o-wysiwyg',
                                styles['c-footer__title--jobTitle']
                            )}
                        >
                            <p>Front-end developer</p>
                        </div>
                    </div>
                    <div className={styles['c-footer__socialLinks']}>
                        <ul>
                            <li>
                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Instagram
                                </a>
                                ,&nbsp;
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Twitter
                                </a>
                                ,&nbsp;
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
                    <div className={styles['c-footer__copyright']}>
                        <div className={classNames(
                                'o-wysiwyg',
                                styles['c-footer__copyright--year']
                            )}
                        >
                            <p>&copy; {new Date().getFullYear()}</p>
                        </div>
                        <div className={classNames(
                                'o-wysiwyg',
                                styles['c-footer__copyright--text']
                            )}
                        >
                            <p>All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}