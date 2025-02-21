"use client";
import styled from "styled-components";

// Estilo para el footer
export const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 8px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 14px;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  a {
    color: #333;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s;

    &:hover {
      color: #0077b5; /* Color LinkedIn */
    }
  }

  span {
    font-weight: bold;
  }

  .icon {
    margin-top: 6px;
    margin-left: 8px;
  }

  .heart {
    color: red;
  }
`;
