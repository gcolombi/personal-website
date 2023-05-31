import styles from '@/styles/modules/AboutHeader.module.scss';
import CharsInOut from './shared/gsap/CharsInOut';

export default function AboutHeader() {
    return (
        <section className={styles['c-aboutHeader']}>
            <div className="o-container">
                <div className="o-grid">
                    <div className={styles['c-aboutHeader__title']}>
                        <h1 className="u-margin--none">
                            <CharsInOut
                                delay={0.46}
                                target="#chars-1"
                            >
                                <span id="chars-1">
                                    Passionate
                                </span>
                            </CharsInOut>
                            <CharsInOut
                                delay={0.46}
                                target="#chars-2"
                            >
                                <span id="chars-2">
                                    Front-end
                                </span>
                            </CharsInOut>
                            <CharsInOut
                                delay={0.46}
                                target="#chars-3"
                            >
                                <span id="chars-3">
                                    Developer
                                </span>
                            </CharsInOut>
                        </h1>
                    </div>
                    <div className={styles['c-aboutHeader__media']}>
                        <div className={styles['c-aboutHeader__media--img']}>
                            <picture>
                                <img src="https://source.unsplash.com/870x542?tech" alt="" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};