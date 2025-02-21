import { motion } from "framer-motion";
import styled from "styled-components";

export const ProductWrapper = styled(motion.div)`
  display: flex;
  max-width: 1280px;
  margin: 50px auto;
  background: #fff;
  border-radius: 12px;
  padding: 20px;

  @media (max-width: 690px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-width: 390px;
    height: auto;
    border-radius: 10px;
    objet-fit: cover;
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;

  h2 {
    font-size: 24px;
    font-weight: bold;
  }

  .category {
    font-size: 18px;
    color: #777;
    margin: 10px 0;
    text-transform: capitalize;
  }

  .price {
    font-size: 22px;
    font-weight: 600;
    color: #000;
    margin: 20px 0;
  }

  .description {
    font-size: 16px;
    color: #000;
    margin-top: 28px;
    line-height: 1.5;
  }
`;

export const BuyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #000;
  color: #fff;
  width: 280px;
  height: 60px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s ease;

  &:hover {
    background: #000;
    border: 2px solid #dd4800;
  }
`;

export const ShippingSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  justify-content: center;
  gap: 10px;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    color: #000;
  }
`;

export const ReviewsSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  justify-content: center;
  gap: 10px;

  p {
    font-size: 16px;
    color: #555;
  }
`;

export const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  font-weight: bold;
`;

export const LoadingContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export const ErrorContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  color: red;
`;

export const BackButton = styled.button`
  width: 52px;
  height: 52px;
  background: #f5f5f5;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    background: #e0e0e0;
  }
`;
