import { createContext, useContext, useEffect, useMemo, useState } from 'react';
const StoreContext = createContext(null);
// Shared cart, wishlist and demo customer state. localStorage keeps them after refresh.
export function StoreProvider({ children }) {
 const [cart,setCart]=useState(()=>JSON.parse(localStorage.getItem('uforia-cart')||'[]'));
 const [wishlist,setWishlist]=useState(()=>JSON.parse(localStorage.getItem('uforia-wishlist')||'[]'));
 const [customer,setCustomer]=useState(()=>JSON.parse(localStorage.getItem('uforia-customer')||'null'));
 useEffect(()=>localStorage.setItem('uforia-cart',JSON.stringify(cart)),[cart]);
 useEffect(()=>localStorage.setItem('uforia-wishlist',JSON.stringify(wishlist)),[wishlist]);
 useEffect(()=>customer?localStorage.setItem('uforia-customer',JSON.stringify(customer)):localStorage.removeItem('uforia-customer'),[customer]);
 const addToCart=(product,quantity=1)=>setCart(items=>{const old=items.find(x=>x.id===product.id);return old?items.map(x=>x.id===product.id?{...x,quantity:x.quantity+quantity}:x):[...items,{...product,quantity}]});
 const updateQuantity=(id,quantity)=>setCart(items=>quantity<1?items.filter(x=>x.id!==id):items.map(x=>x.id===id?{...x,quantity}:x));
 const removeFromCart=id=>setCart(items=>items.filter(x=>x.id!==id));
 const toggleWishlist=product=>setWishlist(items=>items.some(x=>x.id===product.id)?items.filter(x=>x.id!==product.id):[...items,product]);
 const isWishlisted=id=>wishlist.some(x=>x.id===id);
 const cartCount=cart.reduce((n,x)=>n+x.quantity,0), subtotal=cart.reduce((n,x)=>n+x.price*x.quantity,0);
 const value=useMemo(()=>({cart,wishlist,customer,setCustomer,addToCart,updateQuantity,removeFromCart,toggleWishlist,isWishlisted,cartCount,subtotal,setCart}),[cart,wishlist,customer,cartCount,subtotal]);
 return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
export function useStore(){const value=useContext(StoreContext);if(!value)throw new Error('useStore must be used inside StoreProvider');return value;}
