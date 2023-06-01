import styles from '@/styles/modules/HeaderAbout.module.scss';
import CharsInOut from './shared/gsap/CharsInOut';
import ClipPathInOut from './shared/gsap/ClipPathInOut';

export default function AboutHeader() {
    return (
        <section className={styles['c-aboutHeader']}>
            <div className="o-container">
                <div className="o-grid">
                    <div className={styles['c-aboutHeader__title']}>
                        <h1 className="u-margin--none">
                            <CharsInOut
                                delay={0.46}
                                target="#about-detail"
                            >
                                <span id="about-detail">
                                    Passionate
                                </span>
                            </CharsInOut>
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
                    </div>
                    <div className={styles['c-aboutHeader__media']}>
                        <ClipPathInOut
                            fade={false}
                            delay={1}
                            clipPath="inset(0% 0% 100% 0%)"
                        >
                            <div className={styles['c-aboutHeader__media--img']}>
                                <picture>
                                    <img src="https://source.unsplash.com/870x542?tech" alt="" />
                                </picture>
                            </div>
                        </ClipPathInOut>
                    </div>
                </div>
            </div>
        </section>
    );
};