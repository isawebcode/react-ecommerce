"use client";

import { ProductContainer } from "@/components/common";
import { useGetProductsByCategoryQuery } from "@/store/api";
import { LoadingSpinner } from "@/components/common";
import { use } from "react";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = use(params);
  // const decodedCategory = category.replace(/%20/g, " ");

  const {
    data: products,
    error,
    isLoading,
  } = useGetProductsByCategoryQuery(category);

  if (isLoading) return <LoadingSpinner />;

  if (error) {
    return <p>Error loading products.</p>;
  }

  return (
    <>
      <ProductContainer
        // title={decodedCategory}
        products={products || []}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
}
