import { META_404, PAGE_NOT_FOUND_HEADER } from '@/data/global.data';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MetaDataProps } from '@/types/components/global';
import { BasicHeaderProps } from '@/types/components/headers';
import BasicHeader from '@/components/BasicHeader';

export default function PageNotFound({
    header
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <BasicHeader
                {...header}
                button={header?.button ? {...header?.button, href: '/'} : undefined}
                className="c-basicHeader--fullHeight"
            />
        </>
    );
}

export const getStaticProps: GetStaticProps<{
    metaData: MetaDataProps;
    header: BasicHeaderProps;
}> = async ({ locale }) => {
    const lang = locale ?? '';
    const metaData = META_404[lang];
    const header = PAGE_NOT_FOUND_HEADER[lang];

    return {
        props: {
            metaData,
            header: {
                ...header
            }
        }
    }
}