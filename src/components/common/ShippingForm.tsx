import type React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormSection = styled.section`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 24px;
`;

const InputGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #111;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;

  &:focus {
    outline: none;
    border-color: #111;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    appearance: none; /* Elimina el estilo predeterminado del checkbox */
    border: 2px solid #ccc; /* Agrega un borde gris */
    border-radius: 4px; /* Borde redondeado */
    background-color: #fff; /* Fondo blanco */
    cursor: pointer;
    position: relative;
    transition: background-color 0.3s ease, border-color 0.3s ease;

    &:checked {
      background-color: black; /* Color de fondo cuando está activado */
      border-color: black; /* Color del borde cuando está activado */
    }

    /* Crea el "tic" negro cuando está activado */
    &:checked::before {
      content: "✓"; /* El carácter del tic */
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white; /* Color del tic */
      font-size: 14px;
    }
  }

  label {
    font-size: 14px;
  }
`;

const HelpText = styled.p`
  font-size: 12px;
  color: #666;
  margin-top: 4px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

interface ShippingFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

const ShippingForm: React.FC<ShippingFormProps> = ({ onSubmit }) => {
  return (
    <FormContainer>
      <form onSubmit={onSubmit}>
        <FormSection>
          <SectionTitle>¿Cómo te gustaría recibir tu pedido?</SectionTitle>
          <InputGroup>
            <Label>Método de envío</Label>
            <Select>
              <option value="standard">Envío estándar</option>
              <option value="express">Envío express</option>
            </Select>
          </InputGroup>
        </FormSection>

        <FormSection>
          <SectionTitle>Introduce tu nombre y dirección:</SectionTitle>
          <Row>
            <InputGroup>
              <Label>Nombre</Label>
              <Input type="text" required />
            </InputGroup>
            <InputGroup>
              <Label>Apellidos</Label>
              <Input type="text" required />
            </InputGroup>
          </Row>

          <InputGroup>
            <Label>Dirección</Label>
            <Input type="text" required />
            <HelpText>No enviamos a apartados de correos</HelpText>
          </InputGroup>

          <Row>
            <InputGroup>
              <Label>Código Postal</Label>
              <Input type="text" required />
            </InputGroup>
            <InputGroup>
              <Label>Localidad</Label>
              <Input type="text" required />
            </InputGroup>
          </Row>

          <InputGroup>
            <Label>Provincia</Label>
            <Select required>
              <option value="">Selecciona una provincia</option>
              <option value="madrid">Madrid</option>
              <option value="barcelona">Barcelona</option>
            </Select>
          </InputGroup>
        </FormSection>

        <FormSection>
          <SectionTitle>Información de contacto</SectionTitle>
          <InputGroup>
            <Label>Email</Label>
            <Input type="email" required />
            <HelpText>
              Recibirás un email de confirmación después de la compra
            </HelpText>
          </InputGroup>

          <InputGroup>
            <Label>Teléfono</Label>
            <Input type="tel" required />
            <HelpText>
              El transportista te contactará para confirmar la entrega
            </HelpText>
          </InputGroup>
        </FormSection>

        <CheckboxGroup>
          <input type="checkbox" id="saveAddress" />
          <label htmlFor="saveAddress">
            Guardar esta dirección en mi perfil
          </label>
        </CheckboxGroup>

        <CheckboxGroup>
          <input type="checkbox" id="defaultAddress" />
          <label htmlFor="defaultAddress">
            Hacer esta mi dirección preferida
          </label>
        </CheckboxGroup>
      </form>
    </FormContainer>
  );
};

export default ShippingForm;
