import { ReactNode } from 'react';
import Footer from './Footer';

export default function Layout({
    children
}: {
    children: ReactNode;
}) {
    return (
        <>
            <main>
                {children}
                <Footer />
            </main>
        </>
    );
}