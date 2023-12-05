This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Assignment

Countries Catalog Implementation
1. Please use this free api to get related data - https://restcountries.com/
2. Requirements
    - Please show the following fields on your catalog. Inside the () is the property of data.
        - Flags (Please use png file within flags property)
        - Country Name (name.official)
        - 2 character Country Code (cca2)
        - 3 character Country Code (cca3)
        - Native Country Name (name.nativeName)
        - Alternative Country Name (altSpellings)
        - Country Calling Codes (idd)
    - Search by Country Name (Fuzzy Search)
    - Sorting by Country Name (Asc,Desc)
    - Pagination (25 rows per page)
    - After clicked on country name, pop up a modal and show all others informations.
3. Please deploy your service to GitHub Pages and keep all related commit history.
4. Using any of these frontend frameworks is a plus - Vue.Js, React, Angular.



Issues while development:
- Init with Node16
 - There are few issues with Next -> resolve: we need to bump version to 18