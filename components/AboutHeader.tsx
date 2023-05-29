import styles from '@/styles/modules/AboutHeader.module.scss';

export default function AboutHeader() {
    return (
        <section className={styles['c-aboutHeader']}>
            <div className="o-container">
                <div className="o-grid">
                    <h1>About header</h1>
                </div>
            </div>
        </section>
    );
};