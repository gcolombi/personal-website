import { HomeFeaturedProjectProps } from '@/types/components/sections';
import styles from '@/styles/modules/HomeFeaturedProject.module.scss';
import Project from './Project';
import Button from './shared/Button';
import FadeInOut from './shared/gsap/FadeInOut';
import TranslateInOut from './shared/gsap/TranslateInOut';
import classNames from 'classnames';

export default function HomeFeaturedProject({
    index,
    title,
    project,
    button
}: HomeFeaturedProjectProps) {
    return(
        <section className={classNames(
            'u-spacing--responsive',
            styles['c-homeFeaturedProject']
        )}>
            <div className="o-container">
                <div className="o-grid">
                    <div className={classNames(
                        'h4',
                        styles['c-homeFeaturedProject__index']
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
                        styles['c-homeFeaturedProject__title']
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
                </div>
                <div className={styles['c-homeFeaturedProject__project']}>
                    <Project
                        {...project}
                    />
                </div>
                {button &&
                    <div className={styles['c-homeFeaturedProject__btn']}>
                        <FadeInOut
                            watch
                        >
                            <Button {...button}/>
                        </FadeInOut>
                    </div>
                }
            </div>
        </section>
    );
};