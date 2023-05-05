import { FieldsValidationErrors } from '@/types/form';
import Email from '@/utils/email';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getEmailTemplateFile } from '@/utils/template';
import { ValidationError } from 'yup';
import { formSchema } from '@/schemas/form';
import { validateRecaptcha } from '@/utils/recaptcha';

/**
 * Handler
 *
 * https://nextjs.org/docs/api-routes/introduction
 */
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).end('Method not allowed');
    }

    try {
        /* Destructures body */
        const { recaptchaToken, labels, data } = req.body;

        /* Validation */
        await formSchema.validate({ ...data }, { abortEarly: false });

        /* Recaptcha */
        const validReCaptcha = await validateRecaptcha(recaptchaToken, res);

        if (validReCaptcha)
            /* Sends email */
            try {
                const emailTemplate = await getEmailTemplateFile('/templates/email.html', res) as string;

                await new Email(emailTemplate, 'New form', labels, data, []).send();

                return res.status(201).json({
                    data,
                    message: 'Thank you, your message has been sent successfully.'
                });
            } catch (err) {
                return res.status(500).json({ data: null, message: 'An error occurred while sending the email' });
            }

    } catch (err) {
        /* Yup validation */
        if (err instanceof ValidationError) {
            const validationErrors: FieldsValidationErrors = {};

            err.inner.forEach((error) => {
                if (error.path && !validationErrors[error.path])
                    validationErrors[error.path] = error.errors[0];
            });

            return res.status(400).json({ data: null, errors: validationErrors });
        }
        /* Global server error */
        return res.status(500).json({ data: null, message: 'Internal Server Error' });
    }
}