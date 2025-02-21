import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { updateQuantity, removeFromCart } from "@/store/cartSlice";
import { X, Plus, Minus } from "lucide-react";
import styled from "styled-components";
import Link from "next/link";
import { useUpdateCartMutation } from "@/store/api";
import {
  ButtonContainer,
  CartItem,
  CartPreviewContainer,
  CheckoutButton,
  ContinueShoppingButton,
  ItemDetails,
  ItemImage,
  ItemPrice,
  ItemTitle,
  QuantityButton,
  QuantityControl,
  RemoveButton,
  Total,
} from "@/styles/cartPreview";

interface CartPreviewProps {
  onClose: () => void;
}

const CartPreview: React.FC<CartPreviewProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const [updateCart] = useUpdateCartMutation();

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    const updatedProducts = cart.products.map((cartItem) =>
      cartItem.productId === productId
        ? { ...cartItem, quantity: newQuantity }
        : cartItem
    );

    dispatch(updateQuantity({ productId, quantity: newQuantity }));

    const updatedCart = {
      id: cart.id,
      userId: cart.userId,
      date: cart.date,
      products: updatedProducts,
    };

    updateCart({ id: cart.id, cart: updatedCart })
      .then((response) => {
        console.log("Carrito actualizado en la API", response);
      })
      .catch((error) => {
        console.error("Error al actualizar el carrito en la API", error);
      });
  };

  const handleRemoveProduct = async (productId: number) => {
    try {
      const updatedProducts = cart.products.filter(
        (product) => product.productId !== productId
      );

      const updatedCart = {
        ...cart,
        products: updatedProducts,
      };

      await updateCart({ id: cart.id, cart: updatedCart }).unwrap();

      dispatch(removeFromCart(productId));

      console.log("Producto eliminado correctamente del carrito");
    } catch (error) {
      console.error("Error al eliminar el producto del carrito:", error);
    }
  };

  return (
    <CartPreviewContainer>
      {cart.products.length > 0 ? (
        cart.products.map((cartItem) => (
          <CartItem key={cartItem.productId}>
            <ItemImage src={cartItem.image} alt={cartItem.title} />
            <ItemDetails>
              <ItemTitle>{cartItem.title}</ItemTitle>
              <ItemPrice>${cartItem.price}</ItemPrice>
              <QuantityControl>
                <QuantityButton
                  onClick={() =>
                    handleQuantityChange(
                      cartItem.productId,
                      cartItem.quantity - 1
                    )
                  }
                >
                  <Minus size={16} />
                </QuantityButton>
                <span>{cartItem.quantity}</span>
                <QuantityButton
                  onClick={() =>
                    handleQuantityChange(
                      cartItem.productId,
                      cartItem.quantity + 1
                    )
                  }
                >
                  <Plus size={16} />
                </QuantityButton>
              </QuantityControl>
            </ItemDetails>
            <RemoveButton
              onClick={() => handleRemoveProduct(cartItem.productId)}
            >
              <X size={20} />
            </RemoveButton>
          </CartItem>
        ))
      ) : (
        <p>El carrito está vacío.</p>
      )}
      <Total>
        <span>Total:</span>
        <span>
          $
          {cart.products.reduce(
            (acc, item) => acc + item.quantity * item.price,
            0
          )}
        </span>
      </Total>
      <ButtonContainer>
        <ContinueShoppingButton onClick={onClose}>
          Seguir comprando
        </ContinueShoppingButton>
        <Link href="/cart" passHref legacyBehavior>
          <CheckoutButton onClick={onClose}>Finalizar compra</CheckoutButton>
        </Link>
      </ButtonContainer>
    </CartPreviewContainer>
  );
};

export default CartPreview;
