/** @type {import('next').NextConfig} */

const withTranslateRoutes = require('next-translate-routes/plugin');

const nextConfig = withTranslateRoutes({
    reactStrictMode: true,
    i18n: {
        locales: ['en', 'fr'],
        defaultLocale: 'en'
    },
    translateRoutes: {
        debug: true,
        fallbackLng: {
            default: ['en']
        }
    },
    sassOptions: {
        additionalData: `
            @import
            'styles/settings/_config.scss',
            'styles/settings/_config.colors.scss',
            'styles/settings/_config.eases.scss',
            'styles/settings/_config.typography.scss',
            'styles/tools/mixins/_button.scss',
            'styles/tools/mixins/_container.scss',
            'styles/tools/mixins/_grid.scss',
            'styles/tools/mixins/_form.scss',
            'styles/tools/mixins/_typography.scss',
            'styles/tools/_functions.scss',
            'styles/objects/_mediaq.scss';
        `
    }
});

module.exports = nextConfig;