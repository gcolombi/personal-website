import BasicHeader from '@/components/BasicHeader';
import MetaData from '@/components/MetaData';

export default function PageNotFound() {
    return (
        <>
            <MetaData
                title="404 | Gerard Colombi"
            />
            <BasicHeader
                title="Page not found"
                wysiwyg="Cannot read properties of undefined. The page you are looking for could not be found."
                button={{
                    label: 'Please get me out of here',
                    href: '/',
                    className: 'c-btn'
                }}
                className="c-basicHeader--fullHeight"
            />
        </>
    );
}