import '@/styles/style.scss';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { NavigationContextProvider } from '@/context/navigationContext';
import Layout from '@/components/Layout';
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap'
});

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    /* Removes focus from next/link element after page change */
    useEffect(() => {
        document.activeElement instanceof HTMLElement && document.activeElement.blur();
    }, [router]);

    return (
        <>
            <NavigationContextProvider>
                <style jsx global>
                    {
                        `
                            :root {
                                --font-primary: ${inter.style.fontFamily};
                                --font-secondary: ${inter.style.fontFamily};
                            }
                        `
                    }
                </style>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </NavigationContextProvider>
        </>
    );
}