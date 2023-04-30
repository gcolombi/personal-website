import styles from '@/styles/modules/Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles['c-footer']}>
            <div className="o-container u-text--center o-wysiwyg">
                <p>&copy; {new Date().getFullYear()} Next.js. All rights reserved.</p>
            </div>
        </footer>
    );
}