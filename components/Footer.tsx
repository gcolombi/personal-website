import styles from '@/styles/modules/Footer.module.scss';
import classNames from 'classnames';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles['c-footer']}>
            <div className="o-container">
                <div className={styles['c-footer__row']}>
                    <div className={styles['c-footer__copyright']}>
                        <div className={classNames(
                                'o-wysiwyg',
                                styles['c-footer__copyright--year']
                            )}
                        >
                            <p>&copy; {new Date().getFullYear()}</p>
                        </div>
                        <div className={classNames(
                                'o-wysiwyg',
                                styles['c-footer__copyright--text']
                            )}
                        >
                            <p>All rights reserved</p>
                        </div>
                    </div>
                    <div className={styles['c-footer__socialLinks']}>
                        <ul>
                            <li>
                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles['c-footer__title']}>
                        <div className={styles['c-footer__title--name']}>
                            <Link href="/" aria-label="Gerard Colombi">
                                Gerard Colombi
                            </Link>
                        </div>
                        <div className={classNames
                            (
                                'o-wysiwyg',
                                styles['c-footer__title--jobTitle']
                            )}
                        >
                            <p>Front-end developer</p>
                        </div>
                    </div>
                </div>


            </div>
        </footer>
    );
}