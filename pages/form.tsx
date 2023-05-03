import MetaData from '@/components/MetaData';
import HeaderBasic from '@/components/HeaderBasic';
import Form from '@/components/form/Form';

export default function FormPage() {
    return (
        <>
            <MetaData
                title="Form"
            />
            <HeaderBasic
                title="Form"
                wysiwyg="Complete and flexible form with Google ReCaptcha V3, ready to use. Form fields are handled by React Hook Form and validated by Yup on the client/server side. The form request is managed by an API route, SendGrid and a custom HTML template are used to send the email."
            />
            <Form />
        </>
    );
};