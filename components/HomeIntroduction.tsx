import styles from '@/styles/modules/HomeIntroduction.module.scss';
import SectionHeader from './shared/SectionHeader';
import Button from './shared/Button';
import LinesInOut from './shared/gsap/LinesInOut';
import FadeInOut from './shared/gsap/FadeInOut';
import classNames from 'classnames';

export default function HomeIntroduction() {
    return(
        <section className={classNames(
            'u-spacing--responsive',
            styles['c-homeIntroduction']
        )}>
            <div className="o-container">
                <SectionHeader
                    index="01"
                    title="About me"
                />
                <div className="o-grid">
                    <div className={classNames(
                        'u-large-text',
                        styles['c-homeIntroduction__title']
                    )}>
                        <LinesInOut
                            target="#title-beginning"
                            watch
                        >
                            <p id="title-beginning">Lorem ipsum dolor sit amet consectetur adipisicing elit. At cupiditate maxime accusamus deserunt tempore quam odio in sapiente obcaecati perspiciatis.</p>
                        </LinesInOut>
                        <LinesInOut
                            target="#title-end"
                            watch
                        >
                            <div className="o-wysiwyg">
                                <p id="title-end">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolorum facilis libero enim officia commo.</p>
                            </div>
                        </LinesInOut>
                    </div>
                    <div className={styles['c-homeIntroduction__content']}>
                        <FadeInOut
                            watch
                        >
                            <div className="o-wysiwyg">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias cumque odit quod aut? Molestiae labore deleniti aperiam commodi quos, nam id, tenetur illo sit iste, vel iure. Nulla, eius. Molestiae labore deleniti aperiam modus.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quos doloribus maiores laboriosam aspernatur voluptatibus.</p>
                            </div>
                        </FadeInOut>
                    </div>
                    <div className={styles['c-homeIntroduction__btn']}>
                        <FadeInOut
                            watch
                        >
                            <Button
                                label="More about me"
                                href="/about"
                                className="c-btn"
                            />
                        </FadeInOut>
                    </div>
                </div>
            </div>
        </section>
    );
};