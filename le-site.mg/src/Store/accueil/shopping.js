import { createSlice } from "@reduxjs/toolkit";

const ShoppingSlice = createSlice({
  name: "Shopping",
  initialState: {
    shoppingList: [],
  },

  reducers: {
    setShopping: (current, action) => {
      current.shoppingList = action.payload;
    },
  },
});

export const shoppingReducer = ShoppingSlice.reducer;

export const { setShopping } = ShoppingSlice.actions;
