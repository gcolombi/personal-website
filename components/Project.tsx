import styles from '@/styles/modules/Project.module.scss';
import CharsInOut from './shared/gsap/CharsInOut';
import LinesInOut from './shared/gsap/LinesInOut';

export default function Project() {
    return(
        <div className={styles['c-project']}>
            <div className={styles['c-project__details']}>
                <div className={styles['c-project__details--title']}>
                    <h2 className="h1 u-margin--none">
                        <CharsInOut
                            target="#chars-1"
                            watch
                        >
                            <span id="chars-1">
                                Sweet
                            </span>
                        </CharsInOut>
                        <CharsInOut
                            target="#chars-2"
                            watch
                        >
                            <span id="chars-2">
                                Sixteen
                            </span>
                        </CharsInOut>
                    </h2>
                </div>
                <div className={styles['c-project__details--description']}>
                    <LinesInOut
                        target="#description"
                        watch
                    >
                        <div className="o-wysiwyg u-uppercase">
                            <p id="description">Online store built with shopify</p>
                        </div>
                    </LinesInOut>
                </div>
            </div>
            <div className={styles['c-project__media']}>
                <div className={styles['c-project__media--img']}>
                    <picture>
                        <img src="https://cdn.shopify.com/s/files/1/0603/9411/1155/files/og-image_1200x.jpg" alt="" />
                    </picture>
                </div>
            </div>
        </div>
    )
};