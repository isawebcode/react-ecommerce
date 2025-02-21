"use client";

import { ProductList } from "@/components/common";
import { WrapperStyle } from "@/styles/global";
import SkeletonCard from "@/components/common/SkeletonCard";
import { SkeletonContainer } from "@/styles/skeleton";
import { motion } from "framer-motion";
import { CategoryTitle } from "@/styles/categoryPage";

interface ProductContainerProps {
  title?: string;
  products: any[] | null | undefined;
  isLoading: boolean;
  error: any;
}

const ProductContainer = ({
  title,
  products,
  isLoading,
  error,
}: ProductContainerProps) => {
  if (error) {
    return (
      <WrapperStyle>
        <p>
          ❌ Ocurrió un error al cargar los productos. Inténtalo de nuevo más
          tarde.
        </p>
      </WrapperStyle>
    );
  }

  return (
    <WrapperStyle>
      <CategoryTitle>{title}</CategoryTitle>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {isLoading ? (
          <SkeletonContainer>
            {[...Array(6)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </SkeletonContainer>
        ) : (
          <ProductList products={products || []} isLoading={false} />
        )}
      </motion.div>
    </WrapperStyle>
  );
};

export default ProductContainer;
