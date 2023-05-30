import styles from '@/styles/modules/AboutIntroduction.module.scss';
import FadeInOut from './shared/gsap/FadeInOut';
import LinesInOut from './shared/gsap/LinesInOut';
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
                        <LinesInOut
                            target="#title-beginning"
                            watch
                        >
                            <p id="title-beginning">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias cumque odit quod aut? Molestiae labore deleniti aperiam commodi quos, nam id, tenetur illo sit iste, vel iure. Nulla, eius. Molestiae labore deleniti aperiam modus.</p>
                        </LinesInOut>
                        <LinesInOut
                            target="#title-end"
                            watch
                        >
                            <div className="o-wysiwyg">
                                <p id="title-end">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quos doloribus maiores laboriosam aspernatur voluptatibus.</p>
                            </div>
                        </LinesInOut>
                    </div>
                    <div className={styles['c-aboutIntroduction__media']}>
                        <picture>
                            <img src="https://source.unsplash.com/422x677?tech" alt="" />
                        </picture>
                    </div>

                </div>
            </div>
        </section>
    );
};