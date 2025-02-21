import { motion } from "framer-motion";
import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 87vh;
`;

export const Spinner = styled(motion.div)`
  width: 60px;
  height: 60px;
  border: 6px solid transparent;
  border-top: 6px solid #9e3500;
  border-radius: 50%;
  position: absolute;
`;

/* Second circle */
export const SpinnerInner = styled(motion.div)`
  width: 40px;
  height: 40px;
  border: 6px solid transparent;
  border-top: 6px solid orange;
  border-radius: 50%;
`;
