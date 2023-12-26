import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "../features/home/shopSlice";
import authSlice from "../features/home/authSlice";

const store = configureStore({
  reducer: {
    shop: shopSlice,
    auth: authSlice,
  },
});

export default store;
