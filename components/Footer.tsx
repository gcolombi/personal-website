import styles from '@/styles/modules/Footer.module.scss';
import { gsap } from 'gsap';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Link from 'next/link';

export default function Footer() {
    const router = useRouter();
    const footerRef = useRef<HTMLElement | null>(null);

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            /* Intro animation */
            gsap.to('[data-footer-row]',
                {
                    opacity: 1,
                    ease: 'ease.in',
                    duration: 3,
                    scrollTrigger: {
                        trigger: '[data-footer-row]',
                        start: 'top bottom',
                        end: 'bottom top',
                        markers: true
                    }
                }
            );
        }, footerRef);

        return () => ctx.revert();
    }, [router.asPath]);

    return (
        <footer
            className={styles['c-footer']}
            ref={footerRef}
        >
            <div className="o-container">
                <div className={classNames
                    (
                        'o-grid',
                        styles['c-footer__row']
                    )}
                    data-footer-row
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