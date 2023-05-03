import HeaderBasic from '@/components/HeaderBasic';
import MetaData from '@/components/MetaData';

export default function PageNotFound() {
    return (
        <>
            <MetaData
                title="404"
                description="You are lost in Space!"
            />
            <HeaderBasic
                title="Page not found"
                wysiwyg="The page you are looking for could not be found."
                button={{
                    label: 'Please get me out of here',
                    href: '/',
                    className: 'c-btn'
                }}
                className="c-headerBasic--fullHeight"
            />
        </>
    );
}