import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useStore } from './StoreContext.jsx';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartCount, wishlist, customer } = useStore();
  const [search, setSearch] = useState(() => new URLSearchParams(location.search).get('search') || '');

  useEffect(() => {
    setSearch(new URLSearchParams(location.search).get('search') || '');
  }, [location.search]);

  function submit(event) {
    event.preventDefault();
    const query = search.trim();
    navigate(query ? `/?search=${encodeURIComponent(query)}` : '/');
  }

  return <>
    <div className="top-note">A little more joy in your everyday <span aria-hidden="true">✦</span> Free delivery over ₹1,999</div>
    <header className="site-header">
      <div className="header-main wrap">
        <Link className="brand" to="/" aria-label="Uforia Market home">
          <span className="brand-mark">u</span><span>uforia<span className="brand-light"> market</span></span>
        </Link>
        <form className="search-bar" onSubmit={submit} role="search">
          <span aria-hidden="true">⌕</span>
          <input aria-label="Search products" value={search} onChange={event => setSearch(event.target.value)} placeholder="Search products, categories, and more…" />
          {search && <button type="button" className="search-clear" aria-label="Clear search" onClick={() => { setSearch(''); navigate('/'); }}>×</button>}
          <button type="submit">Search</button>
        </form>
        <div className="header-actions">
          <Link to="/wishlist" className="header-link"><span className="action-icon" aria-hidden="true">♡</span><span>Saved <b>{wishlist.length}</b></span></Link>
          <Link to="/signin" className="header-link"><span className="action-icon" aria-hidden="true">♙</span><span>{customer ? 'Account' : 'Sign in'}</span></Link>
          <Link to="/cart" className="cart-link" aria-label={`Shopping bag, ${cartCount} items`}>Bag <span className="cart-count">{cartCount}</span></Link>
        </div>
      </div>
      <nav className="category-nav wrap" aria-label="Main navigation">
        <NavLink to="/" end>Discover</NavLink>
        {['Electronics', 'Home', 'Fashion', 'Beauty', 'Sports', 'Toys'].map(category =>
          <NavLink key={category} to={`/?category=${encodeURIComponent(category)}`}>{category}</NavLink>
        )}
        <span className="nav-spacer" />
        <Link to="/wishlist">Your saved finds ♡</Link>
      </nav>
    </header>
  </>;
}
