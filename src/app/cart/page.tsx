"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trash2, Minus, Plus } from "lucide-react";
import { updateQuantity, removeFromCart } from "@/store/cartSlice";
import { useUpdateCartMutation } from "@/store/api";

import CheckoutStepper from "@/components/common/CheckoutStepper";
import { RootState } from "@/store/store";
import ShippingForm from "@/components/common/ShippingForm";
import {
  BackButton,
  CartItem,
  CheckoutButton,
  CheckoutContainer,
  ContainerButtons,
  ItemControls,
  ItemDetails,
  NextButton,
  PayPalButton,
  QuantityButton,
  QuantityControl,
  SizeQuantity,
  Summary,
  SummaryRow,
  SummaryTitle,
  Total,
} from "@/styles/cart";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const [updateCart] = useUpdateCartMutation();

  const [currentStep, setCurrentStep] = useState(0);

  const subtotal = cart.products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 10;

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

  const handleNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 2));
  };

  const handleBackStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <CheckoutContainer>
      <div>
        <CheckoutStepper currentStep={currentStep} />

        {currentStep === 0 && (
          <>
            <h1>
              Cesta {cart.products.length > 0 && `(${cart.products.length})`}
            </h1>
            {cart.products.length === 0 ? (
              <p>No tienes productos en tu cesta.</p>
            ) : (
              cart.products.map((item) => (
                <CartItem key={item.productId}>
                  <img src={item.image} alt={item.title} />
                  <ItemDetails>
                    <h3>{item.title}</h3>
                    <SizeQuantity>
                      <QuantityControl>
                        <span>Cantidad</span>
                        <QuantityButton
                          onClick={() =>
                            handleQuantityChange(
                              item.productId,
                              item.quantity - 1
                            )
                          }
                        >
                          <Minus size={16} />
                        </QuantityButton>
                        {item.quantity}
                        <QuantityButton
                          onClick={() =>
                            handleQuantityChange(
                              item.productId,
                              item.quantity + 1
                            )
                          }
                        >
                          <Plus size={16} />
                        </QuantityButton>
                      </QuantityControl>
                    </SizeQuantity>
                  </ItemDetails>
                  <ItemControls>
                    <button onClick={() => handleRemoveProduct(item.productId)}>
                      <Trash2 size={20} />
                    </button>
                    <div>$ {item.price.toFixed(2)}</div>
                  </ItemControls>
                </CartItem>
              ))
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
            <ContainerButtons>
              <NextButton onClick={handleNextStep}>Siguiente</NextButton>
            </ContainerButtons>
          </>
        )}

        {currentStep === 1 && (
          <>
            <ShippingForm onSubmit={() => handleNextStep()} />
            <ContainerButtons>
              <BackButton onClick={handleBackStep}>Volver</BackButton>
              <NextButton onClick={handleNextStep}>Siguiente</NextButton>
            </ContainerButtons>
          </>
        )}

        {currentStep === 2 && (
          <>
            <h2>Detalles del pago</h2>
            <Summary>
              <SummaryTitle>Resumen</SummaryTitle>
              <SummaryRow>
                <span>Subtotal</span>
                <span>$ {subtotal.toFixed(2)}</span>
              </SummaryRow>
              <SummaryRow>
                <span>Envío</span>
                <span>
                  {shipping === 0 ? "Gratuito" : `$ ${shipping.toFixed(2)}`}
                </span>
              </SummaryRow>
              <SummaryRow className="total">
                <span>Total</span>
                <span>$ {(subtotal + shipping).toFixed(2)}</span>
              </SummaryRow>

              <CheckoutButton>Pasar por caja</CheckoutButton>
              <PayPalButton>
                <img
                  src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png"
                  alt="PayPal"
                />
              </PayPalButton>
            </Summary>
            <ContainerButtons>
              <BackButton onClick={handleBackStep}>Volver</BackButton>
            </ContainerButtons>
          </>
        )}
      </div>
    </CheckoutContainer>
  );
}
