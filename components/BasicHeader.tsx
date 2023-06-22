import { BasicHeaderProps } from '@/types/components/headers';
import styles from '@/styles/modules/BasicHeader.module.scss';
import Button from './shared/Button';
import CharsInOut from './shared/gsap/CharsInOut';
import LinesInOut from './shared/gsap/LinesInOut';
import FadeInOut from './shared/gsap/FadeInOut';
import { slugify } from '@/utils/string';
import classNames from 'classnames';

export default function BasicHeader({
    title,
    content,
    button,
    className
}: BasicHeaderProps) {
    return (
        <>
            {title &&
                <section className={classNames
                    (
                        'u-text--center',
                        styles['c-basicHeader'],
                        styles[className!]
                    )}
                >
                    <div className="o-container">
                        <div className="o-grid">
                            <div className={classNames(styles['c-basicHeader__title'])}>
                                <h1 className="u-margin--none">
                                    <CharsInOut
                                        delay={0.46}
                                        target={`#${slugify(title)}`}
                                    >
                                        <span id={slugify(title)}>
                                            {title}
                                        </span>
                                    </CharsInOut>
                                </h1>
                            </div>
                            <div className={classNames(styles['c-basicHeader__content'])}>
                                {content &&
                                    <LinesInOut
                                        delay={0.53}
                                        target={`#${slugify(title)}-intro`}
                                    >
                                        <div className="o-wysiwyg">
                                            <p id={`${slugify(title)}-intro`}>{content}</p>
                                        </div>
                                    </LinesInOut>
                                }
                                {button &&
                                    <FadeInOut
                                        delay={0.60}
                                    >
                                        <Button
                                            {...button}
                                            wrapperClassName={styles['c-basicHeader__btn']}
                                        />
                                    </FadeInOut>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    );
}