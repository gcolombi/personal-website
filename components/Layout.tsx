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
        <>
        <TransitionLayout>
            <Navigation />
            <main>
                {children}
                <Footer />
            </main>
        </TransitionLayout>
        </>
    );
}