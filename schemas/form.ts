import { FormData } from '@/types/form';
import { object, string, addMethod, ObjectSchema } from 'yup';
import { getTranslation } from '@/utils/translation';

export const getFormSchema = (locale: string) => {
    /* Override the email method, if email isn't required we need to add excludeEmptyString: true */
    addMethod(string, 'email', function validateEmail(message: string){
        return this.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, {
            message,
            name: 'email'
        });
    });

    const schema: ObjectSchema<FormData> = object({
        firstname: string().required(getTranslation('This field is required.', locale)),
        lastname: string().required(getTranslation('This field is required.', locale)),
        email: string().required(getTranslation('This field is required.', locale)).email(getTranslation('The specified email address is invalid.', locale)),
        message: string().required(getTranslation('This field is required.', locale))
    });

    return schema;
};