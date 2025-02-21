import styled from "styled-components";

export const ListProductsStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 786px) {
    grid-template-columns: 1fr;
  }
`;
