import styled from "styled-components";

export const CardContent = styled.div`
  width: 348px;
  height: 500px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 400px) {
    width: 300px;
  }
`;

export const ImageContainer = styled.div`
  width: 348px;
  height: 348px;
  padding: 32px;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 400px) {
    width: 300px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 16px;
  min-height: 185px;
  background-color: #f6f6f6;
  padding: 20px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

export const ProductTitle = styled.h2`
  font-weight: bold;
  color: #333;
  font-size: 16px;
  text-align: left;
  margin-bottom: 5px;
`;

export const ProductCategory = styled.p`
  color: gray;
  text-align: left;
  font-size: 15px;
  text-transform: capitalize;
  margin-bottom: 5px;
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ReviewCount = styled.p`
  font-size: 15px;
  color: gray;
  margin-top: 2px;
`;

export const ProductPrice = styled.p`
  margin-top: 19px;
  font-size: 16px;
  font-weight: bold;
  color: #000;
  text-align: left;
`;

export const ActionButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ActionButton = styled.button`
  flex: 1;
  padding: 8px 16px;
  background-color: transparent;
  border: 2px solid transparent;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  transition: all 0.3s ease;

  span {
    transition: opacity 0.3s ease;
  }

  &.view-button {
    color: #000;

    &:hover {
      border: 1px solid #000;
    }
  }

  &.buy-button {
    color: #fff;
    background-color: #000;

    &:hover {
      background-color: #191919;
    }
  }
`;
