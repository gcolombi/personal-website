import styles from '@/styles/modules/SectionHeader.module.scss';
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
            <span className={classNames(
                'h4',
                styles['c-sectionHeader__index']
            )}>
                {index}
            </span>
            <h2 className={classNames(
                'u-uppercase',
                'h4',
                'u-margin--none',
                styles['c-sectionHeader__title']
            )}>
                {title}
            </h2>
        </div>
    );
};
