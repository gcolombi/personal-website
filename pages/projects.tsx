import MetaData from '@/components/MetaData';
import HeaderBasic from '@/components/HeaderBasic';

export default function Projects() {
    return (
        <>
            <MetaData
                title="Projects"
            />
            <HeaderBasic
                titles={['Projects']}
                wysiwyg="Lorem ipsum dolor sit projects."
            />
        </>
    );
};