import styles from '@/styles/modules/AboutIntroduction.module.scss';
import SectionHeader from './shared/SectionHeader';
import classNames from 'classnames';

export default function AboutIntroduction() {
    return (
        <section className={classNames(
            'u-spacing--responsive',
            styles['c-aboutIntroduction']
        )}>
            <div className="o-container">
                <SectionHeader
                    index="01"
                    title="Maker of things"
                />
                <div className="o-grid">

                </div>
            </div>
        </section>
    );
};
