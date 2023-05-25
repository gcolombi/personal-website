import MetaData from '@/components/MetaData';
import HeaderBasic from '@/components/HeaderBasic';
import Form from '@/components/form/Form';

export default function Contact() {
    return (
        <>
            <MetaData
                title="Form"
            />
            <HeaderBasic
                title="Contact"
                wysiwyg="Is there something on your mind you'd like to talk about? Whether it's related to work, just a casual conversation or need help with some code. Feel free to contact me at anytime."
            />
            <Form />
        </>
    );
};