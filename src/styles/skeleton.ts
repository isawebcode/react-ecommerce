import styled, { keyframes } from "styled-components";

// Animación de pulsación
const pulse = keyframes`
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #dcdcdc;
  }
  100% {
    background-color: #e0e0e0;
  }
`;

export const SkeletonContainer = styled.div`
  display: grid; /* Usar grid para una distribución de filas y columnas */
  grid-template-columns: repeat(3, 1fr); /* Tres columnas de igual tamaño */
  gap: 24px; /* Espacio entre las tarjetas */
  width: 100%; /* Asegura que ocupe el 100% del contenedor */

  @media (max-width: 900px) {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* En pantallas más pequeñas, usar 2 columnas */
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* En pantallas muy pequeñas, usar 1 columna */
  }
`;

// Contenedor principal de la tarjeta Skeleton
export const SkeletonCardContent = styled.div`
  width: 348px;
  height: 533px;
  background-color: #f4f4f4;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
`;

// Estilo para la imagen en el Skeleton
export const SkeletonImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #e0e0e0;
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

// Estilo para el texto en el Skeleton
export const SkeletonText = styled.div`
  width: 100%;
  height: 16px;
  background-color: #e0e0e0;
  margin: 8px 0;
  animation: ${pulse} 1.5s infinite ease-in-out;
`;
