import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalAmount: 0
}

const CartItemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem(state, action) {
      state.totalAmount = state.totalAmount + action.payload.price * action.payload.amount
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)
      const itemFounded = state.items[itemIndex]
      if (itemFounded) {
        const updatedItem = { ...itemFounded, amount: itemFounded.amount + 1 }
        state.items[itemIndex] = updatedItem
      } else {
        state.items= [...state.items,action.payload]
      }
    },
    removeItem(state, action) {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload)
      const itemFounded = state.items[itemIndex]
      if (itemFounded.amount > 1) {
        const updatedItem = { ...itemFounded, amount: itemFounded.amount - 1 }
        state.items[itemIndex] = updatedItem
      } else {
        state.items=state.items.filter((item)=>item.id !== action.payload)
      }
      state.totalAmount = state.totalAmount - itemFounded.price
    }
  }
})

export const CartItemsActions= CartItemsSlice.actions

export default CartItemsSlice.reducer