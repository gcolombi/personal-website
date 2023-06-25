/** @type {import('next-sitemap').IConfig} */
const path = require('path');
const { translateUrl } = require('next-translate-routes');
const { createNtrData } = require('next-translate-routes/plugin');
const nextConfig = require('./next.config');

const data = createNtrData(
    nextConfig,
    path.resolve(process.cwd(), './pages')
);

global.__NEXT_TRANSLATE_ROUTES_DATA = data;

module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com',
    exclude: ['/api', '/404', '/fr/404'],
    generateIndexSitemap: false,
    generateRobotsTxt: true,
    changefreq: 'monthly',
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/'
            },
            {
                userAgent: '*',
                disallow: ['/api', '/404', '/fr/404']
            }
        ]
    },
    transform: async (config, path) => {
        const locale = nextConfig.i18n.locales.find((locale) => path.indexOf(`/${locale}`) > -1) || nextConfig.i18n.defaultLocale;

        return {
            loc: translateUrl(path, locale),
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? []
        };
    },
}