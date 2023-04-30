import { ReactNode } from 'react';
import Navigation from './shared/Navigation';
import Footer from './shared/Footer';

export default function Layout({
    children
}: {
    children: ReactNode;
}) {
    return (
        <>
            <Navigation />
            <main>
                {children}
                <Footer />
            </main>
        </>
    );
}