import { configureStore } from "@reduxjs/toolkit";
import CartItemsReducer from "./CartItemsSlice";

const store = configureStore({
  reducer: {cartItems: CartItemsReducer},
})

export default store