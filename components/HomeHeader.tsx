import styles from '@/styles/modules/HomeHeader.module.scss';
import CharsInOut from "./shared/gsap/CharsInOut";
import ClipPathInOut from './shared/gsap/ClipPathInOut';
import classNames from 'classnames';

export default function HomeHeader() {
    return (
        <section className={styles['c-homeHeader']}>
            <div className={classNames(
                'o-container',
                styles['c-homeHeader__container']
            )}>
                <div className={classNames(
                    'o-grid',
                    styles['c-homeHeader__grid']
                )}>
                    <div className={styles['c-homeHeader__title']}>
                        <h1 className="u-margin--none">
                            <CharsInOut
                                delay={0.46}
                                target="#chars-3"
                            >
                                <span id="chars-3">
                                    Front-end
                                </span>
                            </CharsInOut>
                            <CharsInOut
                                delay={0.46}
                                target="#chars-4"
                            >
                                <span id="chars-4">
                                    Developer
                                </span>
                            </CharsInOut>
                        </h1>
                    </div>
                    <div className={styles['c-homeHeader__media']}>
                        <ClipPathInOut
                            fade={false}
                            delay={0.46}
                            clipPath="inset(100% 0% 0% 0%)"
                            clipPathOut="inset(0% 0% 100% 0%)"
                            watch
                        >
                            <div className={styles['c-homeHeader__media--img']}>
                                <picture>
                                    <source srcSet="https://source.unsplash.com/350x350?tech" media="(max-width: 767px)" />
                                    <source srcSet="https://source.unsplash.com/250x350?tech" media="(max-width: 1449px)" />
                                    <img src="https://source.unsplash.com/380x500?tech" alt="" />
                                </picture>
                            </div>
                        </ClipPathInOut>
                    </div>
                    <div className={styles['c-homeHeader__name']}>
                        <h2 className="h1 u-margin--none">
                            <CharsInOut
                                delay={0.46}
                                target="#chars-1"
                            >
                                <span id="chars-1">
                                    Gerard
                                </span>
                            </CharsInOut>
                            <CharsInOut
                                delay={0.46}
                                target="#chars-2"
                            >
                                <span id="chars-2">
                                    Colombi
                                </span>
                            </CharsInOut>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};
