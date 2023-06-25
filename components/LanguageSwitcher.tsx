import { LanguageSwitcherProps } from '@/types/components/global';
import { Link, translateUrl } from 'next-translate-routes';
import { capitalizeFirstLetter } from '@/utils/string';
import { useRef } from 'react';

export default function LanguageSwitcher({
    router
}: LanguageSwitcherProps) {
    const getLocales = () => {
        const locales = router.locales ?? [];
        return locales.filter(l => l !== router.locale);
    }

    const locales = useRef(getLocales());

    const switchToLocale = () => {
        router.events.on('routeChangeComplete', () => {
            router.reload();
        });
    }

    const href = router.route !== '/404' ? translateUrl(router.pathname, router.locale ?? '') : '/';

    return (
        <>
            {locales.current.map((locale: string) => (
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