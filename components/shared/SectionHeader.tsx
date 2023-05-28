import styles from '@/styles/modules/SectionHeader.module.scss';
import classNames from 'classnames';

export default function SectionHeader() {
    return(
        <div className={classNames(
            'o-grid',
            styles['c-sectionHeader']
        )}>
            <span className={classNames(
                'h4',
                styles['c-sectionHeader__index']
            )}>
                01
            </span>
            <h2 className={classNames(
                'u-uppercase',
                'h4',
                'u-margin--none',
                styles['c-sectionHeader__title']
            )}>
                Get in touch
            </h2>
        </div>
    );
};
