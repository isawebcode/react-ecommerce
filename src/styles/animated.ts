import styled, { keyframes } from "styled-components";

const flyToCart = keyframes`
  0% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  50% {
    transform: scale(0.5) translateY(-100px);
    opacity: 0.5;
  }
  100% {
    transform: scale(0) translateY(-200px);
    opacity: 0;
  }
`;

export const AnimatedImage = styled.img`
  position: fixed;
  z-index: 1000;
  width: 50px;
  height: 50px;
  object-fit: contain;
  animation: ${flyToCart} 0.5s ease-out forwards;
`;
