import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './App.css';

const categories = [
{
name: 'Air-Purifying Plants',
plants: [
{ id: 1, name: 'Peace Lily', price: 18, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80' },
{ id: 2, name: 'Snake Plant', price: 22, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b7b?auto=format&fit=crop&w=500&q=80' },
{ id: 3, name: 'Spider Plant', price: 15, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80' },
{ id: 4, name: 'Rubber Plant', price: 26, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80' },
{ id: 5, name: 'Areca Palm', price: 30, image: 'https://images.unsplash.com/photo-1597055181300-a8c1c9e5c2c4?auto=format&fit=crop&w=500&q=80' },
{ id: 6, name: 'Boston Fern', price: 20, image: 'https://images.unsplash.com/photo-1597055181449-1e5b5a9d8a2f?auto=format&fit=crop&w=500&q=80' }
]
},
{
name: 'Succulents and Cacti',
plants: [
{ id: 7, name: 'Aloe Vera', price: 12, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80' },
{ id: 8, name: 'Jade Plant', price: 14, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80' },
{ id: 9, name: 'Echeveria', price: 10, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=500&q=80' },
{ id: 10, name: 'Golden Cactus', price: 11, image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=500&q=80' },
{ id: 11, name: 'Haworthia', price: 13, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80' },
{ id: 12, name: 'String of Pearls', price: 19, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80' }
]
},
{
name: 'Tropical Plants',
plants: [
{ id: 13, name: 'Monstera', price: 32, image: 'https://images.unsplash.com/photo-1616479779749-1c5dcf1e5f8f?auto=format&fit=crop&w=500&q=80' },
{ id: 14, name: 'Golden Pothos', price: 16, image: 'https://images.unsplash.com/photo-1616690243512-7e3e7b8e5d6d?auto=format&fit=crop&w=500&q=80' },
{ id: 15, name: 'Bird of Paradise', price: 45, image: 'https://images.unsplash.com/photo-1597055181300-a8c1c9e5c2c4?auto=format&fit=crop&w=500&q=80' },
{ id: 16, name: 'Calathea', price: 24, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80' },
{ id: 17, name: 'Philodendron', price: 21, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80' },
{ id: 18, name: 'ZZ Plant', price: 23, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b7b?auto=format&fit=crop&w=500&q=80' }
]
}
];

function ProductList() {
const dispatch = useDispatch();
const cartItems = useSelector((state) => state.cart.items);

const cartCount = cartItems.reduce(
(total, item) => total + item.quantity,
0
);

const isInCart = (id) =>
cartItems.some((item) => item.id === id);

return ( <main> <nav> <h2>Paradise Nursery</h2> <div>
<a href="/" style={{ marginRight: 15 }}>Home</a>
<a href="#plants" style={{ marginRight: 15 }}>Plants</a> <a href="#cart">Cart ({cartCount})</a> </div> </nav>

```
  <section id="plants" className="about-section">
    <h1>Our Plant Collection</h1>
    <p>Discover beautiful plants for your home.</p>
  </section>

  {categories.map((category) => (
    <section className="plant-category" key={category.name}>
      <h2>{category.name}</h2>

      <div className="products">
        {category.plants.map((plant) => (
          <article className="plant-card" key={plant.id}>
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>Price: ${plant.price.toFixed(2)}</p>

            <button
              disabled={isInCart(plant.id)}
              onClick={() => dispatch(addItem(plant))}
            >
              {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </article>
        ))}
      </div>
    </section>
  ))}

  <section id="cart" className="about-section">
    <h2>Shopping Cart</h2>
    <p>Total plants in cart: {cartCount}</p>
  </section>
</main>
```

);
}

export default ProductList;
