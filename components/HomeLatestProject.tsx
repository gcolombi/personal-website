import styles from '@/styles/modules/HomeLatestProject.module.scss';
import SectionHeader from './shared/SectionHeader';
import FadeInOut from './shared/gsap/FadeInOut';
import TranslateInOut from './shared/gsap/TranslateInOut';
import classNames from 'classnames';

export default function HomeLatestProject() {
    return(
        <section className="u-spacing--responsive">
            <div className="o-container">
                <div className="o-grid">
                    <div className={classNames(
                        'h4',
                        styles['c-homeLatestProject__index']
                    )}>
                        <FadeInOut
                            watch
                        >
                            <span>
                                03
                            </span>
                        </FadeInOut>
                    </div>
                    <div className={classNames(
                        'u-overflow--hidden',
                        'u-uppercase',
                        styles['c-homeLatestProject__title']
                    )}>
                        <TranslateInOut
                            fade={false}
                            y="100%"
                            start="-100% bottom"
                            end="top top"
                            watch
                        >
                            <h2 className={classNames(
                                'h4',
                                'u-margin--none',
                            )}>
                                Latest personnal project
                            </h2>
                        </TranslateInOut>
                    </div>
                </div>
                {/* <SectionHeader
                    index="03"
                    title="Latest personnal project"
                /> */}
            </div>
        </section>
    );
};