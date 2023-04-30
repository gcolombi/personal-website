import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

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