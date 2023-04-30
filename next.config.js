/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
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
}

module.exports = nextConfig;