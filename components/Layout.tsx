import { FOOTER, NAVIGATION_ROUTES } from '@/data/global.data';
import { SOCIAL_MEDIAS } from '@/data/socialMedias.data';
import { ReactNode } from 'react';
import { useRouter } from 'next-translate-routes';
import TransitionLayout from './TransitionLayout';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({
    children
}: {
    children: ReactNode;
}) {
    const { locale } = useRouter();

    return (
        <TransitionLayout>
            <Navigation
                routes={NAVIGATION_ROUTES}
                socialMedias={SOCIAL_MEDIAS}
            />
            <main id="content">
                {children}
                <Footer
                    {...FOOTER[locale ?? '']}
                    socialMedias={SOCIAL_MEDIAS}
                />
            </main>
        </TransitionLayout>
    );
}