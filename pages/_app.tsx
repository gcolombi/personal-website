import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    /* Removes focus from next/link element after page change */
    useEffect(() => {
        document.activeElement instanceof HTMLElement && document.activeElement.blur();
    }, [router]);

    return <Component {...pageProps} />
}