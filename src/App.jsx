import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { StoreProvider } from './components/StoreContext.jsx';
import Home from './pages/Home.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Cart from './pages/Cart.jsx';
import Wishlist from './pages/Wishlist.jsx';
import SignIn from './pages/SignIn.jsx';
import Checkout from './pages/Checkout.jsx';
import OrderSuccess from './pages/OrderSuccess.jsx';
import NotFound from './pages/NotFound.jsx';
// Keep the shared header/footer around every route. Each page is a separate component.
export default function App(){return <StoreProvider><Header/><main className="page-shell"><Routes><Route path="/" element={<Home/>}/><Route path="/product/:id" element={<ProductDetails/>}/><Route path="/cart" element={<Cart/>}/><Route path="/wishlist" element={<Wishlist/>}/><Route path="/signin" element={<SignIn/>}/><Route path="/checkout" element={<Checkout/>}/><Route path="/order-success" element={<OrderSuccess/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/></StoreProvider>}
