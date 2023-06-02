import styles from '@/styles/modules/ProjectsList.module.scss';
import { useMemo } from 'react';
import Project from './Project';
import classNames from 'classnames';

export default function ProjectsList({
    projectsType
}: {
    projectsType: string;
}) {
    const projects = useMemo(() => {
        //   PROJECTS_LIST[projectsType]
        return [];
    }, [projectsType]);
    return (
        <section className={classNames(
            'u-spacing--responsive--bottom',
            styles['c-projectsList']
        )}>
            <div className="o-container">
                <div className={styles['c-projectsList__list']}>
                    <div className={styles['c-projectsList__item']}>
                        <Project
                            title="Sweet sixteen"
                            description="Online store built with shopify"
                            image="https://source.unsplash.com/1200x630?abstract"
                        />
                    </div>
                    <div className={styles['c-projectsList__item']}>
                        <Project
                            title="Mondoux"
                            description="Corporate website"
                            image="https://source.unsplash.com/1200x630?tech"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};