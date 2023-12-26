import { createSlice } from "@reduxjs/toolkit";
import { apiProducts, customProducts } from "../../functions/shopReducers";

const initialState = {
  products: [],
  nextPage: null,
  currentProduct: [],
  query: "",
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setProducts: (state, action) => apiProducts(state, action),
    setCustomProducts: (state, action) => customProducts(state, action),
    removeProducts: (state) => {
      state.products = [];
    },
  },
});

export const { setProducts, setCustomProducts, removeProducts } =
  shopSlice.actions;
export default shopSlice.reducer;
