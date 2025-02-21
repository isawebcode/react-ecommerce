import React from "react";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";
import { ListProductsStyle } from "@/styles/listProducts";
import { ProductInterface } from "@/types";
import { useSearchProducts } from "@/hooks/useSearchProducts";
import SearchBar from "./SearchBar";

interface ProductListProps {
  products: ProductInterface[];
  isLoading: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ products, isLoading }) => {
  const { query, setQuery, filteredProducts } = useSearchProducts(products);

  return (
    <>
      <SearchBar query={query} onSearchChange={setQuery} />

      <ListProductsStyle>
        {isLoading
          ? [...Array(6)].map((_, index) => <SkeletonCard key={index} />)
          : filteredProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))}
      </ListProductsStyle>
    </>
  );
};

export default ProductList;
