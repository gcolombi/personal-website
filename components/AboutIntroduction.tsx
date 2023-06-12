import styles from '@/styles/modules/AboutIntroduction.module.scss';
import FadeInOut from './shared/gsap/FadeInOut';
import LinesInOut from './shared/gsap/LinesInOut';
import ClipPathInOut from './shared/gsap/ClipPathInOut';
import Image from 'next/image';
import classNames from 'classnames';

export default function AboutIntroduction() {
    return (
        <section className={classNames(
            'u-spacing--responsive',
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
                            target="#title-begin"
                            watch
                        >
                            <p id="title-begin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias cumque odit quod aut? Molestiae labore deleniti aperiam commodi quos, nam id, tenetur illo sit iste, vel iure. Nulla, eius. Molestiae labore deleniti aperiam modus.</p>
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
                        <ClipPathInOut
                            fade={false}
                            clipPath="inset(0% 0% 100% 0%)"
                            watch
                        >
                            <div className={styles['c-aboutIntroduction__media--img']}>
                                <picture>
                                    <Image
                                        alt="Gerard Colombi"
                                        src="/static/images/about-portrait.jpg"
                                        width={423}
                                        height={555}
                                        priority
                                    />
                                </picture>
                            </div>
                         </ClipPathInOut>
                    </div>
                </div>
            </div>
        </section>
    );
};