import styled from "styled-components";

export const CartPreviewContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 400px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  z-index: 1000;
  max-height: 700px; /* Límite de altura */
  overflow-y: auto; /* Activar scroll cuando el contenido excede los 700px */
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemDetails = styled.div`
  flex: 1;
`;

export const ItemTitle = styled.h3`
  font-size: 14px;
  margin: 0;
`;

export const ItemPrice = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 4px 0;
`;

export const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const QuantityButton = styled.button`
  background: none;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #dd4800;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
  font-weight: bold;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #e0e0e0;

  span {
    font-weight: bold;
    margin-left: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

export const BaseButton = styled.button`
  flex: 1;
  padding: 12px 16px;
  border-radius: 24px; /* Bordes redondeados estilo Nike */
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
`;

export const ContinueShoppingButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 2px solid black;

  &:hover {
    color: black;
    opacity: 0.8;
  }
`;

export const CheckoutButton = styled(BaseButton)`
  background-color: black;
  color: white;
  border: 2px solid black;

  &:hover {
    // background-color: #0f0f0f;
    color: white;
    opacity: 0.85;
  }
`;
