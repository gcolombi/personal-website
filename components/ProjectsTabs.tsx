import styles from '@/styles/modules/ProjectsTabs.module.scss';
import { useState } from 'react';
import FadeInOut from './shared/gsap/FadeInOut';
import CharsInOut from './shared/gsap/CharsInOut';
import TranslateInOut from './shared/gsap/TranslateInOut';
import classNames from 'classnames';

export default function ProjectsTabs() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <section className={styles['c-projectsTabs']}>
            <div className="o-container">
                <div className="o-grid">
                    <div className={classNames(
                        'h4',
                        styles['c-projectsTabs__index']
                    )}>
                        <FadeInOut
                            delay={0.53}
                        >
                            <span>
                                01
                            </span>
                        </FadeInOut>
                    </div>
                    <div className={styles['c-projectsTabs__header']}>
                        <button
                            key={0}
                            className={classNames(
                                styles['c-projectsTabs__header__control'],
                                {
                                    [styles['is-active']]: activeTabIndex == 0
                                }
                            )}
                            onClick={() => setActiveTabIndex(0)}
                        >
                            <div className="h1">
                                <CharsInOut
                                    delay={0.46}
                                    target="#project-type-1"
                                >
                                    <span id="project-type-1">
                                        Work
                                    </span>
                                </CharsInOut>
                            </div>
                            <span className={classNames(
                                'u-overflow--hidden',
                                styles['c-projectsTabs__header__control--count']
                            )}>
                                <TranslateInOut
                                    fade={false}
                                    delay={0.53}
                                    y="100%"
                                >
                                    04
                                </TranslateInOut>
                            </span>
                        </button>
                        <button
                            key={1}
                            className={classNames(
                                styles['c-projectsTabs__header__control'],
                                {
                                    [styles['is-active']]: activeTabIndex == 1
                                }
                            )}
                            onClick={() => setActiveTabIndex(1)}
                        >
                            <div className="h1">
                                <CharsInOut
                                    delay={0.46}
                                    target="#project-type-1"
                                >
                                    <span id="project-type-1">
                                        Personal
                                    </span>
                                </CharsInOut>
                            </div>
                            <span className={classNames(
                                'u-overflow--hidden',
                                styles['c-projectsTabs__header__control--count']
                            )}>
                                <TranslateInOut
                                    fade={false}
                                    delay={0.53}
                                    y="100%"
                                >
                                    03
                                </TranslateInOut>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};