"use client";

import { ProductContainer } from "@/components/common";
import { useProductsAndCategories } from "@/hooks/useProductsAndCategories";

export default function Home() {
  const { products, error, isLoading } = useProductsAndCategories();

  return (
    <ProductContainer
      products={products || []}
      isLoading={isLoading}
      error={error}
    />
  );
}
