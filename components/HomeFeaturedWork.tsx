import styles from '@/styles/modules/HomeFeaturedWork.module.scss';
import Project from './Project';
import FadeInOut from './shared/gsap/FadeInOut';
import TranslateInOut from './shared/gsap/TranslateInOut';
import classNames from 'classnames';

export default function HomeFeaturedWork() {
    return(
        <section className={classNames(
            'u-spacing--responsive',
            styles['c-homeFeaturedWork']
        )}>
            <div className="o-container">
                <div className="o-grid">
                    <div className={classNames(
                        'h4',
                        styles['c-homeFeaturedWork__index']
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
                        styles['c-homeFeaturedWork__title']
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
                                Featured work
                            </h2>
                        </TranslateInOut>
                    </div>
                </div>
                <div className={styles['c-homeFeaturedWork__project']}>
                    <Project />
                </div>
            </div>
        </section>
    );
};