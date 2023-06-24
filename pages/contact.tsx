import { CONTACT_HEADER, META_CONTACT } from '@/data/contact.data';
import { MetaDataProps } from '@/types/components/global';
import { BasicHeaderProps } from '@/types/components/headers';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import BasicHeader from '@/components/BasicHeader';
import Form from '@/components/form/Form';

export default function Contact({
    contactHeader
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <BasicHeader
                {...contactHeader}
            />
            <Form />
        </>
    );
};

export const getStaticProps: GetStaticProps<{
    metaData: MetaDataProps;
    contactHeader: BasicHeaderProps;
}> = async ({ locale }) => {
    const lang = locale ?? '';
    const metaData = META_CONTACT[lang];
    const contactHeader = CONTACT_HEADER[lang];

    return {
        props: {
            metaData,
            contactHeader
        }
    }
}