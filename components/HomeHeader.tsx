import styles from '@/styles/modules/HomeHeader.module.scss';
import CharsInOut from "./shared/gsap/CharsInOut";
import ClipPathInOut from './shared/gsap/ClipPathInOut';
import classNames from 'classnames';
import TranslateInOut from './shared/gsap/TranslateInOut';
import LinesInOut from './shared/gsap/LinesInOut';

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
                                target="#job-type"
                            >
                                <span id="job-type">
                                    Front-end
                                </span>
                            </CharsInOut>
                            <CharsInOut
                                delay={0.46}
                                target="#job-title"
                            >
                                <span id="job-title">
                                    Developer
                                </span>
                            </CharsInOut>
                        </h1>
                        <div className="u-overflow--hidden">
                            <TranslateInOut
                                fade={false}
                                delay={0.46}
                                y="100%"
                            >
                                <div className={classNames(
                                    'u-headingColor--gray-600',
                                    styles['c-homeHeader__title--subfield']
                                )}>
                                    <h2 className="h6 u-margin--none u-uppercase">Full stack capable</h2>
                                </div>
                            </TranslateInOut>
                        </div>
                    </div>
                    <div className={styles['c-homeHeader__media']}>
                        <ClipPathInOut
                            fade={false}
                            delay={1}
                            clipPath="inset(100% 0% 0% 0%)"
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
                    <div className={styles['c-homeHeader__text']}>
                        <LinesInOut
                            delay={1}
                            target="#text"
                            watch
                        >
                            <div className="o-wysiwyg u-uppercase">
                                <p id="text">Maker of things with passion and excellence</p>
                            </div>
                        </LinesInOut>
                    </div>
                    <div className={styles['c-homeHeader__name']}>
                        <h2 className="h1 u-margin--none">
                            <CharsInOut
                                delay={0.46}
                                target="#firstname"
                            >
                                <span id="firstname">
                                    Gerard
                                </span>
                            </CharsInOut>
                            <CharsInOut
                                delay={0.46}
                                target="#lastname"
                            >
                                <span id="lastname">
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
