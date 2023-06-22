import { CONTACT_HEADER, META_CONTACT } from '@/data/contact.data';
import { MetaDataProps } from '@/types/components/global';
import { GetStaticProps } from 'next';
import BasicHeader from '@/components/BasicHeader';
import Form from '@/components/form/Form';

export default function Contact() {
    return (
        <>
            <BasicHeader
                {...CONTACT_HEADER}
            />
            <Form />
        </>
    );
};

export const getStaticProps: GetStaticProps<{metaData: MetaDataProps}> = async () => {
    return {
        props: {
            metaData: {
                ...META_CONTACT
            }
        }
    }
}