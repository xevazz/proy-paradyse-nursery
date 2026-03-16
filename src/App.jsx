import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import {
  addItem,
  decreaseQuantity,
  increaseQuantity,
  removeItem,
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from './features/cart/CartSlice';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);

  const navigationItems = useMemo(
    () => [
      { id: 'landing', label: 'Inicio' },
      { id: 'products', label: 'Plantas' },
      { id: 'cart', label: 'Carrito' },
    ],
    [],
  );

  const renderContent = () => {
    if (currentPage === 'landing') {
      return (
        <main className="landing-page">
          <section className="hero-content">
            <p className="brand-tag">Paradise Nursery</p>
            <h1>Bring nature home with carefully selected indoor plants</h1>
            <p className="hero-copy">
              Discover beautiful plants for every room, from aromatic greens to low-maintenance
              favorites that brighten your day.
            </p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => setCurrentPage('products')}>
                Comenzar
              </button>
            </div>
          </section>
          <AboutUs />
        </main>
      );
    }

    if (currentPage === 'products') {
      return (
        <ProductList
          onAddToCart={(product) => dispatch(addItem(product))}
          onOpenCart={() => setCurrentPage('cart')}
        />
      );
    }

    return (
      <CartItem
        cartItems={cartItems}
        cartTotal={cartTotal}
        onIncrease={(id) => dispatch(increaseQuantity(id))}
        onDecrease={(id) => dispatch(decreaseQuantity(id))}
        onRemove={(id) => dispatch(removeItem(id))}
        onContinueShopping={() => setCurrentPage('products')}
      />
    );
  };

  return (
    <div className="app-shell">
      <header className="navbar">
        <button className="brand-button" onClick={() => setCurrentPage('landing')}>
          Paradise Nursery
        </button>
        <nav className="nav-links" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              className={currentPage === item.id ? 'nav-link active' : 'nav-link'}
              onClick={() => setCurrentPage(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button className="cart-indicator" onClick={() => setCurrentPage('cart')}>
          <span role="img" aria-label="cart">
            🛒
          </span>
          <span>{cartCount}</span>
        </button>
      </header>
      {renderContent()}
    </div>
  );
}

export default App;
