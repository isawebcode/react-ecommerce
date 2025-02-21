import styled from "styled-components";

export const WrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  padding: 1% 0;
  width: 75%;
  margin-bottom: 80px;

  @media (max-width: 900px) {
    width: 90%;
  }
`;
