import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ID_CART_USER } from "../../constant/constants";
import { CartState } from "@/types";

const initialState: CartState = {
  id: ID_CART_USER,
  userId: 0,
  date: "",
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartState>) => {
      state.userId = action.payload.userId;
      state.date = action.payload.date;
      state.products = action.payload.products;
    },

    addToCartSlice: (state, action: PayloadAction<any>) => {
      const existingProduct = state.products.find(
        (item) => item.productId === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({
          productId: action.payload.id,
          quantity: 1,
          title: action.payload.title,
          price: action.payload.price,
          image: action.payload.image,
        });
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) => {
      const product = state.products.find(
        (item) => item.productId === action.payload.productId
      );

      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (item) => item.productId !== action.payload
      );
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  setCart,
  addToCartSlice,
  updateQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
