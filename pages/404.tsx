import { META_404, PAGE_NOT_FOUND_HEADER } from '@/data/global.data';
import { MetaDataProps } from '@/types/components/global';
import { GetStaticProps } from 'next';
import BasicHeader from '@/components/BasicHeader';

export default function PageNotFound() {
    return (
        <>
            <BasicHeader
                {...PAGE_NOT_FOUND_HEADER}
                button={PAGE_NOT_FOUND_HEADER?.button ? {...PAGE_NOT_FOUND_HEADER.button, href: '/'} : undefined}
                className="c-basicHeader--fullHeight"
            />
        </>
    );
}

export const getStaticProps: GetStaticProps<{metaData: MetaDataProps}> = async () => {
    return {
        props: {
            metaData: {
                ...META_404
            }
        }
    }
}