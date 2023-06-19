import { MetaDataProps } from '@/types/components/global';
import Head from 'next/head';
import useWindowLocation from '@/hooks/useWindowLocation';
import { useRouter } from 'next/router';

export default function MetaData({
    title,
    description = 'Front-end developer capable of full stack development, passionate about building appealing and interactive web experiences.',
    image = `${process.env.NEXT_PUBLIC_BASE_URL}/static/og-image.png`,
    type = 'website'
}: MetaDataProps) {
    const router = useRouter();
    const { currentURL } = useWindowLocation();

    return (
        <Head>
            <meta charSet="utf-8" />
        	<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{router.asPath === '/' ? process.env.NEXT_PUBLIC_SITE_NAME : `${title} | ${process.env.NEXT_PUBLIC_SITE_NAME}`}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={currentURL} />
            <meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITE_NAME} />
            <meta property="og:type" content={type} />
            <meta property="og:image" content={image} />
            <meta name="robots" content="follow, index" />
            <link rel="canonical" href={currentURL} />
        </Head>
    );
}