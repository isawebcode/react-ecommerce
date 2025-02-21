import React from "react";
import styled from "styled-components";
import { Check } from "lucide-react";

interface StepProps {
  $active: boolean;
  $completed: boolean;
}

const StepperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  padding: 24px;
`;

const Step = styled.div<StepProps>`
  display: flex;
  align-items: center;
  gap: 8px;

  .circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) =>
      props.$completed ? "#111" : props.$active ? "#fff" : "#f5f5f5"};
    border: 2px solid
      ${(props) =>
        props.$completed ? "#111" : props.$active ? "#111" : "#e5e5e5"};
    color: ${(props) =>
      props.$completed ? "#fff" : props.$active ? "#111" : "#999"};
    font-weight: bold;
    transition: all 0.3s ease;
  }

  .label {
    font-size: 14px;
    color: ${(props) => (props.$active || props.$completed ? "#111" : "#999")};
    font-weight: ${(props) => (props.$active ? "bold" : "normal")};
  }
`;

const Line = styled.div<{ $active: boolean }>`
  flex: 1;
  height: 2px;
  max-width: 60px;
  background-color: ${(props) => (props.$active ? "#111" : "#e5e5e5")};
  transition: background-color 0.3s ease;
`;

interface CheckoutStepperProps {
  currentStep: number;
}

const CheckoutStepper: React.FC<CheckoutStepperProps> = ({ currentStep }) => {
  const steps = ["Cesta", "Envío", "Pago"];

  return (
    <StepperContainer>
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <Step
            $active={currentStep === index}
            $completed={currentStep > index}
          >
            <div className="circle">
              {currentStep > index ? <Check size={16} /> : index + 1}
            </div>
            <span className="label">{step}</span>
          </Step>
          {index < steps.length - 1 && <Line $active={currentStep > index} />}
        </React.Fragment>
      ))}
    </StepperContainer>
  );
};

export default CheckoutStepper;
