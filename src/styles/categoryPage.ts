import styled from "styled-components";

export const CategoryTitle = styled.h1`
  font-weight: 700;
  color: #333;
  font-size: 14px;
  text-align: left;
  margin-top: -15px;
  margin-bottom: 20px;
  width: 76%;
  text-transform: capitalize;

  @media (max-width: 1700px) {
    width: 90%;
  }
  @media (max-width: 1500px) {
    width: 93%;
  }

  @media (max-width: 900px) {
    width: 97%;
  }
`;
