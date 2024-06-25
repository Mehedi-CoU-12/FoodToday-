import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './features/basketSlice'
import restaurantSlice from './features/restaurantSlice'
import loginSlice from './features/loginSlice'

export const store = configureStore({
  reducer: {
    basket:basketSlice,
    restaurant:restaurantSlice,
    login:loginSlice,
  },
})