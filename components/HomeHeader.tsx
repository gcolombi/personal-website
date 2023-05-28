import styles from '@/styles/modules/HomeHeader.module.scss';
import CharsInOut from "./shared/gsap/CharsInOut";

export default function HomeHeader() {
    return (
        <section className={styles['c-homeHeader']}>
            <div className="o-container">
                <div className="o-grid">
                    <div className={styles['c-homeHeader__title']}>
                        <h1>
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
                </div>
            </div>
        </section>
    );
};
