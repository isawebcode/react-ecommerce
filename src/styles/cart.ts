import styled from "styled-components";

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr auto;
  gap: 24px;
  padding: 24px 0;
  border-bottom: 1px solid #e5e5e5;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

export const ItemDetails = styled.div`
  flex: 1;
  h3 {
    font-size: 16px;
    margin: 0 0 8px 0;
  }

  p {
    color: #666;
    margin: 0 0 16px 0;
  }
`;

export const ItemControls = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  button {
    background: none;
    border: none;
    padding: 8px;
    cursor: pointer;
    color: #666;

    &:hover {
      color: #ff4800;
    }
  }
`;

export const Summary = styled.div`
  background: white;
  border-radius: 8px;
  padding: 24px;
  position: sticky;
  top: 24px;
`;

export const SummaryTitle = styled.h2`
  font-size: 24px;
  margin: 0 0 24px 0;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 16px;

  &.total {
    font-weight: bold;
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid #e5e5e5;
    font-size: 18px;
  }
`;

export const CheckoutButton = styled.button`
  margin-top: 32px;
  width: 100%;
  padding: 16px;
  background: black;
  color: white;
  border: none;
  border-radius: 32px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #333;
  }
`;

export const PayPalButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #ffc439;
  border: none;
  border-radius: 32px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 20px;
    width: auto;
  }

  &:hover {
    background: #f4bb33;
  }
`;

export const CheckoutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const NextButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #000;
  color: #fff;
  width: 280px;
  height: 60px;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s ease;
  border: 1px solid #000;

  &:hover {
    background: #000;
    opacity: 0.9;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 20px;
  margin-bottom: 60px;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #fff;
  color: #000;
  width: 280px;
  height: 60px;
  border: 1px solid #000;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s ease;

  &:hover {
    background: #fff;
    opacity: 0.9;
  }
`;

export const SizeQuantity = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  button {
    background: none;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    width: 30px;
    height: 30px;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  span {
    font-size: 14px;
  }
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

export const Total = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #e0e0e0;

  span {
    font-weight: bold;
    margin-left: 10px;
  }
`;
