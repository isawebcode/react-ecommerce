"use client";

import { useAddToCartMutation, useGetProductByIdQuery } from "@/store/api";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaTruck,
  FaStar,
  FaRegStar,
  FaArrowLeft,
} from "react-icons/fa";
import { LoadingSpinner } from "@/components/common";
import {
  BackButton,
  BuyButton,
  ErrorContainer,
  ImageContainer,
  InfoContainer,
  ProductWrapper,
  ReviewsSection,
  ShippingSection,
  StarsContainer,
} from "@/styles/productPage";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "@/store/store";
import { addToCartSlice } from "@/store/cartSlice";
import { AnimatedImage } from "@/styles/animated";

export default function ProductDetail() {
  const { id } = useParams();
  const router = useRouter();

  const dispatch = useDispatch();
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationPosition, setAnimationPosition] = useState({ x: 0, y: 0 });
  const cart = useSelector((state: RootState) => state.cart);
  const [addToCart] = useAddToCartMutation();

  const {
    data: product,
    error,
    isLoading,
  } = useGetProductByIdQuery(Number(id));

  if (isLoading) return <LoadingSpinner />;

  if (error || !product)
    return <ErrorContainer>❌ Error al cargar el producto</ErrorContainer>;

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

      setIsAnimating(false);
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
      setIsAnimating(false);
    }
  };

  return (
    <ProductWrapper
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BackButton onClick={() => router.back()}>
        <FaArrowLeft size={20} />
      </BackButton>

      <ImageContainer>
        <motion.img
          src={product.image}
          alt={product.title}
          whileHover={{ scale: 1.05 }}
        />
      </ImageContainer>

      <InfoContainer>
        <h2>{product.title}</h2>
        <p className="category">{product.category}</p>
        <p className="price">${product.price}</p>

        <BuyButton onClick={handleAddToCart}>
          <FaShoppingCart /> Comprar
        </BuyButton>

        <p className="description">{product.description}</p>

        <ShippingSection>
          <h3>
            <FaTruck style={{ verticalAlign: "middle", marginRight: "10px" }} />
            Devoluciones y Envío Gratis
          </h3>
          <p>
            Recibe tu pedido en 2-5 días hábiles. Devoluciones gratuitas dentro
            de los primeros 30 días.
          </p>
        </ShippingSection>

        <ReviewsSection>
          <h3>
            <FaStar style={{ verticalAlign: "middle", marginRight: "10px" }} />
            Opiniones
          </h3>
          <StarsContainer>
            {renderStars(product.rating.rate)}
            <span>({product.rating.count} reseñas)</span>
          </StarsContainer>
        </ReviewsSection>
      </InfoContainer>
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
    </ProductWrapper>
  );
}

const renderStars = (rating: number) => {
  const totalStars = 5;
  const filledStars = Math.round(rating);
  return Array.from({ length: totalStars }, (_, i) => (
    <span key={i}>
      {i < filledStars ? (
        <FaStar color="#ec4d00" size={20} />
      ) : (
        <FaRegStar color="lightgray" size={20} />
      )}
    </span>
  ));
};
