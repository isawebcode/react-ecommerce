import styled from "styled-components";

export const HeaderContainerStyle = styled.header`
  position: sticky; /* Hace que el header se quede fijo */
  top: 0; /* Posición fija en la parte superior */
  left: 0; /* Alineación al borde izquierdo */
  right: 0; /* Alineación al borde derecho */
  z-index: 1000; /* Asegura que el header esté por encima de otros elementos */
  display: flex;
  align-items: center;
  padding: 0 24px;
  height: 97px;
  background-color: white; /* Fondo blanco cuando el header se queda fijo */

  /* Agregar sombra para dar efecto de separación cuando está fijo */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  h1 {
    margin: 0 30px;
  }

  nav {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
  }

  ul {
    display: flex;
    gap: 24px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
  }

  .linkmenu {
    font-size: 18px;
    text-transform: capitalize;
    text-decoration: none;
    color: black;
    font-weight: bold;
    position: relative;
    padding-bottom: 5px;

    &:hover {
      color: #dd4800;
    }

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #dd4800;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }

  .cart-container {
    position: absolute;
    right: 40px;
    top: 32px;
    cursor: pointer;
  }
`;

export const CartButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #dd4800;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
`;
