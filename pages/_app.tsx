import '@/styles/style.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { TransitionContextProvider } from '@/context/transitionContext';
import { NavigationContextProvider } from '@/context/navigationContext';
import Layout from '@/components/Layout';
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap'
});

gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    /* Removes focus from next/link element after page change */
    useEffect(() => {
        document.activeElement instanceof HTMLElement && document.activeElement.blur();
    }, [router]);

    return (
        <>
            <GoogleReCaptchaProvider
                reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                scriptProps={{
                    async: true,
                    defer: true,
                    appendTo: 'body'
                }}
            >
                <TransitionContextProvider>
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
                </TransitionContextProvider>
            </GoogleReCaptchaProvider>
        </>
    );
}