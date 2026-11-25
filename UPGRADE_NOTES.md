# Upgrade notes

## What changed
- Refined storefront styling with stronger hierarchy, cleaner card treatments, improved focus states, hover feedback, and mobile spacing.
- Added a keyboard skip-to-content link and reduced-motion support.
- Search now checks product names, categories, descriptions, and catalogue labels.
- Search input stays in sync with the URL when navigating or refreshing.
- Browser storage reads now fail safely when local data is malformed or unavailable.
- Cart quantity changes are bounded to 1–99.
- Demo checkout requires a six-digit PIN code and clears validation errors as fields are corrected.
- Order confirmation safely handles unavailable or malformed session storage.
- Sample product ratings are labelled as illustrative rather than presented as verified customer reviews.
- Updated page metadata, pinned compatible frontend dependencies, and added a `.gitignore`.

## Intentionally unchanged
- React + Vite + React Router architecture.
- Existing product catalogue and 30 local SVG illustrations.
- Frontend-only architecture: no backend, database, API, authentication provider, payment gateway, or inventory service has been added.

## Verification
- All 16 JavaScript/JSX source files passed a TypeScript transpile-based syntax check.
- All relative JavaScript imports resolve.
- A full Vite production build could not be run in this environment because npm registry access failed with a DNS `EAI_AGAIN` error. Run `npm install` and `npm run build` locally to complete that check.

## Not a production commerce system
This project remains a demonstration storefront. Browser storage is not secure account storage, sample ratings are not verified reviews, and checkout does not create real orders, take payment, reserve stock, or dispatch products.
