import MetaData from '@/components/MetaData';
import HeaderBasic from '@/components/HeaderBasic';

export default function About() {
    return (
        <>
            <MetaData
                title="About"
            />
            <HeaderBasic
                title="About"
                wysiwyg="Lorem ipsum dolor sit about."
            />
        </>
    );
};