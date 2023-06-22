import { HomeIntroductionProps } from '@/types/components/introductions';
import styles from '@/styles/modules/HomeIntroduction.module.scss';
import Button from './shared/Button';
import LinesInOut from './shared/gsap/LinesInOut';
import FadeInOut from './shared/gsap/FadeInOut';
import classNames from 'classnames';

export default function HomeIntroduction({
    index,
    titles,
    content,
    button
}: HomeIntroductionProps) {
    return(
        <section className={classNames(
            'u-spacing--responsive',
            styles['c-homeIntroduction']
        )}>
            <div className="o-container">
                <div className="o-grid">
                    <div className={classNames(
                        'h4',
                        styles['c-homeIntroduction__index']
                    )}>
                        <FadeInOut
                            watch
                        >
                            <span>
                                {index}
                            </span>
                        </FadeInOut>
                    </div>
                    <div className={classNames(
                        'u-large-text',
                        styles['c-homeIntroduction__title']
                    )}>
                        {titles.map((title, i) => (
                            <LinesInOut
                                key={i}
                                target={`#title-${i}`}
                                watch
                            >
                                <div className={classNames({
                                    'o-wysiwyg': i > 0
                                })}>
                                    <p id={`title-${i}`}>{title}</p>
                                </div>
                            </LinesInOut>
                        ))}
                    </div>
                    <div className={styles['c-homeIntroduction__content']}>
                        <FadeInOut
                            watch
                        >
                            <div className="o-wysiwyg">
                                {content.map((element, i) => (
                                    <p key={i}>{element}</p>
                                ))}
                            </div>
                        </FadeInOut>
                    </div>
                    <div className={styles['c-homeIntroduction__btn']}>
                        <FadeInOut
                            watch
                        >
                            <Button {...button} />
                        </FadeInOut>
                    </div>
                </div>
            </div>
        </section>
    );
};