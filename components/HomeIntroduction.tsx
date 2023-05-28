import styles from '@/styles/modules/HomeIntroduction.module.scss';
import SectionHeader from './shared/SectionHeader';
import Button from './shared/Button';
import classNames from 'classnames';

export default function HomeIntroduction() {
    return(
        <section className={styles['c-homeIntroduction']}>
            <div className="o-container">
                <SectionHeader
                    index="01"
                    title="About me"
                />
                <div className="o-grid">
                    <div className={classNames(
                        'u-large-text',
                        'o-wysiwyg',
                        styles['c-homeIntroduction__title']
                    )}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At cupiditate maxime accusamus deserunt tempore quam odio in sapiente obcaecati perspiciatis.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolorum facilis libero enim officia commo.</p>
                    </div>
                    <div className={classNames(
                        'o-wysiwyg',
                        styles['c-homeIntroduction__content']
                    )}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias cumque odit quod aut? Molestiae labore deleniti aperiam commodi quos, nam id, tenetur illo sit iste, vel iure. Nulla, eius. Molestiae labore deleniti aperiam modus.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quos doloribus maiores laboriosam aspernatur voluptatibus.</p>
                    </div>
                    <div className={styles['c-homeIntroduction__btn']}>
                        <Button
                            label="More about me"
                            href="/about"
                            className="c-btn"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
