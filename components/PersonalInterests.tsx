import styles from '@/styles/modules/PersonalInterests.module.scss';
import FadeInOut from './shared/gsap/FadeInOut';
import TranslateInOut from './shared/gsap/TranslateInOut';
import classNames from 'classnames';

export default function PersonalInterests() {
    return (
        <section className={classNames(
            'u-spacing--responsive',
            styles['c-personalInterests']
        )}>
            <div className="o-container">
                <div className="o-grid">
                    <div className={classNames(
                        'h4',
                        styles['c-personalInterests__index']
                    )}>
                        <FadeInOut
                            watch
                        >
                            <span>
                                02
                            </span>
                        </FadeInOut>
                    </div>
                    <div className={classNames(
                        'u-overflow--hidden',
                        'u-uppercase',
                        styles['c-personalInterests__title']
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
                                Personal Interests
                            </h2>
                        </TranslateInOut>
                    </div>

                </div>
            </div>
        </section>
    );
}