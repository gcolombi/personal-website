import { ProjectProps } from '@/types/projects';
import styles from '@/styles/modules/Project.module.scss';
import CharsInOut from './shared/gsap/CharsInOut';
import LinesInOut from './shared/gsap/LinesInOut';
import { slugify } from '@/utils/string';

export default function Project({
    title,
    description,
    image,
    url
}: ProjectProps) {
    return(
        <div className={styles['c-project']}>
            <div className={styles['c-project__details']}>
                <div className={styles['c-project__details--title']}>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h1 u-margin--none u-animatedLink"
                    >
                        <CharsInOut
                            target={`#${slugify(title)}`}
                            watch
                            isLink
                        >
                            <span id={slugify(title)}>
                                {title}
                            </span>
                        </CharsInOut>
                    </a>
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
            </div>
            <div className={styles['c-project__media']}>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['c-project__media__img']}
                >
                    <picture>
                        <img src={image} alt={title} />
                    </picture>
                    <div className={styles['c-project__media__img--overlay']}>
                        <span>
                            Visit website
                        </span>
                    </div>
                </a>
            </div>
        </div>
    )
};