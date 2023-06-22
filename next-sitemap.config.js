/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com',
    generateIndexSitemap: false,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/'
            },
            {
                userAgent: '*',
                disallow: '/api'
            }
        ]
    }
}