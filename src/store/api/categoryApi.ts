import { CategoryInterface } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryInterface[], void>({
      query: () => "/products/categories",
      transformResponse: (response: string[]) =>
        response.map((category) => ({ name: category })),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
