# Uforia Market — Frontend Demo

A React + Vite storefront with a responsive catalogue, product details, category/search filters, cart, wishlist, local demo account, and simulated checkout.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Create a production bundle:

```bash
npm run build
npm run preview
```

## Frontend-only scope

- No backend, database, server API, real authentication, inventory, or payment processing.
- Cart, wishlist, and demo account state are stored in the browser with `localStorage`.
- Checkout creates only a local demonstration confirmation. No order is transmitted, no payment is collected, and nothing is shipped.
- Product catalogue, prices, badges, and ratings are sample data. Ratings are illustrative and are not verified customer reviews.

## Included quality improvements

- Search matches product names, categories, descriptions, and catalogue badges.
- Search field restores its value from the URL.
- Browser storage is parsed defensively so malformed local data falls back safely.
- Cart quantities are bounded to 1–99.
- Demo checkout validates a six-digit PIN code.
- Keyboard skip link, visible focus styles, reduced-motion support, and responsive refinements.
- Original product illustrations and React Router page structure are preserved.

## Important

This is a frontend demonstration, not a production-ready commerce system. Real customer accounts, secure order handling, inventory, shipping, and payments require trusted server-side services and are intentionally out of scope.
