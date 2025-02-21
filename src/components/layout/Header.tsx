"use client";
import {
  useGetCartQuery,
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "@/store/api";
import { CartButton, CartCount, HeaderContainerStyle } from "@/styles/header";
import { CategoryInterface } from "@/types";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { CartPreview } from "../common";
import { useState, useEffect } from "react"; // Importar acción de Redux
import { setCart } from "@/store/cartSlice";
import { ID_CART_USER } from "../../../constant/constants";

export default function Header() {
  const { data: categories, error: categoriesError } = useGetCategoriesQuery();
  const { data: products, error: productsError } = useGetProductsQuery();
  const pathname = usePathname();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const dispatch = useDispatch();

  const cartState = useSelector((state: RootState) => state.cart);

  const cartCount = cartState.products.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const cartId = ID_CART_USER;
  const { data: cart } = useGetCartQuery(cartId);

  useEffect(() => {
    if (cart && products) {
      const formattedCart = cart.products
        .map((cartItem) => {
          const product = products?.find((p) => p.id === cartItem.productId);
          if (!product) return null;

          return {
            productId: cartItem.productId,
            quantity: cartItem.quantity,
            image: product.image,
            price: product.price,
            title: product.title,
          };
        })
        .filter((item) => item !== null);

      dispatch(
        setCart({
          id: cart.id,
          userId: cart.userId,
          date: cart.date,
          products: formattedCart as any,
        })
      );
    }
  }, [cart, products, dispatch]);

  const isLoading =
    productsError || categoriesError || !products || !categories;

  if (isLoading) {
    return null;
  }

  return (
    <HeaderContainerStyle>
      <Link className="linkmenu" href={`/`}>
        <h1>LOGO</h1>
      </Link>
      <nav>
        <ul>
          {categories?.map((category: CategoryInterface) => {
            const isActive =
              pathname === `/category/${encodeURIComponent(category.name)}`;

            return (
              <li key={category.name}>
                <Link
                  className="linkmenu"
                  href={`/category/${encodeURIComponent(category.name)}`}
                  style={{
                    color: isActive ? "#dd4800" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                  }}
                >
                  {category.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="cart-container">
        <CartButton onClick={() => setIsCartOpen(!isCartOpen)}>
          <ShoppingBag size={24} />
          {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
        </CartButton>

        {isCartOpen && <CartPreview onClose={() => setIsCartOpen(false)} />}
      </div>
    </HeaderContainerStyle>
  );
}
