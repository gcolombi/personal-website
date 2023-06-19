import { AboutIntroductionProps } from '@/types/components/introductions';
import styles from '@/styles/modules/AboutIntroduction.module.scss';
import FadeInOut from './shared/gsap/FadeInOut';
import LinesInOut from './shared/gsap/LinesInOut';
import ClipPathInOut from './shared/gsap/ClipPathInOut';
import Image from 'next/image';
import classNames from 'classnames';

export default function AboutIntroduction({
    index,
    content,
    image
}: AboutIntroductionProps) {
    return (
        <section className={classNames(
            'u-spacing--responsive',
            styles['c-aboutIntroduction']
        )}>
            <div className="o-container">
                <div className="o-grid">
                    <div className={classNames(
                        'h4',
                        styles['c-aboutIntroduction__index']
                    )}>
                        <FadeInOut
                            watch
                        >
                            <span>
                                {index}
                            </span>
                        </FadeInOut>
                    </div>
                    <div className={styles['c-aboutIntroduction__content']}>
                        {content.map((element, i) => (
                            <LinesInOut
                                key={i}
                                target={`#content-${i}`}
                                watch
                            >
                                <p id={`content-${i}`}>{element}</p>
                            </LinesInOut>
                        ))}
                    </div>
                    <div className={styles['c-aboutIntroduction__media']}>
                        <ClipPathInOut
                            fade={false}
                            clipPath="inset(0% 0% 100% 0%)"
                            watch
                        >
                            <div className={styles['c-aboutIntroduction__media--img']}>
                                <picture>
                                    <Image
                                        alt="Gerard Colombi"
                                        src={image}
                                        width={423}
                                        height={555}
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