import { META_404, PAGE_NOT_FOUND_HEADER } from '@/data/global.data';
import BasicHeader from '@/components/BasicHeader';
import MetaData from '@/components/MetaData';

export default function PageNotFound() {
    return (
        <>
            <MetaData
                {...META_404}
            />
            <BasicHeader
                {...PAGE_NOT_FOUND_HEADER}
                button={PAGE_NOT_FOUND_HEADER?.button ? {...PAGE_NOT_FOUND_HEADER.button, href: '/'} : undefined}
                className="c-basicHeader--fullHeight"
            />
        </>
    );
}