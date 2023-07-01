import { NextApiResponse } from 'next';
import { getTranslation } from '@/utils/translation';

/**
 * Validates recaptcha and interprets the score
 *
 * https://developers.google.com/recaptcha/docs/v3
 *
 * @param {string} token recaptcha token
 * @param {Object} res server response object
 * @param {string} locale current locale
 * @returns {boolean} true or false
 */
export const validateRecaptcha = async (token: string, res: NextApiResponse, locale: string): Promise<boolean> => {
    try {
        const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
        });

        const result = await response.json();

        if (result?.success) {
            if (result?.score >= 0.5) {
                return true;
            }
            throw new Error(getTranslation('ReCaptcha validation failed.', locale));
        }
        throw new Error(`${getTranslation('Error validating captcha', locale)}: ${result['error-codes'][0]}`);

    } catch (err: any) {
        res.status(422).json({ message: err.message });
        return false;
    }
};