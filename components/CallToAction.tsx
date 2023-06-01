import styles from '@/styles/modules/CallToAction.module.scss';
import Link from 'next/link';
import CharsInOut from './shared/gsap/CharsInOut';
import FadeInOut from './shared/gsap/FadeInOut';
import TranslateInOut from './shared/gsap/TranslateInOut';
import classNames from 'classnames';

export default function CallToAction({
    index,
    title
}: {
    index: string;
    title: string;
}) {
    return(
        <section className={classNames(
            'u-spacing--responsive',
            styles['c-callToAction']
        )}>
            <div className="o-container">
                <div className="o-grid">
                    <div className={classNames(
                        'h4',
                        styles['c-callToAction__index']
                    )}>
                        <FadeInOut
                            watch
                        >
                            <span>
                                {index}
                            </span>
                        </FadeInOut>
                    </div>
                    <div className={classNames(
                        'u-overflow--hidden',
                        'u-uppercase',
                        styles['c-callToAction__title']
                    )}>
                        <TranslateInOut
                            fade={false}
                            y="100%"
                            start="-100% bottom"
                            end="top top"
                            watch
                        >
                            <h2 className={classNames(
                                'h4',
                                'u-margin--none',
                            )}>
                                {title}
                            </h2>
                        </TranslateInOut>
                    </div>
                    <div className={styles['c-callToAction__link']}>
                        <Link href="/contact" className="h1 u-animatedLink">
                            <CharsInOut
                                target="#call-to-action"
                                watch
                                isLink
                            >
                                <span id="call-to-action">
                                    Contact me
                                </span>
                            </CharsInOut>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};