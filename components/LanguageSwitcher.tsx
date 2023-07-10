import { LanguageSwitcherProps } from '@/types/components/global';
import { Link, translateUrl } from 'next-translate-routes';
import { capitalizeFirstLetter } from '@/utils/string';
import { useRef } from 'react';
import useTransitionContext from '@/context/transitionContext';

export default function LanguageSwitcher({
    router
}: LanguageSwitcherProps) {
    const { resetTimeline } = useTransitionContext();

    const getLocales = () => {
        const locales = router.locales ?? [];
        return locales.filter(l => l !== router.locale);
    }

    // const locales = useRef(getLocales());
    const locales = getLocales();

    const href = router.route !== '/404' ? translateUrl(router.pathname, router.locale ?? '') : '/';

    const switchToLocale = () => {
        // router.events.on('routeChangeComplete', () => {
        //     resetTimeline();
        //     router.reload();
        // });
    }

    return (
        <>
            {/* {locales.current.map((locale: string) => ( */}
            {locales.map((locale: string) => (
                <Link
                    key={locale}
                    href={href}
                    locale={locale}
                    onClick={switchToLocale}
                    scroll={false}
                >
                    {capitalizeFirstLetter(locale)}
                </Link>
            ))}
        </>
    );
};