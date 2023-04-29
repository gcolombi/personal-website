import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
                <link rel="manifest" href="/static/favicons/site.webmanifest" />
                <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#000000" />
                <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-config" content="/static/favicons/browserconfig.xml" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}