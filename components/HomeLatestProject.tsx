import { ProjectProps } from '@/types/projects';
import styles from '@/styles/modules/HomeLatestProject.module.scss';
import Project from './Project';
import FadeInOut from './shared/gsap/FadeInOut';
import TranslateInOut from './shared/gsap/TranslateInOut';
import classNames from 'classnames';

export default function HomeLatestProject({
    index,
    title,
    project
}: {
    index: string;
    title: string;
    project: ProjectProps;
}) {
    return(
        <section className={classNames(
            'u-spacing--responsive',
            styles['c-homeLatestProject']
        )}>
            <div className="o-container">
                <div className="o-grid">
                    <div className={classNames(
                        'h4',
                        styles['c-homeLatestProject__index']
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
                        styles['c-homeLatestProject__title']
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
                <div className={styles['c-homeLatestProject__project']}>
                    <Project
                        {...project}
                    />
                </div>
            </div>
        </section>
    );
};