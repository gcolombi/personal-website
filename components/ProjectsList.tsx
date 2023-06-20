import { Projects } from '@/types/projects';
import styles from '@/styles/modules/ProjectsList.module.scss';
import Project from './Project';
import classNames from 'classnames';

export default function ProjectsList({
    projects,
}: {
    projects: Projects
}) {
    return (
        <section className={classNames(
            'u-spacing--responsive--bottom',
            styles['c-projectsList']
        )}>
            <div className="o-container">
                <div className={styles['c-projectsList__list']}>
                    {projects.map((project) => (
                        <div key={project.title} className={styles['c-projectsList__item']}>
                            <Project
                                {...project}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};