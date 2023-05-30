import styles from '@/styles/modules/AboutIntroduction.module.scss';
import FadeInOut from './shared/gsap/FadeInOut';
import classNames from 'classnames';

export default function AboutIntroduction() {
    return (
        <section className={classNames(
            'u-spacing--responsive--bottom',
            styles['c-aboutIntroduction']
        )}>
            <div className="o-container">
                <div className="o-grid">
                    <div className={classNames(
                        'h4',
                        styles['c-aboutIntroduction__index']
                    )}>
                        <FadeInOut
                            watch
                        >
                            <span>
                                01
                            </span>
                        </FadeInOut>
                    </div>



                </div>
            </div>
        </section>
    );
};