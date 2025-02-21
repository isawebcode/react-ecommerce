"use client";
import { useGetCategoriesQuery, useGetProductsQuery } from "@/store/api";

export const useProductsAndCategories = () => {
  const {
    data: products,
    error: productsError,
    isLoading: isProductsLoading,
  } = useGetProductsQuery();

  const {
    data: categories,
    error: categoriesError,
    isLoading: isCategoriesLoading,
  } = useGetCategoriesQuery();

  // Unificar errores y estado de carga
  const isLoading = isProductsLoading || isCategoriesLoading;
  const error = productsError || categoriesError;

  return { products, categories, isLoading, error };
};
