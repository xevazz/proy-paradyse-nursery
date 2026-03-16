function CartItem({
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
  onGoHome,
  onOpenCart,
  onContinueShopping,
  cartCount,
}) {
  const getItemTotal = (item) => item.price * item.quantity;
  const calculatedCartTotal = cartItems.reduce((total, item) => total + getItemTotal(item), 0);

  const handleIncrease = (id) => {
    onIncrease(id);
  };

  const handleDecrease = (id) => {
    onDecrease(id);
  };

  const handleRemove = (id) => {
    onRemove(id);
  };

  return (
    <main className="content-page">
      <header className="navbar">
        <button className="brand-button" onClick={onGoHome}>
          Paradise Nursery
        </button>
        <nav className="nav-links" aria-label="Main navigation">
          <button className="nav-link" onClick={onGoHome}>
            Inicio
          </button>
          <button className="nav-link" onClick={onContinueShopping}>
            Plantas
          </button>
          <button className="nav-link active" onClick={onOpenCart}>
            Carrito
          </button>
        </nav>
        <button className="cart-indicator" onClick={onOpenCart}>
          <span role="img" aria-label="cart">
            🛒
          </span>
          <span>{cartCount}</span>
        </button>
      </header>
      <section className="page-heading">
        <div>
          <p className="section-eyebrow">Shopping Cart</p>
          <h1>Your selected plants</h1>
          <p className="cart-total">Total del carrito: ${calculatedCartTotal.toFixed(2)}</p>
        </div>
      </section>

      {cartItems.length === 0 ? (
        <section className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add a few plants to start building your indoor oasis.</p>
          <button className="primary-button" onClick={onContinueShopping}>
            Continuar comprando
          </button>
        </section>
      ) : (
        <section className="cart-list">
          {cartItems.map((item) => {
            const itemTotal = getItemTotal(item);

            return (
              <article key={item.id} className="cart-card">
                <img src={item.image} alt={item.name} className="cart-image" />
                <div className="cart-details">
                  <div>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                  </div>
                  <div className="price-group">
                    <span>Precio unitario: ${item.price.toFixed(2)}</span>
                    <span>Total del producto: ${itemTotal.toFixed(2)}</span>
                  </div>
                </div>
                <div className="cart-actions">
                  <div className="quantity-controls">
                    <button className="quantity-button" onClick={() => handleDecrease(item.id)}>
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button className="quantity-button" onClick={() => handleIncrease(item.id)}>
                      +
                    </button>
                  </div>
                  <button className="secondary-button" onClick={() => handleRemove(item.id)}>
                    Eliminar
                  </button>
                </div>
              </article>
            );
          })}
          <section className="cart-footer-actions">
            <button className="secondary-button" onClick={onContinueShopping}>
              Continuar comprando
            </button>
            <button className="primary-button">Próximamente</button>
          </section>
        </section>
      )}
    </main>
  );
}

export default CartItem;
