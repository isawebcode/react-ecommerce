import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface CartProduct {
  productId: number;
  quantity: number;
}

interface Cart {
  id: number;
  userId: number;
  date: string;
  products: CartProduct[];
}

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/carts",
  }),
  endpoints: (builder) => ({
    getCart: builder.query<Cart, number>({
      query: (cartId) => `${cartId}`,
    }),
    addToCart: builder.mutation<Cart, Cart>({
      query: (cart) => ({
        url: "",
        method: "POST",
        body: {
          userId: cart.userId,
          date: cart.date,
          products: cart.products.map((product) => ({
            productId: product.productId,
            quantity: product.quantity || 1,
          })),
        },
      }),
    }),
    updateCart: builder.mutation<Cart, { id: number; cart: Cart }>({
      query: ({ id, cart }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: cart,
      }),
    }),
    deleteCart: builder.mutation<void, number>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateCartMutation,
  useDeleteCartMutation,
} = cartApi;
