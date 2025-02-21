import { useState } from "react";
import { ProductInterface } from "@/types";

export const useSearchProducts = (products: ProductInterface[]) => {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return {
    query,
    setQuery,
    filteredProducts,
  };
};
