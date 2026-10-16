# Uforia Market — React storefront demo

A responsive React + Vite storefront with separate page files and 30 original, local SVG product images.

## Run it
1. Install Node.js LTS from https://nodejs.org/
2. Extract this ZIP and open a terminal in the `uforia-market-react` folder.
3. Run `npm install` then `npm run dev`.
4. Open the local URL Vite prints (usually http://localhost:5173).
5. Run `npm run build` to create a production build.

## Project structure
```text
public/image/             30 locally stored product illustrations
src/components/           Header, Footer, ProductCard, EmptyState, shared store state
src/data/products.js      Product catalog, prices, categories and image paths
src/pages/Home.jsx        Homepage, search, category filters and sorting
src/pages/ProductDetails.jsx
src/pages/Cart.jsx
src/pages/Wishlist.jsx
src/pages/SignIn.jsx
src/pages/Checkout.jsx
src/pages/OrderSuccess.jsx
src/pages/NotFound.jsx
src/App.jsx               Route configuration and shared layout
src/main.jsx              React entry point
src/styles.css             Responsive styling
```

## Editing products and images
Edit `src/data/products.js` to change a product's name, price, category or description. Each product's `image` points to a file inside `public/image/`, for example `/image/01-headphones.svg`. Replace that SVG file with your own image using the same filename/path if you want to keep the product data unchanged. All 30 product image files are included in this ZIP; product images do not rely on external image websites. Google Fonts are loaded remotely for typography, with fallback fonts.

## Demo limitations
Cart and wishlist are saved in this browser using localStorage. Sign-in is a local demo only, not secure authentication. Checkout is simulated and does not take payment, submit orders or arrange delivery. Before launching a real store, add a backend, secure authentication, inventory, order handling, shipping and a payment provider. This sample brand/catalog is not affiliated with Amazon.
