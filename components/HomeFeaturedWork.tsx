import { ProjectProps } from '@/types/projects';
import styles from '@/styles/modules/HomeFeaturedWork.module.scss';
import Project from './Project';
import FadeInOut from './shared/gsap/FadeInOut';
import TranslateInOut from './shared/gsap/TranslateInOut';
import classNames from 'classnames';

export default function HomeFeaturedWork({
    index,
    title,
    project
}: {
    index: string;
    title: string;
    project: ProjectProps
}) {
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
                                {index}
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
                                {title}
                            </h2>
                        </TranslateInOut>
                    </div>
                </div>
                <div className={styles['c-homeFeaturedWork__project']}>
                    <Project
                        {...project}
                    />
                </div>
            </div>
        </section>
    );
};