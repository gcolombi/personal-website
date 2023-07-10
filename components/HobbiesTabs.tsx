import { HobbiesTabsProps } from '@/types/hobbies/tabs';
import styles from '@/styles/modules/HobbiesTabs.module.scss';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRef, useState } from 'react';
import useTransitionContext from '@/context/transitionContext';
import FadeInOut from './shared/gsap/FadeInOut';
import CharsInOut from './shared/gsap/CharsInOut';
import TranslateInOut from './shared/gsap/TranslateInOut';
import HobbiesScene from './HobbiesScene';
import classNames from 'classnames';

export default function HobbiesTabs({
    index,
    title,
    tabs,
    models
}: HobbiesTabsProps) {
    const { primaryEase } = useTransitionContext();
    const tabsWrapperRef = useRef<HTMLDivElement | null>(null);
    const [activeId, setActiveId] = useState(0);

    const handleClick = (id: number) => {
        setActiveId(id);
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
            <section className={styles['c-hobbiesTabs']}>
                <div className="o-container">
                    <div className="o-grid">
                        <div className={classNames(
                            'h4',
                            styles['c-hobbiesTabs__index']
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
                            styles['c-hobbiesTabs__title']
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
                        <div className={styles['c-hobbiesTabs__header']}>
                            {tabs.map(({ title, id }) => (
                                <button
                                    key={id}
                                    className={classNames(
                                        styles['c-hobbiesTabs__header__control'],
                                        {
                                            [styles['is-active']]: activeId === id
                                        }
                                    )}
                                    onClick={() => handleClick(id)}
                                >
                                    <div className={classNames(
                                        'h1',
                                        styles['c-hobbiesTabs__header__control--title']
                                    )}>
                                        <CharsInOut
                                            target={`#hobby-${id}`}
                                            watch
                                            textAlign="left"
                                        >
                                            <span id={`hobby-${id}`}>
                                                {title}
                                            </span>
                                        </CharsInOut>
                                    </div>
                                </button>
                            ))}
                            <div className={styles['c-hobbiesTabs__header__descriptions']} ref={tabsWrapperRef}>
                                <FadeInOut
                                    watch
                                >
                                    {tabs.map(({ description, id }) => (
                                        <div
                                            key={id}
                                            className={classNames(
                                                'o-wysiwyg',
                                                styles['c-hobbiesTabs__header__descriptions--element'],
                                                {
                                                    [styles['is-selected']]: activeId == id
                                                }
                                            )}
                                        >
                                            <p>{description}</p>
                                        </div>
                                    ))}
                                </FadeInOut>
                            </div>
                        </div>
                        <div className={styles['c-hobbiesTabs__scene']}>
                            <FadeInOut
                                watch
                            >
                                <HobbiesScene
                                    activeIndex={activeId}
                                    models={models}
                                />
                            </FadeInOut>
                        </div>
                        <div className={styles['c-hobbiesTabs__descriptions']} ref={tabsWrapperRef}>
                            <FadeInOut
                                watch
                            >
                                {tabs.map(({ description, id }) => (
                                    <div
                                        key={id}
                                        className={classNames(
                                            'o-wysiwyg',
                                            styles['c-hobbiesTabs__descriptions--element'],
                                            {
                                                [styles['is-selected']]: activeId == id
                                            }
                                        )}
                                    >
                                        <p>{description}</p>
                                    </div>
                                ))}
                            </FadeInOut>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};