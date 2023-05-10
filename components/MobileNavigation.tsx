import styles from '@/styles/modules/MobileNavigation.module.scss';
import NavItem from './NavItem';
import classNames from 'classnames';
import useNavigationContext from '@/context/navigationContext';

export default function MobileNavigation() {
    const { open } = useNavigationContext();

    return (
        <>
            {/* {open && */}
                <div
                    className={classNames(
                            styles['c-mobileNav'],
                            {[styles['is-open']]: open}
                    )}
                >
                    <nav>
                        <div className={styles['c-mobileNav__scroll']}>
                            <div className={styles['c-mobileNav__container']}>
                                <div className={styles['c-mobileNav__primary']}>
                                    <div className={styles['c-mobileNav__primary--list']}>
                                        <ul>
                                            <li className="h1">
                                                <NavItem
                                                    href="/form"
                                                    title="Form"
                                                    className={styles['is-current-page']}
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            {/* } */}
        </>
    )
}