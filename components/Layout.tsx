import { FOOTER } from '@/data/global.data';
import { SOCIAL_MEDIAS } from '@/data/socialMedias.data';
import { ReactNode } from 'react';
import TransitionLayout from './TransitionLayout';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({
    children
}: {
    children: ReactNode;
}) {
    return (
        <TransitionLayout>
            <Navigation
                socialMedias={SOCIAL_MEDIAS}
            />
            <main>
                {children}
                <Footer
                    {...FOOTER}
                    socialMedias={SOCIAL_MEDIAS}
                />
            </main>
        </TransitionLayout>
    );
}