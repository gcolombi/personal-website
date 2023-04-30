import { NextApiResponse } from "next";

/**
 * Gets email template file
 * @param {string} path email template path
 * @param {Object} res server response object
 * @returns {Object|JSON} html email template or JSON response
 */
export const getEmailTemplateFile = async (path: string, res: NextApiResponse): Promise<string | void>  => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`)
        if (!response.ok)
            throw new Error('Email template not found');
        return response.text();
    } catch (err) {
        if (err instanceof Error) return res.status(404).json({ message: err.message });
    }
}