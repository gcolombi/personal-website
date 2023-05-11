import styles from '@/styles/modules/MobileNavigation.module.scss';
import NavItem from './NavItem';
import classNames from 'classnames';
import useNavigationContext from '@/context/navigationContext';

export default function MobileNavigation() {
    const { open } = useNavigationContext();

    return (
        <>
            {/* {open && */}
                <nav
                    className={classNames(
                        styles['c-mobileNav'],
                        {[styles['is-open']]: open}
                    )}
                >
                    <div className={styles['c-mobileNav__inner']}>
                        <div className={styles['c-mobileNav__nav']}>
                                <ul>
                                    <li>
                                        <span>
                                            <a href="#">Projects</a>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <a href="#">About</a>
                                        </span>
                                    </li>
                                    <li>
                                        <NavItem
                                            href="/Contact"
                                            title="Contact"
                                            className={styles['is-current-page']}
                                        />
                                    </li>
                                </ul>
                        </div>
                        <div className={styles['c-mobileNav__footer']}>
                            <ul>
                                <li>
                                    <a href="https://www.instagram.com/">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/">Twitter</a>
                                </li>
                                <li>
                                    <a href="https://github.com/">Github</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            {/* } */}
        </>
    )
}