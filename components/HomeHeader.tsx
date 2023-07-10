import { HomeHeaderProps } from '@/types/components/headers';
import styles from '@/styles/modules/HomeHeader.module.scss';
import CharsInOut from "./shared/gsap/CharsInOut";
import ClipPathInOut from './shared/gsap/ClipPathInOut';
import TranslateInOut from './shared/gsap/TranslateInOut';
import LinesInOut from './shared/gsap/LinesInOut';
import Image from 'next/image';
import { slugify } from '@/utils/string';
import classNames from 'classnames';
import { useRouter } from 'next-translate-routes';

export default function HomeHeader({
    titles,
    subfield,
    image,
    content,
    name
}: HomeHeaderProps) {
    const { locale } = useRouter();
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
                            {titles.map((title, i) => (
                                <CharsInOut
                                    key={i}
                                    delay={0.46}
                                    // target={`#${slugify(title)}`}
                                    target={`#header-title-${i}`}
                                >
                                    {/* <span id={slugify(title)}> */}
                                    <span id={`header-title-${i}`}>
                                        {title}
                                    </span>
                                </CharsInOut>
                            ))}
                        </h1>
                        <div className="u-overflow--hidden">
                            <TranslateInOut
                                fade={false}
                                delay={0.46}
                                y="100%"
                            >
                                <div className={styles['c-homeHeader__title--subfield']}>
                                    <h2 className="h4 u-margin--none u-uppercase">{subfield}</h2>
                                </div>
                            </TranslateInOut>
                        </div>
                    </div>
                    <div className={styles['c-homeHeader__media']}>
                        <ClipPathInOut
                            fade={false}
                            delay={1}
                            clipPath="inset(100% 0% 0% 0%)"
                        >
                            <div className={styles['c-homeHeader__media--img']}>
                                <picture>
                                    <Image
                                        alt={name.join(' ')}
                                        src={image}
                                        width={384}
                                        height={503}
                                        priority
                                    />
                                </picture>
                            </div>
                        </ClipPathInOut>
                    </div>
                    <div className={styles['c-homeHeader__text']}>
                        <LinesInOut
                            delay={1}
                            target="#text"
                        >
                            <div className="o-wysiwyg u-uppercase">
                                <p id="text">{content}</p>
                            </div>
                        </LinesInOut>
                    </div>
                    <div className={styles['c-homeHeader__name']}>
                        <h2 className="h1 u-margin--none">
                            {name.map((element, i) => (
                                <CharsInOut
                                    key={i}
                                    delay={0.46}
                                    target={`#header-name-${i}`}
                                    // target={`#${slugify(element)}`}
                                >
                                    {/* <span id={slugify(element)}> */}
                                    <span id={`header-name-${i}`}>
                                        {element}
                                    </span>
                                </CharsInOut>
                            ))}
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};