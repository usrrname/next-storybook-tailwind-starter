/** @type {import('next').NextConfig} */
const nextEnv = require('next-env')
const withPlugins = require('next-compose-plugins');
const withPostCssFlexbugFixes = require('postcss-flexbugs-fixes');
const withPostCssPresetEnv = require('postcss-preset-env');
const tailwindForms = require('@tailwindcss/forms')
const { PHASE_PRODUCTION_BUILD, PHASE_DEVELOPMENT_SERVER } = require('next/constants')

// creates plugins
const withEnv = nextEnv()
const withForms = tailwindForms()

//global next webpack config
const globalConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ['localhost', 'dog.ceo', 'images.dog.ceo'],
    formats: ['image/jpg', 'image/webp']
  },
  plugins: [
    withForms,
  ]
}

module.exports = (phase, { globalConfig }) => {
  if (phase === PHASE_PRODUCTION_BUILD ? process.env.NEXT_PUBLIC_ENV === 'production' : null) {
    console.log('Production build')
  } if (phase === PHASE_DEVELOPMENT_SERVER) {
    console.log('Development mode')
  }
  // compose all available plugins
  const nextConfig = withPlugins([
    withEnv, { globalConfig },
    process.env.NODE_ENV === 'production'
      ? [
        withPostCssFlexbugFixes,
        [
          withPostCssPresetEnv,
          {
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
            features: {
              'custom-properties': false,
            },
          },
        ],
      ]
      : null], globalConfig)
  return { nextConfig }
}