import styles from '@/styles/modules/SectionHeader.module.scss';
import FadeInOut from './gsap/FadeInOut';
import TranslateInOut from './gsap/TranslateInOut';
import classNames from 'classnames';

export default function SectionHeader({
    index,
    title
}: {
    index: string;
    title: string;
}) {
    return(
        <div className={classNames(
            'o-grid',
            styles['c-sectionHeader']
        )}>
            <div className={classNames(
                'h4',
                styles['c-sectionHeader__index']
            )}>
                <FadeInOut
                    watch
                >
                    <span>
                        {index}
                    </span>
                </FadeInOut>
            </div>
            <div className={classNames(
                'u-overflow--hidden',
                'u-uppercase',
                styles['c-sectionHeader__title']
            )}>
                <TranslateInOut
                    fade={false}
                    y="100%"
                    start="-100% bottom"
                    end="top top"
                    watch
                >
                    <h2 className={classNames(
                        'h4',
                        'u-margin--none',
                    )}>
                        {title}
                    </h2>
                </TranslateInOut>
            </div>
        </div>
    );
};
