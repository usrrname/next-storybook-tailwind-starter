This is a Vanilla JS [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), Storybook and TailwindCSS.

## How To: Setting Up This Repo

1. Create the next app and use npm as the package manager: `npx create-next-app@latest next-storybook-example --use-npm`
1. Tooled `next.config.js` to support Sass
1. Installed Tailwind: `npm install -D tailwindcss postcss autoprefixer`
1. Run tailwind boot: `npx tailwindcss init -p`, which creates `tailwind.config.js` and `postcss.config.js`
1. Create `components/` folder
1. Add tailwind base classes to globals.classes
1. Install Storybook: `npx init sb`, creates `.storybook` folder
1. Customize [Postcss config](https://nextjs.org/docs/advanced-features/customizing-postcss-config#customizing-plugins) for Next

## Gotchas

If you are doing server side rendering or client side fetches, any API url environment variable must be prepended with `NEXT_PUBLIC_` or it will not interpolate successfully. See [Environment Variables](https://nextjs.org/docs/basic-features/environment-variables) doc

## Resources

[Tailwind Playground](https://play.tailwindcss.com/)

## Getting Started

Running the development server:

```bash
npm run dev
```

Running storybook
`npm run storybook`

Build Storybook

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Folder Structure
```
.//ROOT LEVEL
.gitignore
├── README.md
├── components         // stores all components
├── hooks              // context and hook functions
├── next.config.js     // takes next plugins, wraps around webpack, configures your build and compilation
├── node_modules
├── package-lock.json
├── package.json
├── pages               // page templates
  ├── api               // api routes and handler functions, much like next's own express 
├── public              // static assets go here
├── styles
├── tailwind.config.js  // configure tailwind in terms of theme and token values
├── postcss.config.js   // for tree-shaking and minimizing CSS (dead-code elimination)
```
Add a `lib/` or `util/` folder if you would like!
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
