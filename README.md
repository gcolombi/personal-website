<a href="https://www.gerardcolombi.io">
    <img alt="Gerard Colombi" src="https://github.com/gcolombi/personal-website/blob/master/public/static/og-image-en.png?raw=true">
</a>

<h1 align="center">Personal website</h1>

<p align="center">
    <a href="#introduction"><strong>Introduction</strong></a> ·
    <a href="#installation"><strong>Installation</strong></a> ·
    <a href="#tech-stack--features"><strong>Tech Stack & Features</strong></a>
</p>

## Introduction

This is my portfolio built with Next.js, Typescript, GSAP and Vercel.

## Installation

Yarn
```sh 
git clone git@github.com:gcolombi/personal-website.git project-name
cd project-name
yarn install
```

NPM
```sh 
git clone git@github.com:gcolombi/personal-website.git project-name
cd project-name
npm install
```

## Tech Stack & Features

### Framework

- [Next.js](https://nextjs.org/) - React framework for building performant apps with the best developer experience

### Language

- [TypeScript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale

### Hosting

- [Vercel](https://vercel.com/) - Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration

### UI

- [CSS/SASS/SCSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules) - CSS architecture containing generic and base style, custom configuration, grid, utilities, mixins etc.
- [`GSAP`](https://greensock.com/) - GSAP is an industry standard JavaScript animation library from GreenSock that lets you craft high-performance animations that work in every major browser. A great place to get started with GSAP and React is to read [GSAP X React](https://greensock.com/react), [Getting Started with GSAP + React](https://greensock.com/react-basics) and [GSAP + React, Advanced Animation Techniques](https://greensock.com/react-advanced)

> **Warning**
This project use a [Club GreenSock license](https://greensock.com/club/) which gives access to bonus plugins such as [`SplitText`](https://greensock.com/docs/v3/Plugins/SplitText) or [`ScrambleTextPlugin`](https://greensock.com/docs/v3/Plugins/ScrambleTextPlugin). If you want to use or deploy it you need to remove [`CharsInOut`](https://github.com/gcolombi/personal-website/blob/master/components/shared/gsap/CharsInOut.tsx), [`ImplodeExplodeInOut`](https://github.com/gcolombi/personal-website/blob/master/components/shared/gsap/ImplodeExplodeInOut.tsx), [`LinesInOut`](https://github.com/gcolombi/personal-website/blob/master/components/shared/gsap/LinesInOut.tsx) and [`ShuffleTextInOut`](https://github.com/gcolombi/personal-website/blob/master/components/shared/gsap/ShuffleTextInOut.tsx) components because they use them, as well as the actual gsap package and npmrc file. Install [`gsap`](https://github.com/greensock/GSAP#npm) package without these components or join the [Club GreenSock](https://greensock.com/club/), install the corresponding package using installation steps in the dashboard and use them.

- [`next-themes`](https://github.com/pacocoursey/next-themes) - Perfect Next.js dark mode in 2 lines of code. Support System preference and any other theme with no flashing
- [`@next/font`](https://nextjs.org/docs/basic-features/font-optimization) - Optimize your fonts (including custom fonts) and remove external network requests for improved privacy and performance

### Form

- Client side
    - [`react-hook-form`](https://react-hook-form.com/) - Performant, flexible and extensible forms with easy-to-use validation
    - [`react-toastify`](https://github.com/fkhadra/react-toastify) - Allows you to add notifications to your app
    - [`yup`](https://github.com/jquense/yup) - Schema builder for runtime value parsing and [validation](https://react-hook-form.com/get-started/#schemavalidation)

- Serve side
    - [API Routes](https://nextjs.org/docs/api-routes/introduction) - The form request is managed by an API route using automatic bodyparsing
    - [Custom HTML template](https://github.com/gcolombi/personal-website/blob/master/public/templates/email.html) - Email template with placeholders ready to use
    - [`yup`](https://github.com/jquense/yup) - Schema builder for runtime value parsing and validation
    - [`react-google-recaptcha-v3`](https://github.com/t49tran/react-google-recaptcha-v3) - React library for integrating Google ReCaptcha V3 to your App. To use `react-google-recaptcha-v3`, you need to create a recaptcha key for your domain, you can get one from [here](https://www.google.com/recaptcha/about/)
    - [`@sendgrid/mail`](https://github.com/sendgrid/sendgrid-nodejs) - SendGrid delivers your emails through a cloud-based email delivery platform. To use Sengrid, you need to sign up [here](https://signup.sendgrid.com/)

### Sitemap

- [`next-sitemap`](https://github.com/iamvishnusankar/next-sitemap) - Sitemap generator for next.js. Generate sitemap(s) and robots.txt for all static/pre-rendered/dynamic/server-side pages.

### Internationalization
- [`next-translate-routes`](https://github.com/hozana/next-translate-routes) - Translated routing and more for Next using Next regular file-base routing system.

### Hooks

- `useElementSize` - This hook helps you to dynamically recover the width and the height of an HTML element. Dimensions are updated on load, on mount/un-mount, when resizing the window and when the ref changes
- `useIsMounted` - A React hook to check if the component is mounted
- `useIsomorphicLayoutEffect` - A React helper hook to schedule a layout effect with a fallback to a regular effect for environments where layout effects should not be used (such as server-side rendering)
- `useLockedScroll` - This React hook blocks scrolling on a page, a good example is when opening modals
- `useScrollbar` - A React helper hook to observe scroll position
- `useWindowLocation` - This React Hook retrieves window location
- `useWindowSize` - This React Hook retrives window dimensions also works on resize