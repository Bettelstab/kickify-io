# Kickify

Shopify provides a huzzle-free online shop cloud hosting experience to its customers, but developing Shopify Apps is a frustrating process. Documentation is so-so, TypeScript support is poor. Also, free Heroku plans (formerly - maybe still - recomended) are gone, and Shopify's standard template for Node.JS/React based apps is not suitable to be run on Vercel or any serverless provider, to my knowledge.

I wanted to see if people are interested in a hosting as a service platform like Vercel, but specialized in Shopify Apps. So I created this little landing page with big help of AI. (The logo / mascot, "learn" section, dark mode colors...)

I did it with Next.JS to get some experience with it, since I've been using React for many years now, but always with a C# backend.

The plan was to use Vercel Analytics for a pure server-side tracking of page views, hence avoiding Cookie Laws, and invest some bucks in Google Ads to see how people would react. Learning: Google doesn't like it when you offer something you don't have. They blocked me.

See the landing page here: https://www.kickify.io/

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
