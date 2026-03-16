function CartItem({
  cartItems,
  cartTotal,
  onIncrease,
  onDecrease,
  onRemove,
  onContinueShopping,
}) {
  return (
    <main className="content-page">
      <section className="page-heading">
        <div>
          <p className="section-eyebrow">Shopping Cart</p>
          <h1>Your selected plants</h1>
          <p className="cart-total">Total del carrito: ${cartTotal.toFixed(2)}</p>
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
            const itemTotal = item.price * item.quantity;

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
                    <button className="quantity-button" onClick={() => onDecrease(item.id)}>
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button className="quantity-button" onClick={() => onIncrease(item.id)}>
                      +
                    </button>
                  </div>
                  <button className="secondary-button" onClick={() => onRemove(item.id)}>
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
