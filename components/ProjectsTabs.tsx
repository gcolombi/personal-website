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
                        <button className={classNames(
                            styles['c-projectsTabs__header__control'],
                            {
                                [styles['is-active']]: true
                            }
                        )}>
                            <span className="h1">Projects</span>
                            <span className={styles['c-projectsTabs__header__control--count']}>04</span>
                        </button>
                        <button className={styles['c-projectsTabs__header__control']}>
                            <span className="h1">Personal</span>
                            <span className={styles['c-projectsTabs__header__control--count']}>03</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};