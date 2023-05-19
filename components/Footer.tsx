import styles from '@/styles/modules/Footer.module.scss';
import classNames from 'classnames';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles['c-footer']}>
            <div className="o-container">
                <div className={styles['c-footer__row']}>
                    <div className={classNames
                        (
                            'o-wysiwyg',
                            styles['c-footer__copyright']
                        )}
                    >
                        <p>&copy; {new Date().getFullYear()}</p>
                    </div>
                    <div className={styles['c-footer__socialLinks']}>
                        <ul>
                            <li>
                                <a
                                    href="https://www.instagram.com/"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/"
                                >
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={classNames
                        (
                            'o-wysiwyg',
                            styles['c-footer__title']
                        )}
                    >
                        <Link href="/" title="Gerard Colombi">
                            Gerard Colombi
                        </Link>
                        <p>Front-end developer</p>
                    </div>
                </div>


            </div>
        </footer>
    );
}