This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

Checkout to `develop` branch

```bash
npm install

npm run dev
```

Open [http://localhost:3000/countries](http://localhost:3000/countries) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) 

API 1 -> can be accessed on [http://localhost:3000/api/countries](http://localhost:3000/api/countries). This endpoint can be edited in `pages/api/countries/index.js`.

API 2 -> can be asscessed on [http://localhost:3000/api/countries/search?countryName=cambodia](http://localhost:3000/api/countries/search?countryName=cambodia)

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

## Production URL
Click here -> [CountryCatalog](https://countries-catalog-five.vercel.app/countries)

## Assignment

Countries Catalog Implementation

1. Please use this free api to get related data - https://restcountries.com/
2. Requirements
   - Please show the following fields on your catalog. Inside the () is the property of data.
     - Flags (Please use png file within flags property) `[done]`
     - Country Name (name.official) `[done]`
     - 2 character Country Code (cca2) `[done]`
     - 3 character Country Code (cca3) `[done]`
     - Native Country Name (name.nativeName) `[done]`
     - Alternative Country Name (altSpellings) `[done]`
     - Country Calling Codes (idd) `[done]`
   - Search by Country Name (Fuzzy Search) `[done]`
   - Sorting by Country Name (Asc,Desc) `[done]`
   - Pagination (25 rows per page) `[done]`
   - After clicked on country name, pop up a modal and show all others informations. `[done]`
3. Please deploy your service to GitHub Pages and keep all related commit history.
4. Using any of these frontend frameworks is a plus - Vue.Js, React, Angular.

## Issues while development:

- Init with Node16
- There are few issues with Next -> resolve: we need to use node version v18.19.0 (Latest LTS: Hydrogen)
