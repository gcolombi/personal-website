import { MetaDataProps } from '@/types/components/global';
import Head from 'next/head';
import useWindowLocation from '@/hooks/useWindowLocation';

export default function MetaData({
    title = 'Gerard Colombi',
    description = 'Front-end developer capable of full stack development, passionate about building appealing and interactive web experiences.',
    image = `${process.env.NEXT_PUBLIC_BASE_URL}/static/og-image.png`,
    type = 'website'
}: MetaDataProps) {
    const { currentURL } = useWindowLocation();

    return (
        <Head>
            <meta charSet="utf-8" />
        	<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Gerard Colombi</title>
            <meta name="description" content="Front-end developer capable of full stack development, passionate about building appealing and interactive web experiences." />
            <meta property="og:title" content="Gerard Colombi" />
            <meta property="og:description" content="Front-end developer capable of full stack development, passionate about building appealing and interactive web experiences." />
            <meta property="og:url" content={currentURL} />
            <meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITE_NAME} />
            <meta property="og:type" content={type} />
            <meta property="og:image" content={`${currentURL}static/og-image.png`} />
            <meta name="robots" content="follow, index" />
            <link rel="canonical" href={currentURL} />
        </Head>
    );
}