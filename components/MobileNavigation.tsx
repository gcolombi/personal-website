import styles from '@/styles/modules/MobileNavigation.module.scss';
import NavItem from './NavItem';
import classNames from 'classnames';
import useNavigationContext from '@/context/navigationContext';

export default function MobileNavigation() {
    const { open, toggle } = useNavigationContext();

    return (
        <>
            <Hamburger
                open={open}
                toggle={toggle}
            />
            {open &&
                <nav
                   className={classNames(
                        styles['c-mobileNav'],
                        {[styles['is-open']]: open}
                   )}
                >
                    <div className={styles['c-mobileNav__scroll']}>
                        <div className={styles['c-mobileNav__container']}>
                            <div className={styles['c-mobileNav__primary']}>
                                <div className={styles['c-mobileNav__primary--list']}>
                                    <ul>
                                        <li>
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
            }
        </>
    )
}

function Hamburger({
    open,
    toggle
}: {
    open: boolean;
    toggle: () => void;
}) {
    return (
        <button
            className={classNames(
                styles['m-hamburger'],
                {[styles['is-nav-active']]: open}
            )}
            type="button"
            aria-label="Toggle menu"
            onClick={toggle}
        >
            <div className={styles['m-hamburger__lines']}>
                <span></span>
            </div>
        </button>
    );
}