import styles from '@/styles/modules/ProjectsTabs.module.scss';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRef, useState } from 'react';
import useTransitionContext from '@/context/transitionContext';
import FadeInOut from './shared/gsap/FadeInOut';
import CharsInOut from './shared/gsap/CharsInOut';
import TranslateInOut from './shared/gsap/TranslateInOut';
import Project from './Project';
import classNames from 'classnames';

export default function ProjectsTabs() {
    const { primaryEase } = useTransitionContext();
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const tabsItemsRef = useRef<HTMLDivElement[]>([]);
    const tabsWrapperRef = useRef<HTMLDivElement | null>(null);

    const handleClick = (index: number) => {
        setActiveTabIndex(index);
        gsap.fromTo(tabsWrapperRef.current,
            {
                height: tabsWrapperRef.current?.offsetHeight
            },
            {
            duration: 0.7,
            height: 'auto',
            ease: primaryEase,
            onComplete: () => {
                ScrollTrigger.refresh(true);
            }
        });
    }

    return (
        <>
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
                                onClick={() => handleClick(0)}
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
                                onClick={() => handleClick(1)}
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
                        <div className={styles['c-projectsTabs__descriptions']} ref={tabsWrapperRef}>
                            <FadeInOut
                                delay={0.53}
                            >
                                <div
                                    data-id={0}
                                    key={0}
                                    className={classNames(
                                        'o-wysiwyg',
                                        styles['c-projectsTabs__descriptions--element'],
                                        {
                                            [styles['is-selected']]: activeTabIndex == 0
                                        }
                                    )}
                                    ref={(el: HTMLDivElement) => tabsItemsRef.current[0] = el}
                                >
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae voluptate inventore nisi aut ad est quo sunt cupiditate cum nemo quam.</p>
                                </div>
                                <div
                                    data-id={1}
                                    key={1}
                                    className={classNames(
                                        'o-wysiwyg',
                                        styles['c-projectsTabs__descriptions--element'],
                                        {
                                            [styles['is-selected']]: activeTabIndex == 1
                                        }
                                    )}
                                    ref={(el: HTMLDivElement) => tabsItemsRef.current[1] = el}
                                >
                                    {/* <p>Cras pulvinar mattis nunc sed blandit libero. Molestie nunc non blandit massa. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Vitae ultrici.</p> */}
                                    <p>Consectetur adipisicing elit. Porro aliquam eius accusamus maxime necessitatibus, itaque reiciendis architecto voluptates at quisquam adipisci nostrum tempore, minima deserunt, sequi incidunt repellendus officiis veniam.</p>
                                </div>
                            </FadeInOut>
                        </div>
                    </div>
                </div>
            </section>
            <section className="u-spacing--responsive--bottom">
                <div className="o-container">
                    <Project
                        title="Sweet sixteen"
                        description="Online store built with shopify"
                        image="https://source.unsplash.com/1200x630?abstract"
                    />
                </div>
            </section>
        </>
    );
};