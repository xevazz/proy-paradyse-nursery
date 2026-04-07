import { useSelector } from 'react-redux';
import { selectCartItems } from '../features/cart/CartSlice';

const plantCategories = [
  {
    title: 'Aromatic Plants',
    description: 'Fresh scents and elegant foliage to create a relaxing atmosphere.',
    items: [
      {
        id: 'lavender-glow',
        name: 'Lavender Glow',
        description: 'A fragrant indoor lavender perfect for sunny windows.',
        price: 18,
        image:
          'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'mint-breeze',
        name: 'Mint Breeze',
        description: 'Refreshing mint leaves ideal for kitchens and tea lovers.',
        price: 14,
        image:
          'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'rosemary-air',
        name: 'Rosemary Air',
        description: 'Woody, aromatic rosemary ideal for bright indoor corners.',
        price: 15,
        image:
          'https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'jasmine-mist',
        name: 'Jasmine Mist',
        description: 'Sweetly fragrant jasmine that brightens indoor spaces.',
        price: 20,
        image:
          'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'lemon-balm',
        name: 'Lemon Balm',
        description: 'Soft citrus scent with calming foliage for windowsills.',
        price: 13,
        image:
          'https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'sweet-basil',
        name: 'Sweet Basil',
        description: 'Classic aromatic herb with lush edible leaves.',
        price: 12,
        image:
          'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    title: 'Medicinal Plants',
    description: 'Trusted favorites known for their soothing and practical benefits.',
    items: [
      {
        id: 'aloe-haven',
        name: 'Aloe Haven',
        description: 'An easy-care aloe vera that thrives with minimal watering.',
        price: 16,
        image:
          'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'chamomile-soft',
        name: 'Chamomile Soft',
        description: 'Delicate blooms that add calm charm to bright spaces.',
        price: 17,
        image:
          'https://images.unsplash.com/photo-1463154545680-d59320fd685d?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'peace-lily-care',
        name: 'Peace Lily Care',
        description: 'Air-purifying beauty with elegant white blooms.',
        price: 24,
        image:
          'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'eucalyptus-calm',
        name: 'Eucalyptus Calm',
        description: 'Refreshing leaves traditionally loved for wellness spaces.',
        price: 23,
        image:
          'https://images.unsplash.com/photo-1470163395405-d2b80e7450ed?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'holy-basil-care',
        name: 'Holy Basil Care',
        description: 'A hardy medicinal favorite with earthy aroma.',
        price: 18,
        image:
          'https://images.unsplash.com/photo-1514995669114-6081e934b693?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'sage-harmony',
        name: 'Sage Harmony',
        description: 'Silvery-green medicinal herb with soft textured leaves.',
        price: 17,
        image:
          'https://images.unsplash.com/photo-1524592488941-966fdf7d4f69?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    title: 'Low Maintenance Plants',
    description: 'Reliable plants that look great even with a busy routine.',
    items: [
      {
        id: 'snake-elegance',
        name: 'Snake Elegance',
        description: 'A sculptural snake plant that handles low light with ease.',
        price: 22,
        image:
          'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'pothos-trail',
        name: 'Pothos Trail',
        description: 'A cascading pothos with lush leaves and forgiving care needs.',
        price: 19,
        image:
          'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'zz-steady',
        name: 'ZZ Steady',
        description: 'A resilient glossy-leaf plant for low-maintenance homes.',
        price: 21,
        image:
          'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'spider-easy',
        name: 'Spider Easy',
        description: 'Fast-growing and forgiving, great for beginners.',
        price: 16,
        image:
          'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'rubber-robust',
        name: 'Rubber Robust',
        description: 'Glossy leaves and sturdy growth with minimal care.',
        price: 25,
        image:
          'https://images.unsplash.com/photo-1597055181300-e3633a917c9c?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'cast-iron-classic',
        name: 'Cast Iron Classic',
        description: 'Extremely tolerant houseplant for low-light corners.',
        price: 26,
        image:
          'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
];

function ProductList({ onAddToCart, onOpenCart, onGoHome, onGoProducts, cartCount }) {
  const cartItems = useSelector(selectCartItems);
  const addedIds = new Set(cartItems.map((item) => item.id));

  return (
    <main className="content-page">
      <header className="navbar">
        <button className="brand-button" onClick={onGoHome}>
          Paradise Nursery
        </button>
        <nav className="nav-links" aria-label="Main navigation">
          <button className="nav-link" onClick={onGoHome}>
            Home
          </button>
          <button className="nav-link active" onClick={onGoProducts}>
            Plants
          </button>
          <button className="nav-link" onClick={onOpenCart}>
            Cart
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
          <p className="section-eyebrow">Shop Indoor Favorites</p>
          <h1>Choose your next plant companion</h1>
        </div>
        <button className="secondary-button" onClick={onOpenCart}>
          Ver carrito
        </button>
      </section>

      {plantCategories.map((category) => (
        <section key={category.title} className="category-section">
          <div className="category-header">
            <h2>{category.title}</h2>
            <p>{category.description}</p>
          </div>
          <div className="product-grid">
            {category.items.map((plant) => {
              const isAdded = addedIds.has(plant.id);

              return (
                <article key={plant.id} className="product-card">
                  <img src={plant.image} alt={plant.name} className="product-image" />
                  <div className="product-copy">
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <span className="product-price">${plant.price.toFixed(2)}</span>
                  </div>
                  <button
                    className={isAdded ? 'disabled-button' : 'primary-button'}
                    onClick={() => onAddToCart(plant)}
                    disabled={isAdded}
                  >
                    {isAdded ? 'Agregado' : 'Agregar al Carrito'}
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
