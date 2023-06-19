import { CONTACT_HEADER, META_CONTACT } from '@/data/contact.data';
import MetaData from '@/components/MetaData';
import BasicHeader from '@/components/BasicHeader';
import Form from '@/components/form/Form';

export default function Contact() {
    return (
        <>
            <MetaData
                {...META_CONTACT}
            />
            <BasicHeader
                {...CONTACT_HEADER}
            />
            <Form />
        </>
    );
};