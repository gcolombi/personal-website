import styles from '@/styles/modules/ProjectsTabs.module.scss';
import classNames from 'classnames';
import FadeInOut from './shared/gsap/FadeInOut';

console.log(styles);

export default function ProjectsTabs() {
    return (
        <section className={styles['c-projectsTabs']}>
            <div className="o-container">
                <div className="o-grid">
                    <div className={classNames(
                        'h4',
                        styles['c-projectsTabs__index']
                    )}>
                        <FadeInOut>
                            <span>
                                01
                            </span>
                        </FadeInOut>
                    </div>
                    <div className={styles['c-projectsTabs__header']}>
                        <div className={styles['c-projectsTabs__header__control']}>
                            <button className={classNames(
                                'h1',
                                styles['c-projectsTabs__header__control--btn']
                            )}>
                                <span>Projects</span>
                            </button>
                            <span className={styles['c-projectsTabs__header__control--count']}>02</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};