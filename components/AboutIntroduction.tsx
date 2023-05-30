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
                    <div className={styles['c-aboutIntroduction__content']}>
                        <FadeInOut
                            watch
                        >
                            <div className="o-wysiwyg">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias cumque odit quod aut? Molestiae labore deleniti aperiam commodi quos, nam id, tenetur illo sit iste, vel iure. Nulla, eius. Molestiae labore deleniti aperiam modus.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quos doloribus maiores laboriosam aspernatur voluptatibus.</p>
                            </div>
                        </FadeInOut>
                    </div>


                </div>
            </div>
        </section>
    );
};