import { FooterProps } from '@/types/components/global';
import styles from '@/styles/modules/Footer.module.scss';
import { gsap } from 'gsap';
import useTransitionContext from '@/context/transitionContext';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { useRouter } from 'next-translate-routes';
import { getTranslation } from '@/utils/translation';
import Link from 'next-translate-routes/link';
import Button from './shared/Button';
import classNames from 'classnames';

export default function Footer({
    title,
    socialMedias
}: FooterProps) {
    const { locale } = useRouter();
    const { timeline, primaryEase, footerRef } = useTransitionContext();
    const copyright = getTranslation('All rights reserved', locale ?? '');

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
                            <Link href="/" aria-label={process.env.NEXT_PUBLIC_SITE_NAME} scroll={false}>
                                {process.env.NEXT_PUBLIC_SITE_NAME}
                            </Link>
                        </div>
                        <div className={classNames
                            (
                                'o-wysiwyg',
                                styles['c-footer__title--jobTitle']
                            )}
                        >
                            <p>{title}</p>
                        </div>
                    </div>
                    <div className={styles['c-footer__socialLinks']}>
                        <ul>
                            {socialMedias.map(({ title, url }, i) => (
                                <li key={i}>
                                    <Button
                                        label={title}
                                        className="c-btn--external"
                                        externalHref={url}
                                        isExternal
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles['c-footer__copyright']}>
                        <div className={classNames(
                            'o-wysiwyg',
                            styles['c-footer__copyright--year']
                        )}>
                            <p>&copy; {new Date().getFullYear()}</p>
                        </div>
                        <div className={classNames(
                            'o-wysiwyg',
                            styles['c-footer__copyright--text']
                        )}>
                            <p>{copyright}</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}