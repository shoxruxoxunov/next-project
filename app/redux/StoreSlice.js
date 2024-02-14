import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  return (
    JSON.parse(localStorage.getItem("products")) || {
      allProducts: [],
      total: 0,
      price: 0,
    }
  );
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCard: (state, { payload }) => {
      const item = state.allProducts.find((prod) => prod.id === payload.id);
      if (item) {
        item.amount += 1;
      } else {
        state.allProducts = [...state.allProducts, payload];
      }

      productsSlice.caseReducers.counterTotal(state);
    },
    delelteProducts: (state, { payload }) => {
      const item = state.allProducts.find((prod) => (prod.id = payload.id));
      if (item) {
        item.amount -= 1;
      } else {
        state.allProducts = [...state, allProducts, payload];
      }
      productsSlice.caseReducers.counterTotal(state);
    },

    incrementProduct: (state, { payload }) => {
      const item = state.allProducts.find((item) => item.id === payload);
      item.amount += 1;
      productsSlice.caseReducers.counterTotal(state);
    },

    decrementProduct: (state, { payload }) => {
      const item = state.allProducts.find((item) => item.id === payload);
      item.amount -= 1;
      productsSlice.caseReducers.counterTotal(state);
    },
    removeProduct: (state, { payload }) => {
      state.allProducts = state.allProducts.filter((prod) => {
        if (prod) {
          prod.amount -= 1;
        } else {
          prod.amount = 1;
        }
      });
      productsSlice.caseReducers.counterTotal(state);
    },
    counterTotal: (state) => {
      let allPrice = 0;
      let selectedProd = 0;

      state.allProducts.forEach((prod) => {
        allPrice += prod.amount * prod.price;
        selectedProd += prod.amount;
      });
      state.price = allPrice;
      state.total = selectedProd;
      localStorage.setItem("products", JSON.stringify(state));
    },
  },
});

export default productsSlice.reducer;
export const {
  addToCard,
  incrementProduct,
  decrementProduct,
  delelteProducts,
  counterTotal,
  removeProduct,
} = productsSlice.actions;
