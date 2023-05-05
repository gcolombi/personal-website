import { ButtonProps } from '@/types/components/button';
import styles from '@/styles/modules/HeaderBasic.module.scss';
import Button from './shared/Button';
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
                <section className={classNames(styles['c-headerBasic'], styles[className!])}>
                    <div className="o-container--small">
                        <div className={classNames('u-text--center', styles['c-headerBasic__row'])}>
                            <h1 id="title">{title}</h1>
                            {wysiwyg &&
                                <div className="o-wysiwyg">
                                    <p>{wysiwyg}</p>
                                </div>
                            }
                            {button &&
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
                            }
                        </div>
                    </div>
                </section>
            }
        </>
    );
}