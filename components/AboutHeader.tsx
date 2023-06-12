import styles from '@/styles/modules/AboutHeader.module.scss';
import CharsInOut from './shared/gsap/CharsInOut';
import ClipPathInOut from './shared/gsap/ClipPathInOut';
import Image from 'next/image';

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
                                    <Image
                                        alt="gaming"
                                        src="/static/images/about-header.jpg"
                                        width={870}
                                        height={542}
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