import styles from '@/styles/modules/Project.module.scss';
import CharsInOut from './shared/gsap/CharsInOut';
import LinesInOut from './shared/gsap/LinesInOut';
import { slugify } from '@/utils/string';

export enum ProjectsType {
    PROJECTS,
    PERSONAL_PROJECTS,
}

export default function Project({
    title,
    description,
    image
}: {
    title: string;
    description?: string;
    image: string;
}) {
    return(
        <div className={styles['c-project']}>
            <div className={styles['c-project__details']}>
                <div className={styles['c-project__details--title']}>
                    <h2 className="h1 u-margin--none u-animatedLink">
                        <CharsInOut
                            target={`#${slugify(title)}`}
                            watch
                            isLink
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
            </div>
            <div className={styles['c-project__media']}>
                <div className={styles['c-project__media--img']}>
                    <picture>
                        <img src={image} alt={title} />
                    </picture>
                </div>
            </div>
        </div>
    )
};