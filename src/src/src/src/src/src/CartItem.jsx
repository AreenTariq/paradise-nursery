import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './App.css';

function CartItem() {
const dispatch = useDispatch();
const items = useSelector((state) => state.cart.items);

const total = items.reduce(
(sum, item) => sum + item.price * item.quantity,
0
);

return ( <main className="cart-page"> <h1>Shopping Cart</h1>

```
  {items.length === 0 ? (
    <div className="about-section">
      <h2>Your cart is empty</h2>
      <p>Add some plants to get started!</p>
      <a href="#plants">Continue Shopping</a>
    </div>
  ) : (
    <>
      {items.map((item) => (
        <article className="plant-card" key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Unit Price: ${item.price.toFixed(2)}</p>
          <p>Quantity: {item.quantity}</p>
          <p>
            Item Total: $
            {(item.price * item.quantity).toFixed(2)}
          </p>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  change: -1
                })
              )
            }
          >
            -
          </button>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  change: 1
                })
              )
            }
          >
            +
          </button>

          <button
            onClick={() => dispatch(removeItem(item.id))}
          >
            Delete
          </button>
        </article>
      ))}

      <h2>Total Amount: ${total.toFixed(2)}</h2>

      <button
        onClick={() =>
          alert('Checkout successful! Thank you for shopping with Paradise Nursery.')
        }
      >
        Checkout
      </button>

      <button onClick={() => window.location.href = '#plants'}>
        Continue Shopping
      </button>
    </>
  )}
</main>
```

);
}

export default CartItem;
