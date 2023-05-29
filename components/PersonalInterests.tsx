import styles from '@/styles/modules/PersonalInterests.module.scss';
import SectionHeader from './shared/SectionHeader';
import classNames from 'classnames';

export default function PersonalInterests() {
    return (
        <section className={classNames(
            'u-spacing--responsive',
            styles['c-aboutIntroduction']
        )}>
            <div className="o-container">
                <SectionHeader
                    index="02"
                    title="Personal Interests"
                />
                <div className="o-grid">

                </div>
            </div>
        </section>
    );
}