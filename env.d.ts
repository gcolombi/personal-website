namespace NodeJS {
    interface ProcessEnv {
        /* Global */
        NEXT_PUBLIC_BASE_URL: string;
        NEXT_PUBLIC_SITE_NAME: string;

        /* Sendgrid */
        EMAIL_FROM: string;
        SENDGRID_API_KEY: string;

        /* Google reCAPTCHA */
        NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string;
        RECAPTCHA_SECRET_KEY: string;
    }
}