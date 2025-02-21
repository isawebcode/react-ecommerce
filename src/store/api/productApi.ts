import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductInterface } from "@/types";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductInterface[], void>({
      query: () => "/products",
    }),
    getProductsByCategory: builder.query<ProductInterface[], string>({
      query: (category) => `/products/category/${category}`,
    }),
    getProductById: builder.query<ProductInterface, number>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useGetProductByIdQuery,
} = productApi;
