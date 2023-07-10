import { ProjectsTabsProps } from '@/types/projects/tabs';
import { ProjectsType } from '@/types/projects';
import styles from '@/styles/modules/ProjectsTabs.module.scss';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRef } from 'react';
import useTransitionContext from '@/context/transitionContext';
import ProjectsList from './ProjectsList';
import FadeInOut from './shared/gsap/FadeInOut';
import CharsInOut from './shared/gsap/CharsInOut';
import TranslateInOut from './shared/gsap/TranslateInOut';
import classNames from 'classnames';

export default function ProjectsTabs({
    index,
    tabs,
    projects,
    projectsType,
    setProjectsType
}: ProjectsTabsProps) {
    const { primaryEase } = useTransitionContext();
    const tabsWrapperRef = useRef<HTMLDivElement | null>(null);

    const handleClick = (type: ProjectsType) => {
        setProjectsType(type);
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
                                    {index}
                                </span>
                            </FadeInOut>
                        </div>
                        <div className={styles['c-projectsTabs__header']}>
                            {tabs.map(({ title, type, total }, i) => (
                                <button
                                    key={i}
                                    className={classNames(
                                        styles['c-projectsTabs__header__control'],
                                        {
                                            [styles['is-active']]: projectsType === type
                                        }
                                    )}
                                    onClick={() => handleClick(type)}
                                >
                                    <div className={classNames(
                                        'h1',
                                        styles['c-projectsTabs__header__control--title']
                                    )}>
                                        <CharsInOut
                                            delay={0.46}
                                            target={`#project-type-${i}`}
                                        >
                                            <span id={`project-type-${i}`}>
                                                {title}
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
                                            ({total})
                                        </TranslateInOut>
                                    </span>
                                </button>
                            ))}
                        </div>
                        <div className={styles['c-projectsTabs__descriptions']} ref={tabsWrapperRef}>
                            <FadeInOut
                                delay={0.53}
                            >
                                {tabs.map(({ description, type }, i) => (
                                    <div
                                        key={i}
                                        className={classNames(
                                            'o-wysiwyg',
                                            styles['c-projectsTabs__descriptions--element'],
                                            {
                                                [styles['is-selected']]: projectsType == type
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
            <ProjectsList projects={projects} />
        </>
    );
};