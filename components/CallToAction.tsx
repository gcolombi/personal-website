import styles from '@/styles/modules/CallToAction.module.scss';
import Link from 'next/link';
import CharsInOut from './shared/gsap/CharsInOut';
import classNames from 'classnames';

export default function CallToAction() {
    return(
        <section className={classNames(
                'u-spacing--responsive',
                styles['c-callToAction']
            )}
        >
            <div className="o-container">
                <div className="o-grid">
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