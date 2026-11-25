import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const StoreContext = createContext(null);
const readStorage = (key, fallback, validate) => {
  try {
    const value = JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
    return validate(value) ? value : fallback;
  } catch {
    return fallback;
  }
};
const isProductList = value => Array.isArray(value) && value.every(item =>
  item && Number.isInteger(Number(item.id)) && Number.isFinite(Number(item.price)) &&
  Number.isInteger(Number(item.quantity ?? 1)) && Number(item.quantity ?? 1) > 0
);
const isCustomer = value => value === null || (
  value && typeof value.name === 'string' && typeof value.email === 'string'
);

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => readStorage('uforia-cart', [], isProductList));
  const [wishlist, setWishlist] = useState(() => readStorage('uforia-wishlist', [], isProductList));
  const [customer, setCustomer] = useState(() => readStorage('uforia-customer', null, isCustomer));

  useEffect(() => { try { localStorage.setItem('uforia-cart', JSON.stringify(cart)); } catch {} }, [cart]);
  useEffect(() => { try { localStorage.setItem('uforia-wishlist', JSON.stringify(wishlist)); } catch {} }, [wishlist]);
  useEffect(() => {
    try {
      if (customer) localStorage.setItem('uforia-customer', JSON.stringify(customer));
      else localStorage.removeItem('uforia-customer');
    } catch {}
  }, [customer]);

  const addToCart = (product, quantity = 1) => setCart(items => {
    const safeQuantity = Math.max(1, Math.min(99, Math.floor(Number(quantity) || 1)));
    const old = items.find(x => x.id === product.id);
    return old
      ? items.map(x => x.id === product.id ? { ...x, quantity: Math.min(99, x.quantity + safeQuantity) } : x)
      : [...items, { ...product, quantity: safeQuantity }];
  });
  const updateQuantity = (id, quantity) => setCart(items => {
    const next = Math.floor(Number(quantity));
    if (!Number.isFinite(next) || next < 1) return items.filter(x => x.id !== id);
    return items.map(x => x.id === id ? { ...x, quantity: Math.min(99, next) } : x);
  });
  const removeFromCart = id => setCart(items => items.filter(x => x.id !== id));
  const toggleWishlist = product => setWishlist(items =>
    items.some(x => x.id === product.id)
      ? items.filter(x => x.id !== product.id)
      : [...items, product]
  );
  const isWishlisted = id => wishlist.some(x => x.id === id);
  const cartCount = cart.reduce((n, x) => n + x.quantity, 0);
  const subtotal = cart.reduce((n, x) => n + x.price * x.quantity, 0);
  const value = useMemo(() => ({
    cart, wishlist, customer, setCustomer, addToCart, updateQuantity,
    removeFromCart, toggleWishlist, isWishlisted, cartCount, subtotal, setCart
  }), [cart, wishlist, customer, cartCount, subtotal]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
export function useStore() {
  const value = useContext(StoreContext);
  if (!value) throw new Error('useStore must be used inside StoreProvider');
  return value;
}
