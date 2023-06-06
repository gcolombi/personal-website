import { ButtonProps } from '@/types/components/button';
import styles from '@/styles/modules/HeaderBasic.module.scss';
import Button from './shared/Button';
import CharsInOut from './shared/gsap/CharsInOut';
import LinesInOut from './shared/gsap/LinesInOut';
import FadeInOut from './shared/gsap/FadeInOut';
import { slugify } from '@/utils/string';
import classNames from 'classnames';

export default function HeaderBasic({
    title,
    wysiwyg,
    button,
    className
}: {
    title: string;
    wysiwyg?: string;
    button?: ButtonProps;
    className?: string;
}) {
    return (
        <>
            {title &&
                <section className={classNames
                    (
                        styles['c-headerBasic'],
                        styles[className!]
                    )}
                >
                    <div className="o-container">
                        <div className="o-grid">
                            <div className={classNames
                                (
                                    'u-text--center',
                                    styles['c-headerBasic__content']
                                )}
                            >
                                <h1>
                                    <CharsInOut
                                        delay={0.46}
                                        target={`#${slugify(title)}`}
                                    >
                                        <span id={slugify(title)}>
                                            {title}
                                        </span>
                                    </CharsInOut>
                                </h1>
                                {wysiwyg &&
                                    <LinesInOut
                                        delay={0.53}
                                        target={`#${slugify(title)}-intro`}
                                    >
                                        <div className="o-wysiwyg">
                                            <p id={`${slugify(title)}-intro`}>{wysiwyg}</p>
                                        </div>
                                    </LinesInOut>
                                }
                                {button &&
                                    <FadeInOut
                                        delay={0.60}
                                    >
                                        <Button
                                            label={button.label}
                                            href={button.href}
                                            isExternal={button.isExternal}
                                            externalHref={button.externalHref}
                                            anchor={button.anchor}
                                            onClick={button.onClick}
                                            className={button.className}
                                            wrapperClassName={styles['c-headerBasic__btn']}
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