"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

interface SearchBarProps {
  query: string;
  onSearchChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onSearchChange }) => {
  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder="Buscar productos..."
        value={query}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <SearchIcon />
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.div`
  position: relative;
  margin: 0 0 28px 0;
  text-align: center;
`;

const SearchInput = styled.input`
  padding: 12px 20px;
  font-size: 16px;
  width: 100%;
  border-radius: 30px;
  border: 1px solid #ddd;
  padding-left: 40px; /* Espacio para la lupa */
  transition: border-color 0.3s, color 0.3s;

  &:hover {
    border-color: #000;
    color: #000; /* Texto gris al hacer hover */
  }

  &:focus {
    border-color: #000; /* Cambiar el borde a rojo */
    outline: none; /* Eliminar el contorno predeterminado del navegador */
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
`;
