import { useState } from 'react';
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
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);

  const goToLanding = () => {
    setShowProductList(false);
    setShowCart(false);
  };

  const goToProducts = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  const goToCart = () => {
    setShowCart(true);
    setShowProductList(false);
  };

  const renderContent = () => {
    if (!showProductList && !showCart) {
      return (
        <main className="landing-page">
          <section className="hero-content">
            <p className="brand-tag">Paradise Nursery</p>
            <h1>Welcome to Paradise Nursery</h1>
            <p className="hero-copy">
              Discover beautiful plants for every room, from aromatic greens to low-maintenance
              favorites that brighten your day.
            </p>
            <div className="hero-actions">
              <button className="primary-button" onClick={goToProducts}>
                Comenzar
              </button>
            </div>
          </section>
          <AboutUs />
        </main>
      );
    }

    if (showProductList) {
      return (
        <ProductList
          onAddToCart={(product) => dispatch(addItem(product))}
          onOpenCart={goToCart}
          onGoHome={goToLanding}
          onGoProducts={goToProducts}
          cartCount={cartCount}
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
        onGoHome={goToLanding}
        onOpenCart={goToCart}
        onContinueShopping={goToProducts}
        cartCount={cartCount}
      />
    );
  };

  return <div className="app-shell">{renderContent()}</div>;
}

export default App;
