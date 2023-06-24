import { ProjectProps } from '@/types/projects';
import styles from '@/styles/modules/Project.module.scss';
import Button from './shared/Button';
import CharsInOut from './shared/gsap/CharsInOut';
import LinesInOut from './shared/gsap/LinesInOut';
import FadeInOut from './shared/gsap/FadeInOut';
import Image from 'next/image';
import { slugify } from '@/utils/string';

export default function Project({
    title,
    description,
    image,
    url,
    githubUrl
}: ProjectProps) {
    return(
        <div className={styles['c-project']}>
            <div className={styles['c-project__details']}>
                <div className={styles['c-project__details--title']}>
                    <h2 className="h1 u-margin--none">
                        <CharsInOut
                            target={`#${slugify(title)}`}
                            watch
                        >
                            <span id={slugify(title)}>
                                {title}
                            </span>
                        </CharsInOut>
                    </h2>
                </div>
                <div className={styles['c-project__details--description']}>
                    <LinesInOut
                        target={`#${slugify(title)}-description`}
                        watch
                    >
                        <div className="o-wysiwyg u-uppercase">
                            <p id={`${slugify(title)}-description`}>{description}</p>
                        </div>
                    </LinesInOut>
                </div>
                <div className={styles['c-project__details--btn']}>
                    {url &&
                        <FadeInOut
                            watch
                        >
                            <Button
                                label="Visit website"
                                className="c-btn--external"
                                externalHref={url}
                                isExternal
                                icon
                            />
                        </FadeInOut>
                    }
                    {githubUrl &&
                        <FadeInOut
                            watch
                        >
                            <Button
                                label="GitHub"
                                className="c-btn--external"
                                externalHref={githubUrl}
                                isExternal
                                icon
                            />
                        </FadeInOut>
                    }
                </div>
            </div>
            <div className={styles['c-project__media']}>
                <FadeInOut
                    watch
                >
                    <div className={styles['c-project__media--img']}>
                        <picture>
                            <Image
                                alt={title}
                                src={image}
                                width={870}
                                height={457}
                            />
                        </picture>
                    </div>
                </FadeInOut>
            </div>
        </div>
    )
};