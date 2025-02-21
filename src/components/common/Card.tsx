import {
  CardContent,
  ImageContainer,
  ProductImage,
  ProductPrice,
  ProductTitle,
  ProductCategory,
  RatingContainer,
  ReviewCount,
  ProductInfo,
  ActionButton,
  ActionButtonContainer,
} from "@/styles/card";
import { ProductCardProps } from "@/types";
import Link from "next/link";
import React, { useState } from "react";
import { FaStar, FaRegStar, FaShoppingCart, FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/store/store";
import { addToCartSlice } from "@/store/cartSlice";
import { useAddToCartMutation } from "@/store/api";
import { AnimatedImage } from "@/styles/animated";

const Card: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationPosition, setAnimationPosition] = useState({ x: 0, y: 0 });
  const cart = useSelector((state: RootState) => state.cart);
  const [addToCart, { isLoading, isError }] = useAddToCartMutation();

  const renderStars = () => {
    const totalStars = 5;
    const filledStars = Math.round(product.rating.rate);
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <span key={i}>
          {i <= filledStars ? (
            <FaStar
              style={{
                color: "#ec4d00",
                fontSize: "20px",
                transition: "color 0.3s ease",
              }}
            />
          ) : (
            <FaRegStar
              style={{
                color: "lightgray",
                fontSize: "20px",
                transition: "color 0.3s ease",
              }}
            />
          )}
        </span>
      );
    }

    return stars;
  };

  const handleAddToCart = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setAnimationPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
    setIsAnimating(true);

    const cartStateAddProduct = {
      id: cart.id,
      userId: cart.userId,
      date: cart.date,
      products: [
        ...cart.products,
        {
          image: product.image,
          price: product.price,
          productId: product.id,
          quantity: 1,
          title: product.title,
        },
      ],
    };

    try {
      const response = await addToCart(cartStateAddProduct).unwrap();

      console.log("Carrito actualizado:", response);

      dispatch(addToCartSlice(product));

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
      setIsAnimating(false);
    }
  };

  return (
    <CardContent>
      <Link
        href={`/products/${product.id}`}
        key={product.id}
        passHref
        legacyBehavior
      >
        <ImageContainer>
          <ProductImage src={product.image} alt={product.title} />
        </ImageContainer>
      </Link>
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductCategory>{product.category}</ProductCategory>

        <RatingContainer
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {renderStars()}
          {isHovered && (
            <div
              style={{
                transition: "opacity 0.5s ease",
                opacity: isHovered ? 1 : 0,
              }}
            >
              ({product.rating.rate} / 5)
            </div>
          )}
        </RatingContainer>
        <ReviewCount>{product.rating.count} reseñas</ReviewCount>
        <ProductPrice>${product.price}</ProductPrice>
      </ProductInfo>

      <ActionButtonContainer>
        <Link
          href={`/products/${product.id}`}
          key={product.id}
          passHref
          legacyBehavior
        >
          <ActionButton className="view-button">
            <FaEye size={20} />
            <span>Ver</span>
          </ActionButton>
        </Link>
        <ActionButton className="buy-button" onClick={handleAddToCart}>
          <FaShoppingCart size={20} />
          <span>Comprar</span>
        </ActionButton>
      </ActionButtonContainer>

      {isAnimating && (
        <AnimatedImage
          src={product.image}
          alt={product.title}
          style={{
            left: animationPosition.x - 25,
            top: animationPosition.y - 25,
          }}
        />
      )}
    </CardContent>
  );
};

export default Card;
