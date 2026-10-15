import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
name: 'cart',
initialState: {
items: []
},
reducers: {
addItem: (state, action) => {
const plant = action.payload;
const existingItem = state.items.find(
(item) => item.id === plant.id
);

```
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.items.push({
      ...plant,
      quantity: 1
    });
  }
},

removeItem: (state, action) => {
  state.items = state.items.filter(
    (item) => item.id !== action.payload
  );
},

updateQuantity: (state, action) => {
  const { id, change } = action.payload;
  const item = state.items.find(
    (plant) => plant.id === id
  );

  if (item) {
    item.quantity += change;

    if (item.quantity <= 0) {
      state.items = state.items.filter(
        (plant) => plant.id !== id
      );
    }
  }
}
```

}
});

export const {
addItem,
removeItem,
updateQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
