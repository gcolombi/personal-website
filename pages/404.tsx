import styles from '@/styles/modules/404.module.scss';
import MetaData from '@/components/MetaData';
import Button from '@/components/shared/Button';

export default function PageNotFound() {
    return (
        <>
            <MetaData
                title="404"
                description="You are lost in Space!"
            />
            <section className={styles['c-404']}>
                <div className="o-container">
                    <div className={styles['c-404__row']}>
                        <div className="o-wysiwyg">
                            <h1>Page not found</h1>
                            <p>The page you are looking for could not be found.</p>
                        </div>
                        <Button
                            label="Please get me out of here"
                            href="/"
                            className="c-btn"
                            wrapperClassName={styles['c-404__btn']}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}