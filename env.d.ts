namespace NodeJS {
    interface ProcessEnv {
        /* Global */
        NEXT_PUBLIC_BASE_URL: string;
        NEXT_PUBLIC_SITE_NAME: string;

        /* Sendgrid */
        EMAIL_FROM: string;
        SENDGRID_API_KEY: string;
    }
}