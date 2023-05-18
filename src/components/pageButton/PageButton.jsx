import React from 'react';
import styled from 'styled-components';

// Estilos para el botón
const Button = styled.button`
  display: ${({ show }) => (show ? 'block' : 'none')};
  margin-top: 20px;
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
`;

// Componente para el botón de ir a otra página
const PageButton = ({ show }) => {
    return(
        <>
        <Button show={show}>Ir a otra página</Button>;
        </>
    );
};

export default PageButton