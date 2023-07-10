import { AboutHeaderProps } from '@/types/components/headers';
import styles from '@/styles/modules/AboutHeader.module.scss';
import CharsInOut from './shared/gsap/CharsInOut';
import ClipPathInOut from './shared/gsap/ClipPathInOut';
import Image from 'next/image';

export default function AboutHeader({
    titles,
    image
}: AboutHeaderProps) {
    return (
        <section className={styles['c-aboutHeader']}>
            <div className="o-container">
                <div className="o-grid">
                    <div className={styles['c-aboutHeader__title']}>
                        <h1 className="u-margin--none">
                            {titles.map((title, i) => (
                                <CharsInOut
                                    key={i}
                                    delay={0.46}
                                    target={`#header-title-${i}`}
                                >
                                    <span id={`header-title-${i}`}>
                                        {title}
                                    </span>
                                </CharsInOut>
                            ))}
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
                                        src={image}
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