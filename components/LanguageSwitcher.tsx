import { LanguageSwitcherProps } from '@/types/components/global';
import { Link, translateUrl } from 'next-translate-routes';
import { capitalizeFirstLetter } from '@/utils/string';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher({
    router
}: LanguageSwitcherProps) {
    const [locales, setLocales] = useState<string[]>([]);

    const getLocales = () => {
        const locales = router.locales ?? [];
        return locales.filter(l => l !== router.locale);
    }

    const switchToLocale = () => {
        router.events.on('routeChangeComplete', () => {
            router.reload();
        });
    }

    useEffect(() => {
        setLocales(getLocales());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const href = router.route !== '/404' ? translateUrl(router.pathname, router.locale ?? '') : '/';

    return (
        <>
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